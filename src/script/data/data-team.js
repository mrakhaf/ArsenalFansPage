class DataTeam {

  static getTeam() {
    return fetch(
        'https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=133604'
      )
      .then(response => {
        return response.json()
      })
      .then(responseJson => {
        if (responseJson.teams) {
          return Promise.resolve(responseJson.teams)
        } else {
          return Promise.reject('Not Found')
        }
      })
      .catch(error => {
        console.log(error)
      })
  }


}


export default DataTeam