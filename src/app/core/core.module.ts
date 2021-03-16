import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule
  ],
  exports: [
    MatIconModule
  ],
  providers: [

  ]
})
export class CoreModule {

  /**
     * Constructor
     *
     * @param {DomSanitizer} _domSanitizer
     * @param {MatIconRegistry} _matIconRegistry
     * @param parentModule
     */
    constructor(
      private _domSanitizer: DomSanitizer,
      private _matIconRegistry: MatIconRegistry,
      @Optional() @SkipSelf() parentModule?: CoreModule
  )
  {

      // Do not allow multiple injections
      if ( parentModule )
      {
          throw new Error('CoreModule has already been loaded. Import this module in the AppModule only.');
      }

      // Register icon sets
      this._matIconRegistry.addSvgIconSetInNamespace('feather', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/feather.svg'));
      this._matIconRegistry.addSvgIconSet(this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/material-twotone.svg'));
      this._matIconRegistry.addSvgIconSetInNamespace('mat_outline', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/material-outline.svg'));

  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule
    };
  }

}
