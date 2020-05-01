class DataMatch {
  static getMatch() {
    return fetch(
        'https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=133604'
      )
      .then(response => {
        return response.json()
      })
      .then(responseJson => {
        if (responseJson.events) {
          return Promise.resolve(responseJson.events)
        } else {
          return Promise.reject('Not Found')
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  static getHistory() {
    return fetch(
        'https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=133604'
      )
      .then(response => {
        return response.json()
      })
      .then(responseJson => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results)
        } else {
          return Promise.reject('Not Found')
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}


export default DataMatch