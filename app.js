//   ANIMAZIONE INIZIO

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".slider", { y: "-100%", duration: 1.3, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 0.7 }, "-=1");

//   PROGETTI

const arr = [
    {
        iconaProgetto: "images/icons/icon-project.png",
        background: "url(images/projects/bg-netflix.png)",
        link: "https://laurasaporoso.github.io/metflixhomepage.github.io/",
        titolo: "Netflix Clone",
        descrizione: "Clone di netflix solo in HTML CSS da zero (max size Laptop normale)",
        linguaggi: "HTML, CSS",
    },
    {
        iconaProgetto: "images/icons/icon-project.png",
        background: "url(images/projects/bg-facebook.png)",
        link: "https://laurasaporoso.github.io/Facebook-homepage-clone.github.io/",
        titolo: "Facebook Clone",
        descrizione: "Clone di Facebook solo in HTML CSS da zero",
        linguaggi: "HTML, CSS",
    },
    {
        iconaProgetto: "images/icons/icon-project.png",
        background: "url(images/projects/bg-loginsta.png)",
        link: "https://laurasaporoso.github.io/instagramclone.github.io/",
        titolo: "Instagram Login Clone",
        descrizione: "Clone di pagina login instagram",
        linguaggi: "HTML, CSS",
    },
    {
        iconaProgetto: "images/icons/icon-project.png",
        background: "url(images/projects/bg-duck.png)",
        link: "https://laurasaporoso.github.io/Dancing-Duck.github.io/",
        titolo: "Duck Javascript",
        descrizione: "Peperella che balla con musica",
        linguaggi: "HTML, CSS, JAVASCRIPT",
    },
    {
        iconaProgetto: "images/icons/icon-project.png",
        background: "url(images/projects/bg-lognet.png)",
        link: "https://laurasaporoso.github.io/metflixclone.github.io/",
        titolo: "Netflix Login Clone",
        descrizione: "Clone di pagina login Netflix",
        linguaggi: "HTML, CSS",
    },
    {
        iconaProgetto: "images/icons/icon-project.png",
        background: "url(images/projects/bg-logamaz.png)",
        link: "https://laurasaporoso.github.io/amazonclone.github.io/",
        titolo: "Amazon Login Clone",
        descrizione: "Clone di pagina login Amazon",
        linguaggi: "HTML, CSS",
    },
];

arr.forEach((data) => {
    createBox(data);
});

function createBox(data) {

    let link = document.createElement("a");
    link.href = data.link;
    link.target = '_blank';
    document.getElementById("grid-row-js").appendChild(link);

    let gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridItem.style.backgroundImage = data.background;
    link.appendChild(gridItem);

    let boxUp = document.createElement("div");
    boxUp.className = "box-up";
    gridItem.appendChild(boxUp);

    let icon = document.createElement("img");
    icon.src = data.iconaProgetto;
    icon.className = "icon-project";
    boxUp.appendChild(icon);

    let titolo = document.createElement("h3");
    titolo.className = "h3-title-js";
    titolo.textContent = data.titolo;
    boxUp.appendChild(titolo);

    let paragrafoUno = document.createElement("p");
    paragrafoUno.className = "paragraph-1-js";
    paragrafoUno.textContent = data.descrizione;
    boxUp.appendChild(paragrafoUno);

    let boxDown = document.createElement("div");
    boxDown.className = "box-down";
    gridItem.appendChild(boxDown);

    let paragrafoDue = document.createElement("p");
    paragrafoDue.className = "paragraph-2-js";
    paragrafoDue.textContent = data.linguaggi;
    boxDown.appendChild(paragrafoDue);

}
