import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SearchService } from './search';

@Component({
  selector: 'app-page-02',
  imports: [],
  templateUrl: './page-02.html',
  styleUrl: './page-02.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page02 {
  private readonly _search = inject(SearchService);

  constructor() {
    
  }
}
