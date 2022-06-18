const {RESTDataSource} = require('apollo-datasource-rest');

class TRACKAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
  }

  getTracksFromHome () {
    return this.get('tracks');
  }

  getAuthors(authorId) {
    return this.get(`authors/${authorId}`);
  }

}

module.exports = TRACKAPI;
