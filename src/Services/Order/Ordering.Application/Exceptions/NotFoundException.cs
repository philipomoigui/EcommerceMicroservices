using System;

namespace Ordering.Application.Exceptions
{
    public class NotFoundException: ApplicationException
    {
        public NotFoundException(string name, Object key) : base($"Entity \"{name}\" ({key}) was not found.")
        {

        }
    }
}
