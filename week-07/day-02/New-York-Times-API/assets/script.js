window.onload = () => {
  const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=fcd23a83b3324cb4949f25b57e011623&q=civilwar";

  const printArticle = (article) => {
    const articleElement = document.createElement('article');
    const header = document.createElement('h1');
    const content = document.createElement('p');
    const date = document.createElement('time');

    header.innerText = article.headline.main;
    articleElement.appendChild(header);

    content.innerText = article.snippet;
    articleElement.appendChild(content);

    date.innerText = article.pub_date;
    articleElement.appendChild(date);

    return articleElement;
  };

  const parseResponse = (response) => {
    response.response.docs.forEach(element => {
      document.body.appendChild(printArticle(element));
    });
  }

  fetch(url)
    .then((resp) => (resp.json()))
    .then(parseResponse);
}