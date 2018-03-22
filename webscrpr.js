const fetch = require("node-fetch");
const cheerio = require("cheerio");

function searchAir(url) {
    return fetch("https://www.airbnb.com/rooms/" + url)
      .then(response => response.text())
      .then(body => {
        const $ = cheerio.load(body);
        const $title = $("title").text();
        const $image = $("meta")[12].attribs.content;
        const lodgeObject = {
          title: $title,
          image: $image
        };
        return lodgeObject;
      });
  }

module.exports = {
  searchAir
}
