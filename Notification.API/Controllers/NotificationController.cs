using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Notification.API.Data;
using Notification.API.Entities;
using Notification.API.Repositories;

namespace Notification.API.Controllers
{
    public class NotificationController : Controller
    {
        private readonly INotificationRepository _repository;
        public NotificationController(INotificationRepository repository)
        {
            _repository = repository;
        }
    }
}
