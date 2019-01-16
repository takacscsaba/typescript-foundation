const host = 'http://localhost:3000/api';
const http = new XMLHttpRequest();
http.responseType = 'json';
http.open('GET', `${host}/bookstore`, true);
  
http.onload = () => {
  const context = http.response;
  http.open('GET', `${context['url']}`, true); 
  console.log(context[0]);

  let myTbody = document.querySelector('tbody');
  
  Object.keys(context).forEach(function(key) {
    let value = context[key];
    let myTr = document.createElement('tr');

    let myTdName = document.createElement('td');
    myTdName.innerText = value.book_name;
    myTr.appendChild(myTdName);

    let myTdAuth = document.createElement('td');
    myTdAuth.innerText = value.aut_name;
    myTr.appendChild(myTdAuth);

    let myTdCate = document.createElement('td');
    myTdCate.innerText = value.cate_descrip;
    myTr.appendChild(myTdCate);

    let myTdPub = document.createElement('td');
    myTdPub.innerText = value.pub_name;
    myTr.appendChild(myTdPub);

    let myTdPrice = document.createElement('td');
    myTdPrice.innerText = value.book_price;
    myTr.appendChild(myTdPrice);

    myTbody.appendChild(myTr);
  });
}

http.send(); 