import { Component, OnInit } from '@angular/core';
import { FotosdbService } from '../services/fotosdb.service';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {


  constructor(
    private db: FotosdbService,
    private loading: LoadingController,
    public toastController: ToastController,
    private nav: NavController
  ) { }

  ngOnInit(): void {
    this.loadMessage()
  }

  async loadMessage() {
    let load = await this.loading.create({
      message: 'Aguarde...',
      duration: 2000
    });

    await load.present()
  }



  salvar(form) {
    console.log(form.value)
    this.db.cadAnimal(form.value);
  }

  async toast() {
    const toast = await this.toastController.create({
      message: 'Upload feito com sucesso!',
      duration: 2000,
      position: "middle"

    });
    this.nav.navigateForward('/tabs/tab1')
    toast.present();
  }

  slideOpts = {
    initialSlide: 0,
    speed: 200,
    autoplay: true
  };


}
