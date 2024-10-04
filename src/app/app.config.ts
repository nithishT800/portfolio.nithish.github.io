import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideLottieOptions } from 'ngx-lottie';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

export const appConfig: ApplicationConfig = {
  providers: [
      provideHttpClient(withFetch()), 
      provideZoneChangeDetection({ eventCoalescing: true }), 
      provideRouter(routes), 
      provideClientHydration(), 
      provideAnimationsAsync(),
      provideLottieOptions({
        player: () => import('lottie-web'),
      }),
      { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2000, horizontalPosition: 'center', verticalPosition: 'top' } }
  ]
};
