import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class StateLogin{
    private _userEmail = new BehaviorSubject<string>(null);
    private _userPassword = new BehaviorSubject<string>(null);

    get UserEmail$():Observable<string>{
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
}


