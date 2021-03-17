/**
 * Enums.ts
 *
 * This file is used to to store enumerations to be used for type checking across various components
 */

/**
 * Enum: Pages
 *
 * Used for type-strict enforcement of pages
 *
 * @author Ratik Kapoor
 * @since 0.0.2
 */
export enum Pages {
    Home = 'Home',
    Car = 'Car',
    Climate = 'Climate',
    Music = 'Music',
    Navigation = 'Navigation',
    Settings = 'Settings',
}

/**
 * Enum: ControllerTypes
 *
 * Used for type-checking data from Python systems
 */
export enum ControllerTypes {
    BackupController = 'BackupController',
    BatteryController = 'BatteryController',
    ClimateController = 'ClimateController',
    MotorController = 'MotorController',
}
