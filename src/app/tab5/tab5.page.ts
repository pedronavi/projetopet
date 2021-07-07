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
    private firebase: FotosdbService,
    private nav: NavController
  ) { }

  ngOnInit(): void{
    this.routerId = this.ar.snapshot.params['id'];
    console.log(this.routerId);

    if(this.routerId){
      this.firebase.getAnimal(this.routerId).subscribe(caixa => this.animal = caixa )
      console.log(this.animal)
    }
  }

  updateAnimal(form){
    console.log(form.value)
    this.firebase.updateAnimal(this.routerId, form.value);
    this.nav.navigateForward('/tabs/tab1')
  }

}
