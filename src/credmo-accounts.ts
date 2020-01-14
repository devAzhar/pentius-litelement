import { LitElement, html, customElement, property, css } from 'lit-element';

import { CreditReport } from './creditReportData';
import tableStyles from './styles/table';
import formatCurrency from './utils/formatCurrency';

@customElement('credmo-accounts')
export class CredmoAccounts extends LitElement {
  @property({ type: Array }) accounts: CreditReport['tradeLineItems'];

  static get styles() {
    return [tableStyles];
  }

  render() {
    return html`
      <h2>Accounts:</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Account Number</th>
            <th>Creditor</th>
            <th>Status</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          ${this.accounts.map(
            account => html`
              <tr>
                <td>${account.info.dateReported}</td>
                <td>
                  <p>${account.info.accountNumber}</p>
                  <p>Type: ${account.accountType.abbreviation}</p>
                  <p>
                    Delinquent:<br />
                    ${account.info.delinquentStatus.description}
                  </p>
                </td>
                <td>
                  ${account.info.creditorName}-${account.info.subscriberCode}
                </td>
                <td>${account.info.openClosed.abbreviation}</td>
                <td>
                  ${formatCurrency(Number(account.info.currentBalance))}
                </td>
              </tr>
            `
          )}
        </tbody>
      </table>
    `;
  }
}
