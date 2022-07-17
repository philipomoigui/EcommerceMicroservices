using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

using Shopping.Aggregator.Extensions;
using Shopping.Aggregator.Models;

namespace Shopping.Aggregator.Services
{
    public class OrderService : IOrderService
    {
        private readonly HttpClient _client;

        public OrderService(HttpClient client)
        {
            _client = client ?? throw new ArgumentNullException(nameof(client));
        }

        public async Task<IEnumerable<OrderResponseModel>> GetOrdersByUsername(string username)
        {
            var response = await _client.GetAsync($"/api/v1/Order/{username}");
            return await response.ReadContentAs<List<OrderResponseModel>>();
        }
    }
}
