/**
 * BatteryController interface
 *
 * @author Ratik Kapoor
 */
export interface IBatteryControllerReceivable {
    percentage: number;
    voltage: number;
    temperature: number;
}

/**
 * SpeedController interface
 *
 * @author Ratik Kapoor
 */
export interface IMotorControllerReceivable {
    speed: number;
    voltage: number;
    temperature: number;
    rpm: number;
}

/**
 * Climate Controller interface
 *
 * @author Ratik Kapoor
 */
export interface IClimateControllerReceivable {
    outsideTemperature: number; // In Celsius
    insideTemperature: number; // In Celsius
    fanPower: number; // From 0-4
    temperatureSetting: number; // from 0 (hot) - 100 (cold)
}
