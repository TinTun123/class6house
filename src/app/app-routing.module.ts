
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';

import { UnderCon } from './underconstruction/underconstruction';

const routes: Routes = [
  {path: "undercon", component: UnderCon},
  {path: "aboutus", component: AboutUsComponent},
  {path: "", component : HomeComponent}

];

export const routing = RouterModule.forRoot(routes);
