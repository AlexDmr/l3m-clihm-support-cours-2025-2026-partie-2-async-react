import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';

@Component({
  selector: 'app-page-04',
  imports: [],
  templateUrl: './page-04.html',
  styleUrl: './page-04.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page04 {}


/** 
 * Constantes vitales
 */
interface CV {freq: number, tension: number, temp: number}
interface people {
  freq$   : Observable<number> // Fréquence cardiaque
  tension$: Observable<number> // Tension artériel
  temp$   : Observable<number> // Température
}
declare function cvOK(cv: CV): boolean;
declare function getPeopleFromName(n: string): people;

function getCvFor(n: string): Observable<CV & { name: string, ok: boolean }> {
  const p = getPeopleFromName(n);
  const cv$: Observable<CV> = combineLatest([
    p.freq$,
    p.temp$,
    p.tension$
  ]).pipe(
    map(
      ([freq, temp, tension]) => ({ freq, temp, tension })
    )
  );

  return cv$.pipe(
    map( cv => ({
        ...cv,
        name: n,
        ok: cvOK(cv)
      })
    )
  )
}