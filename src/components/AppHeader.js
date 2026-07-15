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
          <button class="nav-toggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="main-nav">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav class="nav-links" id="main-nav">
            <a href="index.html">Inicio</a>
            <a href="index.html#manifesto">Manifiesto</a>
            <a href="index.html#services">Servicios</a>
            <a href="aspiracion.html">Aspiración</a>
            <a href="about.html">About</a>
          </nav>
        </div>
      </header>
    `;

    const toggle = this.querySelector('.nav-toggle');
    const nav = this.querySelector('.nav-links');

    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
    });

    // Close menu when a link is clicked
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

customElements.define('app-header', AppHeader);

