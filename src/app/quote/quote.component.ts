import { Component, OnInit, Renderer2 } from '@angular/core';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  standalone: true,
  imports: []
})
export class QuoteComponent implements OnInit {
  currentQuote: string = '';
  currentAuthor: string = '';
  backgroundUrl: string;

  constructor(private quoteService: QuoteService, private renderer: Renderer2) {
    this.backgroundUrl = 'https://unsplash.it/1920/1080/?random';
  }

  ngOnInit(): void {
    this.fetchNewQuote();
    this.setBackgroundImage();
  }

  fetchNewQuote(): void {
    this.quoteService.getRandomQuote().subscribe(quote => {
      this.currentQuote = quote.content;
      this.currentAuthor = quote.author;
    });
  }

  generateNewQuote(): void {
    this.fetchNewQuote();
    this.backgroundUrl = `https://unsplash.it/1920/1080/?random&t=${new Date().getTime()}`;
    this.setBackgroundImage();
  }

  setBackgroundImage(): void {
    this.renderer.setStyle(document.body, 'backgroundImage', `url(${this.backgroundUrl})`);
  }
}
