import { IonIcon } from '@ionic/react';
import React from 'react';
import Body from '../assets/car-aerial/Body.svg';
import './CarComponent.scss';
import Headlights from '../assets/car-aerial/HeadLights.svg';
import TailLights from '../assets/car-aerial/TailLights.svg';
import DriverDoor from '../assets/car-aerial/LeftTopDoor.svg';
import PassengerDoor from '../assets/car-aerial/TopRightDoor.svg';
import RearDriverDoor from '../assets/car-aerial/BottomLeftDoor.svg';
import RearPassengerDoor from '../assets/car-aerial/BottomRightDoor.svg';
import CarFrame from '../assets/car-aerial/Union.svg';
import { DoorsEnum } from '../features/Car/CarStore';

const Car: React.FC = () => {
    function doorToggle(door: DoorsEnum) {
        switch (door) {
            case DoorsEnum.DRIVER:
                document.getElementById('driverDoor')?.classList.toggle('driverSideRotate');
                break;
            case DoorsEnum.PASSENGER:
                document.getElementById('passengerDoor')?.classList.toggle('passengerSideRotate');
                break;
            case DoorsEnum.REARDRIVER:
                document.getElementById('rearDriverDoor')?.classList.toggle('driverSideRotate');
                break;
            case DoorsEnum.REARPASSENGER:
                document.getElementById('rearPassengerDoor')?.classList.toggle('passengerSideRotate');
                break;
            default:
                break;
        }
    }

    return (
        <div className="carComponentWrapper">
            <IonIcon icon={CarFrame} className="carFrame" />
            <IonIcon
                icon={DriverDoor}
                id="driverDoor"
                className="carDriverDoor"
                onClick={() => doorToggle(DoorsEnum.DRIVER)}
            />
            <IonIcon
                icon={PassengerDoor}
                id="passengerDoor"
                className="carPassengerDoor"
                onClick={() => doorToggle(DoorsEnum.PASSENGER)}
            />
            <IonIcon
                icon={RearDriverDoor}
                id="rearDriverDoor"
                className="carRearDriverDoor"
                onClick={() => doorToggle(DoorsEnum.REARDRIVER)}
            />
            <IonIcon
                icon={RearPassengerDoor}
                id="rearPassengerDoor"
                className="carRearPassengerDoor"
                onClick={() => doorToggle(DoorsEnum.REARPASSENGER)}
            />
            <IonIcon icon={Body} className="carBody" onClick={() => doorToggle(DoorsEnum.DRIVER)} />
            <IonIcon icon={Headlights} className="carHeadLights" />
            <IonIcon icon={CarFrame} className="carFrame" />
            <IonIcon icon={TailLights} className="carTailLights" />
        </div>
    );
};

export default Car;
