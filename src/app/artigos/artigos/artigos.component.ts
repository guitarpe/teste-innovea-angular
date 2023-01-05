import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { InfoDialogComponent } from './../../shared/components/info-dialog/info-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Artigo } from './../model/artigo';
import { ArtigosService } from './../services/artigos.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrls: ['./artigos.component.scss']
})
export class ArtigosComponent implements OnInit{

  artigos$: Observable<Artigo[]>;
  displayedColumns = ['source', 'urlToImage', 'author', 'title', 'publishedAt', 'author', 'url'];
  dtOptions: DataTables.Settings = {};

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

  onInformation(content: string, description: string){
    this.dialog.open(InfoDialogComponent, {
      data:{
        content: content,
        description: description
      }
    });
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 25],
      processing: true
    };
  }
}
