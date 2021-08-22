using AutoMapper;

using Ordering.Application.Features.Orders.Commads.CheckoutOrder;
using Ordering.Application.Features.Orders.Commads.UpdateOrder;
using Ordering.Application.Features.Orders.Queries;
using Ordering.Domain.Entities;

namespace Ordering.Application.ModelMappings
{
    public class MappingProfile: Profile
    {
        public MappingProfile()
        {
            CreateMap<Order, OrderDto>().ReverseMap();
            CreateMap<Order, CheckoutOrderCommand>().ReverseMap();
            CreateMap<Order, UpdateOrderCommand>().ReverseMap();
        }
    }
}
