import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
        IonIcon, 
        IonCard,
        IonCardContent,
        IonSegment,
        IonSegmentButton,
        IonLabel,
        IonImg,
        IonCol} from '@ionic/react';
import { carOutline,
         flameOutline } from 'ionicons/icons';
import climateUpper from '../assets/icons/climate-upper.svg';
import './Climate.css';

const Climate: React.FC = () => {

    // dummy varaible to represent temp measurement
    var temp = 22;
    
    return (
        <IonPage>

            <IonHeader>
                <IonToolbar
                    color="#D99648" 
                    className="ClimateToolBar">
                    <IonTitle 
                        size="large"
                        color="white">
                        Climate
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>

                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle> Climate</IonTitle>
                    </IonToolbar>
                </IonHeader>
                

                <IonCard className="DirectionCard"
                    color="light">
                    <IonCardContent>
                    <IonSegment value="upper">
                        <IonSegmentButton value="upper" className="SegmentButton">
                            {/* <IonIcon icon={carOutline} /> */}
                            <IonImg src={climateUpper}/>
                        </IonSegmentButton>
                        <IonSegmentButton value="lower" className="SegmentButton">
                            <IonIcon name={flameOutline} />
                        </IonSegmentButton>
                        <IonSegmentButton value="upperAndLower" className="SegmentButton">
                            <IonIcon icon={carOutline} />
                        </IonSegmentButton>
                        <IonSegmentButton value="front" className="SegmentButton">
                            <IonIcon icon={carOutline} />
                        </IonSegmentButton>
                    </IonSegment>
                    </IonCardContent>
                </IonCard>

                <IonCard className="IntensityCard"
                    color="light">
                    <IonCardContent>
                        <IonSegment value="OFF">
                            <IonSegmentButton value="OFF" className="SegmentButton">
                                <IonLabel>OFF</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="1" className="SegmentButton">
                                <IonLabel>1</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="2" className="SegmentButton">
                                <IonLabel>2</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="3" className="SegmentButton">
                                <IonLabel>3</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="4" className="SegmentButton">
                                <IonLabel>4</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </IonCardContent>
                </IonCard>  

                <IonCard className="TempCard"
                    color="light">
                    <IonLabel
                        color="medium">
                        {temp}
                    </IonLabel>
                    <IonLabel
                        color="medium">
                        °C
                    </IonLabel>
                    <IonCol size="2"> </IonCol>
                    <IonIcon 
                        color="medium"
                        size="large"
                        vertical-align="bottom"
                        icon={flameOutline}/>
                </IonCard>  

            </IonContent>

        </IonPage>
    );
};

export default Climate;
