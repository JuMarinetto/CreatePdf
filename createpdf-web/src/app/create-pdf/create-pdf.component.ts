import { CreatePdfService } from './create-pdf.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-pdf',
  templateUrl: './create-pdf.component.html',
  styleUrls: ['./create-pdf.component.css']
})
export class CreatePdfComponent implements OnInit {

    nome: string;
    fone: string;
    descricao: string;

  constructor(
    private service : CreatePdfService
  ) { }

  ngOnInit(){
  }

  getPdf(): void{
    this.service.createPdf(this.nome, this.fone, this.fone)
    console.log("testettetetetetettetet");
    console.log(this.nome);

  }


}
