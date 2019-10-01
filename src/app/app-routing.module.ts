import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { ProjectPageComponent } from './project-page/project-page.component';


const routes: Routes = [
  {path: 'cv', component: CvComponent},
  {path: '', component: HomeComponent},
  {path: 'project-page', component: ProjectPageComponent},
  {path: '**',  component: HomeComponent, redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
