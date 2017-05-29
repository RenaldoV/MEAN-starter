import { Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in.component'

export const routing = RouterModule.forRoot([
    {path: 'logIn', component: LogInComponent}
]);