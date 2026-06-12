export class Calculadora{
    public soma(n1: number, n2: number): number{
        return n1 + n2;
    }
    public subtracao(n1: number, n2: number): number{
        return n1 - n2;
    }
    public divisao(n1: number, n2: number): number{
        return n1 / n2;
    }
    public multiplicacao(n1: number, n2: number): number{
        return n1 * n2;
    }
    public radicalizacao(n1: number): number{
        return Math.sqrt(n1);
    }
    public potencia(n1: number, n2: number): number{
        return n1 ** n2;
    }
}