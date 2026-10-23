import {
  ActionBuilder,
  HttpEndpoint,
  MutationBuilder,
  QueryBuilder,
  GenericDataModel,
} from "convex/server";

export type DataModel = GenericDataModel;

export declare const query: QueryBuilder<DataModel, "public">;
export declare const mutation: MutationBuilder<DataModel, "public">;
export declare const action: ActionBuilder<DataModel, "public">;
export declare const httpEndpoint: (
  handler: (ctx: unknown, request: Request) => Promise<Response>
) => HttpEndpoint;
