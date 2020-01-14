import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('credmo-user-info')
export class CredmoUserInfo extends LitElement {
  @property({ type: String }) name;

  static get styles() {
    return css`
      h2 {
        color: beige;
      }
    `;
  }

  render() {
    return html`
      <section><h2>${this.name}</h2></section>
    `;
  }
}
