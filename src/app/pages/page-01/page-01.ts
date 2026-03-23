import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, share, Subject, take, timer } from 'rxjs';

@Component({
  selector: 'app-page-01',
  imports: [],
  templateUrl: './page-01.html',
  styleUrl: './page-01.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page01 {

  constructor() {
    // const top10$ = interval(1000).pipe(
    //   take(4),
    //   share()
    // );
    const top10$ = new Subject<number>();
    interval(1000).pipe(take(4)).subscribe(top10$);

    
    
    timer(4500).subscribe( // 1,5s plus tard...
      () => {
        top10$.subscribe(v => console.log(" Jo", v));
        top10$.subscribe({
          next: v => console.log("Bob", v),
          complete: () => console.log("C'est finit pour top10$"),
          error: err => console.error("Erreur pour top10$", err)
        });
      }
    );
  }
}
