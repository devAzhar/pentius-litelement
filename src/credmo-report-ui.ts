import { LitElement, html, customElement, property, css } from 'lit-element';

import { CreditReport } from './creditReportData';
import './credmo-previous-addresses';
import './credmo-inquiries';
import './credmo-accounts';

const BUREAU: { [key: string]: string } = {
  tui: 'Transunion',
  efx: 'Equifax',
  exp: 'Experian',
};

@customElement('credmo-report-ui')
export class CredmoReportUI extends LitElement {
  @property({ type: Object }) data: CreditReport;

  static get styles() {
    return css`
      :host {
        font-size: 16px;
      }
    `;
  }

  render() {
    const { data } = this;

    console.log(data);

    return html`
      <header>
        <h1>${BUREAU[data.bureau]} Report</h1>
      </header>

      <credmo-previous-addresses
        addresses="${JSON.stringify(data.demographicData.previousAddresses)}"
      ></credmo-previous-addresses>

      <credmo-inquiries
        inquiries="${JSON.stringify(data.inquiries)}"
      ></credmo-inquiries>

      <credmo-accounts
        accounts="${JSON.stringify(data.tradeLineItems)}"
      ></credmo-accounts>
    `;
  }
}
