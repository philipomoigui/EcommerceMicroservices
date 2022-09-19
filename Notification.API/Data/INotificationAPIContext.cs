using MongoDB.Driver;
using Notification.API.Entities;

namespace Notification.API.Data
{
    public interface INotificationAPIContext
    {
        IMongoCollection<Message> Messages { get; }
    }
}
