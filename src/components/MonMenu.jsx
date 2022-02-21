import { IonContent, IonHeader, IonItem, IonList, IonMenu, IonMenuToggle, IonTitle, IonToolbar } from "@ionic/react"

const MonMenu = ({ children, handlePage, page }) => {

    const changePage = (e) => {
        e.preventDefault()
        const newPage = e.target.dataset.menu
        handlePage(newPage)
    }

    return (
        <IonMenu side="start" contentId='custom' className="my-custom-menu" menuToggle>
            <IonHeader>
                <IonToolbar color="success">
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent  >
                <IonList>
                    <IonMenuToggle >
                        <IonItem onClick={changePage} data-menu="home" >Home</IonItem>
                    </IonMenuToggle>

                    <IonMenuToggle>
                        <IonItem onClick={changePage} data-menu="about">A propos</IonItem>
                    </IonMenuToggle>
                </IonList>
                {children}
            </IonContent>

        </IonMenu>
    )
}

export default MonMenu