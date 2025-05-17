import { Injectable, signal, Signal } from '@angular/core';

interface Settings {
  notificationsEnabled: boolean;
  language: string;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private _settings = signal<Settings>({
    notificationsEnabled: true,
    language: 'en',
  });

  readonly settings: Signal<Settings> = this._settings;

  updateSettings(newSettings: Partial<Settings>) {
    this._settings.set({
      ...this._settings(),
      ...newSettings,
    });
  }
  
}
