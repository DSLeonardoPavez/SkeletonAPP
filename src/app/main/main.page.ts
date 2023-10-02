import { Component, OnInit } from '@angular/core';
import { createAnimation, Animation } from '@ionic/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})

export class MainPage {
  colors = ['red', 'green', 'blue', 'yellow', 'orange']; 
  currentColorIndex = 0;
  currentColor = this.colors[this.currentColorIndex];

  changeSquareColor(){
    this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
    this.currentColor = this.colors[this.currentColorIndex];
  }

}
