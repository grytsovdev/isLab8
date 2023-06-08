import { Component, OnInit } from '@angular/core';
import { ConcreteTriangle } from '../Classes/ConcreteTriangle';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage implements OnInit {


  triangle: ConcreteTriangle = new ConcreteTriangle();


  constructor() {

  }
  ngOnInit() {

  }

  createTriangle() {
    this.triangle.setP1(0, 300)
    this.triangle.setP2(150, 80)
    this.triangle.setP3(280, 300)
    this.show()

  }
  createPramTr() {
    this.triangle.setP1(150, 300)
    this.triangle.setP2(300, 300)
    this.triangle.setP3(150, 80)
    this.show();
  }
  createRiwTr() {
    this.triangle.setP1(50, 300)
    this.triangle.setP2(150, 80)
    this.triangle.setP3(250, 300)
    this.show()
  }

  getContext(): CanvasRenderingContext2D {
    let canvas = document.getElementById('canvas') as HTMLCanvasElement
    let ctx = canvas.getContext('2d')

    if (ctx) {
      canvas.width = 800; // internal width
      canvas.height = 600; // internal height

      // Set the scale factors for display
      const displayWidth = canvas.offsetWidth;
      const displayHeight = canvas.offsetHeight;
      const scaleX = canvas.width / displayWidth;
      const scaleY = canvas.height / displayHeight;

      // Resize the canvas display using CSS
      canvas.style.width = displayWidth + "px";
      canvas.style.height = displayHeight + "px";
      return ctx
    }
    return new CanvasRenderingContext2D


  }



  show() {


    this.getContext().clearRect(0, 0, 300, 150)
    this.triangle.draw(this.getContext());


  }
  move() {
    this.triangle.move(5, 0)

    this.show()
  }

  color() {
    let colors = ['red', 'green', 'hotpink', 'blue', "yellow"]

    this.triangle.changeColor(colors[Math.floor(Math.random() * colors.length)]);
    this.show()
  }

  rotate() {
    this.triangle.rotate(50);
    this.show()
  }
  changeSize() {
    this.triangle.changeSize(2, 2)
  }

}
