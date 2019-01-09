window.onload = () => {
  const host = 'http://localhost:3000/api';
  const http = new XMLHttpRequest();
  http.open('GET', `${host}/giphy`, true);

  http.onload = () => {
    if (http.status === 200) {
      const context = JSON.parse(http.response);
      http.open('GET', `${context['url']}`, true);
      
      http.onload = () => {
        const readAPI = JSON.parse(http.response);
        for (let index = 0; index < 8; index++) {
          const newElement = document.createElement('img');
          newElement.setAttribute('src', readAPI.data[index].images.downsized_still.url);

          const getBody = document.querySelector('.img-container');
          getBody.appendChild(newElement);

          const moveIt = () => {
            document.images[index].setAttribute('src', readAPI.data[index].images.downsized.url);
          };

          const stillPic = () => {
            document.images[index].setAttribute('src', readAPI.data[index].images.downsized_still.url);
          }
          
          document.images[index].addEventListener('mouseover', moveIt, false);
          document.images[index].addEventListener('mouseleave', stillPic, false);
        }
      }
      http.send();
    }
};

  http.send(); 
}