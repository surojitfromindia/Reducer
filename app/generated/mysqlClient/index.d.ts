
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model WorkSpace
 * 
 */
export type WorkSpace = {
  id: string
  userId: string
}

/**
 * Model SharedWorkspace
 * 
 */
export type SharedWorkspace = {
  id: string
  userId: string
}

/**
 * Model User
 * 
 */
export type User = {
  id: string
  email: string
  password: string
  status: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more WorkSpaces
 * const workSpaces = await prisma.workSpace.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more WorkSpaces
   * const workSpaces = await prisma.workSpace.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.workSpace`: Exposes CRUD operations for the **WorkSpace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkSpaces
    * const workSpaces = await prisma.workSpace.findMany()
    * ```
    */
  get workSpace(): Prisma.WorkSpaceDelegate<GlobalReject>;

  /**
   * `prisma.sharedWorkspace`: Exposes CRUD operations for the **SharedWorkspace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SharedWorkspaces
    * const sharedWorkspaces = await prisma.sharedWorkspace.findMany()
    * ```
    */
  get sharedWorkspace(): Prisma.SharedWorkspaceDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.3.1
   * Query Engine version: c875e43600dfe042452e0b868f7a48b817b9640b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    WorkSpace: 'WorkSpace',
    SharedWorkspace: 'SharedWorkspace',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    workspaces: number
    SharedWorkspace: number
  }

  export type UserCountOutputTypeSelect = {
    workspaces?: boolean
    SharedWorkspace?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model WorkSpace
   */


  export type AggregateWorkSpace = {
    _count: WorkSpaceCountAggregateOutputType | null
    _min: WorkSpaceMinAggregateOutputType | null
    _max: WorkSpaceMaxAggregateOutputType | null
  }

  export type WorkSpaceMinAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type WorkSpaceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type WorkSpaceCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type WorkSpaceMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type WorkSpaceMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type WorkSpaceCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type WorkSpaceAggregateArgs = {
    /**
     * Filter which WorkSpace to aggregate.
     * 
    **/
    where?: WorkSpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkSpaces to fetch.
     * 
    **/
    orderBy?: Enumerable<WorkSpaceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: WorkSpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkSpaces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkSpaces.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkSpaces
    **/
    _count?: true | WorkSpaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkSpaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkSpaceMaxAggregateInputType
  }

  export type GetWorkSpaceAggregateType<T extends WorkSpaceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkSpace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkSpace[P]>
      : GetScalarType<T[P], AggregateWorkSpace[P]>
  }




  export type WorkSpaceGroupByArgs = {
    where?: WorkSpaceWhereInput
    orderBy?: Enumerable<WorkSpaceOrderByWithAggregationInput>
    by: Array<WorkSpaceScalarFieldEnum>
    having?: WorkSpaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkSpaceCountAggregateInputType | true
    _min?: WorkSpaceMinAggregateInputType
    _max?: WorkSpaceMaxAggregateInputType
  }


  export type WorkSpaceGroupByOutputType = {
    id: string
    userId: string
    _count: WorkSpaceCountAggregateOutputType | null
    _min: WorkSpaceMinAggregateOutputType | null
    _max: WorkSpaceMaxAggregateOutputType | null
  }

  type GetWorkSpaceGroupByPayload<T extends WorkSpaceGroupByArgs> = PrismaPromise<
    Array<
      PickArray<WorkSpaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkSpaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkSpaceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkSpaceGroupByOutputType[P]>
        }
      >
    >


  export type WorkSpaceSelect = {
    id?: boolean
    user?: boolean | UserArgs
    userId?: boolean
    SharedWorkspace?: boolean | SharedWorkspaceArgs
  }

  export type WorkSpaceInclude = {
    user?: boolean | UserArgs
    SharedWorkspace?: boolean | SharedWorkspaceArgs
  }

  export type WorkSpaceGetPayload<
    S extends boolean | null | undefined | WorkSpaceArgs,
    U = keyof S
      > = S extends true
        ? WorkSpace
    : S extends undefined
    ? never
    : S extends WorkSpaceArgs | WorkSpaceFindManyArgs
    ?'include' extends U
    ? WorkSpace  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'SharedWorkspace' ? SharedWorkspaceGetPayload<Exclude<S['include'], undefined | null>[P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'SharedWorkspace' ? SharedWorkspaceGetPayload<Exclude<S['select'], undefined | null>[P]> | null :  P extends keyof WorkSpace ? WorkSpace[P] : never
  } 
    : WorkSpace
  : WorkSpace


  type WorkSpaceCountArgs = Merge<
    Omit<WorkSpaceFindManyArgs, 'select' | 'include'> & {
      select?: WorkSpaceCountAggregateInputType | true
    }
  >

  export interface WorkSpaceDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one WorkSpace that matches the filter.
     * @param {WorkSpaceFindUniqueArgs} args - Arguments to find a WorkSpace
     * @example
     * // Get one WorkSpace
     * const workSpace = await prisma.workSpace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorkSpaceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WorkSpaceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'WorkSpace'> extends True ? CheckSelect<T, Prisma__WorkSpaceClient<WorkSpace>, Prisma__WorkSpaceClient<WorkSpaceGetPayload<T>>> : CheckSelect<T, Prisma__WorkSpaceClient<WorkSpace | null >, Prisma__WorkSpaceClient<WorkSpaceGetPayload<T> | null >>

    /**
     * Find the first WorkSpace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkSpaceFindFirstArgs} args - Arguments to find a WorkSpace
     * @example
     * // Get one WorkSpace
     * const workSpace = await prisma.workSpace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorkSpaceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WorkSpaceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'WorkSpace'> extends True ? CheckSelect<T, Prisma__WorkSpaceClient<WorkSpace>, Prisma__WorkSpaceClient<WorkSpaceGetPayload<T>>> : CheckSelect<T, Prisma__WorkSpaceClient<WorkSpace | null >, Prisma__WorkSpaceClient<WorkSpaceGetPayload<T> | null >>

    /**
     * Find zero or more WorkSpaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkSpaceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkSpaces
     * const workSpaces = await prisma.workSpace.findMany()
     * 
     * // Get first 10 WorkSpaces
     * const workSpaces = await prisma.workSpace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workSpaceWithIdOnly = await prisma.workSpace.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WorkSpaceFindManyArgs>(
      args?: SelectSubset<T, WorkSpaceFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<WorkSpace>>, PrismaPromise<Array<WorkSpaceGetPayload<T>>>>

    /**
     * Create a WorkSpace.
     * @param {WorkSpaceCreateArgs} args - Arguments to create a WorkSpace.
     * @example
     * // Create one WorkSpace
     * const WorkSpace = await prisma.workSpace.create({
     *   data: {
     *     // ... data to create a WorkSpace
     *   }
     * })
     * 
    **/
    create<T extends WorkSpaceCreateArgs>(
      args: SelectSubset<T, WorkSpaceCreateArgs>
    ): CheckSelect<T, Prisma__WorkSpaceClient<WorkSpace>, Prisma__WorkSpaceClient<WorkSpaceGetPayload<T>>>

    /**
     * Create many WorkSpaces.
     *     @param {WorkSpaceCreateManyArgs} args - Arguments to create many WorkSpaces.
     *     @example
     *     // Create many WorkSpaces
     *     const workSpace = await prisma.workSpace.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WorkSpaceCreateManyArgs>(
      args?: SelectSubset<T, WorkSpaceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a WorkSpace.
     * @param {WorkSpaceDeleteArgs} args - Arguments to delete one WorkSpace.
     * @example
     * // Delete one WorkSpace
     * const WorkSpace = await prisma.workSpace.delete({
     *   where: {
     *     // ... filter to delete one WorkSpace
     *   }
     * })
     * 
    **/
    delete<T extends WorkSpaceDeleteArgs>(
      args: SelectSubset<T, WorkSpaceDeleteArgs>
    ): CheckSelect<T, Prisma__WorkSpaceClient<WorkSpace>, Prisma__WorkSpaceClient<WorkSpaceGetPayload<T>>>

    /**
     * Update one WorkSpace.
     * @param {WorkSpaceUpdateArgs} args - Arguments to update one WorkSpace.
     * @example
     * // Update one WorkSpace
     * const workSpace = await prisma.workSpace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorkSpaceUpdateArgs>(
      args: SelectSubset<T, WorkSpaceUpdateArgs>
    ): CheckSelect<T, Prisma__WorkSpaceClient<WorkSpace>, Prisma__WorkSpaceClient<WorkSpaceGetPayload<T>>>

    /**
     * Delete zero or more WorkSpaces.
     * @param {WorkSpaceDeleteManyArgs} args - Arguments to filter WorkSpaces to delete.
     * @example
     * // Delete a few WorkSpaces
     * const { count } = await prisma.workSpace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorkSpaceDeleteManyArgs>(
      args?: SelectSubset<T, WorkSpaceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkSpaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkSpaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkSpaces
     * const workSpace = await prisma.workSpace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorkSpaceUpdateManyArgs>(
      args: SelectSubset<T, WorkSpaceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkSpace.
     * @param {WorkSpaceUpsertArgs} args - Arguments to update or create a WorkSpace.
     * @example
     * // Update or create a WorkSpace
     * const workSpace = await prisma.workSpace.upsert({
     *   create: {
     *     // ... data to create a WorkSpace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkSpace we want to update
     *   }
     * })
    **/
    upsert<T extends WorkSpaceUpsertArgs>(
      args: SelectSubset<T, WorkSpaceUpsertArgs>
    ): CheckSelect<T, Prisma__WorkSpaceClient<WorkSpace>, Prisma__WorkSpaceClient<WorkSpaceGetPayload<T>>>

    /**
     * Find one WorkSpace that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {WorkSpaceFindUniqueOrThrowArgs} args - Arguments to find a WorkSpace
     * @example
     * // Get one WorkSpace
     * const workSpace = await prisma.workSpace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorkSpaceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WorkSpaceFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__WorkSpaceClient<WorkSpace>, Prisma__WorkSpaceClient<WorkSpaceGetPayload<T>>>

    /**
     * Find the first WorkSpace that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkSpaceFindFirstOrThrowArgs} args - Arguments to find a WorkSpace
     * @example
     * // Get one WorkSpace
     * const workSpace = await prisma.workSpace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorkSpaceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WorkSpaceFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__WorkSpaceClient<WorkSpace>, Prisma__WorkSpaceClient<WorkSpaceGetPayload<T>>>

    /**
     * Count the number of WorkSpaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkSpaceCountArgs} args - Arguments to filter WorkSpaces to count.
     * @example
     * // Count the number of WorkSpaces
     * const count = await prisma.workSpace.count({
     *   where: {
     *     // ... the filter for the WorkSpaces we want to count
     *   }
     * })
    **/
    count<T extends WorkSpaceCountArgs>(
      args?: Subset<T, WorkSpaceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkSpaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkSpace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkSpaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkSpaceAggregateArgs>(args: Subset<T, WorkSpaceAggregateArgs>): PrismaPromise<GetWorkSpaceAggregateType<T>>

    /**
     * Group by WorkSpace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkSpaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkSpaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkSpaceGroupByArgs['orderBy'] }
        : { orderBy?: WorkSpaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkSpaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkSpaceGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkSpace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WorkSpaceClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    SharedWorkspace<T extends SharedWorkspaceArgs = {}>(args?: Subset<T, SharedWorkspaceArgs>): CheckSelect<T, Prisma__SharedWorkspaceClient<SharedWorkspace | null >, Prisma__SharedWorkspaceClient<SharedWorkspaceGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * WorkSpace base type for findUnique actions
   */
  export type WorkSpaceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the WorkSpace
     * 
    **/
    select?: WorkSpaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkSpaceInclude | null
    /**
     * Filter, which WorkSpace to fetch.
     * 
    **/
    where: WorkSpaceWhereUniqueInput
  }

  /**
   * WorkSpace: findUnique
   */
  export interface WorkSpaceFindUniqueArgs extends WorkSpaceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WorkSpace base type for findFirst actions
   */
  export type WorkSpaceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the WorkSpace
     * 
    **/
    select?: WorkSpaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkSpaceInclude | null
    /**
     * Filter, which WorkSpace to fetch.
     * 
    **/
    where?: WorkSpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkSpaces to fetch.
     * 
    **/
    orderBy?: Enumerable<WorkSpaceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkSpaces.
     * 
    **/
    cursor?: WorkSpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkSpaces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkSpaces.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkSpaces.
     * 
    **/
    distinct?: Enumerable<WorkSpaceScalarFieldEnum>
  }

  /**
   * WorkSpace: findFirst
   */
  export interface WorkSpaceFindFirstArgs extends WorkSpaceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WorkSpace findMany
   */
  export type WorkSpaceFindManyArgs = {
    /**
     * Select specific fields to fetch from the WorkSpace
     * 
    **/
    select?: WorkSpaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkSpaceInclude | null
    /**
     * Filter, which WorkSpaces to fetch.
     * 
    **/
    where?: WorkSpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkSpaces to fetch.
     * 
    **/
    orderBy?: Enumerable<WorkSpaceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkSpaces.
     * 
    **/
    cursor?: WorkSpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkSpaces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkSpaces.
     * 
    **/
    skip?: number
    distinct?: Enumerable<WorkSpaceScalarFieldEnum>
  }


  /**
   * WorkSpace create
   */
  export type WorkSpaceCreateArgs = {
    /**
     * Select specific fields to fetch from the WorkSpace
     * 
    **/
    select?: WorkSpaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkSpaceInclude | null
    /**
     * The data needed to create a WorkSpace.
     * 
    **/
    data: XOR<WorkSpaceCreateInput, WorkSpaceUncheckedCreateInput>
  }


  /**
   * WorkSpace createMany
   */
  export type WorkSpaceCreateManyArgs = {
    /**
     * The data used to create many WorkSpaces.
     * 
    **/
    data: Enumerable<WorkSpaceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * WorkSpace update
   */
  export type WorkSpaceUpdateArgs = {
    /**
     * Select specific fields to fetch from the WorkSpace
     * 
    **/
    select?: WorkSpaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkSpaceInclude | null
    /**
     * The data needed to update a WorkSpace.
     * 
    **/
    data: XOR<WorkSpaceUpdateInput, WorkSpaceUncheckedUpdateInput>
    /**
     * Choose, which WorkSpace to update.
     * 
    **/
    where: WorkSpaceWhereUniqueInput
  }


  /**
   * WorkSpace updateMany
   */
  export type WorkSpaceUpdateManyArgs = {
    /**
     * The data used to update WorkSpaces.
     * 
    **/
    data: XOR<WorkSpaceUpdateManyMutationInput, WorkSpaceUncheckedUpdateManyInput>
    /**
     * Filter which WorkSpaces to update
     * 
    **/
    where?: WorkSpaceWhereInput
  }


  /**
   * WorkSpace upsert
   */
  export type WorkSpaceUpsertArgs = {
    /**
     * Select specific fields to fetch from the WorkSpace
     * 
    **/
    select?: WorkSpaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkSpaceInclude | null
    /**
     * The filter to search for the WorkSpace to update in case it exists.
     * 
    **/
    where: WorkSpaceWhereUniqueInput
    /**
     * In case the WorkSpace found by the `where` argument doesn't exist, create a new WorkSpace with this data.
     * 
    **/
    create: XOR<WorkSpaceCreateInput, WorkSpaceUncheckedCreateInput>
    /**
     * In case the WorkSpace was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<WorkSpaceUpdateInput, WorkSpaceUncheckedUpdateInput>
  }


  /**
   * WorkSpace delete
   */
  export type WorkSpaceDeleteArgs = {
    /**
     * Select specific fields to fetch from the WorkSpace
     * 
    **/
    select?: WorkSpaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkSpaceInclude | null
    /**
     * Filter which WorkSpace to delete.
     * 
    **/
    where: WorkSpaceWhereUniqueInput
  }


  /**
   * WorkSpace deleteMany
   */
  export type WorkSpaceDeleteManyArgs = {
    /**
     * Filter which WorkSpaces to delete
     * 
    **/
    where?: WorkSpaceWhereInput
  }


  /**
   * WorkSpace: findUniqueOrThrow
   */
  export type WorkSpaceFindUniqueOrThrowArgs = WorkSpaceFindUniqueArgsBase
      

  /**
   * WorkSpace: findFirstOrThrow
   */
  export type WorkSpaceFindFirstOrThrowArgs = WorkSpaceFindFirstArgsBase
      

  /**
   * WorkSpace without action
   */
  export type WorkSpaceArgs = {
    /**
     * Select specific fields to fetch from the WorkSpace
     * 
    **/
    select?: WorkSpaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkSpaceInclude | null
  }



  /**
   * Model SharedWorkspace
   */


  export type AggregateSharedWorkspace = {
    _count: SharedWorkspaceCountAggregateOutputType | null
    _min: SharedWorkspaceMinAggregateOutputType | null
    _max: SharedWorkspaceMaxAggregateOutputType | null
  }

  export type SharedWorkspaceMinAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type SharedWorkspaceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type SharedWorkspaceCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type SharedWorkspaceMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SharedWorkspaceMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SharedWorkspaceCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type SharedWorkspaceAggregateArgs = {
    /**
     * Filter which SharedWorkspace to aggregate.
     * 
    **/
    where?: SharedWorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedWorkspaces to fetch.
     * 
    **/
    orderBy?: Enumerable<SharedWorkspaceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SharedWorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedWorkspaces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedWorkspaces.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SharedWorkspaces
    **/
    _count?: true | SharedWorkspaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SharedWorkspaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SharedWorkspaceMaxAggregateInputType
  }

  export type GetSharedWorkspaceAggregateType<T extends SharedWorkspaceAggregateArgs> = {
        [P in keyof T & keyof AggregateSharedWorkspace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSharedWorkspace[P]>
      : GetScalarType<T[P], AggregateSharedWorkspace[P]>
  }




  export type SharedWorkspaceGroupByArgs = {
    where?: SharedWorkspaceWhereInput
    orderBy?: Enumerable<SharedWorkspaceOrderByWithAggregationInput>
    by: Array<SharedWorkspaceScalarFieldEnum>
    having?: SharedWorkspaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SharedWorkspaceCountAggregateInputType | true
    _min?: SharedWorkspaceMinAggregateInputType
    _max?: SharedWorkspaceMaxAggregateInputType
  }


  export type SharedWorkspaceGroupByOutputType = {
    id: string
    userId: string
    _count: SharedWorkspaceCountAggregateOutputType | null
    _min: SharedWorkspaceMinAggregateOutputType | null
    _max: SharedWorkspaceMaxAggregateOutputType | null
  }

  type GetSharedWorkspaceGroupByPayload<T extends SharedWorkspaceGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SharedWorkspaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SharedWorkspaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SharedWorkspaceGroupByOutputType[P]>
            : GetScalarType<T[P], SharedWorkspaceGroupByOutputType[P]>
        }
      >
    >


  export type SharedWorkspaceSelect = {
    id?: boolean
    workspaceId?: boolean | WorkSpaceArgs
    user_id?: boolean | UserArgs
    userId?: boolean
  }

  export type SharedWorkspaceInclude = {
    workspaceId?: boolean | WorkSpaceArgs
    user_id?: boolean | UserArgs
  }

  export type SharedWorkspaceGetPayload<
    S extends boolean | null | undefined | SharedWorkspaceArgs,
    U = keyof S
      > = S extends true
        ? SharedWorkspace
    : S extends undefined
    ? never
    : S extends SharedWorkspaceArgs | SharedWorkspaceFindManyArgs
    ?'include' extends U
    ? SharedWorkspace  & {
    [P in TrueKeys<S['include']>]:
        P extends 'workspaceId' ? WorkSpaceGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'user_id' ? UserGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'workspaceId' ? WorkSpaceGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'user_id' ? UserGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof SharedWorkspace ? SharedWorkspace[P] : never
  } 
    : SharedWorkspace
  : SharedWorkspace


  type SharedWorkspaceCountArgs = Merge<
    Omit<SharedWorkspaceFindManyArgs, 'select' | 'include'> & {
      select?: SharedWorkspaceCountAggregateInputType | true
    }
  >

  export interface SharedWorkspaceDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one SharedWorkspace that matches the filter.
     * @param {SharedWorkspaceFindUniqueArgs} args - Arguments to find a SharedWorkspace
     * @example
     * // Get one SharedWorkspace
     * const sharedWorkspace = await prisma.sharedWorkspace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SharedWorkspaceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SharedWorkspaceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SharedWorkspace'> extends True ? CheckSelect<T, Prisma__SharedWorkspaceClient<SharedWorkspace>, Prisma__SharedWorkspaceClient<SharedWorkspaceGetPayload<T>>> : CheckSelect<T, Prisma__SharedWorkspaceClient<SharedWorkspace | null >, Prisma__SharedWorkspaceClient<SharedWorkspaceGetPayload<T> | null >>

    /**
     * Find the first SharedWorkspace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedWorkspaceFindFirstArgs} args - Arguments to find a SharedWorkspace
     * @example
     * // Get one SharedWorkspace
     * const sharedWorkspace = await prisma.sharedWorkspace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SharedWorkspaceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SharedWorkspaceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SharedWorkspace'> extends True ? CheckSelect<T, Prisma__SharedWorkspaceClient<SharedWorkspace>, Prisma__SharedWorkspaceClient<SharedWorkspaceGetPayload<T>>> : CheckSelect<T, Prisma__SharedWorkspaceClient<SharedWorkspace | null >, Prisma__SharedWorkspaceClient<SharedWorkspaceGetPayload<T> | null >>

    /**
     * Find zero or more SharedWorkspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedWorkspaceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SharedWorkspaces
     * const sharedWorkspaces = await prisma.sharedWorkspace.findMany()
     * 
     * // Get first 10 SharedWorkspaces
     * const sharedWorkspaces = await prisma.sharedWorkspace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sharedWorkspaceWithIdOnly = await prisma.sharedWorkspace.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SharedWorkspaceFindManyArgs>(
      args?: SelectSubset<T, SharedWorkspaceFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<SharedWorkspace>>, PrismaPromise<Array<SharedWorkspaceGetPayload<T>>>>

    /**
     * Create a SharedWorkspace.
     * @param {SharedWorkspaceCreateArgs} args - Arguments to create a SharedWorkspace.
     * @example
     * // Create one SharedWorkspace
     * const SharedWorkspace = await prisma.sharedWorkspace.create({
     *   data: {
     *     // ... data to create a SharedWorkspace
     *   }
     * })
     * 
    **/
    create<T extends SharedWorkspaceCreateArgs>(
      args: SelectSubset<T, SharedWorkspaceCreateArgs>
    ): CheckSelect<T, Prisma__SharedWorkspaceClient<SharedWorkspace>, Prisma__SharedWorkspaceClient<SharedWorkspaceGetPayload<T>>>

    /**
     * Create many SharedWorkspaces.
     *     @param {SharedWorkspaceCreateManyArgs} args - Arguments to create many SharedWorkspaces.
     *     @example
     *     // Create many SharedWorkspaces
     *     const sharedWorkspace = await prisma.sharedWorkspace.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SharedWorkspaceCreateManyArgs>(
      args?: SelectSubset<T, SharedWorkspaceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a SharedWorkspace.
     * @param {SharedWorkspaceDeleteArgs} args - Arguments to delete one SharedWorkspace.
     * @example
     * // Delete one SharedWorkspace
     * const SharedWorkspace = await prisma.sharedWorkspace.delete({
     *   where: {
     *     // ... filter to delete one SharedWorkspace
     *   }
     * })
     * 
    **/
    delete<T extends SharedWorkspaceDeleteArgs>(
      args: SelectSubset<T, SharedWorkspaceDeleteArgs>
    ): CheckSelect<T, Prisma__SharedWorkspaceClient<SharedWorkspace>, Prisma__SharedWorkspaceClient<SharedWorkspaceGetPayload<T>>>

    /**
     * Update one SharedWorkspace.
     * @param {SharedWorkspaceUpdateArgs} args - Arguments to update one SharedWorkspace.
     * @example
     * // Update one SharedWorkspace
     * const sharedWorkspace = await prisma.sharedWorkspace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SharedWorkspaceUpdateArgs>(
      args: SelectSubset<T, SharedWorkspaceUpdateArgs>
    ): CheckSelect<T, Prisma__SharedWorkspaceClient<SharedWorkspace>, Prisma__SharedWorkspaceClient<SharedWorkspaceGetPayload<T>>>

    /**
     * Delete zero or more SharedWorkspaces.
     * @param {SharedWorkspaceDeleteManyArgs} args - Arguments to filter SharedWorkspaces to delete.
     * @example
     * // Delete a few SharedWorkspaces
     * const { count } = await prisma.sharedWorkspace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SharedWorkspaceDeleteManyArgs>(
      args?: SelectSubset<T, SharedWorkspaceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more SharedWorkspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedWorkspaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SharedWorkspaces
     * const sharedWorkspace = await prisma.sharedWorkspace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SharedWorkspaceUpdateManyArgs>(
      args: SelectSubset<T, SharedWorkspaceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one SharedWorkspace.
     * @param {SharedWorkspaceUpsertArgs} args - Arguments to update or create a SharedWorkspace.
     * @example
     * // Update or create a SharedWorkspace
     * const sharedWorkspace = await prisma.sharedWorkspace.upsert({
     *   create: {
     *     // ... data to create a SharedWorkspace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SharedWorkspace we want to update
     *   }
     * })
    **/
    upsert<T extends SharedWorkspaceUpsertArgs>(
      args: SelectSubset<T, SharedWorkspaceUpsertArgs>
    ): CheckSelect<T, Prisma__SharedWorkspaceClient<SharedWorkspace>, Prisma__SharedWorkspaceClient<SharedWorkspaceGetPayload<T>>>

    /**
     * Find one SharedWorkspace that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SharedWorkspaceFindUniqueOrThrowArgs} args - Arguments to find a SharedWorkspace
     * @example
     * // Get one SharedWorkspace
     * const sharedWorkspace = await prisma.sharedWorkspace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SharedWorkspaceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SharedWorkspaceFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SharedWorkspaceClient<SharedWorkspace>, Prisma__SharedWorkspaceClient<SharedWorkspaceGetPayload<T>>>

    /**
     * Find the first SharedWorkspace that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedWorkspaceFindFirstOrThrowArgs} args - Arguments to find a SharedWorkspace
     * @example
     * // Get one SharedWorkspace
     * const sharedWorkspace = await prisma.sharedWorkspace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SharedWorkspaceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SharedWorkspaceFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SharedWorkspaceClient<SharedWorkspace>, Prisma__SharedWorkspaceClient<SharedWorkspaceGetPayload<T>>>

    /**
     * Count the number of SharedWorkspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedWorkspaceCountArgs} args - Arguments to filter SharedWorkspaces to count.
     * @example
     * // Count the number of SharedWorkspaces
     * const count = await prisma.sharedWorkspace.count({
     *   where: {
     *     // ... the filter for the SharedWorkspaces we want to count
     *   }
     * })
    **/
    count<T extends SharedWorkspaceCountArgs>(
      args?: Subset<T, SharedWorkspaceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SharedWorkspaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SharedWorkspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedWorkspaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SharedWorkspaceAggregateArgs>(args: Subset<T, SharedWorkspaceAggregateArgs>): PrismaPromise<GetSharedWorkspaceAggregateType<T>>

    /**
     * Group by SharedWorkspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedWorkspaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SharedWorkspaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SharedWorkspaceGroupByArgs['orderBy'] }
        : { orderBy?: SharedWorkspaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SharedWorkspaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSharedWorkspaceGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SharedWorkspace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SharedWorkspaceClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    workspaceId<T extends WorkSpaceArgs = {}>(args?: Subset<T, WorkSpaceArgs>): CheckSelect<T, Prisma__WorkSpaceClient<WorkSpace | null >, Prisma__WorkSpaceClient<WorkSpaceGetPayload<T> | null >>;

    user_id<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SharedWorkspace base type for findUnique actions
   */
  export type SharedWorkspaceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the SharedWorkspace
     * 
    **/
    select?: SharedWorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SharedWorkspaceInclude | null
    /**
     * Filter, which SharedWorkspace to fetch.
     * 
    **/
    where: SharedWorkspaceWhereUniqueInput
  }

  /**
   * SharedWorkspace: findUnique
   */
  export interface SharedWorkspaceFindUniqueArgs extends SharedWorkspaceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SharedWorkspace base type for findFirst actions
   */
  export type SharedWorkspaceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the SharedWorkspace
     * 
    **/
    select?: SharedWorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SharedWorkspaceInclude | null
    /**
     * Filter, which SharedWorkspace to fetch.
     * 
    **/
    where?: SharedWorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedWorkspaces to fetch.
     * 
    **/
    orderBy?: Enumerable<SharedWorkspaceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SharedWorkspaces.
     * 
    **/
    cursor?: SharedWorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedWorkspaces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedWorkspaces.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharedWorkspaces.
     * 
    **/
    distinct?: Enumerable<SharedWorkspaceScalarFieldEnum>
  }

  /**
   * SharedWorkspace: findFirst
   */
  export interface SharedWorkspaceFindFirstArgs extends SharedWorkspaceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SharedWorkspace findMany
   */
  export type SharedWorkspaceFindManyArgs = {
    /**
     * Select specific fields to fetch from the SharedWorkspace
     * 
    **/
    select?: SharedWorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SharedWorkspaceInclude | null
    /**
     * Filter, which SharedWorkspaces to fetch.
     * 
    **/
    where?: SharedWorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedWorkspaces to fetch.
     * 
    **/
    orderBy?: Enumerable<SharedWorkspaceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SharedWorkspaces.
     * 
    **/
    cursor?: SharedWorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedWorkspaces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedWorkspaces.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SharedWorkspaceScalarFieldEnum>
  }


  /**
   * SharedWorkspace create
   */
  export type SharedWorkspaceCreateArgs = {
    /**
     * Select specific fields to fetch from the SharedWorkspace
     * 
    **/
    select?: SharedWorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SharedWorkspaceInclude | null
    /**
     * The data needed to create a SharedWorkspace.
     * 
    **/
    data: XOR<SharedWorkspaceCreateInput, SharedWorkspaceUncheckedCreateInput>
  }


  /**
   * SharedWorkspace createMany
   */
  export type SharedWorkspaceCreateManyArgs = {
    /**
     * The data used to create many SharedWorkspaces.
     * 
    **/
    data: Enumerable<SharedWorkspaceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SharedWorkspace update
   */
  export type SharedWorkspaceUpdateArgs = {
    /**
     * Select specific fields to fetch from the SharedWorkspace
     * 
    **/
    select?: SharedWorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SharedWorkspaceInclude | null
    /**
     * The data needed to update a SharedWorkspace.
     * 
    **/
    data: XOR<SharedWorkspaceUpdateInput, SharedWorkspaceUncheckedUpdateInput>
    /**
     * Choose, which SharedWorkspace to update.
     * 
    **/
    where: SharedWorkspaceWhereUniqueInput
  }


  /**
   * SharedWorkspace updateMany
   */
  export type SharedWorkspaceUpdateManyArgs = {
    /**
     * The data used to update SharedWorkspaces.
     * 
    **/
    data: XOR<SharedWorkspaceUpdateManyMutationInput, SharedWorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which SharedWorkspaces to update
     * 
    **/
    where?: SharedWorkspaceWhereInput
  }


  /**
   * SharedWorkspace upsert
   */
  export type SharedWorkspaceUpsertArgs = {
    /**
     * Select specific fields to fetch from the SharedWorkspace
     * 
    **/
    select?: SharedWorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SharedWorkspaceInclude | null
    /**
     * The filter to search for the SharedWorkspace to update in case it exists.
     * 
    **/
    where: SharedWorkspaceWhereUniqueInput
    /**
     * In case the SharedWorkspace found by the `where` argument doesn't exist, create a new SharedWorkspace with this data.
     * 
    **/
    create: XOR<SharedWorkspaceCreateInput, SharedWorkspaceUncheckedCreateInput>
    /**
     * In case the SharedWorkspace was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SharedWorkspaceUpdateInput, SharedWorkspaceUncheckedUpdateInput>
  }


  /**
   * SharedWorkspace delete
   */
  export type SharedWorkspaceDeleteArgs = {
    /**
     * Select specific fields to fetch from the SharedWorkspace
     * 
    **/
    select?: SharedWorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SharedWorkspaceInclude | null
    /**
     * Filter which SharedWorkspace to delete.
     * 
    **/
    where: SharedWorkspaceWhereUniqueInput
  }


  /**
   * SharedWorkspace deleteMany
   */
  export type SharedWorkspaceDeleteManyArgs = {
    /**
     * Filter which SharedWorkspaces to delete
     * 
    **/
    where?: SharedWorkspaceWhereInput
  }


  /**
   * SharedWorkspace: findUniqueOrThrow
   */
  export type SharedWorkspaceFindUniqueOrThrowArgs = SharedWorkspaceFindUniqueArgsBase
      

  /**
   * SharedWorkspace: findFirstOrThrow
   */
  export type SharedWorkspaceFindFirstOrThrowArgs = SharedWorkspaceFindFirstArgsBase
      

  /**
   * SharedWorkspace without action
   */
  export type SharedWorkspaceArgs = {
    /**
     * Select specific fields to fetch from the SharedWorkspace
     * 
    **/
    select?: SharedWorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SharedWorkspaceInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    status: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    status: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    status: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    status?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    status?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    status?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    status: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    workspaces?: boolean | WorkSpaceFindManyArgs
    SharedWorkspace?: boolean | SharedWorkspaceFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    workspaces?: boolean | WorkSpaceFindManyArgs
    SharedWorkspace?: boolean | SharedWorkspaceFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'workspaces' ? Array < WorkSpaceGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'SharedWorkspace' ? Array < SharedWorkspaceGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'workspaces' ? Array < WorkSpaceGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'SharedWorkspace' ? Array < SharedWorkspaceGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    workspaces<T extends WorkSpaceFindManyArgs = {}>(args?: Subset<T, WorkSpaceFindManyArgs>): CheckSelect<T, PrismaPromise<Array<WorkSpace>>, PrismaPromise<Array<WorkSpaceGetPayload<T>>>>;

    SharedWorkspace<T extends SharedWorkspaceFindManyArgs = {}>(args?: Subset<T, SharedWorkspaceFindManyArgs>): CheckSelect<T, PrismaPromise<Array<SharedWorkspace>>, PrismaPromise<Array<SharedWorkspaceGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const SharedWorkspaceScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type SharedWorkspaceScalarFieldEnum = (typeof SharedWorkspaceScalarFieldEnum)[keyof typeof SharedWorkspaceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    status: 'status'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorkSpaceScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type WorkSpaceScalarFieldEnum = (typeof WorkSpaceScalarFieldEnum)[keyof typeof WorkSpaceScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type WorkSpaceWhereInput = {
    AND?: Enumerable<WorkSpaceWhereInput>
    OR?: Enumerable<WorkSpaceWhereInput>
    NOT?: Enumerable<WorkSpaceWhereInput>
    id?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: StringFilter | string
    SharedWorkspace?: XOR<SharedWorkspaceRelationFilter, SharedWorkspaceWhereInput> | null
  }

  export type WorkSpaceOrderByWithRelationInput = {
    id?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
    SharedWorkspace?: SharedWorkspaceOrderByWithRelationInput
  }

  export type WorkSpaceWhereUniqueInput = {
    id?: string
  }

  export type WorkSpaceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: WorkSpaceCountOrderByAggregateInput
    _max?: WorkSpaceMaxOrderByAggregateInput
    _min?: WorkSpaceMinOrderByAggregateInput
  }

  export type WorkSpaceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WorkSpaceScalarWhereWithAggregatesInput>
    OR?: Enumerable<WorkSpaceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WorkSpaceScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
  }

  export type SharedWorkspaceWhereInput = {
    AND?: Enumerable<SharedWorkspaceWhereInput>
    OR?: Enumerable<SharedWorkspaceWhereInput>
    NOT?: Enumerable<SharedWorkspaceWhereInput>
    id?: StringFilter | string
    workspaceId?: XOR<WorkSpaceRelationFilter, WorkSpaceWhereInput>
    user_id?: XOR<UserRelationFilter, UserWhereInput>
    userId?: StringFilter | string
  }

  export type SharedWorkspaceOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: WorkSpaceOrderByWithRelationInput
    user_id?: UserOrderByWithRelationInput
    userId?: SortOrder
  }

  export type SharedWorkspaceWhereUniqueInput = {
    id?: string
  }

  export type SharedWorkspaceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: SharedWorkspaceCountOrderByAggregateInput
    _max?: SharedWorkspaceMaxOrderByAggregateInput
    _min?: SharedWorkspaceMinOrderByAggregateInput
  }

  export type SharedWorkspaceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SharedWorkspaceScalarWhereWithAggregatesInput>
    OR?: Enumerable<SharedWorkspaceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SharedWorkspaceScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    status?: StringFilter | string
    workspaces?: WorkSpaceListRelationFilter
    SharedWorkspace?: SharedWorkspaceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    workspaces?: WorkSpaceOrderByRelationAggregateInput
    SharedWorkspace?: SharedWorkspaceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    status?: StringWithAggregatesFilter | string
  }

  export type WorkSpaceCreateInput = {
    id: string
    user: UserCreateNestedOneWithoutWorkspacesInput
    SharedWorkspace?: SharedWorkspaceCreateNestedOneWithoutWorkspaceIdInput
  }

  export type WorkSpaceUncheckedCreateInput = {
    id: string
    userId: string
    SharedWorkspace?: SharedWorkspaceUncheckedCreateNestedOneWithoutWorkspaceIdInput
  }

  export type WorkSpaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutWorkspacesNestedInput
    SharedWorkspace?: SharedWorkspaceUpdateOneWithoutWorkspaceIdNestedInput
  }

  export type WorkSpaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    SharedWorkspace?: SharedWorkspaceUncheckedUpdateOneWithoutWorkspaceIdNestedInput
  }

  export type WorkSpaceCreateManyInput = {
    id: string
    userId: string
  }

  export type WorkSpaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type WorkSpaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SharedWorkspaceCreateInput = {
    workspaceId: WorkSpaceCreateNestedOneWithoutSharedWorkspaceInput
    user_id: UserCreateNestedOneWithoutSharedWorkspaceInput
  }

  export type SharedWorkspaceUncheckedCreateInput = {
    id: string
    userId: string
  }

  export type SharedWorkspaceUpdateInput = {
    workspaceId?: WorkSpaceUpdateOneRequiredWithoutSharedWorkspaceNestedInput
    user_id?: UserUpdateOneRequiredWithoutSharedWorkspaceNestedInput
  }

  export type SharedWorkspaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SharedWorkspaceCreateManyInput = {
    id: string
    userId: string
  }

  export type SharedWorkspaceUpdateManyMutationInput = {

  }

  export type SharedWorkspaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id: string
    email: string
    password: string
    status?: string
    workspaces?: WorkSpaceCreateNestedManyWithoutUserInput
    SharedWorkspace?: SharedWorkspaceCreateNestedManyWithoutUser_idInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    email: string
    password: string
    status?: string
    workspaces?: WorkSpaceUncheckedCreateNestedManyWithoutUserInput
    SharedWorkspace?: SharedWorkspaceUncheckedCreateNestedManyWithoutUser_idInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    workspaces?: WorkSpaceUpdateManyWithoutUserNestedInput
    SharedWorkspace?: SharedWorkspaceUpdateManyWithoutUser_idNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    workspaces?: WorkSpaceUncheckedUpdateManyWithoutUserNestedInput
    SharedWorkspace?: SharedWorkspaceUncheckedUpdateManyWithoutUser_idNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    email: string
    password: string
    status?: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SharedWorkspaceRelationFilter = {
    is?: SharedWorkspaceWhereInput | null
    isNot?: SharedWorkspaceWhereInput | null
  }

  export type WorkSpaceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type WorkSpaceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type WorkSpaceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type WorkSpaceRelationFilter = {
    is?: WorkSpaceWhereInput
    isNot?: WorkSpaceWhereInput
  }

  export type SharedWorkspaceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SharedWorkspaceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SharedWorkspaceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type WorkSpaceListRelationFilter = {
    every?: WorkSpaceWhereInput
    some?: WorkSpaceWhereInput
    none?: WorkSpaceWhereInput
  }

  export type SharedWorkspaceListRelationFilter = {
    every?: SharedWorkspaceWhereInput
    some?: SharedWorkspaceWhereInput
    none?: SharedWorkspaceWhereInput
  }

  export type WorkSpaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SharedWorkspaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
  }

  export type UserCreateNestedOneWithoutWorkspacesInput = {
    create?: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspacesInput
    connect?: UserWhereUniqueInput
  }

  export type SharedWorkspaceCreateNestedOneWithoutWorkspaceIdInput = {
    create?: XOR<SharedWorkspaceCreateWithoutWorkspaceIdInput, SharedWorkspaceUncheckedCreateWithoutWorkspaceIdInput>
    connectOrCreate?: SharedWorkspaceCreateOrConnectWithoutWorkspaceIdInput
    connect?: SharedWorkspaceWhereUniqueInput
  }

  export type SharedWorkspaceUncheckedCreateNestedOneWithoutWorkspaceIdInput = {
    create?: XOR<SharedWorkspaceCreateWithoutWorkspaceIdInput, SharedWorkspaceUncheckedCreateWithoutWorkspaceIdInput>
    connectOrCreate?: SharedWorkspaceCreateOrConnectWithoutWorkspaceIdInput
    connect?: SharedWorkspaceWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateOneRequiredWithoutWorkspacesNestedInput = {
    create?: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspacesInput
    upsert?: UserUpsertWithoutWorkspacesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutWorkspacesInput, UserUncheckedUpdateWithoutWorkspacesInput>
  }

  export type SharedWorkspaceUpdateOneWithoutWorkspaceIdNestedInput = {
    create?: XOR<SharedWorkspaceCreateWithoutWorkspaceIdInput, SharedWorkspaceUncheckedCreateWithoutWorkspaceIdInput>
    connectOrCreate?: SharedWorkspaceCreateOrConnectWithoutWorkspaceIdInput
    upsert?: SharedWorkspaceUpsertWithoutWorkspaceIdInput
    disconnect?: boolean
    delete?: boolean
    connect?: SharedWorkspaceWhereUniqueInput
    update?: XOR<SharedWorkspaceUpdateWithoutWorkspaceIdInput, SharedWorkspaceUncheckedUpdateWithoutWorkspaceIdInput>
  }

  export type SharedWorkspaceUncheckedUpdateOneWithoutWorkspaceIdNestedInput = {
    create?: XOR<SharedWorkspaceCreateWithoutWorkspaceIdInput, SharedWorkspaceUncheckedCreateWithoutWorkspaceIdInput>
    connectOrCreate?: SharedWorkspaceCreateOrConnectWithoutWorkspaceIdInput
    upsert?: SharedWorkspaceUpsertWithoutWorkspaceIdInput
    disconnect?: boolean
    delete?: boolean
    connect?: SharedWorkspaceWhereUniqueInput
    update?: XOR<SharedWorkspaceUpdateWithoutWorkspaceIdInput, SharedWorkspaceUncheckedUpdateWithoutWorkspaceIdInput>
  }

  export type WorkSpaceCreateNestedOneWithoutSharedWorkspaceInput = {
    create?: XOR<WorkSpaceCreateWithoutSharedWorkspaceInput, WorkSpaceUncheckedCreateWithoutSharedWorkspaceInput>
    connectOrCreate?: WorkSpaceCreateOrConnectWithoutSharedWorkspaceInput
    connect?: WorkSpaceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSharedWorkspaceInput = {
    create?: XOR<UserCreateWithoutSharedWorkspaceInput, UserUncheckedCreateWithoutSharedWorkspaceInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedWorkspaceInput
    connect?: UserWhereUniqueInput
  }

  export type WorkSpaceUpdateOneRequiredWithoutSharedWorkspaceNestedInput = {
    create?: XOR<WorkSpaceCreateWithoutSharedWorkspaceInput, WorkSpaceUncheckedCreateWithoutSharedWorkspaceInput>
    connectOrCreate?: WorkSpaceCreateOrConnectWithoutSharedWorkspaceInput
    upsert?: WorkSpaceUpsertWithoutSharedWorkspaceInput
    connect?: WorkSpaceWhereUniqueInput
    update?: XOR<WorkSpaceUpdateWithoutSharedWorkspaceInput, WorkSpaceUncheckedUpdateWithoutSharedWorkspaceInput>
  }

  export type UserUpdateOneRequiredWithoutSharedWorkspaceNestedInput = {
    create?: XOR<UserCreateWithoutSharedWorkspaceInput, UserUncheckedCreateWithoutSharedWorkspaceInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedWorkspaceInput
    upsert?: UserUpsertWithoutSharedWorkspaceInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSharedWorkspaceInput, UserUncheckedUpdateWithoutSharedWorkspaceInput>
  }

  export type WorkSpaceCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<WorkSpaceCreateWithoutUserInput>, Enumerable<WorkSpaceUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WorkSpaceCreateOrConnectWithoutUserInput>
    createMany?: WorkSpaceCreateManyUserInputEnvelope
    connect?: Enumerable<WorkSpaceWhereUniqueInput>
  }

  export type SharedWorkspaceCreateNestedManyWithoutUser_idInput = {
    create?: XOR<Enumerable<SharedWorkspaceCreateWithoutUser_idInput>, Enumerable<SharedWorkspaceUncheckedCreateWithoutUser_idInput>>
    connectOrCreate?: Enumerable<SharedWorkspaceCreateOrConnectWithoutUser_idInput>
    createMany?: SharedWorkspaceCreateManyUser_idInputEnvelope
    connect?: Enumerable<SharedWorkspaceWhereUniqueInput>
  }

  export type WorkSpaceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<WorkSpaceCreateWithoutUserInput>, Enumerable<WorkSpaceUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WorkSpaceCreateOrConnectWithoutUserInput>
    createMany?: WorkSpaceCreateManyUserInputEnvelope
    connect?: Enumerable<WorkSpaceWhereUniqueInput>
  }

  export type SharedWorkspaceUncheckedCreateNestedManyWithoutUser_idInput = {
    create?: XOR<Enumerable<SharedWorkspaceCreateWithoutUser_idInput>, Enumerable<SharedWorkspaceUncheckedCreateWithoutUser_idInput>>
    connectOrCreate?: Enumerable<SharedWorkspaceCreateOrConnectWithoutUser_idInput>
    createMany?: SharedWorkspaceCreateManyUser_idInputEnvelope
    connect?: Enumerable<SharedWorkspaceWhereUniqueInput>
  }

  export type WorkSpaceUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<WorkSpaceCreateWithoutUserInput>, Enumerable<WorkSpaceUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WorkSpaceCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<WorkSpaceUpsertWithWhereUniqueWithoutUserInput>
    createMany?: WorkSpaceCreateManyUserInputEnvelope
    set?: Enumerable<WorkSpaceWhereUniqueInput>
    disconnect?: Enumerable<WorkSpaceWhereUniqueInput>
    delete?: Enumerable<WorkSpaceWhereUniqueInput>
    connect?: Enumerable<WorkSpaceWhereUniqueInput>
    update?: Enumerable<WorkSpaceUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<WorkSpaceUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<WorkSpaceScalarWhereInput>
  }

  export type SharedWorkspaceUpdateManyWithoutUser_idNestedInput = {
    create?: XOR<Enumerable<SharedWorkspaceCreateWithoutUser_idInput>, Enumerable<SharedWorkspaceUncheckedCreateWithoutUser_idInput>>
    connectOrCreate?: Enumerable<SharedWorkspaceCreateOrConnectWithoutUser_idInput>
    upsert?: Enumerable<SharedWorkspaceUpsertWithWhereUniqueWithoutUser_idInput>
    createMany?: SharedWorkspaceCreateManyUser_idInputEnvelope
    set?: Enumerable<SharedWorkspaceWhereUniqueInput>
    disconnect?: Enumerable<SharedWorkspaceWhereUniqueInput>
    delete?: Enumerable<SharedWorkspaceWhereUniqueInput>
    connect?: Enumerable<SharedWorkspaceWhereUniqueInput>
    update?: Enumerable<SharedWorkspaceUpdateWithWhereUniqueWithoutUser_idInput>
    updateMany?: Enumerable<SharedWorkspaceUpdateManyWithWhereWithoutUser_idInput>
    deleteMany?: Enumerable<SharedWorkspaceScalarWhereInput>
  }

  export type WorkSpaceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<WorkSpaceCreateWithoutUserInput>, Enumerable<WorkSpaceUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WorkSpaceCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<WorkSpaceUpsertWithWhereUniqueWithoutUserInput>
    createMany?: WorkSpaceCreateManyUserInputEnvelope
    set?: Enumerable<WorkSpaceWhereUniqueInput>
    disconnect?: Enumerable<WorkSpaceWhereUniqueInput>
    delete?: Enumerable<WorkSpaceWhereUniqueInput>
    connect?: Enumerable<WorkSpaceWhereUniqueInput>
    update?: Enumerable<WorkSpaceUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<WorkSpaceUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<WorkSpaceScalarWhereInput>
  }

  export type SharedWorkspaceUncheckedUpdateManyWithoutUser_idNestedInput = {
    create?: XOR<Enumerable<SharedWorkspaceCreateWithoutUser_idInput>, Enumerable<SharedWorkspaceUncheckedCreateWithoutUser_idInput>>
    connectOrCreate?: Enumerable<SharedWorkspaceCreateOrConnectWithoutUser_idInput>
    upsert?: Enumerable<SharedWorkspaceUpsertWithWhereUniqueWithoutUser_idInput>
    createMany?: SharedWorkspaceCreateManyUser_idInputEnvelope
    set?: Enumerable<SharedWorkspaceWhereUniqueInput>
    disconnect?: Enumerable<SharedWorkspaceWhereUniqueInput>
    delete?: Enumerable<SharedWorkspaceWhereUniqueInput>
    connect?: Enumerable<SharedWorkspaceWhereUniqueInput>
    update?: Enumerable<SharedWorkspaceUpdateWithWhereUniqueWithoutUser_idInput>
    updateMany?: Enumerable<SharedWorkspaceUpdateManyWithWhereWithoutUser_idInput>
    deleteMany?: Enumerable<SharedWorkspaceScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type UserCreateWithoutWorkspacesInput = {
    id: string
    email: string
    password: string
    status?: string
    SharedWorkspace?: SharedWorkspaceCreateNestedManyWithoutUser_idInput
  }

  export type UserUncheckedCreateWithoutWorkspacesInput = {
    id: string
    email: string
    password: string
    status?: string
    SharedWorkspace?: SharedWorkspaceUncheckedCreateNestedManyWithoutUser_idInput
  }

  export type UserCreateOrConnectWithoutWorkspacesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
  }

  export type SharedWorkspaceCreateWithoutWorkspaceIdInput = {
    user_id: UserCreateNestedOneWithoutSharedWorkspaceInput
  }

  export type SharedWorkspaceUncheckedCreateWithoutWorkspaceIdInput = {
    userId: string
  }

  export type SharedWorkspaceCreateOrConnectWithoutWorkspaceIdInput = {
    where: SharedWorkspaceWhereUniqueInput
    create: XOR<SharedWorkspaceCreateWithoutWorkspaceIdInput, SharedWorkspaceUncheckedCreateWithoutWorkspaceIdInput>
  }

  export type UserUpsertWithoutWorkspacesInput = {
    update: XOR<UserUpdateWithoutWorkspacesInput, UserUncheckedUpdateWithoutWorkspacesInput>
    create: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
  }

  export type UserUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    SharedWorkspace?: SharedWorkspaceUpdateManyWithoutUser_idNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    SharedWorkspace?: SharedWorkspaceUncheckedUpdateManyWithoutUser_idNestedInput
  }

  export type SharedWorkspaceUpsertWithoutWorkspaceIdInput = {
    update: XOR<SharedWorkspaceUpdateWithoutWorkspaceIdInput, SharedWorkspaceUncheckedUpdateWithoutWorkspaceIdInput>
    create: XOR<SharedWorkspaceCreateWithoutWorkspaceIdInput, SharedWorkspaceUncheckedCreateWithoutWorkspaceIdInput>
  }

  export type SharedWorkspaceUpdateWithoutWorkspaceIdInput = {
    user_id?: UserUpdateOneRequiredWithoutSharedWorkspaceNestedInput
  }

  export type SharedWorkspaceUncheckedUpdateWithoutWorkspaceIdInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkSpaceCreateWithoutSharedWorkspaceInput = {
    id: string
    user: UserCreateNestedOneWithoutWorkspacesInput
  }

  export type WorkSpaceUncheckedCreateWithoutSharedWorkspaceInput = {
    id: string
    userId: string
  }

  export type WorkSpaceCreateOrConnectWithoutSharedWorkspaceInput = {
    where: WorkSpaceWhereUniqueInput
    create: XOR<WorkSpaceCreateWithoutSharedWorkspaceInput, WorkSpaceUncheckedCreateWithoutSharedWorkspaceInput>
  }

  export type UserCreateWithoutSharedWorkspaceInput = {
    id: string
    email: string
    password: string
    status?: string
    workspaces?: WorkSpaceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSharedWorkspaceInput = {
    id: string
    email: string
    password: string
    status?: string
    workspaces?: WorkSpaceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSharedWorkspaceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSharedWorkspaceInput, UserUncheckedCreateWithoutSharedWorkspaceInput>
  }

  export type WorkSpaceUpsertWithoutSharedWorkspaceInput = {
    update: XOR<WorkSpaceUpdateWithoutSharedWorkspaceInput, WorkSpaceUncheckedUpdateWithoutSharedWorkspaceInput>
    create: XOR<WorkSpaceCreateWithoutSharedWorkspaceInput, WorkSpaceUncheckedCreateWithoutSharedWorkspaceInput>
  }

  export type WorkSpaceUpdateWithoutSharedWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutWorkspacesNestedInput
  }

  export type WorkSpaceUncheckedUpdateWithoutSharedWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutSharedWorkspaceInput = {
    update: XOR<UserUpdateWithoutSharedWorkspaceInput, UserUncheckedUpdateWithoutSharedWorkspaceInput>
    create: XOR<UserCreateWithoutSharedWorkspaceInput, UserUncheckedCreateWithoutSharedWorkspaceInput>
  }

  export type UserUpdateWithoutSharedWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    workspaces?: WorkSpaceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSharedWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    workspaces?: WorkSpaceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkSpaceCreateWithoutUserInput = {
    id: string
    SharedWorkspace?: SharedWorkspaceCreateNestedOneWithoutWorkspaceIdInput
  }

  export type WorkSpaceUncheckedCreateWithoutUserInput = {
    id: string
    SharedWorkspace?: SharedWorkspaceUncheckedCreateNestedOneWithoutWorkspaceIdInput
  }

  export type WorkSpaceCreateOrConnectWithoutUserInput = {
    where: WorkSpaceWhereUniqueInput
    create: XOR<WorkSpaceCreateWithoutUserInput, WorkSpaceUncheckedCreateWithoutUserInput>
  }

  export type WorkSpaceCreateManyUserInputEnvelope = {
    data: Enumerable<WorkSpaceCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type SharedWorkspaceCreateWithoutUser_idInput = {
    workspaceId: WorkSpaceCreateNestedOneWithoutSharedWorkspaceInput
  }

  export type SharedWorkspaceUncheckedCreateWithoutUser_idInput = {
    id: string
  }

  export type SharedWorkspaceCreateOrConnectWithoutUser_idInput = {
    where: SharedWorkspaceWhereUniqueInput
    create: XOR<SharedWorkspaceCreateWithoutUser_idInput, SharedWorkspaceUncheckedCreateWithoutUser_idInput>
  }

  export type SharedWorkspaceCreateManyUser_idInputEnvelope = {
    data: Enumerable<SharedWorkspaceCreateManyUser_idInput>
    skipDuplicates?: boolean
  }

  export type WorkSpaceUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkSpaceWhereUniqueInput
    update: XOR<WorkSpaceUpdateWithoutUserInput, WorkSpaceUncheckedUpdateWithoutUserInput>
    create: XOR<WorkSpaceCreateWithoutUserInput, WorkSpaceUncheckedCreateWithoutUserInput>
  }

  export type WorkSpaceUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkSpaceWhereUniqueInput
    data: XOR<WorkSpaceUpdateWithoutUserInput, WorkSpaceUncheckedUpdateWithoutUserInput>
  }

  export type WorkSpaceUpdateManyWithWhereWithoutUserInput = {
    where: WorkSpaceScalarWhereInput
    data: XOR<WorkSpaceUpdateManyMutationInput, WorkSpaceUncheckedUpdateManyWithoutWorkspacesInput>
  }

  export type WorkSpaceScalarWhereInput = {
    AND?: Enumerable<WorkSpaceScalarWhereInput>
    OR?: Enumerable<WorkSpaceScalarWhereInput>
    NOT?: Enumerable<WorkSpaceScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
  }

  export type SharedWorkspaceUpsertWithWhereUniqueWithoutUser_idInput = {
    where: SharedWorkspaceWhereUniqueInput
    update: XOR<SharedWorkspaceUpdateWithoutUser_idInput, SharedWorkspaceUncheckedUpdateWithoutUser_idInput>
    create: XOR<SharedWorkspaceCreateWithoutUser_idInput, SharedWorkspaceUncheckedCreateWithoutUser_idInput>
  }

  export type SharedWorkspaceUpdateWithWhereUniqueWithoutUser_idInput = {
    where: SharedWorkspaceWhereUniqueInput
    data: XOR<SharedWorkspaceUpdateWithoutUser_idInput, SharedWorkspaceUncheckedUpdateWithoutUser_idInput>
  }

  export type SharedWorkspaceUpdateManyWithWhereWithoutUser_idInput = {
    where: SharedWorkspaceScalarWhereInput
    data: XOR<SharedWorkspaceUpdateManyMutationInput, SharedWorkspaceUncheckedUpdateManyWithoutSharedWorkspaceInput>
  }

  export type SharedWorkspaceScalarWhereInput = {
    AND?: Enumerable<SharedWorkspaceScalarWhereInput>
    OR?: Enumerable<SharedWorkspaceScalarWhereInput>
    NOT?: Enumerable<SharedWorkspaceScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
  }

  export type WorkSpaceCreateManyUserInput = {
    id: string
  }

  export type SharedWorkspaceCreateManyUser_idInput = {
    id: string
  }

  export type WorkSpaceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    SharedWorkspace?: SharedWorkspaceUpdateOneWithoutWorkspaceIdNestedInput
  }

  export type WorkSpaceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    SharedWorkspace?: SharedWorkspaceUncheckedUpdateOneWithoutWorkspaceIdNestedInput
  }

  export type WorkSpaceUncheckedUpdateManyWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type SharedWorkspaceUpdateWithoutUser_idInput = {
    workspaceId?: WorkSpaceUpdateOneRequiredWithoutSharedWorkspaceNestedInput
  }

  export type SharedWorkspaceUncheckedUpdateWithoutUser_idInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type SharedWorkspaceUncheckedUpdateManyWithoutSharedWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}