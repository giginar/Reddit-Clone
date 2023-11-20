import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from "./auth/signup/signup.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  { path: 'sign-up', component: SignupComponent }
];

@NgModule()({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
