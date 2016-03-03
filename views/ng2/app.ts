import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
@Component({
    selector: 'my-app',
     template: `<p>1111</p>`
})
class AppComponent {
    heroes=['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    addHero(newHero:string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
    
 }
bootstrap(AppComponent);