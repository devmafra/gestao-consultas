export class DomHandler {
  static atualizarListaPaciente(pacientes) {
    const selectPaciente = document.getElementById("selectPaciente");
    selectPaciente.innerHTML =
      '<option value="">-- Selecione um paciente --</option>';

    pacientes.forEach((paciente) => {
      const option = document.createElement("option");
      option.value = paciente.nome;
      option.textContent = paciente.nome;
      selectPaciente.appendChild(option);
    });
  }
  static atualizarListaMedico(medicos) {
    const selectMedico = document.getElementById("selectMedico");
    selectMedico.innerHTML =
      '<option value="">-- Selecione um médico --</option>';

    medicos.forEach((medico) => {
      const option = document.createElement("option");
      option.value = medico.nome;
      option.textContent = `${medico.nome} - ${medico.especialidade}`;
      selectMedico.appendChild(option);
    });
  }
  static exibirConsultas(mensagem) {
    const listaConsultas = document.getElementById("listaConsultas");

    const consultas = Array.from(listaConsultas.getElementsByTagName("li"));
    const consultaExiste = consultas.some((li) =>
      li.textContent.includes(mensagem)
    );

    if (consultaExiste) {
      alert("Essa consulta já foi agendada!");
      return;
    }

    const li = document.createElement("li");
    li.classList.add("consulta-item");
    li.innerHTML = "<div>" + mensagem + "</div>";

    const btnCancelar = document.createElement("button");
    btnCancelar.textContent = "Cancelar";
    btnCancelar.classList.add("btn-cancelar");

    btnCancelar.addEventListener("click", () => {
      li.remove();
      DomHandler.storeConsultas();
    });

    li.appendChild(btnCancelar);
    listaConsultas.appendChild(li);
  }
  static storeConsultas() {
    const listaConsultas = document.getElementById("listaConsultas");
    const consultas = listaConsultas.querySelectorAll("li div");

    const dataArray = [];

    consultas.forEach((row) => {
      const element = {
        mensagem: row.textContent.trim(),
      };
      dataArray.push(element);
    });

    const jsonData = JSON.stringify(dataArray, null, 2);

    localStorage.setItem("listaConsultas", jsonData);
  }
  static loadConsultas() {
    const jsonData = localStorage.getItem("listaConsultas");
    const consultas = JSON.parse(jsonData);

    if (Array.isArray(consultas) && consultas.length > 0) {
      consultas.forEach((row) => {
        this.exibirConsultas(row.mensagem);
      });
    }
  }
}
