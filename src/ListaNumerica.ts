export class ListaNumerica {

    private numeros: number[] = [];



    public setNumeros(numeros: number[]): void {
        this.numeros = numeros;
    }

    public getNumeros(): number[] {
        return this.numeros;
    }

    public quantidadeValida(): boolean {

        return this.numeros.length >= 4 &&
            this.numeros.length <= 10;
    }

    public valoresValidos(): boolean {

        return this.numeros.every(
            numero => numero >= 10000 && numero <= 99999
        );
    }
}