import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'sae';
  nome !: string;
  funcao !: string;
  email !: string;
  telefone1 !: string;
  //telefone2 !: string;
  //telefone3 !: string;

  foneTitulo: string = "Fone:  ";
  emailTitulo: string = "E-mail: ";

  @ViewChild('downloadLink') downloadLink!: ElementRef;

  public gerarAssinatura(){
    var element = document.getElementById("image");
    if(element){
      html2canvas(element).then( dados => {
          this.downloadLink.nativeElement.href = dados.toDataURL('image/png');
          this.downloadLink.nativeElement.download = 'assinatura-email.png';
          this.downloadLink.nativeElement.click();
      });
    }
  }



}
