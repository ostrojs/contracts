/**
 * Symmetrical Onion Pipeline Architecture
 * 
 * Enforces type safety across sequential middleware transformation wrappers
 * before reaching the final controller route action.
 */

export type NextPipelineStage<TContext, TResult = any> = (context: TContext) => Promise<TResult> | TResult;

export interface PipelineStage<TIn = any, TOut = TIn> {
    handle(context: TIn, next: (context: TOut) => Promise<any> | any): Promise<any> | any;
}

export interface IPipelineStage<TContext = any, TResult = any> {
    handle(context: TContext, next: NextPipelineStage<TContext, TResult>): Promise<TResult> | TResult;
}

export interface IPipeline<TPassable = any, TResult = any> {
    send(passable: TPassable): this;
    through(pipes: (IPipelineStage<TPassable, TResult> | PipelineStage<TPassable, any> | Function)[]): this;
    via(method: string): this;
    then<TDestinationResult = TResult>(destination: (passable: TPassable) => Promise<TDestinationResult> | TDestinationResult): Promise<TDestinationResult>;
}
