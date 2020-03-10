class AppRouter extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
          Notes
          `;
    }
  }
  
  customElements.define("app-router", AppRouter);
  