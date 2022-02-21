import Home from "../pages/Home"
import About from "../pages/About"

const MonRouteur = ({handlePage, page }) => {

    const changePage = (e) => {
        e.preventDefault()
        const newPage = e.target.dataset.menu
        handlePage(newPage)
    }

    if (page === "home") {
        return <Home />
    }
    if (page === "about") {
        return <About changePage={changePage}/>
    }

}

export default MonRouteur