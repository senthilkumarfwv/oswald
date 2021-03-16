import { Component, OnInit, Input, OnDestroy, ViewEncapsulation, ChangeDetectorRef, ChangeDetectionStrategy, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { MatButton } from '@angular/material/button';
import { Subject } from 'rxjs';

@Component({
  selector: 'notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss'],
  encapsulation  : ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotifyComponent implements OnInit {

  private _overlayRef: OverlayRef;
  private _unsubscribeAll: Subject<any>;

  @ViewChild('notificationOrigin')
  public _notificationOrigin: MatButton;

    @ViewChild('notificationPanel')
    public _notificationPanel: TemplateRef<any>;


  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _overlay: Overlay,
    private _viewContainerRef: ViewContainerRef,
  ) {

    // Set the private defaults
    this._unsubscribeAll = new Subject();

  }

  openPanel(): void
   {


       // Create the overlay
       this._overlayRef = this._overlay.create({
           hasBackdrop     : true,
           backdropClass   : '',
           scrollStrategy  : this._overlay.scrollStrategies.block(),
           positionStrategy: this._overlay.position()
                                 .flexibleConnectedTo(this._notificationOrigin._elementRef.nativeElement)
                                 .withFlexibleDimensions()
                                 .withViewportMargin(16)
                                 .withLockedPosition()
                                 .withPositions([
                                     {
                                         originX : 'start',
                                         originY : 'bottom',
                                         overlayX: 'start',
                                         overlayY: 'top'
                                     },
                                     {
                                         originX : 'start',
                                         originY : 'top',
                                         overlayX: 'start',
                                         overlayY: 'bottom'
                                     },
                                     {
                                         originX : 'end',
                                         originY : 'bottom',
                                         overlayX: 'end',
                                         overlayY: 'top'
                                     },
                                     {
                                         originX : 'end',
                                         originY : 'top',
                                         overlayX: 'end',
                                         overlayY: 'bottom'
                                     }
                                 ])
       });

       // Create a portal from the template
       const templatePortal = new TemplatePortal(this._notificationPanel, this._viewContainerRef);

       // Attach the portal to the overlay
       this._overlayRef.attach(templatePortal);

       // Subscribe to the backdrop click
       this._overlayRef.backdropClick().subscribe(() => {

           // If overlay exists and attached...
           if ( this._overlayRef && this._overlayRef.hasAttached() )
           {
               // Detach it
               this._overlayRef.detach();
           }

           // If template portal exists and attached...
           if ( templatePortal && templatePortal.isAttached )
           {
               // Detach it
               templatePortal.detach();
           }
        });


   }

  ngOnInit(): void {
  }

}
