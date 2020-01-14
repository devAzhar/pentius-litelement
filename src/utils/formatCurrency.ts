const formatCurrency = (
  input: number,
  decPlaces?: any,
  decSep?: any,
  thouSep?: any,
  symbol?: string
) => {
  decPlaces = isNaN((decPlaces = Math.abs(decPlaces))) ? 2 : decPlaces;
  decSep = typeof decSep === 'undefined' ? '.' : decSep;
  thouSep = typeof thouSep === 'undefined' ? ',' : thouSep;
  var sign = input < 0 ? '-' : '';
  var i = String(
    parseInt((input = Math.abs(Number(input)) || 0).toFixed(decPlaces))
  );
  var j: number = (j = i.length) > 3 ? j % 3 : 0;
  var numberValue = parseInt(i);

  if (!symbol) {
    symbol = '$';
  }

  var returnValue =
    symbol +
    sign +
    (j ? i.substr(0, j) + thouSep : '') +
    i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, '$1' + thouSep) +
    (decPlaces
      ? decSep +
        Math.abs(input - numberValue)
          .toFixed(decPlaces)
          .slice(2)
      : '');
  return returnValue;
};

export default formatCurrency;
