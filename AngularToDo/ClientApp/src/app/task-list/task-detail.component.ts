import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task-list.service';
import { ITaskItem } from './taskItem';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  public taskItem: ITaskItem;

  constructor(private _taskService: TaskService, private _route: ActivatedRoute) { }

  ngOnInit() {
    let id = this._route.snapshot.params.id;
    this._taskService.getTask(id).subscribe(result => {
      this.taskItem = result;
    }, error => console.error(error));

  }

}
