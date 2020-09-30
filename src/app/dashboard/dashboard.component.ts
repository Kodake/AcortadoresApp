import { Component, OnInit } from '@angular/core';
import { AcortadorService } from '../services/acortador.service';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  btnString = 'Acortar';
  url = '';
  urlShort ='';

  constructor(private acortadorService: AcortadorService,
              private clipboardService: ClipboardService) { }

  ngOnInit(): void {
  }

  shorter() {
    if (this.btnString === 'Acortar') {
      this.acortadorService.getUrlShort(this.url).subscribe(data => {
        this.urlShort = data.link;
      });
      this.btnString = 'Reset';
    } else {
      this.btnString = 'Acortar';
      this.urlShort = '';
      this.url = '';
    }
  }

  copy() {
    this.clipboardService.copyFromContent(this.urlShort);
    alert('Content copied!');
  }

}
