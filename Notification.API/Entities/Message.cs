using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Notification.API.Entities
{
    public class Message
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string MessageType { get; set; } // EMAIL OR SMS
        public string NotificationType { get; set; } // REGISTRATION OR ORDER ...etc
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
    }
}
