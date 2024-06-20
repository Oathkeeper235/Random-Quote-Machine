import { Component, OnInit } from '@angular/core';
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

  constructor (private quoteService : QuoteService) {
    this.currentQuote = this.quoteService.getRandomQuote();
  }

  ngOnInit(): void {
    
  }

  generateNewQuote(): void {
    this.currentQuote = this.quoteService.getRandomQuote();
  }
}
