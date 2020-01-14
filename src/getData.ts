import data, { CreditReport } from './creditReportData';

const getData = async (token: string) => {
  // const url = `https://spin.credmo.systemadmin.com/api/enterprise/v1/browser/tui/report?displayToken=${token}&onSuccess=Success&onWaiting=Waiting&onFailure=Failure&generic=true`;
  // const response = await fetch(url, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });
  // const data: CreditReport = await response.json();
  return data;
};

export default getData;
