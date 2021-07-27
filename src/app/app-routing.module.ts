import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AbstractComponent } from './abstract/abstract.component';
import { ArchiveComponent } from './archive/archive.component';
import { AuthorsGuidelinesComponent } from './authors-guidelines/authors-guidelines.component';
import { ContactComponent } from './contact/contact.component';
import { CurrentIssueComponent } from './current-issue/current-issue.component';
import { EditorialBoardComponent } from './editorial-board/editorial-board.component';
import { IndexBodyComponent } from './index-body/index-body.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RegistrationComponent } from './registration/registration.component';
import { SubmitManuscriptComponent } from './submit-manuscript/submit-manuscript.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';

const routes: Routes = [

  {path: '', component: IndexBodyComponent},
  {path: 'abstract', component: AbstractComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'registration', component:RegistrationComponent},
  {path: 'current-issue', component:CurrentIssueComponent},
  {path: 'about', component:AboutComponent},
  {path: 'editorial-board', component:EditorialBoardComponent},
  {path:'archive', component:ArchiveComponent},
  {path:'submitmanuscript', component:SubmitManuscriptComponent},
  {path:'privacy-policy', component:PrivacyPolicyComponent},
  {path:'authors-guidelines', component:AuthorsGuidelinesComponent},
  {path:'terms-conditions', component:TermsConditionsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
