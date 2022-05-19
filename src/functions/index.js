const handleCurrency = (currency) => {
  return currency === "USD" ? "$" : currency === "EUR" ? "€" : "₺";
};

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const handlePrice = (price, diffs, currency) => {
  return numberWithCommas((price * diffs[currency]).toFixed(2));
};

export { handleCurrency, handlePrice };
