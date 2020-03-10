class HomePage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <vaadin-app-layout>
  <vaadin-drawer-toggle slot="navbar touch-optimized"></vaadin-drawer-toggle>
  <h3 slot="navbar touch-optimized">Notary</h3>
  <vaadin-tabs orientation="vertical" slot="drawer">
    <vaadin-tab>
      <a>
        Notes
      </a>
    </vaadin-tab>
    <vaadin-tab>
      <a>
        Tasks
      </a>
    </vaadin-tab>
  </vaadin-tabs>
  <app-router></app-router>
</vaadin-app-layout>
        `;
  }
}

customElements.define("app-home", HomePage);
