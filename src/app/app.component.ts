import { Component } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ModelComponent } from './model/model.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openModal() {
     const initialState = { _Data : 'Test' };
     this.bsModalRef = this.modalService.show(ModelComponent, {initialState});
     this.bsModalRef.content.Close.subscribe(res => {
        console.log('Res => ' + res);
      });
  }
}
