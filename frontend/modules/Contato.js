import validator from "validator";

export default class Contato {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const el = e.target;
    const nomeInput = el.querySelector("input[name='nome']");
    const sobrenomeInput = el.querySelector("input[name='sobrenome']");
    const emailInput = el.querySelector("input[name='email']");
    const telInput = el.querySelector("input[name='tel']");
    let error = false;

    for (let errorText of document.querySelectorAll(".error-text")) {
      errorText.remove();
    }
    if (!nomeInput.value) {
      this.createError("Nome precisa ser digitado!");
      error = true;
    }
    if (!emailInput.value && !telInput.value) {
      this.createError("Telefone ou e-mail devem ser enviados!");
      error = true;
    }
    if (emailInput.value && !validator.isEmail(emailInput.value)) {
      this.createError("E-mail inválido");
      error = true;
    }

    if (!error) el.submit();
  }

  createError(msg) {
    const local = document.querySelector(".warning-js");
    const div = document.createElement("div");
    if (!local.classList.contains("alert-danger"))
      local.classList.add("alert-danger", "p-3", "rounded");
    div.innerHTML = msg;
    div.classList.add("error-text");
    local.appendChild(div);
  }
}
