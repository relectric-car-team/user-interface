import React, { useState } from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonCard,
    IonCardContent,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonCol,
} from '@ionic/react';
import { carOutline, flameOutline } from 'ionicons/icons';
import climateUpper from '../assets/icons/climate-upper.png';
import './Climate.css';

enum Direction {
    Upper = 'Upper',
    Lower = 'Lower',
    UpperAndLower = 'UpperAndLower',
    Front = 'Front',
}

const Climate: React.FC = () => {
    // dummy varaible to represent temp measurement
    const [selectedDirection, setSelectedDirection] = useState<Direction>(Direction.Upper);
    const temp = 22;

    const setDirection = (d: string | undefined) => {
        switch (d) {
            case Direction.Front:
                setSelectedDirection(Direction.Front);
                break;

            case Direction.Lower:
                setSelectedDirection(Direction.Lower);
                break;

            case Direction.Upper:
                setSelectedDirection(Direction.Upper);
                break;

            case Direction.UpperAndLower:
                setSelectedDirection(Direction.UpperAndLower);
                break;

            default:
                setSelectedDirection(Direction.Upper);
                break;
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="#D99648" className="ClimateToolBar">
                    <IonTitle size="large" color="white">
                        Climate
                    </IonTitle>
                    0
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle>Climate</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonCard className="DirectionCard" color="light">
                    <IonCardContent>
                        <IonSegment
                            value={selectedDirection}
                            onIonChange={(e) => {
                                setDirection(e.detail.value);
                            }}
                        >
                            <IonSegmentButton value={Direction.Upper} className="SegmentButton">
                                <img src={climateUpper} className="climateUpper" />
                            </IonSegmentButton>
                            <IonSegmentButton value={Direction.Lower} className="SegmentButton">
                                <IonIcon name={flameOutline} />
                            </IonSegmentButton>
                            <IonSegmentButton value={Direction.UpperAndLower} className="SegmentButton">
                                <IonIcon icon={carOutline} />
                            </IonSegmentButton>
                            <IonSegmentButton value={Direction.Front} className="SegmentButton">
                                <IonIcon icon={carOutline} />
                            </IonSegmentButton>
                        </IonSegment>
                    </IonCardContent>
                </IonCard>

                <IonCard className="IntensityCard" color="light">
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

                <IonCard className="TempCard" color="light">
                    <IonLabel color="medium">{temp}</IonLabel>
                    <IonLabel color="medium">°C</IonLabel>
                    <IonCol size="2"> </IonCol>
                    <IonIcon color="medium" size="large" vertical-align="bottom" icon={flameOutline} />
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Climate;
