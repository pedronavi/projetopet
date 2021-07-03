import { Component, OnInit } from '@angular/core';
import { FotosdbService } from '../services/fotosdb.service';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../services/animal.service';
import { Usuario } from '../services/user';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  routerId = null;
  animal: Animal = {};
  authService: any;
  public userRegister: Usuario = {}
  private loading: any;
  loadingCtrl: any;

  constructor(
    private ar: ActivatedRoute,
    private firebase: FotosdbService,
    private nav: NavController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  async register() {
    await this.presentLoading();

    try {
      await this.authService.register(this.userRegister);
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message: 'Usuário e/ou senha incorreta.', duration: 2000 });
    toast.present();

  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }



}


