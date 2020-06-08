const axios = require("axios");

// Use the `get` method of axios with the URL of the ButterCMS documentation page as an argument
export default function getArticleList(speciesId) {
  axios
    .get(
      `http://api.serpstack.com/search?access_key=8869dd9d5c93b9c45044f7776c869198&sort=date&query=illegal+trade+wildlife+${speciesId}`
    )
    .then((response) => {
      // `response` is an HTTP response object, whose body is contained in it's `data` attribute
      // This will print the HTML source code to the console
      console.log(response.data.organic_results);
      return response.data.organic_results;
    })
    .catch((error) => {
      alert(`${error}`);
    });
}
