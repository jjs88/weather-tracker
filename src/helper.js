export const convertTemp = (temp) => {
  return  ((9/5)*(temp-273) + 32).toFixed(0);
}