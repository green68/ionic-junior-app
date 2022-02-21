import { IonButton, IonButtons, IonHeader, IonIcon, IonLabel, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react"
import { personCircle } from "ionicons/icons"

const Header = ({handleConnexion}) => {

    return (
        <IonHeader >
            <IonToolbar color='dark'>
                <IonButtons slot="start">
                <IonButton>
                    <IonMenuButton></IonMenuButton>

                </IonButton>
                </IonButtons>
                <IonButtons slot='primary'>
                    <IonButton id='btn-connect' color='primary' fill='solid' size='small' onClick={handleConnexion} >
                        <IonLabel>Connexion</IonLabel>
                        {/* <IonIcon icon={personCircle} /> */}
                    </IonButton>
                </IonButtons>
                <IonTitle > &lt;Dev.Junior&gt;</IonTitle>
            </IonToolbar>
        </IonHeader>
    )

}

export default Header