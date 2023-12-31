import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService {
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to the remote logging infrastructure
      console.error(error); // log to the console instead
      //TODO: better job for transforming error for user consumption
      console.error(`${operation} failed: ${error.message}`);

      // keep the app running by return an empty result
      return of(result as T);
    };
  }
}