import { Component, OnInit } from '@angular/core';
import { FotosdbService } from '../services/fotosdb.service';
import { ActionSheetController, AlertController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  

   animais : any[] = [];
   
  
  constructor(
    private fb: FotosdbService,
    private loading: LoadingController,
    private alertControl: AlertController,
    public actionSheetController: ActionSheetController,
    public nav: NavController
    ) {
  }
  
  ngOnInit(): void {
    this.fb.getAllAnimal().subscribe(results => this.animais = results);
    this.loadMessage()
  }


async loadMessage(){
  let load = await this.loading.create({
    message: 'Aguarde...',
    duration: 1000
  });

  await load.present()
}


  async deletarAnimal(id){

    console.log(id)
    const alert = await this.alertControl.create({
      header: 'Você tem certeza que deseja apagar esta foto?',
      buttons: [
        {
          text: 'Sim',
          cssClass: 'secondary',
          handler: () => this.fb.deletarAnimal(id)
        },{
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }
      ]
    })
    await alert.present();
  } 


  async compartilhar(){
    const actionSheet = await this.actionSheetController.create({
      header: "Compartilhar",
      buttons: [{
        text: " Whatsapp",
        icon: "logo-whatsapp"},
        {
      text: " Facebook",
      icon: "logo-facebook"},
      {
        text: " Twitter",
      icon: "logo-twitter"},
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        }
]
    }
    )
    await actionSheet.present();

  }

  slideOpts = {
    initialSlide: 0,
    speed: 200
  };
  
  



  editaCadastro(id){
    console.log(id);
    this.nav.navigateForward('/tab7', id)
  }





  


  
}
