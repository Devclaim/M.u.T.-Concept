import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})


export class NavbarComponent {

  sticky: boolean = false;
  color = "accent";
  letters = '0123456789ABCDEF';

  @HostListener('window:scroll', ['$event'])
  handleScroll() {

    const windowScroll = window.pageYOffset;
    if (windowScroll >= document.getElementById('imagehead').offsetHeight) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  getRandomColor() {
    this.color = '#'; // <-----------
    for (var i = 0; i < 6; i++) {
      this.color += this.letters[Math.floor(Math.random() * 16)];
    }
  }

  setIdleColor(){
    this.color = '#ffffff'
  }

}
