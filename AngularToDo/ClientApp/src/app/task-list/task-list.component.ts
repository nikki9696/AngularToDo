import { Component, OnInit } from '@angular/core';
import { ITaskItem } from './taskItem';
import { TaskService } from '../services/task-list.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {
  public allTasks: ITaskItem[];
  public filteredTasks: ITaskItem[];

  private _taskService: TaskService;
  private _descriptionFilter: string = '';

  constructor(taskService: TaskService) {
    this._taskService = taskService;
  }

  get descriptionFilter(): string {
    return this._descriptionFilter;
  }
  set descriptionFilter(value: string) {
    this._descriptionFilter = value;
    this.filteredTasks = this._descriptionFilter ? this.performFilter(this._descriptionFilter) : this.allTasks;
  }

  ngOnInit(): void {
    this._taskService.getTasks().subscribe(result => {
       this.allTasks = result;
       this.filteredTasks = result;
    }, error => console.error(error));
  }

  performFilter(descriptionFilter: string): ITaskItem[] {
    descriptionFilter = descriptionFilter.toLocaleLowerCase();
    return this.allTasks.filter(x => x.description.toLocaleLowerCase().indexOf(descriptionFilter) > -1);
  }
}
