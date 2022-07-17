using System;
using System.Threading.Tasks;

using Microsoft.Extensions.Configuration;

using Npgsql;
using Dapper;

using Discount.gRPC.Entities;


namespace Discount.gRPC.Repositories
{
    public class DiscountRepository : IDiscountRepository
    {
        private readonly IConfiguration _configuration;
        private readonly NpgsqlConnection _connection;

        public DiscountRepository(IConfiguration configuration)
        {
            _configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
            _connection = new NpgsqlConnection(_configuration.GetValue<string>("DatabaseSettings:ConnectionString"));
        }

        public async Task<bool> CreateDiscount(Coupon coupon)
        {
            var affected = await _connection.ExecuteAsync("INSERT INTO Coupon (ProductName, Description, Amount) VALUES (@ProductName, @Description, @Amount)", 
                new { coupon.ProductName, coupon.Description, coupon.Amount});

            if (affected == 0)
            {
                return false;
            }

            return true;
        }

        public async Task<bool> DeleteDiscount(string productName)
        {
            var affected = await _connection.ExecuteAsync("DELETE FROM Coupon WHERE ProductName = @ProductName",
               new { ProductName = productName});

            if (affected == 0)
            {
                return false;
            }

            return true;
        }

        public async Task<Coupon> GetDiscount(string productName)
        {
            var coupon = await _connection.QueryFirstOrDefaultAsync<Coupon>
                 ("SELECT * FROM Coupon WHERE ProductName = @ProductName", new { ProductName = productName });

            if (coupon == null)
            {
                return new Coupon { ProductName = "No Discount", Description = "No discount description", Amount = 0 };
            }

            return coupon;
        }

        public async Task<bool> UpdateDiscount(Coupon coupon)
        {
            var affected = await _connection.ExecuteAsync("UPDATE Coupon SET ProductName = @ProductName, Description = @Description, Amount = @Amount WHERE Id = @Id",
                new { coupon.ProductName, coupon.Description, coupon.Amount, coupon.Id });

            if (affected == 0)
            {
                return false;
            }

            return true;
        }
    }
}
