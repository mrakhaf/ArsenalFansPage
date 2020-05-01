import backgroundBanner from "../../img/backgroundBanner2.jpg"
class Banner extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    .banner {
      width: 100%;
      height: 669px;
      background-color: #c92200;
      background: url('${backgroundBanner}');
      background-repeat: no-repeat;
      background-size: cover;
      filter: brightness(80%);
      
    }
    
    .title {
      text-align: center;
      font-weight: bold;
      letter-spacing: 10px;
      position: relative;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      transform: translateY(-50%);
      color: white;
    }
    
    .title h1 {
      font-size: 35px;
    }
    
    .title h1,
    .title h2,
    .title a {
      margin-bottom: 80px;

      color: white;
    }
    
    .title a {
      letter-spacing: 5px;
      border: 3px solid white;
      text-decoration: none;
      padding: 10px;
      padding-left: 16px;
      border-radius: 50px;
    }
    
    .title a:hover {
      border: 4px solid black;
      color: black;
    </style>
    
    <div class="banner">
      <div class="title">
        <h1>ARSENAL</h1>
        <h2>Football Fans Club Page</h2>
        <a href="#schedule">LOOK</a>
      </div>
    </div>
    
    `
  }
}

customElements.define("banner-wallpaper", Banner)