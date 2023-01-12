export class CpfHandler {
  cpfFormatter(anyCpf: string): string | undefined {
    const regex = /\d/g;
    const cpfFormatted = anyCpf.match(regex)?.join('');

    return cpfFormatted && cpfFormatted;
  }

  isValidCpf(cpfFormatted: string) {
    const validatorNumber = cpfFormatted.slice(-2);

    const numbersToValidate = cpfFormatted.slice(0, -2);
    const numbersToValidateArr = numbersToValidate.split('');

    const firstSum = this.sumFinder(numbersToValidateArr);
    const firstRest = this.restFinder(firstSum);
    const firstNumber = this.numberFinder(firstRest);

    const secondValidateArr = [...numbersToValidateArr, String(firstNumber)];

    const secondSum = this.sumFinder(secondValidateArr);
    const secondRest = this.restFinder(secondSum);
    const secondNumber = this.numberFinder(secondRest);

    const numberToValidate = `${firstNumber}${secondNumber}`;

    return validatorNumber === numberToValidate;
  }

  sumFinder(arr: string[]) {
    let sum = 0;
    let multiplier = 2;
    for (let i = arr.length - 1; i >= 0; i--) {
      sum = sum + +arr[i] * multiplier;
      multiplier++;
    }

    return sum;
  }

  restFinder(number: number) {
    return number % 11;
  }

  numberFinder(rest: number) {
    if (rest < 2) {
      return 0;
    }

    return 11 - rest;
  }
}
