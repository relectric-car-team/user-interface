import React from 'react';
import { IonButton, IonContent, IonModal, IonText } from '@ionic/react';
import { useState } from 'react';

const ComponentModal: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <IonContent>
            <IonModal isOpen={showModal}>
                <IonText>Blah</IonText>
            </IonModal>
            <IonButton onClick={(e) => setShowModal(true)} />
        </IonContent>
    );
};

export default ComponentModal;
