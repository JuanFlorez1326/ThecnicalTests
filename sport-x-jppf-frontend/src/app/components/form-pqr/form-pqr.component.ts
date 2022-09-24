import { Component, OnInit } from '@angular/core';
import { PQR } from 'src/app/models/PQR';
import { FormPqrService } from 'src/app/service/form-pqr.service';
import { PqrService } from 'src/app/service/pqr.service';
import { Router, ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-form-pqr',
  templateUrl: './form-pqr.component.html',
  styleUrls: ['./form-pqr.component.css']
})
export class FormPqrComponent implements OnInit {

  pqr: PQR = {
    id: 0,
    id_type_user: 8,
    description: '',
    title: '',
    ticket_type: '',
    ticket_status: '',
    ticket_creation_date: new Date()
  };

  edit: boolean = false;

  constructor(private formPqr: PqrService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  savePqr() {
    delete this.pqr.id;
    this.formPqr.createPqr(this.pqr).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/pqr']);
      },
      err => {
        console.error(err)
      }
    );
  }
}
