import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private dt = 8000;

  public search(query: string): Promise<string> {
    console.log("Service cherche", query);
    return new Promise( r => {
      setTimeout(() => r(`Résultat de la recherche pour "${query}"`), this.dt);
      this.dt /= 2;
    })
  }
}
