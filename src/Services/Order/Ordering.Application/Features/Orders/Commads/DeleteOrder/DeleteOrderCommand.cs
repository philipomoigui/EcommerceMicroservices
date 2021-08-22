using MediatR;

namespace Ordering.Application.Features.Orders.Commads.DeleteOrder
{
    public class DeleteOrderCommand: IRequest
    {
        public int Id { get; set; }
    }
}
