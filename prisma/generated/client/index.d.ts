
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model pokemon
 * 
 */
export type pokemon = $Result.DefaultSelection<Prisma.$pokemonPayload>
/**
 * Model pokemon_comment
 * 
 */
export type pokemon_comment = $Result.DefaultSelection<Prisma.$pokemon_commentPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pokemon
 * const pokemon = await prisma.pokemon.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Pokemon
   * const pokemon = await prisma.pokemon.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.pokemon`: Exposes CRUD operations for the **pokemon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pokemon
    * const pokemon = await prisma.pokemon.findMany()
    * ```
    */
  get pokemon(): Prisma.pokemonDelegate<ExtArgs>;

  /**
   * `prisma.pokemon_comment`: Exposes CRUD operations for the **pokemon_comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pokemon_comments
    * const pokemon_comments = await prisma.pokemon_comment.findMany()
    * ```
    */
  get pokemon_comment(): Prisma.pokemon_commentDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.7.0
   * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    pokemon: 'pokemon',
    pokemon_comment: 'pokemon_comment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    efrei?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'pokemon' | 'pokemon_comment'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      pokemon: {
        payload: Prisma.$pokemonPayload<ExtArgs>
        fields: Prisma.pokemonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pokemonFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pokemonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pokemonFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pokemonPayload>
          }
          findFirst: {
            args: Prisma.pokemonFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pokemonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pokemonFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pokemonPayload>
          }
          findMany: {
            args: Prisma.pokemonFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pokemonPayload>[]
          }
          create: {
            args: Prisma.pokemonCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pokemonPayload>
          }
          createMany: {
            args: Prisma.pokemonCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.pokemonDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pokemonPayload>
          }
          update: {
            args: Prisma.pokemonUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pokemonPayload>
          }
          deleteMany: {
            args: Prisma.pokemonDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.pokemonUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.pokemonUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pokemonPayload>
          }
          aggregate: {
            args: Prisma.PokemonAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePokemon>
          }
          groupBy: {
            args: Prisma.pokemonGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PokemonGroupByOutputType>[]
          }
          count: {
            args: Prisma.pokemonCountArgs<ExtArgs>,
            result: $Utils.Optional<PokemonCountAggregateOutputType> | number
          }
        }
      }
      pokemon_comment: {
        payload: Prisma.$pokemon_commentPayload<ExtArgs>
        fields: Prisma.pokemon_commentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pokemon_commentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pokemon_commentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pokemon_commentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pokemon_commentPayload>
          }
          findFirst: {
            args: Prisma.pokemon_commentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pokemon_commentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pokemon_commentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pokemon_commentPayload>
          }
          findMany: {
            args: Prisma.pokemon_commentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pokemon_commentPayload>[]
          }
          create: {
            args: Prisma.pokemon_commentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pokemon_commentPayload>
          }
          createMany: {
            args: Prisma.pokemon_commentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.pokemon_commentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pokemon_commentPayload>
          }
          update: {
            args: Prisma.pokemon_commentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pokemon_commentPayload>
          }
          deleteMany: {
            args: Prisma.pokemon_commentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.pokemon_commentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.pokemon_commentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pokemon_commentPayload>
          }
          aggregate: {
            args: Prisma.Pokemon_commentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePokemon_comment>
          }
          groupBy: {
            args: Prisma.pokemon_commentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Pokemon_commentGroupByOutputType>[]
          }
          count: {
            args: Prisma.pokemon_commentCountArgs<ExtArgs>,
            result: $Utils.Optional<Pokemon_commentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
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
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PokemonCountOutputType
   */

  export type PokemonCountOutputType = {
    pokemon_comment: number
  }

  export type PokemonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemon_comment?: boolean | PokemonCountOutputTypeCountPokemon_commentArgs
  }

  // Custom InputTypes

  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonCountOutputType
     */
    select?: PokemonCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeCountPokemon_commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pokemon_commentWhereInput
  }



  /**
   * Models
   */

  /**
   * Model pokemon
   */

  export type AggregatePokemon = {
    _count: PokemonCountAggregateOutputType | null
    _avg: PokemonAvgAggregateOutputType | null
    _sum: PokemonSumAggregateOutputType | null
    _min: PokemonMinAggregateOutputType | null
    _max: PokemonMaxAggregateOutputType | null
  }

  export type PokemonAvgAggregateOutputType = {
    pokemon_id: number | null
    pokemon_nbr_smashes: number | null
    pokemon_nbr_passes: number | null
  }

  export type PokemonSumAggregateOutputType = {
    pokemon_id: number | null
    pokemon_nbr_smashes: number | null
    pokemon_nbr_passes: number | null
  }

  export type PokemonMinAggregateOutputType = {
    pokemon_id: number | null
    pokemon_name: string | null
    pokemon_type_one: string | null
    pokemon_type_two: string | null
    pokemon_nbr_smashes: number | null
    pokemon_nbr_passes: number | null
  }

  export type PokemonMaxAggregateOutputType = {
    pokemon_id: number | null
    pokemon_name: string | null
    pokemon_type_one: string | null
    pokemon_type_two: string | null
    pokemon_nbr_smashes: number | null
    pokemon_nbr_passes: number | null
  }

  export type PokemonCountAggregateOutputType = {
    pokemon_id: number
    pokemon_name: number
    pokemon_type_one: number
    pokemon_type_two: number
    pokemon_nbr_smashes: number
    pokemon_nbr_passes: number
    _all: number
  }


  export type PokemonAvgAggregateInputType = {
    pokemon_id?: true
    pokemon_nbr_smashes?: true
    pokemon_nbr_passes?: true
  }

  export type PokemonSumAggregateInputType = {
    pokemon_id?: true
    pokemon_nbr_smashes?: true
    pokemon_nbr_passes?: true
  }

  export type PokemonMinAggregateInputType = {
    pokemon_id?: true
    pokemon_name?: true
    pokemon_type_one?: true
    pokemon_type_two?: true
    pokemon_nbr_smashes?: true
    pokemon_nbr_passes?: true
  }

  export type PokemonMaxAggregateInputType = {
    pokemon_id?: true
    pokemon_name?: true
    pokemon_type_one?: true
    pokemon_type_two?: true
    pokemon_nbr_smashes?: true
    pokemon_nbr_passes?: true
  }

  export type PokemonCountAggregateInputType = {
    pokemon_id?: true
    pokemon_name?: true
    pokemon_type_one?: true
    pokemon_type_two?: true
    pokemon_nbr_smashes?: true
    pokemon_nbr_passes?: true
    _all?: true
  }

  export type PokemonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pokemon to aggregate.
     */
    where?: pokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pokemon to fetch.
     */
    orderBy?: pokemonOrderByWithRelationInput | pokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pokemon
    **/
    _count?: true | PokemonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PokemonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PokemonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PokemonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PokemonMaxAggregateInputType
  }

  export type GetPokemonAggregateType<T extends PokemonAggregateArgs> = {
        [P in keyof T & keyof AggregatePokemon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePokemon[P]>
      : GetScalarType<T[P], AggregatePokemon[P]>
  }




  export type pokemonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pokemonWhereInput
    orderBy?: pokemonOrderByWithAggregationInput | pokemonOrderByWithAggregationInput[]
    by: PokemonScalarFieldEnum[] | PokemonScalarFieldEnum
    having?: pokemonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PokemonCountAggregateInputType | true
    _avg?: PokemonAvgAggregateInputType
    _sum?: PokemonSumAggregateInputType
    _min?: PokemonMinAggregateInputType
    _max?: PokemonMaxAggregateInputType
  }

  export type PokemonGroupByOutputType = {
    pokemon_id: number
    pokemon_name: string
    pokemon_type_one: string
    pokemon_type_two: string
    pokemon_nbr_smashes: number
    pokemon_nbr_passes: number
    _count: PokemonCountAggregateOutputType | null
    _avg: PokemonAvgAggregateOutputType | null
    _sum: PokemonSumAggregateOutputType | null
    _min: PokemonMinAggregateOutputType | null
    _max: PokemonMaxAggregateOutputType | null
  }

  type GetPokemonGroupByPayload<T extends pokemonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PokemonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PokemonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PokemonGroupByOutputType[P]>
            : GetScalarType<T[P], PokemonGroupByOutputType[P]>
        }
      >
    >


  export type pokemonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pokemon_id?: boolean
    pokemon_name?: boolean
    pokemon_type_one?: boolean
    pokemon_type_two?: boolean
    pokemon_nbr_smashes?: boolean
    pokemon_nbr_passes?: boolean
    pokemon_comment?: boolean | pokemon$pokemon_commentArgs<ExtArgs>
    _count?: boolean | PokemonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemon"]>

  export type pokemonSelectScalar = {
    pokemon_id?: boolean
    pokemon_name?: boolean
    pokemon_type_one?: boolean
    pokemon_type_two?: boolean
    pokemon_nbr_smashes?: boolean
    pokemon_nbr_passes?: boolean
  }

  export type pokemonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemon_comment?: boolean | pokemon$pokemon_commentArgs<ExtArgs>
    _count?: boolean | PokemonCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $pokemonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pokemon"
    objects: {
      pokemon_comment: Prisma.$pokemon_commentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pokemon_id: number
      pokemon_name: string
      pokemon_type_one: string
      pokemon_type_two: string
      pokemon_nbr_smashes: number
      pokemon_nbr_passes: number
    }, ExtArgs["result"]["pokemon"]>
    composites: {}
  }


  type pokemonGetPayload<S extends boolean | null | undefined | pokemonDefaultArgs> = $Result.GetResult<Prisma.$pokemonPayload, S>

  type pokemonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<pokemonFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PokemonCountAggregateInputType | true
    }

  export interface pokemonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pokemon'], meta: { name: 'pokemon' } }
    /**
     * Find zero or one Pokemon that matches the filter.
     * @param {pokemonFindUniqueArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends pokemonFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, pokemonFindUniqueArgs<ExtArgs>>
    ): Prisma__pokemonClient<$Result.GetResult<Prisma.$pokemonPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Pokemon that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {pokemonFindUniqueOrThrowArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends pokemonFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, pokemonFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__pokemonClient<$Result.GetResult<Prisma.$pokemonPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Pokemon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pokemonFindFirstArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends pokemonFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, pokemonFindFirstArgs<ExtArgs>>
    ): Prisma__pokemonClient<$Result.GetResult<Prisma.$pokemonPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Pokemon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pokemonFindFirstOrThrowArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends pokemonFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, pokemonFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__pokemonClient<$Result.GetResult<Prisma.$pokemonPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pokemon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pokemonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pokemon
     * const pokemon = await prisma.pokemon.findMany()
     * 
     * // Get first 10 Pokemon
     * const pokemon = await prisma.pokemon.findMany({ take: 10 })
     * 
     * // Only select the `pokemon_id`
     * const pokemonWithPokemon_idOnly = await prisma.pokemon.findMany({ select: { pokemon_id: true } })
     * 
    **/
    findMany<T extends pokemonFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pokemonFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pokemonPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Pokemon.
     * @param {pokemonCreateArgs} args - Arguments to create a Pokemon.
     * @example
     * // Create one Pokemon
     * const Pokemon = await prisma.pokemon.create({
     *   data: {
     *     // ... data to create a Pokemon
     *   }
     * })
     * 
    **/
    create<T extends pokemonCreateArgs<ExtArgs>>(
      args: SelectSubset<T, pokemonCreateArgs<ExtArgs>>
    ): Prisma__pokemonClient<$Result.GetResult<Prisma.$pokemonPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Pokemon.
     *     @param {pokemonCreateManyArgs} args - Arguments to create many Pokemon.
     *     @example
     *     // Create many Pokemon
     *     const pokemon = await prisma.pokemon.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends pokemonCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pokemonCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pokemon.
     * @param {pokemonDeleteArgs} args - Arguments to delete one Pokemon.
     * @example
     * // Delete one Pokemon
     * const Pokemon = await prisma.pokemon.delete({
     *   where: {
     *     // ... filter to delete one Pokemon
     *   }
     * })
     * 
    **/
    delete<T extends pokemonDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, pokemonDeleteArgs<ExtArgs>>
    ): Prisma__pokemonClient<$Result.GetResult<Prisma.$pokemonPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Pokemon.
     * @param {pokemonUpdateArgs} args - Arguments to update one Pokemon.
     * @example
     * // Update one Pokemon
     * const pokemon = await prisma.pokemon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends pokemonUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, pokemonUpdateArgs<ExtArgs>>
    ): Prisma__pokemonClient<$Result.GetResult<Prisma.$pokemonPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pokemon.
     * @param {pokemonDeleteManyArgs} args - Arguments to filter Pokemon to delete.
     * @example
     * // Delete a few Pokemon
     * const { count } = await prisma.pokemon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends pokemonDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pokemonDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pokemonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pokemon
     * const pokemon = await prisma.pokemon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends pokemonUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, pokemonUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pokemon.
     * @param {pokemonUpsertArgs} args - Arguments to update or create a Pokemon.
     * @example
     * // Update or create a Pokemon
     * const pokemon = await prisma.pokemon.upsert({
     *   create: {
     *     // ... data to create a Pokemon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pokemon we want to update
     *   }
     * })
    **/
    upsert<T extends pokemonUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, pokemonUpsertArgs<ExtArgs>>
    ): Prisma__pokemonClient<$Result.GetResult<Prisma.$pokemonPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pokemonCountArgs} args - Arguments to filter Pokemon to count.
     * @example
     * // Count the number of Pokemon
     * const count = await prisma.pokemon.count({
     *   where: {
     *     // ... the filter for the Pokemon we want to count
     *   }
     * })
    **/
    count<T extends pokemonCountArgs>(
      args?: Subset<T, pokemonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PokemonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PokemonAggregateArgs>(args: Subset<T, PokemonAggregateArgs>): Prisma.PrismaPromise<GetPokemonAggregateType<T>>

    /**
     * Group by Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pokemonGroupByArgs} args - Group by arguments.
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
      T extends pokemonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pokemonGroupByArgs['orderBy'] }
        : { orderBy?: pokemonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, pokemonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokemonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pokemon model
   */
  readonly fields: pokemonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pokemon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pokemonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    pokemon_comment<T extends pokemon$pokemon_commentArgs<ExtArgs> = {}>(args?: Subset<T, pokemon$pokemon_commentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pokemon_commentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the pokemon model
   */ 
  interface pokemonFieldRefs {
    readonly pokemon_id: FieldRef<"pokemon", 'Int'>
    readonly pokemon_name: FieldRef<"pokemon", 'String'>
    readonly pokemon_type_one: FieldRef<"pokemon", 'String'>
    readonly pokemon_type_two: FieldRef<"pokemon", 'String'>
    readonly pokemon_nbr_smashes: FieldRef<"pokemon", 'Int'>
    readonly pokemon_nbr_passes: FieldRef<"pokemon", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * pokemon findUnique
   */
  export type pokemonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemon
     */
    select?: pokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pokemonInclude<ExtArgs> | null
    /**
     * Filter, which pokemon to fetch.
     */
    where: pokemonWhereUniqueInput
  }


  /**
   * pokemon findUniqueOrThrow
   */
  export type pokemonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemon
     */
    select?: pokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pokemonInclude<ExtArgs> | null
    /**
     * Filter, which pokemon to fetch.
     */
    where: pokemonWhereUniqueInput
  }


  /**
   * pokemon findFirst
   */
  export type pokemonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemon
     */
    select?: pokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pokemonInclude<ExtArgs> | null
    /**
     * Filter, which pokemon to fetch.
     */
    where?: pokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pokemon to fetch.
     */
    orderBy?: pokemonOrderByWithRelationInput | pokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pokemon.
     */
    cursor?: pokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pokemon.
     */
    distinct?: PokemonScalarFieldEnum | PokemonScalarFieldEnum[]
  }


  /**
   * pokemon findFirstOrThrow
   */
  export type pokemonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemon
     */
    select?: pokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pokemonInclude<ExtArgs> | null
    /**
     * Filter, which pokemon to fetch.
     */
    where?: pokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pokemon to fetch.
     */
    orderBy?: pokemonOrderByWithRelationInput | pokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pokemon.
     */
    cursor?: pokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pokemon.
     */
    distinct?: PokemonScalarFieldEnum | PokemonScalarFieldEnum[]
  }


  /**
   * pokemon findMany
   */
  export type pokemonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemon
     */
    select?: pokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pokemonInclude<ExtArgs> | null
    /**
     * Filter, which pokemon to fetch.
     */
    where?: pokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pokemon to fetch.
     */
    orderBy?: pokemonOrderByWithRelationInput | pokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pokemon.
     */
    cursor?: pokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pokemon.
     */
    skip?: number
    distinct?: PokemonScalarFieldEnum | PokemonScalarFieldEnum[]
  }


  /**
   * pokemon create
   */
  export type pokemonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemon
     */
    select?: pokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pokemonInclude<ExtArgs> | null
    /**
     * The data needed to create a pokemon.
     */
    data: XOR<pokemonCreateInput, pokemonUncheckedCreateInput>
  }


  /**
   * pokemon createMany
   */
  export type pokemonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pokemon.
     */
    data: pokemonCreateManyInput | pokemonCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * pokemon update
   */
  export type pokemonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemon
     */
    select?: pokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pokemonInclude<ExtArgs> | null
    /**
     * The data needed to update a pokemon.
     */
    data: XOR<pokemonUpdateInput, pokemonUncheckedUpdateInput>
    /**
     * Choose, which pokemon to update.
     */
    where: pokemonWhereUniqueInput
  }


  /**
   * pokemon updateMany
   */
  export type pokemonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pokemon.
     */
    data: XOR<pokemonUpdateManyMutationInput, pokemonUncheckedUpdateManyInput>
    /**
     * Filter which pokemon to update
     */
    where?: pokemonWhereInput
  }


  /**
   * pokemon upsert
   */
  export type pokemonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemon
     */
    select?: pokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pokemonInclude<ExtArgs> | null
    /**
     * The filter to search for the pokemon to update in case it exists.
     */
    where: pokemonWhereUniqueInput
    /**
     * In case the pokemon found by the `where` argument doesn't exist, create a new pokemon with this data.
     */
    create: XOR<pokemonCreateInput, pokemonUncheckedCreateInput>
    /**
     * In case the pokemon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pokemonUpdateInput, pokemonUncheckedUpdateInput>
  }


  /**
   * pokemon delete
   */
  export type pokemonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemon
     */
    select?: pokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pokemonInclude<ExtArgs> | null
    /**
     * Filter which pokemon to delete.
     */
    where: pokemonWhereUniqueInput
  }


  /**
   * pokemon deleteMany
   */
  export type pokemonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pokemon to delete
     */
    where?: pokemonWhereInput
  }


  /**
   * pokemon.pokemon_comment
   */
  export type pokemon$pokemon_commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemon_comment
     */
    select?: pokemon_commentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pokemon_commentInclude<ExtArgs> | null
    where?: pokemon_commentWhereInput
    orderBy?: pokemon_commentOrderByWithRelationInput | pokemon_commentOrderByWithRelationInput[]
    cursor?: pokemon_commentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pokemon_commentScalarFieldEnum | Pokemon_commentScalarFieldEnum[]
  }


  /**
   * pokemon without action
   */
  export type pokemonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemon
     */
    select?: pokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pokemonInclude<ExtArgs> | null
  }



  /**
   * Model pokemon_comment
   */

  export type AggregatePokemon_comment = {
    _count: Pokemon_commentCountAggregateOutputType | null
    _avg: Pokemon_commentAvgAggregateOutputType | null
    _sum: Pokemon_commentSumAggregateOutputType | null
    _min: Pokemon_commentMinAggregateOutputType | null
    _max: Pokemon_commentMaxAggregateOutputType | null
  }

  export type Pokemon_commentAvgAggregateOutputType = {
    pokemon_comment_id: number | null
    pokemon_id: number | null
  }

  export type Pokemon_commentSumAggregateOutputType = {
    pokemon_comment_id: number | null
    pokemon_id: number | null
  }

  export type Pokemon_commentMinAggregateOutputType = {
    pokemon_comment_id: number | null
    pokemon_comment_author: string | null
    pokemon_comment_date: string | null
    pokemon_comment_content: string | null
    pokemon_id: number | null
  }

  export type Pokemon_commentMaxAggregateOutputType = {
    pokemon_comment_id: number | null
    pokemon_comment_author: string | null
    pokemon_comment_date: string | null
    pokemon_comment_content: string | null
    pokemon_id: number | null
  }

  export type Pokemon_commentCountAggregateOutputType = {
    pokemon_comment_id: number
    pokemon_comment_author: number
    pokemon_comment_date: number
    pokemon_comment_content: number
    pokemon_id: number
    _all: number
  }


  export type Pokemon_commentAvgAggregateInputType = {
    pokemon_comment_id?: true
    pokemon_id?: true
  }

  export type Pokemon_commentSumAggregateInputType = {
    pokemon_comment_id?: true
    pokemon_id?: true
  }

  export type Pokemon_commentMinAggregateInputType = {
    pokemon_comment_id?: true
    pokemon_comment_author?: true
    pokemon_comment_date?: true
    pokemon_comment_content?: true
    pokemon_id?: true
  }

  export type Pokemon_commentMaxAggregateInputType = {
    pokemon_comment_id?: true
    pokemon_comment_author?: true
    pokemon_comment_date?: true
    pokemon_comment_content?: true
    pokemon_id?: true
  }

  export type Pokemon_commentCountAggregateInputType = {
    pokemon_comment_id?: true
    pokemon_comment_author?: true
    pokemon_comment_date?: true
    pokemon_comment_content?: true
    pokemon_id?: true
    _all?: true
  }

  export type Pokemon_commentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pokemon_comment to aggregate.
     */
    where?: pokemon_commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pokemon_comments to fetch.
     */
    orderBy?: pokemon_commentOrderByWithRelationInput | pokemon_commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pokemon_commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pokemon_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pokemon_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pokemon_comments
    **/
    _count?: true | Pokemon_commentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pokemon_commentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pokemon_commentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pokemon_commentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pokemon_commentMaxAggregateInputType
  }

  export type GetPokemon_commentAggregateType<T extends Pokemon_commentAggregateArgs> = {
        [P in keyof T & keyof AggregatePokemon_comment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePokemon_comment[P]>
      : GetScalarType<T[P], AggregatePokemon_comment[P]>
  }




  export type pokemon_commentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pokemon_commentWhereInput
    orderBy?: pokemon_commentOrderByWithAggregationInput | pokemon_commentOrderByWithAggregationInput[]
    by: Pokemon_commentScalarFieldEnum[] | Pokemon_commentScalarFieldEnum
    having?: pokemon_commentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pokemon_commentCountAggregateInputType | true
    _avg?: Pokemon_commentAvgAggregateInputType
    _sum?: Pokemon_commentSumAggregateInputType
    _min?: Pokemon_commentMinAggregateInputType
    _max?: Pokemon_commentMaxAggregateInputType
  }

  export type Pokemon_commentGroupByOutputType = {
    pokemon_comment_id: number
    pokemon_comment_author: string
    pokemon_comment_date: string
    pokemon_comment_content: string
    pokemon_id: number
    _count: Pokemon_commentCountAggregateOutputType | null
    _avg: Pokemon_commentAvgAggregateOutputType | null
    _sum: Pokemon_commentSumAggregateOutputType | null
    _min: Pokemon_commentMinAggregateOutputType | null
    _max: Pokemon_commentMaxAggregateOutputType | null
  }

  type GetPokemon_commentGroupByPayload<T extends pokemon_commentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pokemon_commentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pokemon_commentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pokemon_commentGroupByOutputType[P]>
            : GetScalarType<T[P], Pokemon_commentGroupByOutputType[P]>
        }
      >
    >


  export type pokemon_commentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pokemon_comment_id?: boolean
    pokemon_comment_author?: boolean
    pokemon_comment_date?: boolean
    pokemon_comment_content?: boolean
    pokemon_id?: boolean
    pokemon?: boolean | pokemonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemon_comment"]>

  export type pokemon_commentSelectScalar = {
    pokemon_comment_id?: boolean
    pokemon_comment_author?: boolean
    pokemon_comment_date?: boolean
    pokemon_comment_content?: boolean
    pokemon_id?: boolean
  }

  export type pokemon_commentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemon?: boolean | pokemonDefaultArgs<ExtArgs>
  }


  export type $pokemon_commentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pokemon_comment"
    objects: {
      pokemon: Prisma.$pokemonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      pokemon_comment_id: number
      pokemon_comment_author: string
      pokemon_comment_date: string
      pokemon_comment_content: string
      pokemon_id: number
    }, ExtArgs["result"]["pokemon_comment"]>
    composites: {}
  }


  type pokemon_commentGetPayload<S extends boolean | null | undefined | pokemon_commentDefaultArgs> = $Result.GetResult<Prisma.$pokemon_commentPayload, S>

  type pokemon_commentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<pokemon_commentFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Pokemon_commentCountAggregateInputType | true
    }

  export interface pokemon_commentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pokemon_comment'], meta: { name: 'pokemon_comment' } }
    /**
     * Find zero or one Pokemon_comment that matches the filter.
     * @param {pokemon_commentFindUniqueArgs} args - Arguments to find a Pokemon_comment
     * @example
     * // Get one Pokemon_comment
     * const pokemon_comment = await prisma.pokemon_comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends pokemon_commentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, pokemon_commentFindUniqueArgs<ExtArgs>>
    ): Prisma__pokemon_commentClient<$Result.GetResult<Prisma.$pokemon_commentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Pokemon_comment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {pokemon_commentFindUniqueOrThrowArgs} args - Arguments to find a Pokemon_comment
     * @example
     * // Get one Pokemon_comment
     * const pokemon_comment = await prisma.pokemon_comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends pokemon_commentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, pokemon_commentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__pokemon_commentClient<$Result.GetResult<Prisma.$pokemon_commentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Pokemon_comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pokemon_commentFindFirstArgs} args - Arguments to find a Pokemon_comment
     * @example
     * // Get one Pokemon_comment
     * const pokemon_comment = await prisma.pokemon_comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends pokemon_commentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, pokemon_commentFindFirstArgs<ExtArgs>>
    ): Prisma__pokemon_commentClient<$Result.GetResult<Prisma.$pokemon_commentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Pokemon_comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pokemon_commentFindFirstOrThrowArgs} args - Arguments to find a Pokemon_comment
     * @example
     * // Get one Pokemon_comment
     * const pokemon_comment = await prisma.pokemon_comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends pokemon_commentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, pokemon_commentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__pokemon_commentClient<$Result.GetResult<Prisma.$pokemon_commentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pokemon_comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pokemon_commentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pokemon_comments
     * const pokemon_comments = await prisma.pokemon_comment.findMany()
     * 
     * // Get first 10 Pokemon_comments
     * const pokemon_comments = await prisma.pokemon_comment.findMany({ take: 10 })
     * 
     * // Only select the `pokemon_comment_id`
     * const pokemon_commentWithPokemon_comment_idOnly = await prisma.pokemon_comment.findMany({ select: { pokemon_comment_id: true } })
     * 
    **/
    findMany<T extends pokemon_commentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pokemon_commentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pokemon_commentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Pokemon_comment.
     * @param {pokemon_commentCreateArgs} args - Arguments to create a Pokemon_comment.
     * @example
     * // Create one Pokemon_comment
     * const Pokemon_comment = await prisma.pokemon_comment.create({
     *   data: {
     *     // ... data to create a Pokemon_comment
     *   }
     * })
     * 
    **/
    create<T extends pokemon_commentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, pokemon_commentCreateArgs<ExtArgs>>
    ): Prisma__pokemon_commentClient<$Result.GetResult<Prisma.$pokemon_commentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Pokemon_comments.
     *     @param {pokemon_commentCreateManyArgs} args - Arguments to create many Pokemon_comments.
     *     @example
     *     // Create many Pokemon_comments
     *     const pokemon_comment = await prisma.pokemon_comment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends pokemon_commentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pokemon_commentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pokemon_comment.
     * @param {pokemon_commentDeleteArgs} args - Arguments to delete one Pokemon_comment.
     * @example
     * // Delete one Pokemon_comment
     * const Pokemon_comment = await prisma.pokemon_comment.delete({
     *   where: {
     *     // ... filter to delete one Pokemon_comment
     *   }
     * })
     * 
    **/
    delete<T extends pokemon_commentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, pokemon_commentDeleteArgs<ExtArgs>>
    ): Prisma__pokemon_commentClient<$Result.GetResult<Prisma.$pokemon_commentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Pokemon_comment.
     * @param {pokemon_commentUpdateArgs} args - Arguments to update one Pokemon_comment.
     * @example
     * // Update one Pokemon_comment
     * const pokemon_comment = await prisma.pokemon_comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends pokemon_commentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, pokemon_commentUpdateArgs<ExtArgs>>
    ): Prisma__pokemon_commentClient<$Result.GetResult<Prisma.$pokemon_commentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pokemon_comments.
     * @param {pokemon_commentDeleteManyArgs} args - Arguments to filter Pokemon_comments to delete.
     * @example
     * // Delete a few Pokemon_comments
     * const { count } = await prisma.pokemon_comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends pokemon_commentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pokemon_commentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pokemon_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pokemon_commentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pokemon_comments
     * const pokemon_comment = await prisma.pokemon_comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends pokemon_commentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, pokemon_commentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pokemon_comment.
     * @param {pokemon_commentUpsertArgs} args - Arguments to update or create a Pokemon_comment.
     * @example
     * // Update or create a Pokemon_comment
     * const pokemon_comment = await prisma.pokemon_comment.upsert({
     *   create: {
     *     // ... data to create a Pokemon_comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pokemon_comment we want to update
     *   }
     * })
    **/
    upsert<T extends pokemon_commentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, pokemon_commentUpsertArgs<ExtArgs>>
    ): Prisma__pokemon_commentClient<$Result.GetResult<Prisma.$pokemon_commentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pokemon_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pokemon_commentCountArgs} args - Arguments to filter Pokemon_comments to count.
     * @example
     * // Count the number of Pokemon_comments
     * const count = await prisma.pokemon_comment.count({
     *   where: {
     *     // ... the filter for the Pokemon_comments we want to count
     *   }
     * })
    **/
    count<T extends pokemon_commentCountArgs>(
      args?: Subset<T, pokemon_commentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pokemon_commentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pokemon_comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pokemon_commentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Pokemon_commentAggregateArgs>(args: Subset<T, Pokemon_commentAggregateArgs>): Prisma.PrismaPromise<GetPokemon_commentAggregateType<T>>

    /**
     * Group by Pokemon_comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pokemon_commentGroupByArgs} args - Group by arguments.
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
      T extends pokemon_commentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pokemon_commentGroupByArgs['orderBy'] }
        : { orderBy?: pokemon_commentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, pokemon_commentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokemon_commentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pokemon_comment model
   */
  readonly fields: pokemon_commentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pokemon_comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pokemon_commentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    pokemon<T extends pokemonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pokemonDefaultArgs<ExtArgs>>): Prisma__pokemonClient<$Result.GetResult<Prisma.$pokemonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the pokemon_comment model
   */ 
  interface pokemon_commentFieldRefs {
    readonly pokemon_comment_id: FieldRef<"pokemon_comment", 'Int'>
    readonly pokemon_comment_author: FieldRef<"pokemon_comment", 'String'>
    readonly pokemon_comment_date: FieldRef<"pokemon_comment", 'String'>
    readonly pokemon_comment_content: FieldRef<"pokemon_comment", 'String'>
    readonly pokemon_id: FieldRef<"pokemon_comment", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * pokemon_comment findUnique
   */
  export type pokemon_commentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemon_comment
     */
    select?: pokemon_commentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pokemon_commentInclude<ExtArgs> | null
    /**
     * Filter, which pokemon_comment to fetch.
     */
    where: pokemon_commentWhereUniqueInput
  }


  /**
   * pokemon_comment findUniqueOrThrow
   */
  export type pokemon_commentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemon_comment
     */
    select?: pokemon_commentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pokemon_commentInclude<ExtArgs> | null
    /**
     * Filter, which pokemon_comment to fetch.
     */
    where: pokemon_commentWhereUniqueInput
  }


  /**
   * pokemon_comment findFirst
   */
  export type pokemon_commentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemon_comment
     */
    select?: pokemon_commentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pokemon_commentInclude<ExtArgs> | null
    /**
     * Filter, which pokemon_comment to fetch.
     */
    where?: pokemon_commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pokemon_comments to fetch.
     */
    orderBy?: pokemon_commentOrderByWithRelationInput | pokemon_commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pokemon_comments.
     */
    cursor?: pokemon_commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pokemon_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pokemon_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pokemon_comments.
     */
    distinct?: Pokemon_commentScalarFieldEnum | Pokemon_commentScalarFieldEnum[]
  }


  /**
   * pokemon_comment findFirstOrThrow
   */
  export type pokemon_commentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemon_comment
     */
    select?: pokemon_commentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pokemon_commentInclude<ExtArgs> | null
    /**
     * Filter, which pokemon_comment to fetch.
     */
    where?: pokemon_commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pokemon_comments to fetch.
     */
    orderBy?: pokemon_commentOrderByWithRelationInput | pokemon_commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pokemon_comments.
     */
    cursor?: pokemon_commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pokemon_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pokemon_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pokemon_comments.
     */
    distinct?: Pokemon_commentScalarFieldEnum | Pokemon_commentScalarFieldEnum[]
  }


  /**
   * pokemon_comment findMany
   */
  export type pokemon_commentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemon_comment
     */
    select?: pokemon_commentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pokemon_commentInclude<ExtArgs> | null
    /**
     * Filter, which pokemon_comments to fetch.
     */
    where?: pokemon_commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pokemon_comments to fetch.
     */
    orderBy?: pokemon_commentOrderByWithRelationInput | pokemon_commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pokemon_comments.
     */
    cursor?: pokemon_commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pokemon_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pokemon_comments.
     */
    skip?: number
    distinct?: Pokemon_commentScalarFieldEnum | Pokemon_commentScalarFieldEnum[]
  }


  /**
   * pokemon_comment create
   */
  export type pokemon_commentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemon_comment
     */
    select?: pokemon_commentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pokemon_commentInclude<ExtArgs> | null
    /**
     * The data needed to create a pokemon_comment.
     */
    data: XOR<pokemon_commentCreateInput, pokemon_commentUncheckedCreateInput>
  }


  /**
   * pokemon_comment createMany
   */
  export type pokemon_commentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pokemon_comments.
     */
    data: pokemon_commentCreateManyInput | pokemon_commentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * pokemon_comment update
   */
  export type pokemon_commentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemon_comment
     */
    select?: pokemon_commentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pokemon_commentInclude<ExtArgs> | null
    /**
     * The data needed to update a pokemon_comment.
     */
    data: XOR<pokemon_commentUpdateInput, pokemon_commentUncheckedUpdateInput>
    /**
     * Choose, which pokemon_comment to update.
     */
    where: pokemon_commentWhereUniqueInput
  }


  /**
   * pokemon_comment updateMany
   */
  export type pokemon_commentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pokemon_comments.
     */
    data: XOR<pokemon_commentUpdateManyMutationInput, pokemon_commentUncheckedUpdateManyInput>
    /**
     * Filter which pokemon_comments to update
     */
    where?: pokemon_commentWhereInput
  }


  /**
   * pokemon_comment upsert
   */
  export type pokemon_commentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemon_comment
     */
    select?: pokemon_commentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pokemon_commentInclude<ExtArgs> | null
    /**
     * The filter to search for the pokemon_comment to update in case it exists.
     */
    where: pokemon_commentWhereUniqueInput
    /**
     * In case the pokemon_comment found by the `where` argument doesn't exist, create a new pokemon_comment with this data.
     */
    create: XOR<pokemon_commentCreateInput, pokemon_commentUncheckedCreateInput>
    /**
     * In case the pokemon_comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pokemon_commentUpdateInput, pokemon_commentUncheckedUpdateInput>
  }


  /**
   * pokemon_comment delete
   */
  export type pokemon_commentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemon_comment
     */
    select?: pokemon_commentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pokemon_commentInclude<ExtArgs> | null
    /**
     * Filter which pokemon_comment to delete.
     */
    where: pokemon_commentWhereUniqueInput
  }


  /**
   * pokemon_comment deleteMany
   */
  export type pokemon_commentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pokemon_comments to delete
     */
    where?: pokemon_commentWhereInput
  }


  /**
   * pokemon_comment without action
   */
  export type pokemon_commentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemon_comment
     */
    select?: pokemon_commentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pokemon_commentInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PokemonScalarFieldEnum: {
    pokemon_id: 'pokemon_id',
    pokemon_name: 'pokemon_name',
    pokemon_type_one: 'pokemon_type_one',
    pokemon_type_two: 'pokemon_type_two',
    pokemon_nbr_smashes: 'pokemon_nbr_smashes',
    pokemon_nbr_passes: 'pokemon_nbr_passes'
  };

  export type PokemonScalarFieldEnum = (typeof PokemonScalarFieldEnum)[keyof typeof PokemonScalarFieldEnum]


  export const Pokemon_commentScalarFieldEnum: {
    pokemon_comment_id: 'pokemon_comment_id',
    pokemon_comment_author: 'pokemon_comment_author',
    pokemon_comment_date: 'pokemon_comment_date',
    pokemon_comment_content: 'pokemon_comment_content',
    pokemon_id: 'pokemon_id'
  };

  export type Pokemon_commentScalarFieldEnum = (typeof Pokemon_commentScalarFieldEnum)[keyof typeof Pokemon_commentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type pokemonWhereInput = {
    AND?: pokemonWhereInput | pokemonWhereInput[]
    OR?: pokemonWhereInput[]
    NOT?: pokemonWhereInput | pokemonWhereInput[]
    pokemon_id?: IntFilter<"pokemon"> | number
    pokemon_name?: StringFilter<"pokemon"> | string
    pokemon_type_one?: StringFilter<"pokemon"> | string
    pokemon_type_two?: StringFilter<"pokemon"> | string
    pokemon_nbr_smashes?: IntFilter<"pokemon"> | number
    pokemon_nbr_passes?: IntFilter<"pokemon"> | number
    pokemon_comment?: Pokemon_commentListRelationFilter
  }

  export type pokemonOrderByWithRelationInput = {
    pokemon_id?: SortOrder
    pokemon_name?: SortOrder
    pokemon_type_one?: SortOrder
    pokemon_type_two?: SortOrder
    pokemon_nbr_smashes?: SortOrder
    pokemon_nbr_passes?: SortOrder
    pokemon_comment?: pokemon_commentOrderByRelationAggregateInput
  }

  export type pokemonWhereUniqueInput = Prisma.AtLeast<{
    pokemon_id?: number
    AND?: pokemonWhereInput | pokemonWhereInput[]
    OR?: pokemonWhereInput[]
    NOT?: pokemonWhereInput | pokemonWhereInput[]
    pokemon_name?: StringFilter<"pokemon"> | string
    pokemon_type_one?: StringFilter<"pokemon"> | string
    pokemon_type_two?: StringFilter<"pokemon"> | string
    pokemon_nbr_smashes?: IntFilter<"pokemon"> | number
    pokemon_nbr_passes?: IntFilter<"pokemon"> | number
    pokemon_comment?: Pokemon_commentListRelationFilter
  }, "pokemon_id">

  export type pokemonOrderByWithAggregationInput = {
    pokemon_id?: SortOrder
    pokemon_name?: SortOrder
    pokemon_type_one?: SortOrder
    pokemon_type_two?: SortOrder
    pokemon_nbr_smashes?: SortOrder
    pokemon_nbr_passes?: SortOrder
    _count?: pokemonCountOrderByAggregateInput
    _avg?: pokemonAvgOrderByAggregateInput
    _max?: pokemonMaxOrderByAggregateInput
    _min?: pokemonMinOrderByAggregateInput
    _sum?: pokemonSumOrderByAggregateInput
  }

  export type pokemonScalarWhereWithAggregatesInput = {
    AND?: pokemonScalarWhereWithAggregatesInput | pokemonScalarWhereWithAggregatesInput[]
    OR?: pokemonScalarWhereWithAggregatesInput[]
    NOT?: pokemonScalarWhereWithAggregatesInput | pokemonScalarWhereWithAggregatesInput[]
    pokemon_id?: IntWithAggregatesFilter<"pokemon"> | number
    pokemon_name?: StringWithAggregatesFilter<"pokemon"> | string
    pokemon_type_one?: StringWithAggregatesFilter<"pokemon"> | string
    pokemon_type_two?: StringWithAggregatesFilter<"pokemon"> | string
    pokemon_nbr_smashes?: IntWithAggregatesFilter<"pokemon"> | number
    pokemon_nbr_passes?: IntWithAggregatesFilter<"pokemon"> | number
  }

  export type pokemon_commentWhereInput = {
    AND?: pokemon_commentWhereInput | pokemon_commentWhereInput[]
    OR?: pokemon_commentWhereInput[]
    NOT?: pokemon_commentWhereInput | pokemon_commentWhereInput[]
    pokemon_comment_id?: IntFilter<"pokemon_comment"> | number
    pokemon_comment_author?: StringFilter<"pokemon_comment"> | string
    pokemon_comment_date?: StringFilter<"pokemon_comment"> | string
    pokemon_comment_content?: StringFilter<"pokemon_comment"> | string
    pokemon_id?: IntFilter<"pokemon_comment"> | number
    pokemon?: XOR<PokemonRelationFilter, pokemonWhereInput>
  }

  export type pokemon_commentOrderByWithRelationInput = {
    pokemon_comment_id?: SortOrder
    pokemon_comment_author?: SortOrder
    pokemon_comment_date?: SortOrder
    pokemon_comment_content?: SortOrder
    pokemon_id?: SortOrder
    pokemon?: pokemonOrderByWithRelationInput
  }

  export type pokemon_commentWhereUniqueInput = Prisma.AtLeast<{
    pokemon_comment_id?: number
    AND?: pokemon_commentWhereInput | pokemon_commentWhereInput[]
    OR?: pokemon_commentWhereInput[]
    NOT?: pokemon_commentWhereInput | pokemon_commentWhereInput[]
    pokemon_comment_author?: StringFilter<"pokemon_comment"> | string
    pokemon_comment_date?: StringFilter<"pokemon_comment"> | string
    pokemon_comment_content?: StringFilter<"pokemon_comment"> | string
    pokemon_id?: IntFilter<"pokemon_comment"> | number
    pokemon?: XOR<PokemonRelationFilter, pokemonWhereInput>
  }, "pokemon_comment_id">

  export type pokemon_commentOrderByWithAggregationInput = {
    pokemon_comment_id?: SortOrder
    pokemon_comment_author?: SortOrder
    pokemon_comment_date?: SortOrder
    pokemon_comment_content?: SortOrder
    pokemon_id?: SortOrder
    _count?: pokemon_commentCountOrderByAggregateInput
    _avg?: pokemon_commentAvgOrderByAggregateInput
    _max?: pokemon_commentMaxOrderByAggregateInput
    _min?: pokemon_commentMinOrderByAggregateInput
    _sum?: pokemon_commentSumOrderByAggregateInput
  }

  export type pokemon_commentScalarWhereWithAggregatesInput = {
    AND?: pokemon_commentScalarWhereWithAggregatesInput | pokemon_commentScalarWhereWithAggregatesInput[]
    OR?: pokemon_commentScalarWhereWithAggregatesInput[]
    NOT?: pokemon_commentScalarWhereWithAggregatesInput | pokemon_commentScalarWhereWithAggregatesInput[]
    pokemon_comment_id?: IntWithAggregatesFilter<"pokemon_comment"> | number
    pokemon_comment_author?: StringWithAggregatesFilter<"pokemon_comment"> | string
    pokemon_comment_date?: StringWithAggregatesFilter<"pokemon_comment"> | string
    pokemon_comment_content?: StringWithAggregatesFilter<"pokemon_comment"> | string
    pokemon_id?: IntWithAggregatesFilter<"pokemon_comment"> | number
  }

  export type pokemonCreateInput = {
    pokemon_id: number
    pokemon_name: string
    pokemon_type_one: string
    pokemon_type_two: string
    pokemon_nbr_smashes: number
    pokemon_nbr_passes: number
    pokemon_comment?: pokemon_commentCreateNestedManyWithoutPokemonInput
  }

  export type pokemonUncheckedCreateInput = {
    pokemon_id: number
    pokemon_name: string
    pokemon_type_one: string
    pokemon_type_two: string
    pokemon_nbr_smashes: number
    pokemon_nbr_passes: number
    pokemon_comment?: pokemon_commentUncheckedCreateNestedManyWithoutPokemonInput
  }

  export type pokemonUpdateInput = {
    pokemon_id?: IntFieldUpdateOperationsInput | number
    pokemon_name?: StringFieldUpdateOperationsInput | string
    pokemon_type_one?: StringFieldUpdateOperationsInput | string
    pokemon_type_two?: StringFieldUpdateOperationsInput | string
    pokemon_nbr_smashes?: IntFieldUpdateOperationsInput | number
    pokemon_nbr_passes?: IntFieldUpdateOperationsInput | number
    pokemon_comment?: pokemon_commentUpdateManyWithoutPokemonNestedInput
  }

  export type pokemonUncheckedUpdateInput = {
    pokemon_id?: IntFieldUpdateOperationsInput | number
    pokemon_name?: StringFieldUpdateOperationsInput | string
    pokemon_type_one?: StringFieldUpdateOperationsInput | string
    pokemon_type_two?: StringFieldUpdateOperationsInput | string
    pokemon_nbr_smashes?: IntFieldUpdateOperationsInput | number
    pokemon_nbr_passes?: IntFieldUpdateOperationsInput | number
    pokemon_comment?: pokemon_commentUncheckedUpdateManyWithoutPokemonNestedInput
  }

  export type pokemonCreateManyInput = {
    pokemon_id: number
    pokemon_name: string
    pokemon_type_one: string
    pokemon_type_two: string
    pokemon_nbr_smashes: number
    pokemon_nbr_passes: number
  }

  export type pokemonUpdateManyMutationInput = {
    pokemon_id?: IntFieldUpdateOperationsInput | number
    pokemon_name?: StringFieldUpdateOperationsInput | string
    pokemon_type_one?: StringFieldUpdateOperationsInput | string
    pokemon_type_two?: StringFieldUpdateOperationsInput | string
    pokemon_nbr_smashes?: IntFieldUpdateOperationsInput | number
    pokemon_nbr_passes?: IntFieldUpdateOperationsInput | number
  }

  export type pokemonUncheckedUpdateManyInput = {
    pokemon_id?: IntFieldUpdateOperationsInput | number
    pokemon_name?: StringFieldUpdateOperationsInput | string
    pokemon_type_one?: StringFieldUpdateOperationsInput | string
    pokemon_type_two?: StringFieldUpdateOperationsInput | string
    pokemon_nbr_smashes?: IntFieldUpdateOperationsInput | number
    pokemon_nbr_passes?: IntFieldUpdateOperationsInput | number
  }

  export type pokemon_commentCreateInput = {
    pokemon_comment_id: number
    pokemon_comment_author: string
    pokemon_comment_date: string
    pokemon_comment_content: string
    pokemon: pokemonCreateNestedOneWithoutPokemon_commentInput
  }

  export type pokemon_commentUncheckedCreateInput = {
    pokemon_comment_id: number
    pokemon_comment_author: string
    pokemon_comment_date: string
    pokemon_comment_content: string
    pokemon_id: number
  }

  export type pokemon_commentUpdateInput = {
    pokemon_comment_id?: IntFieldUpdateOperationsInput | number
    pokemon_comment_author?: StringFieldUpdateOperationsInput | string
    pokemon_comment_date?: StringFieldUpdateOperationsInput | string
    pokemon_comment_content?: StringFieldUpdateOperationsInput | string
    pokemon?: pokemonUpdateOneRequiredWithoutPokemon_commentNestedInput
  }

  export type pokemon_commentUncheckedUpdateInput = {
    pokemon_comment_id?: IntFieldUpdateOperationsInput | number
    pokemon_comment_author?: StringFieldUpdateOperationsInput | string
    pokemon_comment_date?: StringFieldUpdateOperationsInput | string
    pokemon_comment_content?: StringFieldUpdateOperationsInput | string
    pokemon_id?: IntFieldUpdateOperationsInput | number
  }

  export type pokemon_commentCreateManyInput = {
    pokemon_comment_id: number
    pokemon_comment_author: string
    pokemon_comment_date: string
    pokemon_comment_content: string
    pokemon_id: number
  }

  export type pokemon_commentUpdateManyMutationInput = {
    pokemon_comment_id?: IntFieldUpdateOperationsInput | number
    pokemon_comment_author?: StringFieldUpdateOperationsInput | string
    pokemon_comment_date?: StringFieldUpdateOperationsInput | string
    pokemon_comment_content?: StringFieldUpdateOperationsInput | string
  }

  export type pokemon_commentUncheckedUpdateManyInput = {
    pokemon_comment_id?: IntFieldUpdateOperationsInput | number
    pokemon_comment_author?: StringFieldUpdateOperationsInput | string
    pokemon_comment_date?: StringFieldUpdateOperationsInput | string
    pokemon_comment_content?: StringFieldUpdateOperationsInput | string
    pokemon_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Pokemon_commentListRelationFilter = {
    every?: pokemon_commentWhereInput
    some?: pokemon_commentWhereInput
    none?: pokemon_commentWhereInput
  }

  export type pokemon_commentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pokemonCountOrderByAggregateInput = {
    pokemon_id?: SortOrder
    pokemon_name?: SortOrder
    pokemon_type_one?: SortOrder
    pokemon_type_two?: SortOrder
    pokemon_nbr_smashes?: SortOrder
    pokemon_nbr_passes?: SortOrder
  }

  export type pokemonAvgOrderByAggregateInput = {
    pokemon_id?: SortOrder
    pokemon_nbr_smashes?: SortOrder
    pokemon_nbr_passes?: SortOrder
  }

  export type pokemonMaxOrderByAggregateInput = {
    pokemon_id?: SortOrder
    pokemon_name?: SortOrder
    pokemon_type_one?: SortOrder
    pokemon_type_two?: SortOrder
    pokemon_nbr_smashes?: SortOrder
    pokemon_nbr_passes?: SortOrder
  }

  export type pokemonMinOrderByAggregateInput = {
    pokemon_id?: SortOrder
    pokemon_name?: SortOrder
    pokemon_type_one?: SortOrder
    pokemon_type_two?: SortOrder
    pokemon_nbr_smashes?: SortOrder
    pokemon_nbr_passes?: SortOrder
  }

  export type pokemonSumOrderByAggregateInput = {
    pokemon_id?: SortOrder
    pokemon_nbr_smashes?: SortOrder
    pokemon_nbr_passes?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type PokemonRelationFilter = {
    is?: pokemonWhereInput
    isNot?: pokemonWhereInput
  }

  export type pokemon_commentCountOrderByAggregateInput = {
    pokemon_comment_id?: SortOrder
    pokemon_comment_author?: SortOrder
    pokemon_comment_date?: SortOrder
    pokemon_comment_content?: SortOrder
    pokemon_id?: SortOrder
  }

  export type pokemon_commentAvgOrderByAggregateInput = {
    pokemon_comment_id?: SortOrder
    pokemon_id?: SortOrder
  }

  export type pokemon_commentMaxOrderByAggregateInput = {
    pokemon_comment_id?: SortOrder
    pokemon_comment_author?: SortOrder
    pokemon_comment_date?: SortOrder
    pokemon_comment_content?: SortOrder
    pokemon_id?: SortOrder
  }

  export type pokemon_commentMinOrderByAggregateInput = {
    pokemon_comment_id?: SortOrder
    pokemon_comment_author?: SortOrder
    pokemon_comment_date?: SortOrder
    pokemon_comment_content?: SortOrder
    pokemon_id?: SortOrder
  }

  export type pokemon_commentSumOrderByAggregateInput = {
    pokemon_comment_id?: SortOrder
    pokemon_id?: SortOrder
  }

  export type pokemon_commentCreateNestedManyWithoutPokemonInput = {
    create?: XOR<pokemon_commentCreateWithoutPokemonInput, pokemon_commentUncheckedCreateWithoutPokemonInput> | pokemon_commentCreateWithoutPokemonInput[] | pokemon_commentUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: pokemon_commentCreateOrConnectWithoutPokemonInput | pokemon_commentCreateOrConnectWithoutPokemonInput[]
    createMany?: pokemon_commentCreateManyPokemonInputEnvelope
    connect?: pokemon_commentWhereUniqueInput | pokemon_commentWhereUniqueInput[]
  }

  export type pokemon_commentUncheckedCreateNestedManyWithoutPokemonInput = {
    create?: XOR<pokemon_commentCreateWithoutPokemonInput, pokemon_commentUncheckedCreateWithoutPokemonInput> | pokemon_commentCreateWithoutPokemonInput[] | pokemon_commentUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: pokemon_commentCreateOrConnectWithoutPokemonInput | pokemon_commentCreateOrConnectWithoutPokemonInput[]
    createMany?: pokemon_commentCreateManyPokemonInputEnvelope
    connect?: pokemon_commentWhereUniqueInput | pokemon_commentWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type pokemon_commentUpdateManyWithoutPokemonNestedInput = {
    create?: XOR<pokemon_commentCreateWithoutPokemonInput, pokemon_commentUncheckedCreateWithoutPokemonInput> | pokemon_commentCreateWithoutPokemonInput[] | pokemon_commentUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: pokemon_commentCreateOrConnectWithoutPokemonInput | pokemon_commentCreateOrConnectWithoutPokemonInput[]
    upsert?: pokemon_commentUpsertWithWhereUniqueWithoutPokemonInput | pokemon_commentUpsertWithWhereUniqueWithoutPokemonInput[]
    createMany?: pokemon_commentCreateManyPokemonInputEnvelope
    set?: pokemon_commentWhereUniqueInput | pokemon_commentWhereUniqueInput[]
    disconnect?: pokemon_commentWhereUniqueInput | pokemon_commentWhereUniqueInput[]
    delete?: pokemon_commentWhereUniqueInput | pokemon_commentWhereUniqueInput[]
    connect?: pokemon_commentWhereUniqueInput | pokemon_commentWhereUniqueInput[]
    update?: pokemon_commentUpdateWithWhereUniqueWithoutPokemonInput | pokemon_commentUpdateWithWhereUniqueWithoutPokemonInput[]
    updateMany?: pokemon_commentUpdateManyWithWhereWithoutPokemonInput | pokemon_commentUpdateManyWithWhereWithoutPokemonInput[]
    deleteMany?: pokemon_commentScalarWhereInput | pokemon_commentScalarWhereInput[]
  }

  export type pokemon_commentUncheckedUpdateManyWithoutPokemonNestedInput = {
    create?: XOR<pokemon_commentCreateWithoutPokemonInput, pokemon_commentUncheckedCreateWithoutPokemonInput> | pokemon_commentCreateWithoutPokemonInput[] | pokemon_commentUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: pokemon_commentCreateOrConnectWithoutPokemonInput | pokemon_commentCreateOrConnectWithoutPokemonInput[]
    upsert?: pokemon_commentUpsertWithWhereUniqueWithoutPokemonInput | pokemon_commentUpsertWithWhereUniqueWithoutPokemonInput[]
    createMany?: pokemon_commentCreateManyPokemonInputEnvelope
    set?: pokemon_commentWhereUniqueInput | pokemon_commentWhereUniqueInput[]
    disconnect?: pokemon_commentWhereUniqueInput | pokemon_commentWhereUniqueInput[]
    delete?: pokemon_commentWhereUniqueInput | pokemon_commentWhereUniqueInput[]
    connect?: pokemon_commentWhereUniqueInput | pokemon_commentWhereUniqueInput[]
    update?: pokemon_commentUpdateWithWhereUniqueWithoutPokemonInput | pokemon_commentUpdateWithWhereUniqueWithoutPokemonInput[]
    updateMany?: pokemon_commentUpdateManyWithWhereWithoutPokemonInput | pokemon_commentUpdateManyWithWhereWithoutPokemonInput[]
    deleteMany?: pokemon_commentScalarWhereInput | pokemon_commentScalarWhereInput[]
  }

  export type pokemonCreateNestedOneWithoutPokemon_commentInput = {
    create?: XOR<pokemonCreateWithoutPokemon_commentInput, pokemonUncheckedCreateWithoutPokemon_commentInput>
    connectOrCreate?: pokemonCreateOrConnectWithoutPokemon_commentInput
    connect?: pokemonWhereUniqueInput
  }

  export type pokemonUpdateOneRequiredWithoutPokemon_commentNestedInput = {
    create?: XOR<pokemonCreateWithoutPokemon_commentInput, pokemonUncheckedCreateWithoutPokemon_commentInput>
    connectOrCreate?: pokemonCreateOrConnectWithoutPokemon_commentInput
    upsert?: pokemonUpsertWithoutPokemon_commentInput
    connect?: pokemonWhereUniqueInput
    update?: XOR<XOR<pokemonUpdateToOneWithWhereWithoutPokemon_commentInput, pokemonUpdateWithoutPokemon_commentInput>, pokemonUncheckedUpdateWithoutPokemon_commentInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type pokemon_commentCreateWithoutPokemonInput = {
    pokemon_comment_id: number
    pokemon_comment_author: string
    pokemon_comment_date: string
    pokemon_comment_content: string
  }

  export type pokemon_commentUncheckedCreateWithoutPokemonInput = {
    pokemon_comment_id: number
    pokemon_comment_author: string
    pokemon_comment_date: string
    pokemon_comment_content: string
  }

  export type pokemon_commentCreateOrConnectWithoutPokemonInput = {
    where: pokemon_commentWhereUniqueInput
    create: XOR<pokemon_commentCreateWithoutPokemonInput, pokemon_commentUncheckedCreateWithoutPokemonInput>
  }

  export type pokemon_commentCreateManyPokemonInputEnvelope = {
    data: pokemon_commentCreateManyPokemonInput | pokemon_commentCreateManyPokemonInput[]
    skipDuplicates?: boolean
  }

  export type pokemon_commentUpsertWithWhereUniqueWithoutPokemonInput = {
    where: pokemon_commentWhereUniqueInput
    update: XOR<pokemon_commentUpdateWithoutPokemonInput, pokemon_commentUncheckedUpdateWithoutPokemonInput>
    create: XOR<pokemon_commentCreateWithoutPokemonInput, pokemon_commentUncheckedCreateWithoutPokemonInput>
  }

  export type pokemon_commentUpdateWithWhereUniqueWithoutPokemonInput = {
    where: pokemon_commentWhereUniqueInput
    data: XOR<pokemon_commentUpdateWithoutPokemonInput, pokemon_commentUncheckedUpdateWithoutPokemonInput>
  }

  export type pokemon_commentUpdateManyWithWhereWithoutPokemonInput = {
    where: pokemon_commentScalarWhereInput
    data: XOR<pokemon_commentUpdateManyMutationInput, pokemon_commentUncheckedUpdateManyWithoutPokemonInput>
  }

  export type pokemon_commentScalarWhereInput = {
    AND?: pokemon_commentScalarWhereInput | pokemon_commentScalarWhereInput[]
    OR?: pokemon_commentScalarWhereInput[]
    NOT?: pokemon_commentScalarWhereInput | pokemon_commentScalarWhereInput[]
    pokemon_comment_id?: IntFilter<"pokemon_comment"> | number
    pokemon_comment_author?: StringFilter<"pokemon_comment"> | string
    pokemon_comment_date?: StringFilter<"pokemon_comment"> | string
    pokemon_comment_content?: StringFilter<"pokemon_comment"> | string
    pokemon_id?: IntFilter<"pokemon_comment"> | number
  }

  export type pokemonCreateWithoutPokemon_commentInput = {
    pokemon_id: number
    pokemon_name: string
    pokemon_type_one: string
    pokemon_type_two: string
    pokemon_nbr_smashes: number
    pokemon_nbr_passes: number
  }

  export type pokemonUncheckedCreateWithoutPokemon_commentInput = {
    pokemon_id: number
    pokemon_name: string
    pokemon_type_one: string
    pokemon_type_two: string
    pokemon_nbr_smashes: number
    pokemon_nbr_passes: number
  }

  export type pokemonCreateOrConnectWithoutPokemon_commentInput = {
    where: pokemonWhereUniqueInput
    create: XOR<pokemonCreateWithoutPokemon_commentInput, pokemonUncheckedCreateWithoutPokemon_commentInput>
  }

  export type pokemonUpsertWithoutPokemon_commentInput = {
    update: XOR<pokemonUpdateWithoutPokemon_commentInput, pokemonUncheckedUpdateWithoutPokemon_commentInput>
    create: XOR<pokemonCreateWithoutPokemon_commentInput, pokemonUncheckedCreateWithoutPokemon_commentInput>
    where?: pokemonWhereInput
  }

  export type pokemonUpdateToOneWithWhereWithoutPokemon_commentInput = {
    where?: pokemonWhereInput
    data: XOR<pokemonUpdateWithoutPokemon_commentInput, pokemonUncheckedUpdateWithoutPokemon_commentInput>
  }

  export type pokemonUpdateWithoutPokemon_commentInput = {
    pokemon_id?: IntFieldUpdateOperationsInput | number
    pokemon_name?: StringFieldUpdateOperationsInput | string
    pokemon_type_one?: StringFieldUpdateOperationsInput | string
    pokemon_type_two?: StringFieldUpdateOperationsInput | string
    pokemon_nbr_smashes?: IntFieldUpdateOperationsInput | number
    pokemon_nbr_passes?: IntFieldUpdateOperationsInput | number
  }

  export type pokemonUncheckedUpdateWithoutPokemon_commentInput = {
    pokemon_id?: IntFieldUpdateOperationsInput | number
    pokemon_name?: StringFieldUpdateOperationsInput | string
    pokemon_type_one?: StringFieldUpdateOperationsInput | string
    pokemon_type_two?: StringFieldUpdateOperationsInput | string
    pokemon_nbr_smashes?: IntFieldUpdateOperationsInput | number
    pokemon_nbr_passes?: IntFieldUpdateOperationsInput | number
  }

  export type pokemon_commentCreateManyPokemonInput = {
    pokemon_comment_id: number
    pokemon_comment_author: string
    pokemon_comment_date: string
    pokemon_comment_content: string
  }

  export type pokemon_commentUpdateWithoutPokemonInput = {
    pokemon_comment_id?: IntFieldUpdateOperationsInput | number
    pokemon_comment_author?: StringFieldUpdateOperationsInput | string
    pokemon_comment_date?: StringFieldUpdateOperationsInput | string
    pokemon_comment_content?: StringFieldUpdateOperationsInput | string
  }

  export type pokemon_commentUncheckedUpdateWithoutPokemonInput = {
    pokemon_comment_id?: IntFieldUpdateOperationsInput | number
    pokemon_comment_author?: StringFieldUpdateOperationsInput | string
    pokemon_comment_date?: StringFieldUpdateOperationsInput | string
    pokemon_comment_content?: StringFieldUpdateOperationsInput | string
  }

  export type pokemon_commentUncheckedUpdateManyWithoutPokemonInput = {
    pokemon_comment_id?: IntFieldUpdateOperationsInput | number
    pokemon_comment_author?: StringFieldUpdateOperationsInput | string
    pokemon_comment_date?: StringFieldUpdateOperationsInput | string
    pokemon_comment_content?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PokemonCountOutputTypeDefaultArgs instead
     */
    export type PokemonCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PokemonCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use pokemonDefaultArgs instead
     */
    export type pokemonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = pokemonDefaultArgs<ExtArgs>
    /**
     * @deprecated Use pokemon_commentDefaultArgs instead
     */
    export type pokemon_commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = pokemon_commentDefaultArgs<ExtArgs>

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