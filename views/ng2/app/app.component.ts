import {Component} from 'angular2/core';
@Component({
  selector: 'my-app',
  template: `
    <input #newHero
      (keyup.enter)="addHero(newHero.value)"
      (blur)="addHero(newHero.value); newHero.value='' ">
    <button (click)=addHero(newHero.value)>Add</button>
    <ul><li *ngFor="#hero of heroes" class="item" [class.red]="2>1">{{hero}}</li></ul>
  `
})
export class AppComponent {
  heroes=['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero:string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
}