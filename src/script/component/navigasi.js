import logo from "../../img/Arsenal_FC.png"

class Navigasi extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {

    this.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
    nav-bar {
      background-color: whitesmoke;
      position: fixed;
      z-index: 2;
      top: 0;
      width: 100%;
      padding-top: 15px;
      padding-bottom: 15px;
      overflow: auto;
      display: inline-flex;
      font-size: 15px;
    }

    nav-bar li {
      display: inline-block;
      list-style-type: none;
      margin-left: 20px;
    }

    nav-bar li a,
    #username {
      text-decoration: none;
      letter-spacing: 2px;
      font-weight: bold;
    }

    nav-bar ul {
      width: 40%;
      margin-top: 9px;
      text-align: right;
      margin: auto;
    }


    #logo {
      width: 40%;
      margin-left: 70px;
    }

    #logo a {
      font-weight: bold;
      text-decoration: none;
      letter-spacing: 2px;
      font-size: 25px;
    }

    .icon {
      display: none;
    }

    @media screen and (max-width: 999px) {
      nav-bar {
        padding-bottom: 0;
      }

      nav-bar,
      nav-bar li {
        display: block;
      }

      nav-bar ul {
        width: 100%;
        display: none;
      }

      nav-bar li {
        margin: 0;
        text-align: center;
        padding: 20px;
        background-color: #2f3c4f;
      }

      nav-bar li a {
        color: white;
      }

      nav-bar.active ul {
        display: block;
      }

      #logo {
        margin: 0;
        width: 100%;
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
        padding-right: 40px;
        padding-left: 40px;
      }

      .icon {
        display: inline;
        padding: 5px
      }

      .icon:hover {
        color: white;
        transition-duration: 0.3s;
        transition-delay: 0.1s;
        transition-timing-function: ease-in-out;
      }
    }
    </style>

    <div id="logo">    
      <a href="#"><img src="${logo}" alt="" width="35px"></a>
      <h1 href="#" class="icon" ><i class="fa fa-bars"></i></h1>
    </div>

    <ul>
      <li><a href="#">HOME</a></li>
      <li><a href="#schedule">SCHEDULES</a></li>
      <li><a href="#history">HISTORY</a></li>
      <li><a href="#about">ABOUT</a></li>
    </ul>
    `



  }
}
customElements.define("nav-bar", Navigasi);