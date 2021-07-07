
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, NavController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from '../services/user';
//import { Keyboard } from '@ionic-native/keyboard/ngx';;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{

  @ViewChild(IonSlides) slides: IonSlides;
  public wavesPosition: number = 0;
  private wavesDifference: number = 100;
  private loading: any;
  public userLogin: Usuario = {};
  public userRegister: Usuario = {};

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    //  public keyboard: Keyboard
    private nav: NavController
    
  ) {}


  segmentChanged(event: any) {
    if (event.detail.value === 'login') {
      this.slides.slidePrev();
      this.wavesPosition += this.wavesDifference;
    } else {
      this.slides.slideNext();
      this.wavesPosition -= this.wavesDifference;
    }
  }

  async login() {
    await this.presentLoading();

    try {
      await this.authService.login(this.userLogin);
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }
  }

  async register() {
    await this.presentLoading();

    try {
      await this.authService.register(this.userRegister);
    } catch (error) {
      this.presentCadastro(error.message);
    } finally {
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message: 'Usuário ou senha incorreta!', duration: 2000 });
    toast.present();
  }

  async presentCadastro(message: string) {
    const toast = await this.toastCtrl.create({ message: 'Cadastro feito com sucesso!', duration: 2000 });
    toast.present();
  }
  

}
