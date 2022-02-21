import { IonContent, IonButton, IonIcon } from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
const About = ({ changePage }) => {

    return (
        <IonContent >
            <IonButton onClick={changePage} data-menu="home">
                <IonIcon icon={chevronBackOutline}></IonIcon>
                Home
            </IonButton>

            <p>Page à Propos</p>
        </IonContent>
    );
};

export default About