import { ChangeDetectionStrategy, Component, inject, Signal, signal } from '@angular/core';
import { SearchService } from './search';
import { from, map, Subject, switchMap, timer } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-page-02',
  imports: [],
  templateUrl: './page-02.html',
  styleUrl: './page-02.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page02 {
  private readonly _srv = inject(SearchService);
  
  // private readonly _queryResult = signal<string | undefined>(undefined);
  protected readonly queryResult: Signal<string | undefined>; // = this._queryResult.asReadonly();

  // Avec un processus observable RxJS
  private readonly searchQuery$ = new Subject<string>();

  constructor() {
    // On dérive le calcul (processus) de la recherche à partir
    // du processus searchQuery$
    this.queryResult = toSignal(
      this.searchQuery$.pipe(
        switchMap(q => this._srv.search(q))
      )
    );

    // On cherche "toto" puis "coucou"
    this.search("toto");
    timer(2000).subscribe(
      () => this.search("coucou")
    );
  }

  protected search(q: string): void {
    this.searchQuery$.next(q);
  }
}
