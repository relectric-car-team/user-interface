import { IBatteryController, IClimateController, IMotorController } from './Controllers';
import { ControllerTypes } from './Enums';

/**
 * Message format of socket messages
 */
export interface ISocketMessageReceivable {
    controller: ControllerTypes;
    data: IBatteryController | IMotorController | IClimateController;
}
