import { Component, model } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-compo',
  imports: [ReactiveFormsModule],
  templateUrl: './child-compo.html',
  styleUrl: './child-compo.scss',
})
export class ChildCompo {
  public readonly es = model.required<string>();
  protected readonly fc = new FormControl<string>('');

  constructor() {
    // es -> fc

    // fc -> es
    
  }
}
