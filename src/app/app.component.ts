import { Component, OnInit, HostListener, Inject, ViewEncapsulation  } from '@angular/core';

import { SharedService } from 'src/app/shared/shared.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isMenuExpanded:boolean = false;
  isHeaderAwake:boolean = false;
  isHeaderMoved:boolean = false;

  constructor(
    private sharedService: SharedService
  ) { }

  isMobile() {
		return window.innerWidth <= 991 ? true : false;
	}

  @HostListener('window:scroll', [])
  onWindowScroll() {

  	if(!this.isMobile()){

      if(window.scrollY > 150){
        this.isHeaderMoved = true;
        this.sharedService.setHeaderMoved(this.isHeaderMoved)
  			setTimeout(()=> {
  				this.isHeaderAwake = true;
          this.sharedService.setHeaderAwake(this.isHeaderAwake)
  			}, 100);
  		}
      else  {
        this.isHeaderMoved = false;
        this.sharedService.setHeaderMoved(this.isHeaderMoved)
        setTimeout(()=> {
  				this.isHeaderAwake = false;
          this.sharedService.setHeaderAwake(this.isHeaderAwake)
  			}, 100);
      }
    }
    else {
      this.isHeaderMoved = false;
      this.sharedService.setHeaderMoved(this.isHeaderMoved)
      this.isHeaderAwake = false;
      this.sharedService.setHeaderAwake(this.isHeaderAwake)
    }

  }


  ngOnInit(): void {

    this.sharedService.menuexpandedcast.subscribe((isMenuExpanded:any) => {
      this.isMenuExpanded = isMenuExpanded
      if(this.isMenuExpanded){
        document.body.classList.add('ov-hidden')
      }
      else {
        document.body.classList.remove('ov-hidden')
      }
    })

    this.sharedService.headerawakecast.subscribe((isHeaderAwake:any) => {
      this.isHeaderAwake = isHeaderAwake
    })

    this.sharedService.headermovecast.subscribe((isHeaderMoved:any) => {
      this.isHeaderMoved = isHeaderMoved
    })

    window.onresize = () => {
      if(window.innerWidth >= 991){
        this.sharedService.setMenuExpanded(false)
      }
    }

  }

}
