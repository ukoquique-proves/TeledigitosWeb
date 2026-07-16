(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/TeledigitosWeb/assets/teledigitos-DWjb1xFn.png`,t=class extends HTMLElement{connectedCallback(){this.innerHTML=`
      <header class="navbar">
        <div class="container nav-content">
          <div class="logo">
            <a href="index.html">
              <img src="${e}" alt="Teledígitos" class="nav-logo" />
            </a>
          </div>
          <button class="nav-toggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="main-nav">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav class="nav-links" id="main-nav">
            <a href="index.html">Inicio</a>
            <a href="servicios.html">Servicios</a>
            <a href="aspiracion.html">Aspiración</a>
            <a href="about.html">About</a>
          </nav>
        </div>
      </header>
    `;let t=this.querySelector(`.nav-toggle`),n=this.querySelector(`.nav-links`);t.addEventListener(`click`,()=>{let e=n.classList.toggle(`open`);t.classList.toggle(`open`,e),t.setAttribute(`aria-expanded`,e),t.setAttribute(`aria-label`,e?`Cerrar menú`:`Abrir menú`)}),n.querySelectorAll(`a`).forEach(e=>{e.addEventListener(`click`,()=>{n.classList.remove(`open`),t.classList.remove(`open`),t.setAttribute(`aria-expanded`,`false`),t.setAttribute(`aria-label`,`Abrir menú`)})})}};customElements.define(`app-header`,t);var n=`/TeledigitosWeb/assets/logo-Teledigitos-DLg7xNpc.png`,r=class extends HTMLElement{connectedCallback(){this.innerHTML=`
      <footer class="footer">
        <div class="container footer-content">
          <div class="footer-logo">
            <img src="${n}" alt="Teledígitos" class="footer-logo-img" />
          </div>
          <div class="footer-tagline">Tecnología al servicio de la comunidad. / Sistemas de Comunicación Operativa.</div>
          <div class="footer-copy">&copy; 2026 Teledígitos. Todos los derechos reservados.</div>
        </div>
      </footer>
    `}};customElements.define(`app-footer`,r),document.addEventListener(`DOMContentLoaded`,()=>{let e=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`visible`),t.unobserve(e.target))})},{root:null,rootMargin:`0px`,threshold:.15});document.querySelectorAll(`.fade-in`).forEach(t=>e.observe(t));let t=document.querySelector(`.navbar`);window.addEventListener(`scroll`,()=>{t.classList.toggle(`scrolled`,window.scrollY>50)})});