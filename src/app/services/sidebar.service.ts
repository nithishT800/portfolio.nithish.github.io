import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

    public sidebar_key:string = '';

    public event:any = new BehaviorSubject<any>({});


    constructor() { }

    // trigger($event_name:string, $data:any){

    //     this.event.next({event:$event_name, data:$data});

    // }

    toggleSidebar(sidebar_key:string, $data:any = {}){

        this.event.next({sidebar_key:sidebar_key, data:$data});

    }
    
    // getEvent(): Observable<any>{
        //     return this.event.asObservable();
        // }

    getSidebarEvent(): Observable<any>{
        return this.event.asObservable();
    }

}
