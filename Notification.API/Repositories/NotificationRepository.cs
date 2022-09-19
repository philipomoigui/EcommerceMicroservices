using System.Threading.Tasks;

using MongoDB.Driver;

using Notification.API.Data;
using Notification.API.Entities;

namespace Notification.API.Repositories
{
    public class NotificationRepository : INotificationRepository
    {
        private readonly INotificationAPIContext _context;
        
        public NotificationRepository(INotificationAPIContext context)
        {
            _context = context;
        }

        public async Task CreateMessageAsync(Message message)
        {
            await _context.Messages.InsertOneAsync(message);
        }

        public async Task<bool> DeleteMessageAsync(string id)
        {
            var filter = Builders<Message>.Filter.Eq(p => p.Id, id);
            var deleteResult = await _context
                                        .Messages
                                        .DeleteOneAsync(filter);
            return deleteResult.IsAcknowledged && deleteResult.DeletedCount > 0;
        }

        public async Task<Message> GetMessageByIdAsync(string id)
        {
            var filter = Builders<Message>.Filter.Eq(p => p.Id, id);
            return await _context
                               .Messages
                               .Find(filter)
                               .FirstOrDefaultAsync();
        }

        public async Task<bool> UpdateMessageAsync(Message message)
        {
            var updateResult = await _context
                                .Messages
                                .ReplaceOneAsync(filter: p => p.Id == message.Id, replacement: message);
            return updateResult.IsAcknowledged && updateResult.ModifiedCount > 0;
        }
    }
}
