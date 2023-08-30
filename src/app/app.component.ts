import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggleMenu: boolean = false;
  testimonialList: any[] = [
    {
      img: './assets/avatar-anisha.png',
      name: 'Anisha Li',
      comment:
        '  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”'
    },
    {
      img: './assets/avatar-ali.png',
      name: 'Ali Bravo',
      comment:
        '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”'
    },
    {
      img: './assets/avatar-richard.png',
      name: 'Richard Watts',
      comment:
        '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”'
    },
    {
      img: './assets/avatar-shanai.png',
      name: 'Shanai Gough',
      comment:
        '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”'
    }
  ];

  socialsIcon: any[] = [
    'bi bi-facebook',
    'bi bi-youtube',
    'bi bi-twitter',
    'bi bi-pinterest',
    'bi bi-instagram'
  ];

  linksLeft: any[] = ['Home', 'Pricing', 'Products', 'About Us'];
  linksRight: any[] = ['Careers', 'Community', 'Privacy Policy'];

  toggleHambuger() {
    let btn = document.querySelector('.hamburger-btn');
    btn?.classList.toggle('active');
    this.toggleMenu = !this.toggleMenu;
  }
}
