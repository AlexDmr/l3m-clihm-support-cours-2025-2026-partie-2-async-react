import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ChildCompo } from './child-compo/child-compo';

@Component({
  selector: 'app-page-03',
  imports: [ChildCompo],
  templateUrl: './page-03.html',
  styleUrl: './page-03.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page03 {
  protected readonly data = signal<string>("");
  
}
