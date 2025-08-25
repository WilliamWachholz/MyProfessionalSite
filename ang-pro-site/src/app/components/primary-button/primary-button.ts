import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button class="bg-blue-500 text-white w-full border px-5 py-2 rounded-sm hover:opacity-90" (click)="handleButtonClikc()">
      {{ label() }}
    </button>
  `,
  styles: ``
})
export class PrimaryButton {
  label = input('');

  btnClicked = output();

  handleButtonClikc(){
    this.btnClicked.emit();
  }

}
