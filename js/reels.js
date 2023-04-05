const rowContainer = document.querySelector('.rowContainer');

const videos = [
    {
        title: "TOM Demo Reel Branding",
        url: "https://www.youtube.com/embed/syneQNDuidk?rel=0&loop=1",
        img: "../assets/img/mini-reels/branding.png",
        alt: "Vid4"
    },
    {
        title: "Demo Reel Arquitectura de Software",
        url: "https://www.youtube.com/embed/8KuNIzqXN6A?rel=0&loop=1",
        img: "../assets/img/mini-reels/arq-software.png",
        alt: "Vid3"
    },
    {
        title: "Demo Reel Producción Audiovisual",
        url: "https://www.youtube.com/embed/BG3cVZzIZ08?rel=0&loop=1;",
        img: "../assets/img/mini-reels/prod-audiov.png",
        alt: "Vid2"
    },
    {
        title: "Demo Reel Tecnología e-Learning",
        url: "https://www.youtube.com/embed/lLCqQxy7ctM?rel=0&loop=1;",
        img: "../assets/img/mini-reels/e-learning.png",
        alt: "Vid1"
    }
]

function newVideo(){
    videos.forEach(video => {
        const {img, url, title, alt} = video;
        const column = document.createElement('div');
        column.classList.add('col-md-3');
        column.addEventListener('click', function(){newUrl(`${url}`)}, false);
        column.innerHTML = `
        <img class="thumb-video" src="${img}" alt="${alt}">
        <h2 class="title-video">${title}</h2>
        `;
        rowContainer.appendChild(column);
    })
}
newVideo();

function newUrl(url){
    window.scrollTo(0,0);
    document.getElementById('vidFull').src = url;
}