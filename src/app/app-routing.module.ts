import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { LandingComponent } from './landing/landing.component';
import { LookupDetailComponent } from './lookup/lookup-detail/lookup-detail.component';
import { LookupEditComponent } from './lookup/lookup-edit/lookup-edit.component';
import { LookupStartComponent } from './lookup/lookup-start/lookup-start.component';
import { LookupComponent } from './lookup/lookup.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'lookup', component: LookupComponent, children: [
    { path: '', component: LookupDetailComponent },
    { path: 'new', component: AddItemComponent },
    { path: ':id', component: LookupEditComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
