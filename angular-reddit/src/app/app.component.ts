import { Component } from '@angular/core';
import { Article } from './article/article.model'; // <-- import this

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles:Article[];

  constructor(){
    this.articles=[
      new Article("primer articulo", "primer link"),
      new Article("segundo articulo", "segundo link"),
      new Article("tercer articulo", "tercer link"),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    console.log("Adding article title: "+title.value+ " and link: " +link.value);

    return false;
  }

}
