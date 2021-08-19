using System;
using System.Collections.Generic;

using MediatR;

namespace Ordering.Application.Features.Orders.Queries
{
    public class GetOrderListQuery: IRequest<List<OrderDto>>
    {
        public string Username { get; set; }

        public GetOrderListQuery(string username)
        {
            this.Username = username ?? throw new ArgumentNullException(nameof(username));
        }
    }
}
