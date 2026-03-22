import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private dt = 4000;

  public search(query: string): Promise<string> {
    return new Promise( r => {
      setTimeout(() => r(`Résultat de la recherche pour "${query}"`), this.dt);
      this.dt /= 2;
    })
  }
}
