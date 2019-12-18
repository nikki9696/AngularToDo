using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularToDo
{
    public class TaskItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }  // todo: enum
        public bool Starred { get; set; }
        public DateTime? DueDate { get; set; }
        public DateTime? CompletedDate { get; set; }
        public bool IsOverdue => CompletedDate == null && DueDate.HasValue && DateTime.Today > DueDate.Value;
        public bool IsComplete => CompletedDate.HasValue;
    }
}
