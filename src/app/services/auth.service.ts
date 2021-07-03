import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from 'src/app/services/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afa: AngularFireAuth,
  ) { }

  login(user: Usuario) {
    return this.afa.signInWithEmailAndPassword(user.email, user.password);
  }

  register(user: Usuario) {
    return this.afa.createUserWithEmailAndPassword(user.email, user.password);
  }

  logout() {
    return this.afa.signOut();
  }

  getAuth() {
    return this.afa;
  }
}