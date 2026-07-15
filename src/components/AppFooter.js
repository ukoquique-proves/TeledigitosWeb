import teledigitosFooterLogo from '../../images/logo-Teledigitos.png';

class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="container footer-content">
          <div class="footer-logo">
            <img src="${teledigitosFooterLogo}" alt="Teledígitos" class="footer-logo-img" />
          </div>
          <div class="footer-tagline">Tecnología al servicio de la comunidad. / Sistemas de Comunicación Operativa.</div>
          <div class="footer-copy">&copy; 2026 Teledígitos. Todos los derechos reservados.</div>
        </div>
      </footer>
    `;
  }
}

customElements.define('app-footer', AppFooter);
