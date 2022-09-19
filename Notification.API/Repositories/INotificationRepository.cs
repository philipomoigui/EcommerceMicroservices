using Notification.API.Entities;
using System.Threading.Tasks;

namespace Notification.API.Repositories
{
    public interface INotificationRepository
    {
        
        Task<Message> GetMessageByIdAsync(string id);
        Task CreateMessageAsync(Message message);
        Task<bool> UpdateMessageAsync(Message message);
        Task<bool> DeleteMessageAsync(string id);

    }
}
