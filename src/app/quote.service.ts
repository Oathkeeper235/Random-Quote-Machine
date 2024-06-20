import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private quotes: string[] = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. - Oprah Winfrey",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
    "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one. - John Lennon",
    "You must be the change you wish to see in the world. - Mahatma Gandhi",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "Be yourself, everyone else is already taken. - Oscar Wilde",
    "Well done is better than well said. -Benjamin Franklin",
    "You will face many defeats in life, but never let yourself be defeated. - Maya Angelou",
    "Never let the fear of striking out keep you from playing the game. - Babe Ruth",
    "Many of life's failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison",
    "In this life we cannot do great things. We can only do small things with great love. - Mother Teresa"
  ];

  constructor() { }

  getRandomQuote(): string {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[randomIndex];
  }
}
