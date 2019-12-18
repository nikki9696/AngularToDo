import { Injectable, Inject } from "@angular/core";
import { ITaskItem } from "../task-list/taskItem";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  private _httpClient: HttpClient;
  private _baseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._httpClient = http;
    this._baseUrl = baseUrl;
  }

  getTasks() : Observable<ITaskItem[]>{
    return this._httpClient.get<ITaskItem[]>(this._baseUrl + 'tasklist').pipe(
      tap(data => console.log("All: " + JSON.stringify(data))),
      catchError(this.handleError)
      );
  }

  getTask(taskId: number): Observable<ITaskItem> {
    return this._httpClient.get<ITaskItem>(this._baseUrl + 'tasklist/' + taskId).pipe(
      tap(data => console.log("All: " + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err : HttpErrorResponse) {
    console.log(err);
    return throwError(err);
  }

}
