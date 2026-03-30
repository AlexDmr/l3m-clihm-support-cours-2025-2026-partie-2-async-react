import { ChangeDetectionStrategy, Component, inject, Signal, signal } from '@angular/core';
import { SearchService } from './search';
import { catchError, debounceTime, from, map, of, Subject, switchMap, timer } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-02',
  imports: [
    ReactiveFormsModule
  ],
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

  // Formulaire réactive pour gérer la query de recherche :
  // private readonly _fb = inject(NonNullableFormBuilder);
  // private readonly _formQuery = this._fb.control<string>("");
  protected readonly formQuery = new FormControl<string>("", { nonNullable: true });

  constructor() {
    // On dérive le calcul (processus) de la recherche à partir
    // du processus searchQuery$
    this.queryResult = toSignal(
      this.searchQuery$.pipe(
        switchMap(
          q => this._srv.search(q).pipe(
            catchError(
              err => of(`La recherche a échouée avec "${err}"`)
            )
          )
        )
      )
    );

    // Quand l'utilisateur modifie le champs de recherche, on veut lancer la recherche....
    // Champs de recherche géré      par formQuery
    // Processus de recherche initié par searchQuery$
    this.formQuery.valueChanges.pipe(
      debounceTime(2000)
    ).subscribe(
      this.searchQuery$
    )

    // On cherche "toto" puis "coucou"
    // this.search("toto");
    // timer(2000).subscribe(
    //   () => this.search("coucou")
    // );
  }

  protected search(q: string): void {
    this.searchQuery$.next(q);
  }
}
