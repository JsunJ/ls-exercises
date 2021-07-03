let cache = {};
function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else if (cache[nth]) {
    return cache[nth];
  } else {
    cache[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
    return cache[nth];
  }
}