import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'ngx-ecommerce',
  styleUrls: ['e-commerce.component.scss'],
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent implements OnInit {

  @ViewChild('myCanvas', { static: true }) element: ElementRef;
  @ViewChild('pieCanvas', { static: true }) elements: ElementRef;

  ngOnInit() {
    new Chart(this.element.nativeElement, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            data: [85, 72, 86, 81, 84, 86, 94, 60, 62, 65, 41, 58],
            borderColor: '#00aeff',
            fill: false
          },
          {
            data: [33, 38, 10, 93, 68, 50, 35, 29, 34, 2, 62, 4],
            borderColor: '#ffcc00',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        }
      }
    });

    new Chart(this.elements.nativeElement, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            data: [85, 72, 86, 81, 84, 86, 94, 60, 62, 65, 41, 58],
            borderColor: '#00aeff',
            fill: false
          },
          {
            data: [33, 38, 10, 93, 68, 50, 35, 29, 34, 2, 62, 4],
            borderColor: '#ffcc00',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        }
      }
    });
  }

}
