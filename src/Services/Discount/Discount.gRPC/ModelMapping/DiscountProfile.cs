using AutoMapper;

using Discount.gRPC.Entities;
using Discount.gRPC.Protos;

namespace Discount.gRPC.ModelMapping
{
    public class DiscountProfile: Profile
    {
        public DiscountProfile()
        {
            CreateMap<Coupon, CouponModel>().ReverseMap();
        }
    }
}
