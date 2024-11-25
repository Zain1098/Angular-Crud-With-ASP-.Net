import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { UseraddComponent } from './useradd/useradd.component';
import { FetchuserComponent } from './fetchuser/fetchuser.component';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter([
{path:'',redirectTo:"Home",pathMatch:"full"},
{path:"Home",component:UseraddComponent},
{path:"Fetchuser",component:FetchuserComponent}

  ]), provideClientHydration()]
};
