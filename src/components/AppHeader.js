import teledigitosLogo from '../../images/teledigitos.png';

class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="navbar">
        <div class="container nav-content">
          <div class="logo">
            <a href="index.html">
              <img src="${teledigitosLogo}" alt="Teledígitos" style="height: 40px; width: auto;" />
            </a>
          </div>
          <nav class="nav-links">
            <a href="index.html">Inicio</a>
            <a href="index.html#manifesto">Manifiesto</a>
            <a href="index.html#services">Servicios</a>
            <a href="aspiracion.html">Aspiración</a>
            <a href="about.html">About</a>
          </nav>
        </div>
      </header>
    `;
  }
}

customElements.define('app-header', AppHeader);
