import { Component, OnInit } from '@angular/core';
import { PqrService } from '../../service/pqr.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pqr',
  templateUrl: './pqr.component.html',
  styleUrls: ['./pqr.component.css']
})
export class PqrComponent implements OnInit {

  pqr:any = []

  constructor(private pqrService: PqrService) { }

  ngOnInit() {
    this.getPqr();
  }

  getPqr(){
    this.pqrService.listAllPqrs().subscribe(
      (data) => {
        this.pqr = data;
        console.log(data)
      },
      (error) => {
        console.log(error)
      }
    );
  }

  deletePqr(id_pqr: number) {
    this.pqrService.deletePqr(id_pqr).subscribe(
      (data) => {
        console.log(data)
        window.location.reload();
      },
      (error) => {
        console.log(error)
      }
    );
  }
}
