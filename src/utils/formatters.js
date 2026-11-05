// Indian Rupee currency and number formatting utilities

export const formatINR = (val) => {
  if (isNaN(val) || val === null || val === undefined) return '₹0';
  const num = Math.round(Number(val));
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(num);
};

export const formatCompactINR = (val) => {
  if (isNaN(val) || val === null || val === undefined) return '₹0';
  const num = Number(val);
  if (num >= 10000000) {
    return `₹${(num / 10000000).toFixed(2)} Cr`;
  }
  if (num >= 100000) {
    return `₹${(num / 100000).toFixed(2)} L`;
  }
  if (num >= 1000) {
    return `₹${(num / 1000).toFixed(1)}k`;
  }
  return `₹${Math.round(num)}`;
};

export const formatNumberIN = (val) => {
  if (isNaN(val) || val === null || val === undefined) return '0';
  return new Intl.NumberFormat('en-IN').format(Math.round(Number(val)));
};

