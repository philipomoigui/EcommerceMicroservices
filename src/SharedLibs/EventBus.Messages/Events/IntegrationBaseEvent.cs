using System;

namespace EventBus.Messages.Events
{
    public class IntegrationBaseEvent
    {
        public Guid Id { get; private set; }
        public DateTime CreatedAt { get; private set; }
    }
}
