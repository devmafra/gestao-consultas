import { Pessoa } from "./Pessoa.js";

export class Medico extends Pessoa {
  constructor(nome, idade, cpf, especialidade, consultas = []) {
    super(nome, idade, cpf);
    this.especialidade = especialidade;
    this.consultas = consultas;
  }

  agendarConsulta(paciente, date) {
    return new Promise((resolve) => {
      setTimeout(
        () =>
          resolve(
            `Consulta marcada com ${this.nome} para ${paciente.nome} em ${date}`
          ),
        1000
      );
    });
  }
}
