import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Animal } from './animal.service';

@Injectable({
  providedIn: 'root'
})
export class FotosdbService {
  colecoesAnimal: AngularFirestoreCollection; 

  constructor(
    private af: AngularFirestore
  ) { 
    this.colecoesAnimal = this.af.collection<Animal>('Animal');
  }

  //Método de cadastro
  cadAnimal(dados){
    return this.colecoesAnimal.add(dados);
   }

   // Método de consulta de todos os animais
   getAllAnimal(){
     return this.colecoesAnimal.snapshotChanges().pipe(
       map(actions => {
         return actions.map(a => {
           const data = a.payload.doc.data();
           const id = a.payload.doc.id;
           return {id, ...data}
         })
       })
     )
   }


   // Método de consulta de 1 animal
   getAnimal(id: string){
     return this.colecoesAnimal.doc(id).valueChanges()
   }

   // deletar animal
   deletarAnimal(id:string){
    return this.colecoesAnimal.doc(id).delete();
  }
  // atualizar animal
  updateAnimal(id: string, animal:Animal ) {
    return this.colecoesAnimal.doc(id).update(animal);
  }
}
