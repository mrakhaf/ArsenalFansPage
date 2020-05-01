import DataMatch from '../data/data-match.js'
const moment = require('moment')

class Schedule extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <style>
    .main-schedules {
      width: 80%;
      margin: auto;
      margin-top: 20px;
      text-align: center;
    }

    .match-schedules {
      margin-top: 20px;
      border-radius: 15px;
      padding: 10px;
      margin: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }

    #tanggal {
      width: 100%;
      /* background-color: hotpink; */
    }

    .match {
      /* background-color: khaki; */
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .box {
      /* background-color: lawngreen; */
      width: 30%;
    }

    .box p {
      position: relative;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      transform: translateY(-50%);
    }
    </style>
    <div class="main-schedules">
        <h1 id="schedule">SCHEDULES</h1>
    </div>    
        `

    const result = DataMatch.getMatch()
    result.then(data => {
      data.forEach(match => {
        const dateMatch = moment(match.dateEvent).format('dddd, MMMM D, YYYY')
        const timeMatch = match.strTime.substring(0, 5)

        this.getElementsByClassName('main-schedules')[0].innerHTML += `
        
          <div class="match-schedules">
          <div id="tanggal">${dateMatch}</div>
          <div class="match">
            <div class="team box">
              
              <div id="home-team">${match.strHomeTeam}</div>
            </div>
            <div class="box">
              <p>VS</p>
            </div>
            <div class="team box">
              
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

customElements.define('main-schedules', Schedule)