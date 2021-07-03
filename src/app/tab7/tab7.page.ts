import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { Animal } from '../services/animal.service';
import { FotosdbService } from '../services/fotosdb.service';

@Component({
  selector: 'app-tab7',
  templateUrl: './tab7.page.html',
  styleUrls: ['./tab7.page.scss'],
  providers: [NavParams]
})
export class Tab7Page implements OnInit {

  routerId = null;
  animal: Animal = {};


  constructor(
    private ar: ActivatedRoute,
    private fb: FotosdbService,
    private nav: NavController,
    public navParams: NavParams
  ) {
    const id = navParams.get('id')
    console.log(id, 'ok!')
  }

  ngOnInit() {
    /* this.routerId = this.ar.snapshot.params['id'];
 
     //if(this.routerId){
     //  this.fb.getAnimal(this.routerId).subscribe(caixa => this.animal = caixa )
   }*/

    /* 
    const par = this.activatedRoute.snapshot.paramMap.get('parametro');
    console.log(par);
    */
  }

  upAnimal(form) {
    this.fb.updateAnimal(this.routerId, form.value);
    this.nav.navigateForward('/tab1')
  }

}
