import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector:    'app-cardapio-edit',
  templateUrl: './cardapio-edit.component.html',
  styleUrls:   [ './cardapio-edit.component.scss' ]
})
export class CardapioEditComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.id = +this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe( params => this.id = +params['id'] );
  }

}
