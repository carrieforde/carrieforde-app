class Utilities {
  getData(endpoint = 'posts', cb) {
    fetch(`http://fordeapp.test/wp-json/wp/v2/${endpoint}`)
      .then(response => response.json())
      .then(myJson => cb(myJson));
  }
}

export default Utilities;
