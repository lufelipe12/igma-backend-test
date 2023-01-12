export class CpfHandler {
  cpfFormatter(anyCpf: string): string | undefined {
    const regex = /\d/g;
    const cpfToNumbers = anyCpf.match(regex)?.join('');

    return cpfToNumbers && cpfToNumbers;
  }
}
