import { LitElement, html, customElement, property, css } from 'lit-element';

import { CreditReport } from './creditReportData';
import tableStyles from './styles/table';

@customElement('credmo-inquiries')
export class CredmoInquiries extends LitElement {
  @property({ type: Array }) inquiries: CreditReport['inquiries'];

  static get styles() {
    return [tableStyles];
  }

  render() {
    return html`
      <h2>Inquiries:</h2>
      <table>
        <thead>
          <tr>
            <th>Inquiry Date</th>
            <th>Subscriber</th>
            <th>Type</th>
            <th>Reference</th>
          </tr>
        </thead>
        <tbody>
          ${this.inquiries.map(
            inquiry => html`
              <tr>
                <td>${inquiry.inquiryDate}</td>
                <td>${inquiry.subscriberName}-${inquiry.subscriberNumber}</td>
                <td>${inquiry.inquiryType}</td>
                <td>${inquiry.reference}</td>
              </tr>
            `
          )}
        </tbody>
      </table>
    `;
  }
}
