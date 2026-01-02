const artists = [
  {
    name: "Vincent van Gogh",
    portfolio: [
      {
        title: "Starry Night",
        url: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
      },
      {
        title: "Sunflowers",
        url: "https://images.pexels.com/photos/735174/pexels-photo-735174.jpeg",
      },
    ],
  },

  {
    name: "Claude Monet",
    portfolio: [
      {
        title: "Water Lilies",
        url: "https://images.pexels.com/photos/15286/pexels-photo.jpg",
      },
      {
        title: "Impression Sunrise",
        url: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
      },
    ],
  },

  {
    name: "Pablo Picasso",
    portfolio: [
      {
        title: "Cubism Portrait",
        url: "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg",
      },
      {
        title: "Abstract Form",
        url: "https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg",
      },
    ],
  },

  {
    name: "Frida Kahlo",
    portfolio: [
      {
        title: "Self Portrait",
        url: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      },
      {
        title: "Nature & Identity",
        url: "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg",
      },
    ],
  },
];



function getData(portfolio) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(portfolio);    
        }, 1000);
    });
}


function addCard(portfolio, cardListId) {

    let img = document.createElement('img');
    img.classList.add('img-fluid');
    img.src = portfolio.url;

    const template = document.getElementById('cardTemplate').content.cloneNode(true);
    template.querySelector('.card-title').innerText = portfolio.title;
    template.querySelector('.card-content').appendChild(img);

    document.querySelector(`#${cardListId}`).appendChild(template);
}
// document.getElementById("artistList").innerHTML = "";

artists.forEach((artist, index) => {
  const cardListId = `cardList${index+1}`

  const artistList = document.getElementById('artistList');
  
  const h2 = document.createElement('h2');
  h2.innerText = artist.name;
  h2.classList.add("text-center", "mb-4");

  const div = document.createElement('div');
  div.id = cardListId;
  div.classList.add("row", "g-3");

  artistList.appendChild(h2);
  artistList.appendChild(div);

  getData(artist.portfolio)
  .then((portfolios) => portfolios.forEach((portfolio) => addCard(portfolio, cardListId)));
});
