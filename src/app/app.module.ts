import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, ExtraOptions, PreloadAllModules, ActivatedRouteSnapshot  } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { RegularsModule } from 'src/app/regulars/regulars.module';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from './shared/shared.module';

import { appRoutes } from 'src/app/app-routing.module';
import { AppComponent } from './app.component';

const routerConfig: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  preloadingStrategy       : PreloadAllModules,
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, routerConfig),
    RegularsModule,
    HttpClientModule,
    CoreModule.forRoot(),
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
