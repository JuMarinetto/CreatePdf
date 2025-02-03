import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreatePdfService {


  constructor(
    private _http: HttpClient) { }

   public createPdf(nome: string, fone: string, descricao: string){
      this._http.post(environment.baseUrl + '/pdf/create/' + nome + '/' + fone + '/' + descricao, {}, { responseType: 'blob' }).subscribe(
        (response: Blob) => {
          const url = window.URL.createObjectURL(response);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'testePdf.pdf';
          a.click();
        },
        (error) => {
          console.error('Erro ao gerar o PDF:', error);
        }
      );
    }
}
