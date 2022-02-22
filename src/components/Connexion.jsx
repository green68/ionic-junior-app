import { IonButton, IonCardContent, IonContent, IonModal, IonTitle } from "@ionic/react"
import { useState } from "react"

const Connexion = ({ isShow, handleConnexion }) => {

    return (
        <IonModal 
            isOpen={isShow} 
            cssClass='modal-connexion'
            showBackdrop={true}
            swipeToClose={false}
        >
            <div className="modal">
                <p>This is modal content</p>
                <IonButton onClick={() => handleConnexion(false)}>Close Modal</IonButton>

            </div>
        </IonModal>
    )
}

export default Connexion