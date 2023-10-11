import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})

export class MainPage {
  
  username: string = '';
  nombre: string = '';
  apellido: string = '';
  educacion: string = '';
  fechaNacimiento: string = '';

  constructor(private route: ActivatedRoute, private toastController: ToastController) {
    this.route.queryParams.subscribe((params) => {
      if (params['username']) {
        this.username = params['username'];
      }
    });
  }

  limpiar() {
    this.nombre = '';
    this.apellido = '';
    this.educacion = '';
    this.fechaNacimiento = '';
  }
  
  mostrarInformacion() {
    const message = `Nombre: ${this.nombre}\nApellido: ${this.apellido}\nFecha Nacimiento: ${this.fechaNacimiento}`;
    this.presentToast(message);
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
    });
    toast.present();

  }
}