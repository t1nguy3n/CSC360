import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {path: '', redirectTo: '/landingPage', pathMatch: 'full'},
  {path: 'landingPage', component: LandingPageComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
