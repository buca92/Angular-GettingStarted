import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({
	declarations: [
		AppComponent,
		WelcomeComponent
	],
	imports: [
		BrowserModule,
		FormsModule, // Allowes to use [(ngModel)] in inputs then
		HttpClientModule, // Allowes to send HTTP requests
		RouterModule.forRoot([ // Allowes to use routing
			{ path: 'welcome', component: WelcomeComponent },
			{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
			{ path: '**', redirectTo: 'welcome', pathMatch: 'full' } // 404 page
			// { path: '**', component: PageNotFoundComponent } // 404 page
		]),
		ProductModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
