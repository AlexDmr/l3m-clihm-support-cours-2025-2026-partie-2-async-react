import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, take, timer } from 'rxjs';

@Component({
  selector: 'app-page-01',
  imports: [],
  templateUrl: './page-01.html',
  styleUrl: './page-01.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page01 {

  constructor() {
    const top10$ = interval(1000).pipe(take(4));

    top10$.subscribe(v => console.log("Bob", v));
    
    timer(1500).subscribe( // 1,5s plus tard...
      () => top10$.subscribe(v => console.log(" Jo", v))
    );
  }
}
