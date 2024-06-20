import { Component, OnInit, Renderer2 } from '@angular/core';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent implements OnInit {
  currentQuote: string;
  backgroundUrl: string;

  constructor (private quoteService : QuoteService, private renderer: Renderer2) {
    this.currentQuote = this.quoteService.getRandomQuote();
    this.backgroundUrl = 'https://unsplash.it/1920/1080/?random';
  }

  ngOnInit(): void {
    this.setBackgroundImage();
  }

  generateNewQuote(): void {
    this.currentQuote = this.quoteService.getRandomQuote();
    this.backgroundUrl = `https://unsplash.it/1920/1080/?random&t=${new Date().getTime()}`;
    this.setBackgroundImage();
  }

  setBackgroundImage(): void {
    this.renderer.setStyle(document.body, 'backgroundImage', `url(${this.backgroundUrl})`);
  }
}
