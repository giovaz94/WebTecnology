const datiArticoli = [{
    "Autore": "Gino Pino",
    "Data": "2 Ottobre 2019",
    "Titolo": "Intro alle Tecnologie Web Client Side",
    "Immagine": "./img/html5-js-css3.png",
    "Testo": '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
},
{
    "Autore": "Cippa Lippa",
    "Data": "2 Ottobre 2019",
    "Titolo": "Intro alle Tecnologie Web Server Side",
    "Immagine": "./img/php.png",
    "Testo": '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
}]


class Article {
    constructor(data) {
        this.author = data.Autore;
        this.date = data.Data;
        this.title = data.Titolo;
        this.image = data.Immagine;
        this.text = data.Testo;
    }

    toHtml() {
        return `<article>
                <header>
                    <div>
                        <img src="${this.image}" alt="" />
                    </div>
                    <h2>${this.title}</h2>
                    <p>${this.date} - ${this.author}</p>
                </header>
                <section>
                    <p>${this.text}</p>
                </section>
                <footer>
                    <a href="#">Leggi tutto</a>
                </footer>
            </article>`;
    }
}

const container = document.querySelector("main");
let result = "";
for (let data of datiArticoli) {
    console.log(data);
    let art = new Article(data);
    result = result + art.toHtml();
}

container.innerHTML = result;
