import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() suma = new EventEmitter<number>();
  @Output() resta = new EventEmitter<number>();
  @Output() calcular = new EventEmitter<number>();


  a: number;
  b: number;
  s: string;
  res: number;

  constructor() { }

  ngOnInit(): void {
  }

Calcular(){

    if (this.s == '+') {
      this.res = this.a + this.b;
      this.calcular.emit(this.res);
    }
    if (this.s == '-') {
      this.res = this.a - this.b;
      this.calcular.emit(this.res);
    }
    if (this.s == '*') {
      this.res = this.a * this.b;
      this.calcular.emit(this.res);
    }
    if (this.s == '/') {
      this.res = this.a / this.b;
      this.calcular.emit(this.res);
    }



}
}
