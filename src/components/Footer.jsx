import { IonFooter, IonToolbar, IonTitle } from "@ionic/react"

const Footer = () => {

    // console.log("affichage footer");

    return (
        <IonFooter >
            <IonToolbar color="dark" >
                <IonTitle size="small" class="ion-text-center">© 2021 DEV-JUNIOR . All rights reserved</IonTitle>
            </IonToolbar>
        </IonFooter>

    )
}

export default Footer