import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'; 
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component'; 
import { AuthGuard } from './guard/auth.guard';
const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'about', component: AboutComponent, canActivate:[AuthGuard] },
  { path: 'contact', component: ContactComponent, canActivate:[AuthGuard] }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

