
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { ProductComponent } from './products/product.component';

const routes: Routes = [
  {path: "products", component: ProductComponent},
  {path: "location", component: LocationComponent},
  {path: "aboutus", component: AboutUsComponent},
  {path: "", component: HomeComponent}
];

export const routing = RouterModule.forRoot(routes);
