const artist = {
  name: "Van Gogh",
  portfolio: [
    {
      title: "portrait",
      url: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
    },

    {
      title: "sky",
      url: "https://images.pexels.com/photos/735174/pexels-photo-735174.jpeg",
    },
  ],
};

document.getElementById("artistName").innerText = artist.name;
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(artist.portfolio);    
        }, 1000);
    });
}


function addCard(portfolio) {

    let img = document.createElement('img');
    img.classList.add('img-fluid');
    img.src = portfolio.url;

    const template = document.getElementById('cardTemplate').content.cloneNode(true);
    template.querySelector('.card-title').innerText = portfolio.title;
    template.querySelector('.card-content').appendChild(img);
    document.querySelector('#cardListC').appendChild(template);
}


getData().then((portfolios) => portfolios.forEach((portfolio) => addCard(portfolio)));