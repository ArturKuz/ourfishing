import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  //  TEMP -----------
  cards = [
  { title: 'Post 1', alt: 'image of post' , imgUrl: 'assets/img/posts/post1.jpg',  
    descr: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Atque, ipsa. Officiis minus accusantium placeat accusamus dolorem reprehenderit
            optio incidunt inventore saepe, explicabo quas consequatur aut beatae quaerat.
            Quia, illo tenetur.`, },
  { title: 'Post 2', alt: 'image of post' , imgUrl: 'assets/img/posts/post2.jpg',  
    descr: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Atque, ipsa. Officiis minus accusantium placeat accusamus dolorem reprehenderit
            optio incidunt inventore saepe, explicabo quas consequatur aut beatae quaerat.
            Quia, illo tenetur.`, },
  { title: 'Post 3', alt: 'image of post' , imgUrl: 'assets/img/posts/post3.jpg',  
    descr: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Atque, ipsa. Officiis minus accusantium placeat accusamus dolorem reprehenderit
            optio incidunt inventore saepe, explicabo quas consequatur aut beatae quaerat.
            Quia, illo tenetur.`, },
  ]  
  // -----------------

  constructor() { }

  ngOnInit() {
  }

}
