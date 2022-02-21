import { IonButton, IonIcon } from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import { pages } from '../components/Routeur';

const About = ({ handlePage }) => {

    return (
        < >
            <IonButton onClick={ () => handlePage(pages.home.name)}>
                <IonIcon icon={chevronBackOutline}></IonIcon>
                {pages.home.title}
            </IonButton>

            <h1>{pages.about.title}</h1>
        </>
    );
};

export default About