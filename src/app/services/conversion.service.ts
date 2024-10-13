//import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {
  private url = 'https://converto-ljv1.onrender.com/convert';

  constructor() {}
  
  // private http = inject(HttpClient);

  convertCode(
    prev:string,
    newFormat:string,
    inputCode:string
  ):Observable<any>{
    const params = new URLSearchParams({
      prev,
      newFormat,
    }).toString();

    const stringifiedInput = JSON.stringify(inputCode).replace(/^"|"$/g, '');

    const requestUrl = `${this.url}?${params}`;

    return from(
      fetch(requestUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain', // Assuming you're sending text
        },
        body: stringifiedInput,

        
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
          }
          return response.text(); // Expecting plain text response
        })
        .catch((error) => {
          console.error('Error occurred:', error);
          throw error; // Handle any error you want to log or propagate
        })
    );
  }
}
