import { Component } from '@angular/core';

@Component({
  selector: 'fe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FacturacionElectronica';
  expanded=true
  toggleExpanded(expanded:boolean){
    this.expanded = expanded
  }
}
