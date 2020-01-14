import { LitElement, html, customElement, property, css } from 'lit-element';

import { CreditReport } from './creditReportData';

@customElement('credmo-previous-addresses')
export class CredmoPreviousAddress extends LitElement {
  @property({ type: Array })
  addresses: CreditReport['demographicData']['previousAddresses'];

  static get styles() {
    return css`
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      li {
        border: 1px solid rgba(0, 0, 0, 0.125);
        padding: 0.75em 1.25em;
      }
    `;
  }

  render() {
    return html`
      <section>
        <h2>Previous Addresses:</h2>
        <ul>
          ${this.addresses.map(
            address =>
              html`
                <li>
                  ${address.address1}, ${address.city}, ${address.state}
                  ${address.zip}
                </li>
              `
          )}
        </ul>
      </section>
    `;
  }
}
