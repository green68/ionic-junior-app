import { IonContent, IonButton } from '@ionic/react';

const About = ({changePage}) => {

    return (
        <IonContent>
            <IonButton onClick={changePage} data-menu="home">Home</IonButton>
            
            <IonContent className="ion-padding">
                <p>Page à Propos</p>
            </IonContent>
        </IonContent>
    );
};

export default About