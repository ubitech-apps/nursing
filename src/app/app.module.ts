import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IndexBodyComponent } from './index-body/index-body.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AbstractComponent } from './abstract/abstract.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { CurrentIssueComponent } from './current-issue/current-issue.component';
import { ArchiveComponent } from './archive/archive.component';
import { EditorialBoardComponent } from './editorial-board/editorial-board.component';
import { SubmitManuscriptComponent } from './submit-manuscript/submit-manuscript.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { AuthorsGuidelinesComponent } from './authors-guidelines/authors-guidelines.component';
import { Address } from './address';
import { HttpClientModule } from '@angular/common/http';
import { ExportPipeModule } from './exportpipe.module';
import { FullTextComponent } from './full-text/full-text.component';
import { ReferencesComponent } from './references/references.component';
import { PastArticleComponent } from './past-article/past-article.component';
import { SubjectArticleComponent } from './subject-article/subject-article.component';
import { SearchArticleComponent } from './search-article/search-article.component';
import { HtmlSpecialPipe } from './pipe/html-special.pipe';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexBodyComponent,
    FooterComponent,
    AbstractComponent,
    ContactComponent,
    RegistrationComponent,
    AboutComponent,
    CurrentIssueComponent,
    ArchiveComponent,
    EditorialBoardComponent,
    SubmitManuscriptComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    AuthorsGuidelinesComponent,
    FullTextComponent,
    ReferencesComponent,
    PastArticleComponent,
    SubjectArticleComponent,
    SearchArticleComponent,
    HtmlSpecialPipe,
    
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ExportPipeModule,
    NgxUsefulSwiperModule,
    ShareIconsModule,
    ShareButtonsModule
  ],
  providers: [Address],
  bootstrap: [AppComponent]
})
export class AppModule { }
