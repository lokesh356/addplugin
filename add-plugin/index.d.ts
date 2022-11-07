import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Add Plugin
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { AddPlugin } from '@awesome-cordova-plugins/add-plugin';
 *
 *
 * constructor(private addPlugin: AddPlugin) { }
 *
 * ...
 *
 *
 * this.addPlugin.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class AddPluginOriginal extends AwesomeCordovaNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    addMethod(arg1: Array<number>): Promise<any>;
}

export declare const AddPlugin: AddPluginOriginal;