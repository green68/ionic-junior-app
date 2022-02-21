import { IonContent, IonFooter, IonToolbar, IonTitle } from "@ionic/react"
import { calendar, personCircle, map, informationCircle } from 'ionicons/icons'

const MonFooter = () => {

    console.log("affichage footer");

    return (
        // <IonFooter className="ion-no-border">
        <IonFooter >
            <IonToolbar>
                <IonTitle>Footer </IonTitle>
            </IonToolbar>
        </IonFooter>

    )
}

export default MonFooter