import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberListComponent } from './_pages/member-list/member-list.component';
import { MemberCreateComponent } from './_pages/member-create.component';
import { MemberEditComponent } from './_pages/member-edit.component';

const routes: Routes = [
  {
    path: 'members',
    component: MemberListComponent,

  },
  {
    path: 'create',
    component: MemberCreateComponent,

  },
  {
    path: 'edit',
    component: MemberEditComponent,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
