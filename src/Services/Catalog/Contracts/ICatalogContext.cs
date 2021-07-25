using MongoDB.Driver;

using Entities;

namespace Contracts
{
    public interface ICatalogContext
    {
        IMongoCollection<Product> Products { get; }
    }
}
