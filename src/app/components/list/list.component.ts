import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list$ : Object;

  constructor(private _list: HttpService) { }

  ngOnInit(): void {
    this._list.getCharacter().subscribe(data => {
      this.list$ = data,
      console.log(this.list$)
    })
  }

}
