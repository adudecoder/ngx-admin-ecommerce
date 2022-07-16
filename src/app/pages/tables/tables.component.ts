import { Component } from '@angular/core';

@Component({
  selector: 'tables-sales',
  styleUrls: ['tables.component.scss'],
  templateUrl: 'tables.component.html',
})
export class TablesComponent {
  selected: Date | null;
}
