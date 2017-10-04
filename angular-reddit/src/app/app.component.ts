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
      new Article("primer articulo", "http://primer link"),
      new Article("segundo articulo", "http://segundo link"),
      new Article("tercer articulo", "http://tercer link"),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    console.log("Adding article title: "+title.value+ " and link: " +link.value);

    this.articles.push(new Article(title.value,link.value,0));
    title.value="";
    link.value="";
    return false;
  }

}
