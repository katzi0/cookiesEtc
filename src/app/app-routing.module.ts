import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevelopersComponent } from "./components/developers/developers.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DeveloperDetailComponent } from './components/developer-detail/developer-detail.component';

const routes: Routes = [
  {path:'developers',component:DevelopersComponent},
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'detail/:id',component:DeveloperDetailComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 exports:[ RouterModule]
})
export class AppRoutingModule { }

