/* @hash a23698aff79ec30e71a3d9f0d2db7da5 */
// tslint:disable
/* eslint-disable */
import { createWithContracts, TestOptions, WithContractsOptions } from '@neo-one/smart-contract-test';
import { Contracts } from './contracts';
import * as path from 'path';

export const withContracts: (
  test: (contracts: Contracts & TestOptions) => Promise<void>,
  options?: WithContractsOptions,
) => Promise<void> = createWithContracts([
  { name: 'HelloWorld', filePath: path.resolve(__dirname, '../../neo-one/contracts/HelloWorld.ts') },
  { name: 'Player', filePath: path.resolve(__dirname, '../../neo-one/contracts/Player.ts') },
  { name: 'Token', filePath: path.resolve(__dirname, '../../neo-one/contracts/Token.ts') },
]);
