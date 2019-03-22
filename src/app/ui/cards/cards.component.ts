import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.less']
})
export class CardsComponent implements OnInit {

  //  TEMP -----------
  cards = [
  { title: 'Post 1', alt: 'image of post' , imgUrl: 'assets/img/posts/post1.jpg',  
    descr: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Atque, ipsa. Officiis minus accusantium placeat accusamus dolorem reprehenderit
            optio incidunt inventore saepe, explicabo quas consequatur aut beatae quaerat.
            Quia, illo tenetur.
            Porro odio minima et praesentium voluptates corrupti optio eveniet vitae.
            Iusto ducimus accusantium est ut natus ex molestiae, ullam excepturi! Veritatis
            inventore similique voluptas officia neque itaque nostrum aspernatur totam?`, },
  { title: 'Post 2', alt: 'image of post' , imgUrl: 'assets/img/posts/post2.jpg',  
    descr: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Atque, ipsa. Officiis minus accusantium placeat accusamus dolorem reprehenderit
            optio incidunt inventore saepe, explicabo quas consequatur aut beatae quaerat.
            Quia, illo tenetur.
            Porro odio minima et praesentium voluptates corrupti optio eveniet vitae.
            Iusto ducimus accusantium est ut natus ex molestiae, ullam excepturi! Veritatis
            inventore similique voluptas officia neque itaque nostrum aspernatur totam?`, },
  { title: 'Post 3', alt: 'image of post' , imgUrl: 'assets/img/posts/post3.jpg',  
    descr: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Atque, ipsa. Officiis minus accusantium placeat accusamus dolorem reprehenderit
            optio incidunt inventore saepe, explicabo quas consequatur aut beatae quaerat.
            Quia, illo tenetur.
            Porro odio minima et praesentium voluptates corrupti optio eveniet vitae.
            Iusto ducimus accusantium est ut natus ex molestiae, ullam excepturi! Veritatis
            inventore similique voluptas officia neque itaque nostrum aspernatur totam?`, },
  ]  
  // -----------------

  constructor() { }

  ngOnInit() {
  }

}
