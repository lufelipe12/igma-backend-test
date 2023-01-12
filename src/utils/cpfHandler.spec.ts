import { Test } from '@nestjs/testing';
import { CpfHandler } from './cpfHandler';

describe('CpfHandler', () => {
  let cpfHandler: CpfHandler;

  beforeEach(() => {
    cpfHandler = new CpfHandler();
  });

  describe('cpfFormatter', () => {
    it('Should return cpf formatted.', () => {
      const cpf = '128.304.830-22';

      const result = cpfHandler.cpfFormatter(cpf);

      expect(result).toHaveLength(11);
    });

    it('Should return an undefined value for cpf with letters', () => {
      const cpf = 'aaa.bbb.cda-aa';

      const result = cpfHandler.cpfFormatter(cpf);

      expect(result).toBeUndefined();
    });

    it('Should return a length lesse than 11 for cpf mixed with letters', () => {
      const cpf = '11a.b3b.cda-a1';

      const result = cpfHandler.cpfFormatter(cpf);

      expect(result?.length).toBeLessThan(11);
    });
  });

  describe('isValidCpf', () => {
    it('Should return true for valid cpf.', () => {
      const cpf = '128.304.830-22';

      const formattedCpf = cpfHandler.cpfFormatter(cpf);
      const result = formattedCpf && cpfHandler.isValidCpf(formattedCpf);

      expect(result).toBeTruthy();
    });

    it('Should return false for invalid cpf.', () => {
      const cpf = '128.304.830-12';

      const formattedCpf = cpfHandler.cpfFormatter(cpf);
      const result = formattedCpf && cpfHandler.isValidCpf(formattedCpf);

      expect(result).toBeFalsy();
    });
  });
});
