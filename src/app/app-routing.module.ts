import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeartComponent } from './heart/heart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PopupComponent } from './popup/popup.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';


const routes: Routes = [
  { path: '', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'verifyEmail', component: VerifyEmailComponent },
  { path: 'popup', component: PopupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'singleProduct', component: SingleProductComponent },
  { path: 'heart', component: HeartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
