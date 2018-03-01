import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';


const appRoutes: Routes = [
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact List' }
  },
  {
    path: 'contact-create',
    component: ContactCreateComponent,
    data: { title: 'Create Contact' }
  },
  {
    path: 'contact-edit/:id',
    component: ContactEditComponent,
    data: { title: 'Edit Contact' }
  },
  {
    path: 'contact-detail/:id',
    component: ContactDetailComponent,
    data: { title: 'Contact Details' }
  },
  { path: '',
    redirectTo: '/contact',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactDetailComponent,
    ContactCreateComponent,
    ContactEditComponent
  ],
  imports: [  
	  	BrowserModule,
	  	FormsModule,
	  	HttpClientModule,
	    BrowserAnimationsModule,
	    MatButtonModule,
	    MatCardModule,
	    MatInputModule,
	    MatListModule,
	    MatToolbarModule,
		  RouterModule.forRoot(
		    appRoutes,
		    { enableTracing: true } // <-- debugging purposes only
		  )	    	   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
