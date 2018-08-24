import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

   Close: Subject<any>;

   _Data;

   Value: String = '';
   ValueOne: String = '';

  constructor(public modalRef: BsModalRef) { }

  ngOnInit() {
   this.Close = new Subject();
   console.log(this._Data);
  }

  hide() {
      this.Close.next([this.Value, this.ValueOne]);
      this.modalRef.hide();
  }

}
