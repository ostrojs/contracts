/**
 * Controller Method Signature Enforcer
 * 
 * Verifies string-based route tracking blocks (e.g. 'UserController@show')
 * against target controller classes, ensuring type safety and preventing broken routing references.
 */

export type ControllerMethods<T> = {
    [K in keyof T]: T[K] extends (...args: any[]) => any
        ? K extends 'constructor'
            ? never
            : K & string
        : never;
}[keyof T];

export type ControllerActionString<TControllerName extends string, TMethods extends string> =
    `${TControllerName}@${TMethods}`;

export type ControllerActionSignature<TController> =
    TController extends abstract new (...args: any[]) => infer Instance
        ? ControllerMethods<Instance>
        : TController extends (...args: any[]) => any
            ? never
            : ControllerMethods<TController>;

export type ControllerAction<TController> = ControllerActionSignature<TController>;

export type VerifiedRouteAction<TController, TAction extends ControllerActionSignature<TController>> =
    TAction;

