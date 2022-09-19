using System;

using Microsoft.Extensions.Configuration;

using MongoDB.Driver;

using Notification.API.Entities;

namespace Notification.API.Data
{
    public class NotificationAPIContext : INotificationAPIContext
    {
        private readonly IMongoDatabase _database;
        public NotificationAPIContext(IConfiguration configuration)
        {
            var client = new MongoClient(configuration.GetValue<string>("DatabaseSettings:ConnectionStrings"));
            _database = client.GetDatabase(configuration.GetValue<string>("DatabaseSettings:DatabaseName"));

            if (_database == null)
            {
                throw new Exception("Cannot get Database Object");
            }
        }

        public IMongoCollection<Message> Messages => _database.GetCollection<Message>("Messages");
    }
}
