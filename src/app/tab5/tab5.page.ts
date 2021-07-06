import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FotosdbService } from '../services/fotosdb.service';
import { Animal } from '../services/animal.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  routerId = null;
  animal: Animal = {};

  constructor(
    private ar: ActivatedRoute,
    private fb: FotosdbService,
    private nav: NavController
  ) { }

  ngOnInit(){
    this.routerId = this.ar.snapshot.params['id'];
    console.log('oi');

    if(this.routerId){
      this.fb.getAnimal(this.routerId).subscribe(caixa => this.animal = caixa )
    }
  }

  upAnimal(form){
    console.log(form.value)
    this.fb.updateAnimal(this.routerId, form.value);
    this.nav.navigateForward('/tabs/tab1')
  }

}
