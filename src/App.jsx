import {
  IonApp,
  IonContent,
  IonPage,
  setupIonicReact
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

import { useState } from 'react';
import MonRouteur from './components/MonRouteur';
import MonMenu from './components/MonMenu';
import MonHeader from './components/MonHeader';

setupIonicReact();

const App = () => {

  const children = null

  const [isConnected, setIsConnected] = useState(false)

  const [page, setPage] = useState("home")

  const handlePage = (newPage) => {
    // debugger
    console.log(`newPage: ${newPage}`)

    setPage(newPage)
  }
  const handleConnexion = () => {
    return true
  }

  return (
    <IonApp>
      <MonMenu page={page} handlePage={handlePage} >
        {children}
      </MonMenu>

      <IonPage id="custom">
        <MonHeader handleConnexion={handleConnexion}></MonHeader>
        <IonContent className="ion-padding">
          <MonRouteur handlePage={handlePage} page={page} />
        </IonContent>
      </IonPage>
    </IonApp>
  )
}

export default App;
