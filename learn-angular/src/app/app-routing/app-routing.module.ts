import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

const routes: Routes = []; 

@NgModule({
  exports:[RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
