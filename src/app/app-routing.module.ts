import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AbstractComponent } from './abstract/abstract.component';
import { ArchiveComponent } from './archive/archive.component';
import { AuthorsGuidelinesComponent } from './authors-guidelines/authors-guidelines.component';
import { ContactComponent } from './contact/contact.component';
import { CurrentIssueComponent } from './current-issue/current-issue.component';
import { EditorialBoardComponent } from './editorial-board/editorial-board.component';
import { FullTextComponent } from './full-text/full-text.component';
import { IndexBodyComponent } from './index-body/index-body.component';
import { LibrariansComponent } from './librarians/librarians.component';
import { PastArticleComponent } from './past-article/past-article.component';
import { PeerreviewComponent } from './peerreview/peerreview.component';
import { PlagiarismComponent } from './plagiarism/plagiarism.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ReferencesComponent } from './references/references.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchArticleComponent } from './search-article/search-article.component';
import { SubjectArticleComponent } from './subject-article/subject-article.component';
import { SubmitManuscriptComponent } from './submit-manuscript/submit-manuscript.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';


const routes: Routes = [

  {path: '', component: IndexBodyComponent},
  {path: 'abstract/:id', component: AbstractComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'registration', component:RegistrationComponent},
  {path:'current-issue', component:CurrentIssueComponent},
  {path:'about', component:AboutComponent},
  {path:'editorial-board', component:EditorialBoardComponent},
  {path:'archive', component:ArchiveComponent},
  {path:'submitmanuscript', component:SubmitManuscriptComponent},
  {path:'privacy-policy', component:PrivacyPolicyComponent},
  {path:'authors-guidelines', component:AuthorsGuidelinesComponent},
  {path:'terms-conditions', component:TermsConditionsComponent},
  {path:'full-text/:id',component:FullTextComponent},
  {path:'references/:id',component:ReferencesComponent},
  {path:'past-issue/:id',component:PastArticleComponent},
  {path:'article/:id',component:SubjectArticleComponent},
  {path:'search/:fdata',component:SearchArticleComponent},
  {path:'peer-review',component:PeerreviewComponent},
  {path:'librarians',component:LibrariansComponent},
  {path:'plagiarism',component:PlagiarismComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
