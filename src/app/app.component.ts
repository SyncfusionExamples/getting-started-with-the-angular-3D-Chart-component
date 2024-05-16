import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Chart3DAllModule } from '@syncfusion/ej2-angular-charts';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Chart3DAllModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 })
 export class AppComponent {
  title = 'myangularapp';  
  public dataSource : Object[] | undefined;
  public primaryXAxis?: Object;
  public dataLabel?: Object;
  public legend?: Object;
  public tooltip?: Object;
  ngOnInit() : void {
    this.tooltip ={
      enable: true
    };
    this.legend = {
      visible: true
    };
    this.dataLabel ={
      visible : true
    };
    this.primaryXAxis = {
      valueType : 'Category'
    }
    this.dataSource = [
      { x: 'Tesla', y: 137429 },
      { x: 'Aion', y: 80308 },
      { x: 'Wuling', y: 76418 },
      { x: 'Changan', y: 52849 },
      { x: 'Geely', y: 47234 },
      { x: 'Nio', y: 31041 },
      { x: 'Neta', y: 22449 },
      { x: 'BMW', y: 18733 }
    ];
  }

}

