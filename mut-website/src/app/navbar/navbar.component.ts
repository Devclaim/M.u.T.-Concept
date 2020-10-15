import { Component , HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})


export class NavbarComponent  {


  sticky: boolean = false;
  
  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      
      const windowScroll = window.pageYOffset;
      if(windowScroll >=  document.getElementById('imagehead').offsetHeight){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }

}
