import { IonContent, IonPage } from '@ionic/react';

const Home = () => {

  console.log('home');

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <p>My Home page</p>
        <p>test pour ligne 1</p>
        <p>test pour ligne 2</p>
        <p>test pour ligne 3</p>
      </IonContent>
    </IonPage>
  );
};

export default Home
