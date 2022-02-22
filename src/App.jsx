import {
  IonApp,
  IonButton,
  IonContent,
  IonModal,
  IonPage,
  setupIonicReact,
  useIonModal
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import './moncss.css'

import { useState } from 'react';
import Routeur from './components/Routeur';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer'
import Connexion from './components/Connexion';

setupIonicReact();

const App = () => {

  const children = null

  const [isConnected, setIsConnected] = useState(false)
  const [showConnexion, setshowConnexion] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const [page, setPage] = useState("home")

  const handlePage = (newPage) => {
    console.log(`newPage: ${newPage}`);
    if (page !== newPage) setPage(newPage)
    console.log("dans App.handlePage");
  }

  const handleConnexion = (value = false) => {
    console.log("avant handleConnexion", value);
    setShowModal(value)
  }

  return (
    <IonApp>
      <Menu page={page} handlePage={handlePage} >
        {children}
      </Menu>

      <IonPage id="custom">
        <Header handleConnexion={handleConnexion}></Header>

        <IonContent className="ion-padding">
          <Routeur handlePage={handlePage} page={page} />
          {/* <IonModal isOpen={showModal} cssClass='my-custom-class'>
            <p>This is modal content</p>
            <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
          </IonModal> */}
        </IonContent>

        <Footer></Footer>

          <Connexion isShow={showModal} handleConnexion={handleConnexion}></Connexion>
      </IonPage>
    </IonApp>
  )
}

export default App;
