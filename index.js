module.exports = function catalan(n) {
  if (n < 0) return NaN
  for (var r = 1, k = 2; k <= n; k++) {
    r *= (n + k) / k
  }
  return r
}
