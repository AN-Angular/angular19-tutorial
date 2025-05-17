import { Component, Signal } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ThemeService } from './services/theme.service';
import { SettingsService } from './services/settings.service';
import { User } from './types/types';

@Component({
  selector: 'app-signals-demo',
  imports: [],
  templateUrl: './signals-demo.component.html',
  styleUrl: './signals-demo.component.css'
})
export class SignalsDemoComponent {

  user!: Signal<User | null>;
  isLoggedIn!: Signal<boolean>;
  theme!: Signal<'light' | 'dark'>;
  settings!: Signal<{ notificationsEnabled: boolean; language: string }>;

  constructor(
    private authService: AuthService,
    private themeService: ThemeService,
    private settingsService: SettingsService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.user;
    this.isLoggedIn = this.authService.isLoggedIn;
    this.theme = this.themeService.theme;
    this.settings = this.settingsService.settings;
  }

  login() {
    const mockUser = { id: 1, name: 'John Doe' };
    this.authService.login(mockUser);
  }

  logout() {
    this.authService.logout();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
  
}
