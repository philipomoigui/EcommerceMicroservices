using System;
using System.Threading;
using System.Threading.Tasks;

using Microsoft.Extensions.Logging;

using AutoMapper;

using MediatR;

using Ordering.Application.Contracts.Persistence;
using Ordering.Domain.Entities;


namespace Ordering.Application.Features.Orders.Commads.UpdateOrder
{
    public class UpdateOrderCommandHandler : IRequestHandler<UpdateOrderCommand>
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IMapper _mapper;
        private readonly ILogger<UpdateOrderCommandHandler> _logger;

        public UpdateOrderCommandHandler(IOrderRepository orderRepository, IMapper mapper, ILogger<UpdateOrderCommandHandler> logger)
        {
            _orderRepository = orderRepository ?? throw new ArgumentNullException(nameof(orderRepository));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        public async Task<Unit> Handle(UpdateOrderCommand request, CancellationToken cancellationToken)
        {
            var orderToUpdate = _mapper.Map<Order>(request);
            if (orderToUpdate == null)
            {
                _logger.LogError("Order not exist in database");
                //throw new NotFoundException()
            }

            await _orderRepository.UpdateAsync(orderToUpdate);

            _logger.LogError($"Order {orderToUpdate.Id} updated successfully");

            return Unit.Value;
        }
    }
}
