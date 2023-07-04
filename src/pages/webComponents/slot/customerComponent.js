const templateStr = `
  <div id="slot-component">
      <style>
        .slot-header {
          color: red;
        }
      </style>
      <div class="slot-header">web components 之slot实现</div>
      <slot name="slot-1">这是第一个slot</slot>
      <slot name="slot-2">这是第二个slot</slot>
    </div>
`;

class SlotComponent extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("div");
    template.innerHTML = templateStr;

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template);
  }
}

customElements.define("slot-component", SlotComponent);
