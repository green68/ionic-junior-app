import { IonButton, IonButtons, IonHeader, IonIcon, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react"
import { personCircle } from "ionicons/icons"

const MonHeader = ({handleConnexion}) => {

    console.log("affichage header");

    return (
        <IonHeader >
            <IonToolbar color='dark'>
                <IonTitle > &lt;Dev.Junior&gt;</IonTitle>
                <IonButtons slot='primary'>
                    <IonButton id='btn-connect' color='primary' fill='solid' size='small' onClick={handleConnexion} >
                        <IonIcon icon={personCircle} />
                    </IonButton>
                    <IonMenuButton></IonMenuButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    )

}

export default MonHeader