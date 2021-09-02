using FluentValidation;


namespace Ordering.Application.Features.Orders.Commands.UpdateOrder
{
    public class UpdateOrderCommandValidator: AbstractValidator<UpdateOrderCommand>
    {
        public UpdateOrderCommandValidator()
        {
            RuleFor(p => p.Username)
                .NotEmpty().WithMessage("{Username} is required")
                .NotNull()
                .MaximumLength(50).WithMessage("{Username} cannot exceed 50 characters");

            RuleFor(p => p.EmailAddress)
                .NotEmpty().WithMessage("{Email Address} is required");

            RuleFor(p => p.TotalPrice)
                .NotEmpty().WithMessage("{Total price is required}")
                .GreaterThan(0).WithMessage("{Total price should be greater than 0}");
        }
    }
}
