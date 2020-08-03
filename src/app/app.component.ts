import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';

  frase = 'Calculadora Personalizada de ilich';
  res;
  Resta: number;

  onCalcular(calcular: number) {

    if (calcular == 89.9) {
      this.res = 'no se puede realizar la operacion';
    } else {
      this.res = calcular;
    }


  }


}
