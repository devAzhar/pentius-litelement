import { css } from 'lit-element';

export default css`
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    padding: 0.75em;
    border: 1px solid #dee2e6;

    p:not(:first-child) {
      color: #6c757d;
      margin-top: 0.5em;
    }
  }

  th {
    font-weight: bold;
    text-align: left;
  }

  tbody tr:nth-child(odd) {
    background-color: #f2f2f2;
  }
`;
