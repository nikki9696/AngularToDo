import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskDetailGuard implements CanActivate {
  constructor(private _router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let id = +next.url[1].path;
    if (isNaN(id) || id < 1) {
      alert("Invalid id"); // demo only
      this._router.navigate(['/task-list']);
      return false;
    }
    return true;
  }
  
}
