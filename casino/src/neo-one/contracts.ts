/* @hash 61f870a43649929cee014c8ba0ae1237 */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';

import { HelloWorldSmartContract, HelloWorldMigrationSmartContract } from './HelloWorld/types';

import { createHelloWorldSmartContract } from './HelloWorld/contract';

export interface Contracts<TClient extends Client = Client> {
  readonly helloWorld: HelloWorldSmartContract<TClient>;
}
// Refer to the MigrationSmartContract documentation at https://neo-one.io/docs/deployment for more information.
export interface MigrationContracts {
  readonly helloWorld: HelloWorldMigrationSmartContract;
}

export const createContracts = <TClient extends Client>(client: TClient): Contracts<TClient> => ({
  helloWorld: createHelloWorldSmartContract(client),
});
