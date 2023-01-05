import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';

import { Artigo } from './../model/artigo';

@Injectable({
  providedIn: 'root'
})
export class ArtigosService {

  private readonly API = 'http://localhost:8089/api/articles/list';
  //'/assets/artigos.json';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Artigo[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(artigos => console.log(artigos))
    )
  }
}