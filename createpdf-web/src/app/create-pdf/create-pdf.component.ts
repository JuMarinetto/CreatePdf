import { CreatePdfService } from './create-pdf.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-pdf',
  templateUrl: './create-pdf.component.html',
  styleUrls: ['./create-pdf.component.css']
})
export class CreatePdfComponent implements OnInit {

  constructor(
    private service : CreatePdfService
  ) { }

  ngOnInit(): void {
  }

  getPdf(): void{
    this.service.createPdf();
    console.log("testettetetetetettetet");

  }
}
