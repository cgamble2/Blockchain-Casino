/* @hash f7e66c198f6fc95e66d817e4b89f03a6 */
// tslint:disable
/* eslint-disable */
import { Client, DeveloperClients, DeveloperTools } from '@neo-one/client';
import * as React from 'react';
import { Contracts } from './contracts';
import { createClient, createDeveloperClients } from './client';
import { createHelloWorldSmartContract } from './HelloWorld/contract';
import { createTokenSmartContract } from './Token/contract';

export interface WithClients<TClient extends Client> {
  readonly client: TClient;
  readonly developerClients: DeveloperClients;
  readonly host?: string;
}
export type ContractsWithClients<TClient extends Client> = Contracts & WithClients<TClient>;

const Context = React.createContext<ContractsWithClients<any>>(undefined as any);

export type ContractsProviderProps<TClient extends Client> = Partial<WithClients<TClient>> & {
  readonly children?: React.ReactNode;
};
export const ContractsProvider = <TClient extends Client>({
  client: clientIn,
  developerClients: developerClientsIn,
  host,
  children,
}: ContractsProviderProps<TClient>) => {
  const client = clientIn === undefined ? createClient(host) : clientIn;
  const developerClients = developerClientsIn === undefined ? createDeveloperClients(host) : developerClientsIn;
  DeveloperTools.enable({ client, developerClients });

  return (
    <Context.Provider
      value={{
        client,
        developerClients,
        helloWorld: createHelloWorldSmartContract(client),
        token: createTokenSmartContract(client),
      }}
    >
      {children}
    </Context.Provider>
  );
};

export interface WithContractsProps<TClient extends Client> {
  readonly children: (contracts: ContractsWithClients<TClient>) => React.ReactNode;
}
export const WithContracts = <TClient extends Client>({ children }: WithContractsProps<TClient>) => (
  <Context.Consumer>{children}</Context.Consumer>
);

export const useContracts = <TClient extends Client>(): ContractsWithClients<TClient> => React.useContext(Context);
