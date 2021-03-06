/* @hash 386d6513191e9599144295da9edf2c9b */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';

import { HelloWorldSmartContract, HelloWorldMigrationSmartContract } from './HelloWorld/types';
import { TokenSmartContract, TokenMigrationSmartContract } from './Token/types';

import { createHelloWorldSmartContract } from './HelloWorld/contract';
import { createTokenSmartContract } from './Token/contract';

export interface Contracts<TClient extends Client = Client> {
  readonly helloWorld: HelloWorldSmartContract<TClient>;
  readonly token: TokenSmartContract<TClient>;
}
// Refer to the MigrationSmartContract documentation at https://neo-one.io/docs/deployment for more information.
export interface MigrationContracts {
  readonly helloWorld: HelloWorldMigrationSmartContract;
  readonly token: TokenMigrationSmartContract;
}

export const createContracts = <TClient extends Client>(client: TClient): Contracts<TClient> => ({
  helloWorld: createHelloWorldSmartContract(client),
  token: createTokenSmartContract(client),
});
