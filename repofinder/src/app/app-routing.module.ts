import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path:'search', component:SearchComponent},
  { path:'page1', component:Page1Component},
  { path:'welcome', component:WelcomeComponent},
  { path:'page2', component:Page2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
