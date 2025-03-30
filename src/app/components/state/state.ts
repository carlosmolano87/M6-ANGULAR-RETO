import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class State {
  private _users = new BehaviorSubject<string[]>([]);
  private _token = new BehaviorSubject<string[]>([]);
  private _userEmail = new BehaviorSubject<string>(null);
  private _userPassword = new BehaviorSubject<string>(null);

  get userEmail$():Observable<string>{
      return this._userEmail.asObservable();
  }

  set userEmail(value:string){
      this._userEmail.next(value);
  }

  get UserPassword$():Observable<string>{
      return this._userPassword.asObservable();
  }

  set userPassword(value:string){
      this._userPassword.next(value);
  }

  clearUserData() {
    this._userEmail.next(null);
    this._users.next([]);
    this._token.next([]);
    localStorage.removeItem('userEmail');
    localStorage.removeItem('token');
  }
}
