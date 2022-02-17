import React from 'react';
import { IonButton, IonButtons, IonIcon, IonMenu, IonMenuButton, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonPage, IonLabel, IonRouterOutlet } from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router';
import Home from './Home';
import About from './About';

export const MenuExample = ({ isConnected, children }) => {
    const handleConnection = (e) => {
        console.log(e);
    }

    return (
        <>
            <IonMenu side="start" contentId='custom' className="my-custom-menu" >
                <IonHeader>
                    <IonToolbar color="success">
                        <IonTitle>Custom Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonItem routerLink='/home'>Home</IonItem>
                        <IonItem routerLink='/about'>A propos</IonItem>
                    </IonList>
                    {children}
                </IonContent>
            </IonMenu>

            <IonPage id="custom">
                <IonHeader >
                    <IonToolbar color='dark'>
                        <IonTitle > &lt;Dev.Junior&gt;</IonTitle>
                        <IonButtons slot='primary'>
                            <IonButton id='btn-connect' color='primary' fill='solid' size='small' onClick={handleConnection} >
                                <IonIcon icon={personCircle} />
                                <IonLabel>Connexion</IonLabel>
                            </IonButton>
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonReactRouter>
                        <IonRouterOutlet>
                            <Route path='/home' component={Home} exact={true} />
                            <Route path='/about' component={About} exact={true} />
                            <Route path='/' exact={true} />
                        </IonRouterOutlet>
                    </IonReactRouter>
                </IonContent>
            </IonPage>

        </>
    )
}
