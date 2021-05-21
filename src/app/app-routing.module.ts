import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SandBoxComponent } from './sandbox/sandbox.component';
import { StoreComponent } from './store/store.component';
import { UnderCon } from './underconstruction/underconstruction';

const routes: Routes = [
  {path: "undercon", component: UnderCon},
  {path: "", component : HomeComponent}

];

export const routing = RouterModule.forRoot(routes)
