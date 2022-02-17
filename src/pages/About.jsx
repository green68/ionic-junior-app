import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

const About = () => {

    console.log("about");

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton href='/home'>Home</IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <p>
                    About
                </p>
            </IonContent>
        </IonPage>
    );
};

export default About