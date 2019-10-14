import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fish-info',
  templateUrl: './fish-info.component.html',
  styleUrls: ['./fish-info.component.scss']
})
export class FishInfoComponent implements OnInit {

  defaultFishImg = 'assets/img/d-fish.png';

  fish = {
    id: '1',
    name: 'Карась',
    img: '',
    description: `
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem iste libero
    aut non tenetur neque enim, asperiores voluptatibus quis aspernatur earum quasi nisi
    ducimus laborum repudiandae unde ex. Repellat, saepe.
    Eligendi ipsam debitis minima modi incidunt obcaecati ducimus possimus voluptatibus
    dolores nam repellendus tempora praesentium sed, reprehenderit similique veritatis soluta
    recusandae? Vitae, asperiores cumque pariatur at magni eos explicabo mollitia?
    Dolores soluta molestias officiis ex doloremque maxime optio veniam odio distinctio tenetur
    deleniti eaque, dolor voluptatum adipisci dolore provident atque saepe delectus non neque!
    Ad perferendis non commodi cum nesciunt?
    Dignissimos nemo temporibus blanditiis debitis adipisci, distinctio voluptates fuga magni
    necessitatibus quibusdam quo voluptate voluptas quasi totam voluptatibus esse odio nam nostrum
    odit in veniam maiores. Saepe alias reiciendis quas?
    Molestiae ea maiores recusandae nostrum? Quas culpa nobis molestiae ea modi excepturi, omnis
    eligendi aperiam, asperiores suscipit quidem laborum aut dolorum velit iste laudantium dicta
     odio impedit facere, nesciunt eos.
    `,
  };


  constructor() { }

  ngOnInit() {
  }

}
