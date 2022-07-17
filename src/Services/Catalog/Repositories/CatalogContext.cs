using System;

using Microsoft.Extensions.Configuration;

using MongoDB.Driver;

using Contracts;

using Entities;
using Entities.SeedData;


namespace Repositories
{
    public class CatalogContext: ICatalogContext
    {
        private readonly IMongoDatabase _database;
        public CatalogContext(IConfiguration configuration)
        {
            var client = new MongoClient(configuration.GetValue<string>("DatabaseSettings:ConnectionStrings"));
            _database = client.GetDatabase(configuration.GetValue<string>("DatabaseSettings:DatabaseName"));

            if (_database == null)
            {
                throw new Exception("Cannot get Database Object");
            }
            var products = _database.GetCollection<Product>(configuration.GetValue<string>("DatabaseSettings:CollectionName"));

            CatalogRepositorySeed.SeedData(products);
        }

        public IMongoCollection<Product> Products => _database.GetCollection<Product>("Products");
    }
}
