import { LitElement, html, customElement, property } from 'lit-element';

import getData from './getData';
import { CreditReport } from './creditReportData';
import './credmo-report-ui';

@customElement('credmo-report')
export class CredmoReport extends LitElement {
  @property({ type: String }) token: CreditReport;
  @property({ type: Object }) data: CreditReport;

  constructor() {
    super();

    this.getDataAPI();
  }

  async getDataAPI() {
    const token = '87E8CAE2-B29F-4728-A23C-E1D3ED5D5729';
    const data = await getData(token);
    this.data = data;
    console.log(JSON.stringify(data));
  }

  render() {
    const { data } = this;

    if (data) {
      return html`
        <credmo-report-ui data="${JSON.stringify(data)}"></credmo-report-ui>
      `;
    }

    return html`
      LOADING...
    `;
  }
}
