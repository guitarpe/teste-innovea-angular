import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Artigo } from './../model/artigo';
import { ArtigosService } from './../services/artigos.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrls: ['./artigos.component.scss']
})
export class ArtigosComponent implements OnInit{

  artigos$: Observable<Artigo[]>;
  displayedColumns = ['source', 'urlToImage', 'author', 'title'];

  constructor(
    private arqtigosServices: ArtigosService,
    public dialog: MatDialog
  ){
    this.artigos$ = this.arqtigosServices.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar artigos.')
        return of([])
      }),
    )
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }
}
