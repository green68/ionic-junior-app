import { IonButton, IonIcon } from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import { pages } from '../components/Routeur';

const About = ({ handlePage }) => {

    return (
        < >
            <IonButton onClick={ () => handlePage(pages.home.name)}>
                <IonIcon icon={chevronBackOutline}></IonIcon>
                Home
            </IonButton>

            <p>Page à Propos</p>
        </>
    );
};

export default About