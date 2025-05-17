import { computed, Injectable, Signal, signal } from '@angular/core';
import { User } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user = signal<User | null>(null); // signal to hold user data
  readonly user: Signal<User | null> = this._user; // readonly signal to expose user data
  readonly isLoggedIn: Signal<boolean> = computed(() => !!this._user()); // computed signal to check if user is logged in
  
  constructor() { }

  login(user: User) {
    this._user.set(user);
  }

  logout() {
    this._user.set(null);
  }
}
