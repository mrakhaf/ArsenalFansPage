import DataMatch from '../data/data-match.js'
const moment = require('moment')

class History extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <style>
    .main-history {
      width: 80%;
      margin: auto;
      margin-top: 20px;
      text-align: center;
      margin-top: 30px;
    }

    .match-history {
      margin-top: 20px;
      border-radius: 15px;
      padding: 10px;
      margin: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }

    
    }
    </style>
    <div class="main-history">
        <h1 id="history">MATCH-HISTORY</h1>
    </div>    
        `

    const result = DataMatch.getHistory()
    result.then(data => {
      data.forEach(match => {
        const dateMatch = moment(match.dateEvent).format('dddd, MMMM D, YYYY')
        const timeMatch = match.strTime.substring(0, 5)

        this.getElementsByClassName('main-history')[0].innerHTML += `
        <div class="match-history">
        <div id="tanggal">${dateMatch}</div>
        <div class="match">
          <div class="team box">
            <div id="home-score"><h1>${match.intHomeScore}</h1></div>
            <div id="home-team">${match.strHomeTeam}</div>
          </div>
          <div class="box">
            <p>VS</p>
          </div>
          <div class="team box">
            <div id="away-score"><h1>${match.intAwayScore}</h1></div>
            <div id="away-team">${match.strAwayTeam}</div>
          </div>
        </div>
        <div id="jam">${timeMatch}</div>
      </div>
        `
      })
    })
  }
}

customElements.define('history-schedules', History)