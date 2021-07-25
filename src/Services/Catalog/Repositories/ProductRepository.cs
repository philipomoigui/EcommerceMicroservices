using System;
using System.Collections.Generic;
using System.Threading.Tasks;

using MongoDB.Driver;

using Contracts;
using Entities;



namespace Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly ICatalogContext _context;

        public ProductRepository(ICatalogContext context)
        {
            _context = context;
        }
        public async Task CreateProductAsync(Product product)
        {
           await _context.Products.InsertOneAsync(product);
        }

        public async Task<bool> DeleteProductAsync(string id)
        {
            var filter = Builders<Product>.Filter.Eq(p => p.Id, id);

            var deleteResult = await _context
                                        .Products
                                        .DeleteOneAsync(filter);

            return deleteResult.IsAcknowledged && deleteResult.DeletedCount > 0;
        }

        public async Task<Product> GetProductByIdAsync(string id)
        {
            var filter = Builders<Product>.Filter.Eq(p => p.Id, id);

            return await _context
                               .Products
                               .Find(filter)
                               .FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Product>> GetProductsAsync()
        {
            try
            {
               return await _context
                               .Products
                               .Find(p => true)
                               .ToListAsync();
            }
            catch (Exception ex)
            {
                var message = ex.Message;
                throw;
            }
        }

        public async Task<IEnumerable<Product>> GetProductsByCategoryAsync(string category)
        {
            var filter = Builders<Product>.Filter.Eq(p => p.Category, category);

            return await _context
                                .Products
                                .Find(filter)
                                .ToListAsync();
        }

        public async Task<IEnumerable<Product>> GetProductsByNameAsync(string name)
        {
            var filter = Builders<Product>.Filter.Eq(p => p.Name, name);

            return await _context
                                .Products
                                .Find(filter)
                                .ToListAsync();
        }

        public async Task<bool> UpdateProductAsync(Product product)
        {
           var updateResult = await _context
                               .Products
                               .ReplaceOneAsync(filter: p => p.Id == product.Id, replacement: product);

            return updateResult.IsAcknowledged && updateResult.ModifiedCount > 0;
        }
    }
}
