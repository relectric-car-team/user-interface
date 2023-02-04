import { IBatteryControllerReceivable, IClimateControllerReceivable, IMotorControllerReceivable } from './Controllers';
import { ControllerTypes } from './Enums';

/**
 * Message format of received socket messages
 */
export interface ISocketMessageReceivable {
    controller: ControllerTypes;
    data: IBatteryControllerReceivable | IMotorControllerReceivable | IClimateControllerReceivable;
}

/**
 * Message format of transmitted socket messages
 */
export interface ISocketMessageTransmittable {
    controller: ControllerTypes;
    data: any;
    // TODO: Make statically typed
}
