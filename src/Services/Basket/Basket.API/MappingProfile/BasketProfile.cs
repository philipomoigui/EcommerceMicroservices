using AutoMapper;

using Basket.API.Entities;
using EventBus.Messages.Events;

namespace Basket.API.MappingProfile
{
	public class BasketProfile: Profile
    {
        public BasketProfile()
        {
            CreateMap<BasketCheckout, BasketCheckoutEvent>().ReverseMap();
        }
    }
}
