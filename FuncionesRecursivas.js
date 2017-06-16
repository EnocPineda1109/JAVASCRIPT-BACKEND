let contadorEnoc = 1
function fibonacciEnoc(num, memoria = {}) {
  contadorEnoc++
  if (memoria[num]) return memoria[num]
  if (num == 1) return 0
  if (num == 2) return 1

  return memoria[num] = fibonacciEnoc(num - 1, memoria) +
            fibonacciEnoc(num - 2, memoria)
}

let contadorRec = 1
function fibonacciRecursivo(num) {
  contadorRec++
  if (num == 1) return 0
  if (num == 2) return 1

  return fibonacciRecursivo(num - 1) +
      fibonacciRecursivo(num - 2)
}
