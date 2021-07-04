export default (num: string | number) => {
  if (!num) return '';
  const commasRemoved = num.toString().includes(',')
    ? num.toString().replaceAll(',', '')
    : num.toString();
  let num_parts = commasRemoved.split('.');
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return num_parts.join('.');
};
