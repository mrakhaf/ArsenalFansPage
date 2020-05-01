import DataTeam from "../data/data-team.js";

class About extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
      <style>
        about-team {
          text-align: center;
          width: 100%;
        }
        
        .about-page {
          background-color: aqua;
          padding: 40px 0;
          margin-top: 40px;
          background-color: #2f3c4f;
          color: lightgrey;
        }
        
        .about-content {
          display: flex;
          justify-content: center;
        }
        
        .about-value {
          width: 40%;
          /* background-color: brown; */
          align-self: center;
          margin-right: 90px;
        }
        
        .about-image {
          align-self: center;
        }
        
        @media screen and (max-width: 769px) {
          .about-content {
            flex-direction: column-reverse;
          }
        
          .about-value {
            margin: 0;
            margin-top: 20px;
            width: 80%;
          }
        }
      </style>
    `

    const results = DataTeam.getTeam();
    results.then(data => {
      data.map(result => {
        const description = result.strDescriptionEN.split(".")
        this.innerHTML += `

          <div class="about-page" id="about">
            <div class="about-content">
              <div class="about-value">
                <p>${description[0]}</p>
                <p>${description[1]}</p>
                <p>${description[2]}</p>
              </div>
              <div class="about-image">
              <img src="${result.strTeamBadge}" alt="" width="200px">
              </div>
            </div>
          </div>
        `
      })
    })


  }
}

customElements.define('about-team', About)