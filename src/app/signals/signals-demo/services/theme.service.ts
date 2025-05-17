import { Injectable, signal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _theme = signal<'light' | 'dark'>('light');
  readonly theme: Signal<'light' | 'dark'> = this._theme;

  toggleTheme() {
    this._theme.set(this._theme() === 'light' ? 'dark' : 'light');
  }
  
}
