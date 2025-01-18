import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import {
  Barcode,
  Bolt,
  Box,
  Home,
  LogOut,
  LucideAngularModule,
  ScrollText,
  ShoppingBasket,
  UsersRound,
} from 'lucide-angular';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(
      LucideAngularModule.pick({
        Home,
        Box,
        Barcode,
        ShoppingBasket,
        UsersRound,
        ScrollText,
        Bolt,
        LogOut,
      })
    ),
  ],
};
