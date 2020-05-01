import DataTeam from '../data/data-team.js'

class Footer extends HTMLElement {
  connectedCallback() {
    this.render()
  }
  render() {
    this.innerHTML = `
      <style>
        .footer {
          width: 100%;
          display: flex;
          justify-content: center;
          background-color: black;
        }
        
        .footer a {
          margin: 10px 30px;
          text-decoration: none;
          color: white;
          font-size: 15px;
        }

        @media screen and (max-width: 543px) {
          
          .footer a {
            margin: 10px 1%;
            font-size: 12px;
          }
        }
      </style>
    `
    const results = DataTeam.getTeam()
    results.then(data => {
      data.map(result => {
        this.innerHTML += `
        <div class="footer">
          <a href="${result.strWebsite}">Official-Website</a>
          <a href="${result.strFacebook}">Facebook</a>
          <a href="${result.strTwitter}">Twitter</a>
          <a href="${result.strInstagram}">Instagram</a>
        </div>
        `
      })
    })
  }
}
customElements.define('footer-component', Footer)