import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private isMenuExpanded = new BehaviorSubject<boolean>(false);
  menuexpandedcast = this.isMenuExpanded.asObservable();

  private isHeaderAwake = new BehaviorSubject<boolean>(false);
  headerawakecast = this.isHeaderAwake.asObservable();

  private isHeaderMoved = new BehaviorSubject<boolean>(false);
  headermovecast = this.isHeaderMoved.asObservable();

  constructor() { }

  getMenuExpanded(){
    return this.isMenuExpanded.value
  }

  setMenuExpanded(id:any){
    this.isMenuExpanded.next(id);
  }

  getHeaderAwake(){
    return this.isHeaderAwake.value
  }

  setHeaderAwake(id:any){
    this.isHeaderAwake.next(id);
  }

  getHeaderMoved(){
    return this.isHeaderMoved.value
  }

  setHeaderMoved(id:any){
    this.isHeaderMoved.next(id);
  }

}
