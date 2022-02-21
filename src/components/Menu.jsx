import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonTitle, IonToolbar } from "@ionic/react"
import { pages } from "./Routeur"
import { homeSharp, informationCircleSharp } from "ionicons/icons"

const Menu = ({ children, handlePage, page }) => {

    const colorMenu = "medium"

    return (
        <IonMenu side="start" contentId='custom' className="my-custom-menu" menuToggle>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent  >
                <IonList>
                    <IonMenuToggle>
                        <IonItem button
                        onClick={() => handlePage(pages.home.name)}
                        color={page === pages.home.name ? colorMenu : ""}
                        >
                            <IonIcon icon={homeSharp} slot="start"/>
                            <IonLabel> Home</IonLabel>
                            {/* Home */}
                        </IonItem>
                    </IonMenuToggle>

                    <IonMenuToggle>
                        <IonItem button
                            onClick={() => handlePage(pages.about.name)}
                            color={page === pages.about.name ? colorMenu : ""}
                        >
                        <IonIcon icon={informationCircleSharp} slot="start" />
                        <IonLabel>A propos</IonLabel>
                            
                        </IonItem>
                    </IonMenuToggle>
                </IonList>
                {children}
            </IonContent>

        </IonMenu>
    )
}

export default Menu