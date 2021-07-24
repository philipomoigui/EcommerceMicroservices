using Contracts;
using Entities;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace Repositories
{
    public class CatalogContext: ICatalogContext
    {
        public CatalogContext(IConfiguration configuration)
        {
            var client = new MongoClient(configuration.GetValue<string>("DatabaseSettings:ConnectionStrings"));
            var database = client.GetDatabase(configuration.GetValue<string>("DatabaseSettings:DatabaseName"));

            var products = database.GetCollection<Product>(configuration.GetValue<string>("DatabaseSettings:CollectionName"));
        }

        public IMongoCollection<Product> Products => throw new System.NotImplementedException();
    }
}
