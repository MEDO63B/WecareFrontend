import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SginupComponent } from './components/sginup/sginup.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
