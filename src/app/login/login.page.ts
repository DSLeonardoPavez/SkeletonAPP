import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {

  username: string = ''; 
  password: string = ''; 

  constructor(private navCtrl: NavController, private toastController: ToastController) {}

  login() {
    if (this.username.length >= 3 && this.username.length <= 8 && /^\d{4}$/.test(this.password)) {
      // Redirigir al usuario a la página Home y pasar los datos
      this.navCtrl.navigateForward('/main', {
        queryParams: {
          username: this.username,
        },
      });
    } else {
      this.presentToast('Campos inválidos');
    }
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }
 
}

