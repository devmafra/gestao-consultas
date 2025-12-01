import { Paciente } from "./Paciente.js";
import { Medico } from "./Medico.js";
import { DomHandler } from "./DomHandler.js";

let medicos = [];
let pacientes = [];

async function carregarDados() {
  try {
    const [responseMedico, responsePaciente] = await Promise.all([
      fetch("./data/medicos.json"),
      fetch("./data/pacientes.json"),
    ]);

    if (!responseMedico.ok || !responsePaciente.ok) {
      throw new Error("Erro ao buscar os dados");
    }

    const medicosData = await responseMedico.json();
    const pacientesData = await responsePaciente.json();

    medicos = medicosData.map(
      ({ nome, idade, cpf, especialidade }) =>
        new Medico(nome, idade, cpf, especialidade)
    );

    pacientes = pacientesData.map(
      ({ nome, idade, cpf }) => new Paciente(nome, idade, cpf)
    );

    DomHandler.atualizarListaPaciente(pacientes);
    DomHandler.atualizarListaMedico(medicos);
  } catch (error) {
    console.error("Ocorreu um erro ao carregar os dados:", error);
  }
}
// ----------------------------------------------------------------------
function formatDate(date) {
  const [ano, mes, dia] = date.split("-");
  return `${dia}/${mes}/${ano.slice(-2)}`;
}

function resetInput() {
  const inputList = document.querySelectorAll("input, select");

  inputList.forEach((input) => (input.value = ""));
}

// ----------------------------------------------------------------------
function agendarConsulta() {
  const pacienteSelected = document.getElementById("selectPaciente").value;
  const medicoSelected = document.getElementById("selectMedico").value;
  const dateSelected = document.getElementById("inputDate").value;

  if (!pacienteSelected || !medicoSelected || !dateSelected)
    alert("Por favor, selecione um paciente, um médico e uma data!");

  const paciente = pacientes.find((p) => p.nome === pacienteSelected);
  const medico = medicos.find((m) => m.nome === medicoSelected);
  const data = formatDate(dateSelected);

  if (paciente && medico) {
    medico
      .agendarConsulta(paciente, data)
      .then((mensagem) => DomHandler.exibirConsultas(mensagem))
      .then(() => DomHandler.storeConsultas());
  }
  resetInput();
}
// ----------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  DomHandler.loadConsultas();
  carregarDados();

  document
    .getElementById("btnAgendar")
    .addEventListener("click", () => agendarConsulta());
});
