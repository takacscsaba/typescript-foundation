window.onload = () => {

  const parseResponse = (response) => {

    response.response.docs.forEach(element => {
      document.body.appendChild(printArticle(element));
    });
  }

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

  const url = "/api/newyorktimes/civilwar";

  fetch(url)
    .then((resp) => (resp.json()))
    .then(parseResponse);
}