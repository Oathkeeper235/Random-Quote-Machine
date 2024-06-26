import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private apiUrl = 'https://api.quotable.io/random';

  constructor(private http: HttpClient) { }

  getRandomQuote(): Observable<{ content: string, author: string }> {
    return this.http.get<{ content: string, author: string }>(this.apiUrl).pipe(
      map(response => ({ content: response.content, author: response.author }))
    );
  }
}
