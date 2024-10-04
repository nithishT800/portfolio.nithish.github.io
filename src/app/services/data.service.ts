import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class DataService {

    constructor(private http:HttpClient) { }

    fetch(method:string, param:any = {}){

        let token_array:any = [];

        if(document.cookie.includes('csrftoken')){
            token_array = document.cookie.split('=')
        }
        let headersList:any = {
            "Accept": "*/*",
            "User-Agent": "http://localhost:4200",
            "Content-Type": "application/json",
            "X-CSRFToken":  (token_array.length) ? token_array[1] : '',
        }
        let url = apiUrl + method;
        return this.http.post(url, param, {headers: headersList, withCredentials: true}).pipe(
            map(response => {  
                return response;
            }),
            catchError((error: HttpErrorResponse) => {
                if (error instanceof HttpErrorResponse) {
                    console.error('HTTP error occurred:', error.status, error.message);
                    return throwError(() => error);
                } else {
                    console.error('An unexpected error occurred:', error);
                    return throwError(() => error);
                }
            })
        );
    }

    get(url:string, param:any = {}){
        return this.http.get(url, param).pipe(
            map(response => {  
                return response;
            }),
            catchError((error: HttpErrorResponse) => {
                if (error instanceof HttpErrorResponse) {
                    console.error('HTTP error occurred:', error.status, error.message);
                    return throwError(() => error);
                } else {
                    console.error('An unexpected error occurred:', error);
                    return throwError(() => error);
                }
            })
        );
    }

    getCountries(){
        return this.http.get('https://countriesnow.space/api/v0.1/countries/states').pipe(
            map(response => {
                return response
            }),
            catchError((error: HttpErrorResponse) => {
                return throwError(() => error);
            })
        )
    }

    getSkills(){
        return this.http.get('json/skills.json').pipe(
            map(response => {
                return response
            }),
            catchError((error: HttpErrorResponse) => {
                return throwError(() => error);
            })
        )
    }
}
