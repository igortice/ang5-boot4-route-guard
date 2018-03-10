import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector:    'app-cardapio-edit',
  templateUrl: './cardapio-edit.component.html',
  styleUrls:   [ './cardapio-edit.component.scss' ]
})
export class CardapioEditComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

}
