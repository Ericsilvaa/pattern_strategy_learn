
import { addition } from "../../../examples/calculator";



describe("Calculator Tests", () => {
  it("should return 5 when 2 is added to 3", () => {
    const result = addition(2, 3)
    const expected = 5

    expect(expected).toBe(result)

  })
})



// toEqual: Útil para verificar objetos e suas propriedades
// toBeFalsy: Útil para verificar valores que podem ser convertidos para false por meio da coerção do JavaScript.
// toBeTruthy: Útil para verificar valores que podem ser convertidos para true por meio da coerção do JavaScript.
// toContain: Útil para verificar arrays com valores primitivos.
// toContainEqual: Útil para verificar arrays com objetos.
// toMatch: Útil para verificar strings e expressões regulares.
// toThrow: Útil para verificar se uma função lançou uma exceção.