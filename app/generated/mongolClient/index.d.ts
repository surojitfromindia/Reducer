
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
 * Model TestTable
 * 
 */
export type TestTable = {
  id: string
  test_name: string
  test_age: number
  boo_data: Prisma.JsonValue
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TestTables
 * const testTables = await prisma.testTable.findMany()
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
   * // Fetch zero or more TestTables
   * const testTables = await prisma.testTable.findMany()
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
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): PrismaPromise<Prisma.JsonObject>;

      /**
   * `prisma.testTable`: Exposes CRUD operations for the **TestTable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestTables
    * const testTables = await prisma.testTable.findMany()
    * ```
    */
  get testTable(): Prisma.TestTableDelegate<GlobalReject>;
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
    TestTable: 'TestTable'
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
   * Models
   */

  /**
   * Model TestTable
   */


  export type AggregateTestTable = {
    _count: TestTableCountAggregateOutputType | null
    _avg: TestTableAvgAggregateOutputType | null
    _sum: TestTableSumAggregateOutputType | null
    _min: TestTableMinAggregateOutputType | null
    _max: TestTableMaxAggregateOutputType | null
  }

  export type TestTableAvgAggregateOutputType = {
    test_age: number | null
  }

  export type TestTableSumAggregateOutputType = {
    test_age: number | null
  }

  export type TestTableMinAggregateOutputType = {
    id: string | null
    test_name: string | null
    test_age: number | null
  }

  export type TestTableMaxAggregateOutputType = {
    id: string | null
    test_name: string | null
    test_age: number | null
  }

  export type TestTableCountAggregateOutputType = {
    id: number
    test_name: number
    test_age: number
    boo_data: number
    _all: number
  }


  export type TestTableAvgAggregateInputType = {
    test_age?: true
  }

  export type TestTableSumAggregateInputType = {
    test_age?: true
  }

  export type TestTableMinAggregateInputType = {
    id?: true
    test_name?: true
    test_age?: true
  }

  export type TestTableMaxAggregateInputType = {
    id?: true
    test_name?: true
    test_age?: true
  }

  export type TestTableCountAggregateInputType = {
    id?: true
    test_name?: true
    test_age?: true
    boo_data?: true
    _all?: true
  }

  export type TestTableAggregateArgs = {
    /**
     * Filter which TestTable to aggregate.
     * 
    **/
    where?: TestTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestTables to fetch.
     * 
    **/
    orderBy?: Enumerable<TestTableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TestTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestTables from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestTables.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestTables
    **/
    _count?: true | TestTableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestTableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestTableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestTableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestTableMaxAggregateInputType
  }

  export type GetTestTableAggregateType<T extends TestTableAggregateArgs> = {
        [P in keyof T & keyof AggregateTestTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestTable[P]>
      : GetScalarType<T[P], AggregateTestTable[P]>
  }




  export type TestTableGroupByArgs = {
    where?: TestTableWhereInput
    orderBy?: Enumerable<TestTableOrderByWithAggregationInput>
    by: Array<TestTableScalarFieldEnum>
    having?: TestTableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestTableCountAggregateInputType | true
    _avg?: TestTableAvgAggregateInputType
    _sum?: TestTableSumAggregateInputType
    _min?: TestTableMinAggregateInputType
    _max?: TestTableMaxAggregateInputType
  }


  export type TestTableGroupByOutputType = {
    id: string
    test_name: string
    test_age: number
    boo_data: JsonValue
    _count: TestTableCountAggregateOutputType | null
    _avg: TestTableAvgAggregateOutputType | null
    _sum: TestTableSumAggregateOutputType | null
    _min: TestTableMinAggregateOutputType | null
    _max: TestTableMaxAggregateOutputType | null
  }

  type GetTestTableGroupByPayload<T extends TestTableGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TestTableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestTableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestTableGroupByOutputType[P]>
            : GetScalarType<T[P], TestTableGroupByOutputType[P]>
        }
      >
    >


  export type TestTableSelect = {
    id?: boolean
    test_name?: boolean
    test_age?: boolean
    boo_data?: boolean
  }

  export type TestTableGetPayload<
    S extends boolean | null | undefined | TestTableArgs,
    U = keyof S
      > = S extends true
        ? TestTable
    : S extends undefined
    ? never
    : S extends TestTableArgs | TestTableFindManyArgs
    ?'include' extends U
    ? TestTable 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof TestTable ? TestTable[P] : never
  } 
    : TestTable
  : TestTable


  type TestTableCountArgs = Merge<
    Omit<TestTableFindManyArgs, 'select' | 'include'> & {
      select?: TestTableCountAggregateInputType | true
    }
  >

  export interface TestTableDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one TestTable that matches the filter.
     * @param {TestTableFindUniqueArgs} args - Arguments to find a TestTable
     * @example
     * // Get one TestTable
     * const testTable = await prisma.testTable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TestTableFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TestTableFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TestTable'> extends True ? CheckSelect<T, Prisma__TestTableClient<TestTable>, Prisma__TestTableClient<TestTableGetPayload<T>>> : CheckSelect<T, Prisma__TestTableClient<TestTable | null >, Prisma__TestTableClient<TestTableGetPayload<T> | null >>

    /**
     * Find the first TestTable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestTableFindFirstArgs} args - Arguments to find a TestTable
     * @example
     * // Get one TestTable
     * const testTable = await prisma.testTable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TestTableFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TestTableFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TestTable'> extends True ? CheckSelect<T, Prisma__TestTableClient<TestTable>, Prisma__TestTableClient<TestTableGetPayload<T>>> : CheckSelect<T, Prisma__TestTableClient<TestTable | null >, Prisma__TestTableClient<TestTableGetPayload<T> | null >>

    /**
     * Find zero or more TestTables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestTableFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestTables
     * const testTables = await prisma.testTable.findMany()
     * 
     * // Get first 10 TestTables
     * const testTables = await prisma.testTable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testTableWithIdOnly = await prisma.testTable.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TestTableFindManyArgs>(
      args?: SelectSubset<T, TestTableFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<TestTable>>, PrismaPromise<Array<TestTableGetPayload<T>>>>

    /**
     * Create a TestTable.
     * @param {TestTableCreateArgs} args - Arguments to create a TestTable.
     * @example
     * // Create one TestTable
     * const TestTable = await prisma.testTable.create({
     *   data: {
     *     // ... data to create a TestTable
     *   }
     * })
     * 
    **/
    create<T extends TestTableCreateArgs>(
      args: SelectSubset<T, TestTableCreateArgs>
    ): CheckSelect<T, Prisma__TestTableClient<TestTable>, Prisma__TestTableClient<TestTableGetPayload<T>>>

    /**
     * Create many TestTables.
     *     @param {TestTableCreateManyArgs} args - Arguments to create many TestTables.
     *     @example
     *     // Create many TestTables
     *     const testTable = await prisma.testTable.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TestTableCreateManyArgs>(
      args?: SelectSubset<T, TestTableCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a TestTable.
     * @param {TestTableDeleteArgs} args - Arguments to delete one TestTable.
     * @example
     * // Delete one TestTable
     * const TestTable = await prisma.testTable.delete({
     *   where: {
     *     // ... filter to delete one TestTable
     *   }
     * })
     * 
    **/
    delete<T extends TestTableDeleteArgs>(
      args: SelectSubset<T, TestTableDeleteArgs>
    ): CheckSelect<T, Prisma__TestTableClient<TestTable>, Prisma__TestTableClient<TestTableGetPayload<T>>>

    /**
     * Update one TestTable.
     * @param {TestTableUpdateArgs} args - Arguments to update one TestTable.
     * @example
     * // Update one TestTable
     * const testTable = await prisma.testTable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TestTableUpdateArgs>(
      args: SelectSubset<T, TestTableUpdateArgs>
    ): CheckSelect<T, Prisma__TestTableClient<TestTable>, Prisma__TestTableClient<TestTableGetPayload<T>>>

    /**
     * Delete zero or more TestTables.
     * @param {TestTableDeleteManyArgs} args - Arguments to filter TestTables to delete.
     * @example
     * // Delete a few TestTables
     * const { count } = await prisma.testTable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TestTableDeleteManyArgs>(
      args?: SelectSubset<T, TestTableDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestTableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestTables
     * const testTable = await prisma.testTable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TestTableUpdateManyArgs>(
      args: SelectSubset<T, TestTableUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one TestTable.
     * @param {TestTableUpsertArgs} args - Arguments to update or create a TestTable.
     * @example
     * // Update or create a TestTable
     * const testTable = await prisma.testTable.upsert({
     *   create: {
     *     // ... data to create a TestTable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestTable we want to update
     *   }
     * })
    **/
    upsert<T extends TestTableUpsertArgs>(
      args: SelectSubset<T, TestTableUpsertArgs>
    ): CheckSelect<T, Prisma__TestTableClient<TestTable>, Prisma__TestTableClient<TestTableGetPayload<T>>>

    /**
     * Find zero or more TestTables that matches the filter.
     * @param {TestTableFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const testTable = await prisma.testTable.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: TestTableFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TestTable.
     * @param {TestTableAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const testTable = await prisma.testTable.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: TestTableAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one TestTable that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {TestTableFindUniqueOrThrowArgs} args - Arguments to find a TestTable
     * @example
     * // Get one TestTable
     * const testTable = await prisma.testTable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TestTableFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TestTableFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__TestTableClient<TestTable>, Prisma__TestTableClient<TestTableGetPayload<T>>>

    /**
     * Find the first TestTable that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestTableFindFirstOrThrowArgs} args - Arguments to find a TestTable
     * @example
     * // Get one TestTable
     * const testTable = await prisma.testTable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TestTableFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TestTableFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__TestTableClient<TestTable>, Prisma__TestTableClient<TestTableGetPayload<T>>>

    /**
     * Count the number of TestTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestTableCountArgs} args - Arguments to filter TestTables to count.
     * @example
     * // Count the number of TestTables
     * const count = await prisma.testTable.count({
     *   where: {
     *     // ... the filter for the TestTables we want to count
     *   }
     * })
    **/
    count<T extends TestTableCountArgs>(
      args?: Subset<T, TestTableCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestTableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestTableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestTableAggregateArgs>(args: Subset<T, TestTableAggregateArgs>): PrismaPromise<GetTestTableAggregateType<T>>

    /**
     * Group by TestTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestTableGroupByArgs} args - Group by arguments.
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
      T extends TestTableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestTableGroupByArgs['orderBy'] }
        : { orderBy?: TestTableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestTableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestTableGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TestTable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TestTableClient<T> implements PrismaPromise<T> {
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
   * TestTable base type for findUnique actions
   */
  export type TestTableFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TestTable
     * 
    **/
    select?: TestTableSelect | null
    /**
     * Filter, which TestTable to fetch.
     * 
    **/
    where: TestTableWhereUniqueInput
  }

  /**
   * TestTable: findUnique
   */
  export interface TestTableFindUniqueArgs extends TestTableFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TestTable base type for findFirst actions
   */
  export type TestTableFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TestTable
     * 
    **/
    select?: TestTableSelect | null
    /**
     * Filter, which TestTable to fetch.
     * 
    **/
    where?: TestTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestTables to fetch.
     * 
    **/
    orderBy?: Enumerable<TestTableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestTables.
     * 
    **/
    cursor?: TestTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestTables from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestTables.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestTables.
     * 
    **/
    distinct?: Enumerable<TestTableScalarFieldEnum>
  }

  /**
   * TestTable: findFirst
   */
  export interface TestTableFindFirstArgs extends TestTableFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TestTable findMany
   */
  export type TestTableFindManyArgs = {
    /**
     * Select specific fields to fetch from the TestTable
     * 
    **/
    select?: TestTableSelect | null
    /**
     * Filter, which TestTables to fetch.
     * 
    **/
    where?: TestTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestTables to fetch.
     * 
    **/
    orderBy?: Enumerable<TestTableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestTables.
     * 
    **/
    cursor?: TestTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestTables from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestTables.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TestTableScalarFieldEnum>
  }


  /**
   * TestTable create
   */
  export type TestTableCreateArgs = {
    /**
     * Select specific fields to fetch from the TestTable
     * 
    **/
    select?: TestTableSelect | null
    /**
     * The data needed to create a TestTable.
     * 
    **/
    data: XOR<TestTableCreateInput, TestTableUncheckedCreateInput>
  }


  /**
   * TestTable createMany
   */
  export type TestTableCreateManyArgs = {
    /**
     * The data used to create many TestTables.
     * 
    **/
    data: Enumerable<TestTableCreateManyInput>
  }


  /**
   * TestTable update
   */
  export type TestTableUpdateArgs = {
    /**
     * Select specific fields to fetch from the TestTable
     * 
    **/
    select?: TestTableSelect | null
    /**
     * The data needed to update a TestTable.
     * 
    **/
    data: XOR<TestTableUpdateInput, TestTableUncheckedUpdateInput>
    /**
     * Choose, which TestTable to update.
     * 
    **/
    where: TestTableWhereUniqueInput
  }


  /**
   * TestTable updateMany
   */
  export type TestTableUpdateManyArgs = {
    /**
     * The data used to update TestTables.
     * 
    **/
    data: XOR<TestTableUpdateManyMutationInput, TestTableUncheckedUpdateManyInput>
    /**
     * Filter which TestTables to update
     * 
    **/
    where?: TestTableWhereInput
  }


  /**
   * TestTable upsert
   */
  export type TestTableUpsertArgs = {
    /**
     * Select specific fields to fetch from the TestTable
     * 
    **/
    select?: TestTableSelect | null
    /**
     * The filter to search for the TestTable to update in case it exists.
     * 
    **/
    where: TestTableWhereUniqueInput
    /**
     * In case the TestTable found by the `where` argument doesn't exist, create a new TestTable with this data.
     * 
    **/
    create: XOR<TestTableCreateInput, TestTableUncheckedCreateInput>
    /**
     * In case the TestTable was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TestTableUpdateInput, TestTableUncheckedUpdateInput>
  }


  /**
   * TestTable delete
   */
  export type TestTableDeleteArgs = {
    /**
     * Select specific fields to fetch from the TestTable
     * 
    **/
    select?: TestTableSelect | null
    /**
     * Filter which TestTable to delete.
     * 
    **/
    where: TestTableWhereUniqueInput
  }


  /**
   * TestTable deleteMany
   */
  export type TestTableDeleteManyArgs = {
    /**
     * Filter which TestTables to delete
     * 
    **/
    where?: TestTableWhereInput
  }


  /**
   * TestTable findRaw
   */
  export type TestTableFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * TestTable aggregateRaw
   */
  export type TestTableAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * TestTable: findUniqueOrThrow
   */
  export type TestTableFindUniqueOrThrowArgs = TestTableFindUniqueArgsBase
      

  /**
   * TestTable: findFirstOrThrow
   */
  export type TestTableFindFirstOrThrowArgs = TestTableFindFirstArgsBase
      

  /**
   * TestTable without action
   */
  export type TestTableArgs = {
    /**
     * Select specific fields to fetch from the TestTable
     * 
    **/
    select?: TestTableSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TestTableScalarFieldEnum: {
    id: 'id',
    test_name: 'test_name',
    test_age: 'test_age',
    boo_data: 'boo_data'
  };

  export type TestTableScalarFieldEnum = (typeof TestTableScalarFieldEnum)[keyof typeof TestTableScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type TestTableWhereInput = {
    AND?: Enumerable<TestTableWhereInput>
    OR?: Enumerable<TestTableWhereInput>
    NOT?: Enumerable<TestTableWhereInput>
    id?: StringFilter | string
    test_name?: StringFilter | string
    test_age?: IntFilter | number
    boo_data?: JsonFilter
  }

  export type TestTableOrderByWithRelationInput = {
    id?: SortOrder
    test_name?: SortOrder
    test_age?: SortOrder
    boo_data?: SortOrder
  }

  export type TestTableWhereUniqueInput = {
    id?: string
  }

  export type TestTableOrderByWithAggregationInput = {
    id?: SortOrder
    test_name?: SortOrder
    test_age?: SortOrder
    boo_data?: SortOrder
    _count?: TestTableCountOrderByAggregateInput
    _avg?: TestTableAvgOrderByAggregateInput
    _max?: TestTableMaxOrderByAggregateInput
    _min?: TestTableMinOrderByAggregateInput
    _sum?: TestTableSumOrderByAggregateInput
  }

  export type TestTableScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TestTableScalarWhereWithAggregatesInput>
    OR?: Enumerable<TestTableScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TestTableScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    test_name?: StringWithAggregatesFilter | string
    test_age?: IntWithAggregatesFilter | number
    boo_data?: JsonWithAggregatesFilter
  }

  export type TestTableCreateInput = {
    id?: string
    test_name: string
    test_age: number
    boo_data: InputJsonValue
  }

  export type TestTableUncheckedCreateInput = {
    id?: string
    test_name: string
    test_age: number
    boo_data: InputJsonValue
  }

  export type TestTableUpdateInput = {
    test_name?: StringFieldUpdateOperationsInput | string
    test_age?: IntFieldUpdateOperationsInput | number
    boo_data?: InputJsonValue | InputJsonValue
  }

  export type TestTableUncheckedUpdateInput = {
    test_name?: StringFieldUpdateOperationsInput | string
    test_age?: IntFieldUpdateOperationsInput | number
    boo_data?: InputJsonValue | InputJsonValue
  }

  export type TestTableCreateManyInput = {
    id?: string
    test_name: string
    test_age: number
    boo_data: InputJsonValue
  }

  export type TestTableUpdateManyMutationInput = {
    test_name?: StringFieldUpdateOperationsInput | string
    test_age?: IntFieldUpdateOperationsInput | number
    boo_data?: InputJsonValue | InputJsonValue
  }

  export type TestTableUncheckedUpdateManyInput = {
    test_name?: StringFieldUpdateOperationsInput | string
    test_age?: IntFieldUpdateOperationsInput | number
    boo_data?: InputJsonValue | InputJsonValue
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
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue
    not?: InputJsonValue
  }

  export type TestTableCountOrderByAggregateInput = {
    id?: SortOrder
    test_name?: SortOrder
    test_age?: SortOrder
    boo_data?: SortOrder
  }

  export type TestTableAvgOrderByAggregateInput = {
    test_age?: SortOrder
  }

  export type TestTableMaxOrderByAggregateInput = {
    id?: SortOrder
    test_name?: SortOrder
    test_age?: SortOrder
  }

  export type TestTableMinOrderByAggregateInput = {
    id?: SortOrder
    test_name?: SortOrder
    test_age?: SortOrder
  }

  export type TestTableSumOrderByAggregateInput = {
    test_age?: SortOrder
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
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue
    not?: InputJsonValue
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: InputJsonValue
    not?: InputJsonValue
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