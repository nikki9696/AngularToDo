using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace AngularToDo.Controllers
{
    [ApiController]
    public class TaskListController : ControllerBase
    {
        private readonly ILogger<TaskListController> _logger;

        private static readonly List<TaskItem> Items = new List<TaskItem>()
            {
                new TaskItem()
                {
                    Id = 1,
                    Name = "Do The Thing",
                    Description = "doing the thing.",
                    DueDate = DateTime.Parse("01/01/2020"),
                    Status = "Not Started"
                },
                new TaskItem()
                {
                    Id = 2,
                    Name = "Do the other thing",
                    Description = "some other thing we be doing",
                    DueDate = DateTime.Parse("12/01/2019"),
                    Status = "Not Started"
                },
                new TaskItem()
                {
                    Id = 3,
                    Name = "Do the OTHER other thing",
                    Description = "some other thing we did",
                    DueDate = DateTime.Parse("12/01/2019"),
                    CompletedDate = DateTime.Parse("12/20/2019"),
                    Status = "Complete"
                },
                new TaskItem()
                {
                    Id = 4,
                    Name = "Grocery Shopping",
                    Description = "we need fooood",
                    DueDate = DateTime.Parse("12/30/2019"),
                    Status = "In Progress"
                },
                new TaskItem()
                {
                    Id = 5,
                    Name = "",
                    Description = "",
                    DueDate = DateTime.Parse("12/30/2020"),
                    Status = "Not Started"
                }
            };

        public TaskListController(ILogger<TaskListController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("tasklist")]
        public IEnumerable<TaskItem> Get()
        {
            return Items;
        }

        [HttpGet]
        [Route("tasklist/{id}")]
        public TaskItem GetTask(int id)
        {
            return Items.Where(x => x.Id == id).FirstOrDefault();
        }

        [HttpPost]
        [Route("tasklist")]
        public async Task<TaskItem> PostTask(TaskItem taskItem)
        {
            return taskItem;
        }
    }
}