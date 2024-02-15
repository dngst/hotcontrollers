import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="form"
export default class extends Controller {
  connect() {
    this.element.addEventListener("submit", clear);
  }

  clear() {
    this.element.reset();
  }
}

// data: { controller: :form, action: "turbo:submit-end->form#clear" }
