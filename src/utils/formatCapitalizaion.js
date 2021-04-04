const formatCapitalizaion = (num) => {
  let value = Number(num);
  return value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });
};

export default formatCapitalizaion;
