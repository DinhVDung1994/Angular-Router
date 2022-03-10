import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TbodyComponent} from "./tbody/tbody.component";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {AccountComponent} from "./account/account.component";
import {WellcomComponent} from "./wellcom/wellcom.component";
import {ImageComponent} from "./image/image.component";

const routes: Routes = [
  {path: 'home',redirectTo:'/'},
  {path: 'tour',component:TbodyComponent},
  {path: 'img',component:ImageComponent},
  {path: 'acc',component:AccountComponent},
  {path: '',component:WellcomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
