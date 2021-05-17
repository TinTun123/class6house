import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SandBoxComponent } from './sandbox/sandbox.component';
import { UnderCon } from './underconstruction/underconstruction';

const routes: Routes = [
  {path: "map", component: UnderCon},
  {path: "", component : HomeComponent}

];

export const routing = RouterModule.forRoot(routes)
