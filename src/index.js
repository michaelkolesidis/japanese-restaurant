import "./scss/style.scss";
import {
    Navbar
} from "./components/navbar";
import {
    main
} from "./components/mainPage";
import {
    Ramen
} from "./components/ramen";
import {
    Bento
} from "./components/bento";
import {
    Chosoku
} from "./components/chosoku";
import {
    Team
} from "./components/team";
import {
    About
} from "./components/about";


const container = document.getElementById("content");
const header = document.createElement("header");
const view = document.createElement("div");


container.append(header);
container.append(view);

header.innerHTML = Navbar();
view.innerHTML = main();


container.addEventListener("click", (e) => {
    if (e.target.classList.contains("Chosoku")) {
        view.innerHTML = Chosoku();
    }
})

container.addEventListener("click", (e) => {
    if (e.target.classList.contains("Bento")) {
        view.innerHTML = Bento();
    }
})

container.addEventListener("click", (e) => {
    if (e.target.classList.contains("Ramen")) {
        view.innerHTML = Ramen();
    }
})

container.addEventListener("click", (e) => {
    if (e.target.classList.contains("Team")) {
        view.innerHTML = Team();
    }
})

container.addEventListener("click", (e) => {
    if (e.target.classList.contains("About")) {
        view.innerHTML = About();
    }
})

container.addEventListener("click", (e) => {
    if (e.target.classList.contains("Logo")) {
        view.innerHTML = main();
    }
})