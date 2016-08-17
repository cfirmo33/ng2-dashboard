import { Component, Input } from '@angular/core';
import { CHART_DIRECTIVES } from '@progress/kendo-angular-charts/dist/npm/js/main';

@Component({
  selector: 'issue-types',
  directives: [CHART_DIRECTIVES],
  styles: [
      require("../app.style.scss").toString()
  ],
  template: `
    <kendo-chart>
        <kendo-chart-series>
            <kendo-chart-series-item [data]="data" type="donut" field="value" categoryField="type" [overlay]="false"></kendo-chart-series-item>
        </kendo-chart-series>
    </kendo-chart>
  `
})
export class IssueTypesComponent {
    @Input() public data;
}