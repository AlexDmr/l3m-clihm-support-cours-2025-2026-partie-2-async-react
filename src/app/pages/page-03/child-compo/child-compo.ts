import { Component, effect, model } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-child-compo',
  imports: [ReactiveFormsModule],
  templateUrl: './child-compo.html',
  styleUrl: './child-compo.scss',
})
export class ChildCompo {
  public readonly es = model.required<string>();
  protected readonly fc = new FormControl<string>('', {nonNullable: true});

  constructor() {
    // es -> fc
    effect(() => {
      const value = this.es();
      console.log("es -> fc :", value);
      this.fc.setValue(value, {emitEvent: false});
    })

    // fc -> es
    this.fc.valueChanges.pipe(
      tap( v => console.log("fc -> es : ", v) )
    ).subscribe(v => this.es.set(v));
  }
}
