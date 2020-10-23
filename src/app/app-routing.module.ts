import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTerrenoComponent } from './components/add-terreno/add-terreno.component';
import { TerrenoDetailsComponent } from './components/terreno-details/terreno-details.component';
import { TerrenoListComponent } from './components/terreno-list/terreno-list.component';

const routes: Routes = [
  {path:'',redirectTo:'terreno',pathMatch:'full'},
  {path:'terreno',component:TerrenoListComponent},
  {path:'add',component:AddTerrenoComponent},
  {path:'terreno/:id',component:TerrenoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
