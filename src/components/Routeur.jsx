import Home from "../pages/Home"
import About from "../pages/About"

export const pages = {
    home: {
        name: "home",
        title: "Home"
    },
    about: {
        name: "about",
        title: "A propos"
    },
}

const Routeur = ({ handlePage, page }) => {

    if (page === pages.home.name) {
        return <Home />
    }
    if (page === pages.about.name) {
        return <About handlePage={handlePage} />
    }

}

export default Routeur