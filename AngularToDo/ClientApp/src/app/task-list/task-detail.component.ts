import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task-list.service';
import { ITaskItem } from './taskItem';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-task-detail',
    templateUrl: './task-detail.component.html',
    styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
    public taskItem: ITaskItem;
    public statusTypes: any[];

    constructor(private _taskService: TaskService, private _route: ActivatedRoute) { }

    ngOnInit() {
        let id = this._route.snapshot.params.id;
        this._taskService.getTask(id).subscribe(result => {
            this.taskItem = result;
        }, error => console.error(error));
        // todo: pull from controller
        this.statusTypes = [ "Not Started", "In Progress", "Complete" ];
    }

    onSubmit(form: NgForm) {
        if (form.valid) {
            alert("submitting");
            this._taskService.postTask(this.taskItem).subscribe(
                result => alert("submitted"),
                error => alert("error")
                );
        }
        else {
            alert("invalid");
        }
    }

}
