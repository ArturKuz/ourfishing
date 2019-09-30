import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerLinks: { name: string, href: string, icon: string}[] = [
    {
    name: 'Twitter', href: 'https://twitter.com', icon: 'assets/svg/twitter.svg'
    },
    {
      name: 'Facebook', href: 'https://www.facebook.com', icon: 'assets/svg/facebook.svg'
    },
    {
      name: 'Instagram', href: 'https://www.instagram.com', icon: '/assets/svg/instagram.svg'
    }    
  ]

  

  constructor() { }

  ngOnInit() {
  }

}
