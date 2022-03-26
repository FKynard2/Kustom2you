class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header class="main__header">
        <h1 id="main-title" class="main__title">SEND US YOU IMAGE, IDEA OR THEME.</h1>
        <p class="second__title">we bring them to life</p>
      </header>
      <div class="sec-a">
      <nav class="navbar">
          <div class="navbar__container">
              <a href="/head/index.html" class="navi-btn" >
                  <img src="photos/logo.png" alt="Kustom logo" class="logo">
              </a>
              <ul class="navbar__menu">
                  <li class="topline">
                      <a href="/head/home.html" class="textline"> HOME</a>
                  </li>
                  <li class="topline">
                      <a href="/head/epoxy.html" class="textline"> EPOXY CREATIONS</a>
                  </li>
                  <li class="topline">
                      <a href="/head/sumli.html" class="textline"> SUBLIMATIONS</a>
                  </li>
                  <li class="topline">
                      <a href="/head/cloths.html" class="textline"> KUSTOM CLOTHING</a>
                  </li>
                  <li class="topline">
                      <a href="/head/art.html" class="textline"> ART AND BANNERS</a>
                  </li>
              </ul>
              <ul class="side_menu">
               
                <li class="side_btn">
                    <a href="/" class="textline"> &#128269; </a>
                </li>
                <li class="side_btn cart">
                <a href="/head/cart.html" class="textline ">&#x1F6D2<span>0</span></a>
                </li>
              </ul>
          </div>
      </nav>
  </div>
        `;
  }
}

customElements.define('my-header', MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
      <a href="/head/index.html" >
          <img src="photos/logo.png" alt="Kustom logo">
      </a>

      <div class="bottom-footer">
          <h2 class="bf-head">Kustomer Kare</h2>
          <ul class="bf-kus">
              <li><a href="/head/FAQ.html">FAQ's</a></li>
              <li><a href="/head/about.html">ABOUT US</a></li>
              <li><a href="/head/contactus.html">CONTACT US</a></li>
              <li><a href="/head/track.html">TRACK ORDER</a></li>
              
          </ul>
      </div>

      <div class="bottom-footer">
          <h2 class="bf-head">OUR POLICIES</h2>
          <ul class="bf-kus">
              <li><a href="/head/privacy.html">Privacy Policy</a></li>
              <li><a href="/head/refund.html">Refund Policy</a></li>
              <li><a href="/head/shipping.html">Shipping Policy</a></li>
              <li><a href="/head/terms.html">Terms of Service</a></li>
          </ul>
      </div>

      <div class="bottom-footer">
          <h2 class="bf-head">SIGN UP AND SAVE</h2>
          <p>Subscribe to get special offers, free fivaways, and <br> once-in-a-lifetime deals.</p>
          <input type="text" placeholder="Enter your email">
          <div class="bf-socials">
              <a href="https://www.instagram.com/kustom2you/" target="_blank">Insta</a>
              <a href="https://www.facebook.com/Kustom2YouLLC/" target="_blank">Facebook</a>
              <a href="/">TikTok</a>
          </div>
      </div>

    </footer>
          `;
  }
}

customElements.define('my-footer', MyFooter);
