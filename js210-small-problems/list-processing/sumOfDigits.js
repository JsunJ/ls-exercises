function sum(num) {
  return num.toString().split('').reduce((sum, num) => sum + Number(num), 0);
}