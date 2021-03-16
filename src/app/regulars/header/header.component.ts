import { Component, OnInit, HostListener, Inject, ViewEncapsulation  } from '@angular/core';
import { ActivatedRoute, Data, NavigationEnd, Router } from '@angular/router';

import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  input:string = ''

  isMenuExpanded:boolean = false;
  isHeaderAwake:boolean = false;
  isHeaderMoved:boolean = false;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private sharedService: SharedService
  ) { }

  searchData() {

  }

  isDataEmpty() {
    return this.input == '' ? true: false;
  }

  isMobile() {
		return window.innerWidth <= 991 ? true : false;
	}

  openNav() {
    this.isMenuExpanded = !this.isMenuExpanded
    this.sharedService.setMenuExpanded(this.isMenuExpanded)
  }



  ngOnInit(): void {

    this.sharedService.menuexpandedcast.subscribe((isMenuExpanded:any) => {
      this.isMenuExpanded = isMenuExpanded
    })

    this.sharedService.headerawakecast.subscribe((isHeaderAwake:any) => {
      this.isHeaderAwake = isHeaderAwake
    })

    this.sharedService.headermovecast.subscribe((isHeaderMoved:any) => {
      this.isHeaderMoved = isHeaderMoved
    })

    this._router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.isMenuExpanded = false;
        this.sharedService.setMenuExpanded(this.isMenuExpanded)
      }
    });

  }

}
