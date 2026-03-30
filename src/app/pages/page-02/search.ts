import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private dt = 8000;

  public search(query: string): Observable<string> {
    console.log("Service cherche", query);

    return query.length < 4
         ? throwError(() => new Error("Non !!!"))
         : of( `Résultat de la recherche pour "${query}"` )
    
    // return new Promise( r => {
    //   setTimeout(() => r(`Résultat de la recherche pour "${query}"`), this.dt);
    //   this.dt /= 2;
    // })
  }
}
