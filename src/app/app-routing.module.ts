import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // app.routes.ts

  { path: 'signup', component:  SignUpComponent },
    { path: 'user', component: UserProfileComponent },
    { path: '', redirectTo: '/user', pathMatch: 'full' },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
