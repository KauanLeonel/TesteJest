import { Calculadora } from './src/Calculadora';
import { ListaNumerica } from './src/ListaNumerica';


describe("classe Matematica", () => {
 let calc = new Calculadora();
 test("Somar dois números", () =>{
 expect(calc.soma(10, 2)).toBe(12)
 })
 test("Subtrair dois números", () =>{
 expect(calc.subtracao(10, 2)).toBe(8)
 })
 test("multiplicar dois números", () =>{
 expect(calc.multiplicacao(10, 2)).toBe(20)
 })
 test("divisao dois números", () =>{
 expect(calc.divisao(10, 2)).toBe(5)
 })
  test("potencia dois números", () =>{
 expect(calc.potencia(10, 2)).toBe(100)
 })
  test("divisao dois números", () =>{
 expect(calc.radicalizacao(4)).toBe(2)
 })
})

describe("classe ListaNumerica", () =>{
    let lista = new ListaNumerica();
    test("Lista válida", () => {

    lista.setNumeros([52208,27270,65319,10294]);

    expect(lista.quantidadeValida()).toBe(true);
    expect(lista.valoresValidos()).toBe(true);
  });
  it('deve retornar lista vazia ao criar objeto', () => {
  const lista = new ListaNumerica();

  expect(lista.getNumeros()).toEqual([]);
});
    test("Lista válida ", () => {

    lista.setNumeros([56208,27270,65319,10294,14531]);

    expect(lista.quantidadeValida()).toBe(true);
    expect(lista.valoresValidos()).toBe(true);
  });

  test("Lista válida", () => {

    lista.setNumeros([56208,27270,65319,10294,14531,15968,70787,32033,10000,99999]);

    expect(lista.quantidadeValida()).toBe(true);
    expect(lista.valoresValidos()).toBe(true);
  });

  test("Lista inválida com 3 elementos", () => {

    lista.setNumeros([52208,27270,65319]);

    expect(lista.quantidadeValida()).toBe(false);
    expect(lista.valoresValidos()).toBe(true);
  });

  test("Lista inválida com 10 elementos", () => {

    lista.setNumeros([52208,27270,65319,10294,14531,15968,70787,32033,42199,57235,98958]);

    expect(lista.quantidadeValida()).toBe(false);
    expect(lista.valoresValidos()).toBe(true);
  });

   test("Lista inválida com 1 elemento menor", () => {

    lista.setNumeros([52208,27270,65319,9999,98958]);

    expect(lista.quantidadeValida()).toBe(true);
    expect(lista.valoresValidos()).toBe(false);
  });

    test("Lista inválida com 1 elemento maior", () => {

    lista.setNumeros([52208,27270,65319,100000,98958]);

    expect(lista.quantidadeValida()).toBe(true);
    expect(lista.valoresValidos()).toBe(false);
  });

   test("Lista válida", () => {

    lista.setNumeros([56208,27270,65319,10294,14531,15968,70787,32033,10000,99999]);

    expect(lista.getNumeros()).toStrictEqual([56208,27270,65319,10294,14531,15968,70787,32033,10000,99999]);
  });
})


