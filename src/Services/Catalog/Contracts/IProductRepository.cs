using System.Collections.Generic;
using System.Threading.Tasks;

using Entities;


namespace Contracts
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetProductsAsync();
        Task<IEnumerable<Product>> GetProductsByNameAsync(string name);
        Task<IEnumerable<Product>> GetProductsByCategoryAsync(string category);
        Task<Product> GetProductByIdAsync(string id);
        Task CreateProductAsync(Product product);
        Task<bool> UpdateProductAsync(Product product);
        Task<bool> DeleteProductAsync(string id);

    }
}
