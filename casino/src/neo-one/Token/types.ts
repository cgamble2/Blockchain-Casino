/* @hash 74511d60e523c1c7c1459b6226528371 */
// tslint:disable
/* eslint-disable */
import {
  AddressString,
  Client,
  Event,
  GetOptions,
  InvocationTransaction,
  InvokeReceipt,
  InvokeReceiveTransactionOptions,
  InvokeSendUnsafeTransactionOptions,
  SmartContract,
  TransactionOptions,
  TransactionResult,
} from '@neo-one/client';
import BigNumber from 'bignumber.js';

export interface TokenTransferEventParameters {
  readonly from: AddressString | undefined;
  readonly to: AddressString | undefined;
  readonly amount: BigNumber;
}
export interface TokenTransferEvent extends Event<'transfer', TokenTransferEventParameters> {}
export interface TokenApproveSendTransferEventParameters {
  readonly from: AddressString;
  readonly by: AddressString;
  readonly amount: BigNumber;
}
export interface TokenApproveSendTransferEvent
  extends Event<'approveSendTransfer', TokenApproveSendTransferEventParameters> {}
export interface TokenRevokeSendTransferEventParameters {
  readonly from: AddressString;
  readonly by: AddressString;
  readonly amount: BigNumber;
}
export interface TokenRevokeSendTransferEvent
  extends Event<'revokeSendTransfer', TokenRevokeSendTransferEventParameters> {}
export type TokenEvent = TokenTransferEvent | TokenApproveSendTransferEvent | TokenRevokeSendTransferEvent;

export interface TokenSmartContract<TClient extends Client = Client> extends SmartContract<TClient, TokenEvent> {
  readonly amountPerNEO: () => Promise<BigNumber>;
  readonly approveSendTransfer: {
    (from: AddressString, by: AddressString, amount: BigNumber, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<boolean, TokenEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      from: AddressString,
      by: AddressString,
      amount: BigNumber,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<boolean, TokenEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly approvedTransfer: (from: AddressString, by?: AddressString) => Promise<BigNumber>;
  readonly balanceOf: (address: AddressString) => Promise<BigNumber>;
  readonly decimals: () => Promise<BigNumber>;
  readonly deploy: {
    (
      owner?: AddressString,
      icoStartTimeSeconds?: BigNumber,
      icoDurationSeconds?: BigNumber,
      options?: TransactionOptions,
    ): Promise<TransactionResult<InvokeReceipt<boolean, TokenEvent>, InvocationTransaction>>;
    readonly confirmed: (
      owner?: AddressString,
      icoStartTimeSeconds?: BigNumber,
      icoDurationSeconds?: BigNumber,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<boolean, TokenEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly icoDurationSeconds: () => Promise<BigNumber>;
  readonly icoStartTimeSeconds: () => Promise<BigNumber>;
  readonly mintTokens: {
    (options?: InvokeReceiveTransactionOptions): Promise<
      TransactionResult<InvokeReceipt<undefined, TokenEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      options?: InvokeReceiveTransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<undefined, TokenEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly name: () => Promise<string>;
  readonly owner: () => Promise<AddressString>;
  readonly refundAssets: {
    (options?: InvokeSendUnsafeTransactionOptions): Promise<
      TransactionResult<InvokeReceipt<undefined, TokenEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      options?: InvokeSendUnsafeTransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<undefined, TokenEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly remaining: () => Promise<BigNumber>;
  readonly revokeSendTransfer: {
    (from: AddressString, by: AddressString, amount: BigNumber, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<boolean, TokenEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      from: AddressString,
      by: AddressString,
      amount: BigNumber,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<boolean, TokenEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly symbol: () => Promise<string>;
  readonly totalSupply: () => Promise<BigNumber>;
  readonly transfer: {
    (from: AddressString, to: AddressString, amount: BigNumber, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<boolean, TokenEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      from: AddressString,
      to: AddressString,
      amount: BigNumber,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<boolean, TokenEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly withdraw: {
    (options?: InvokeSendUnsafeTransactionOptions): Promise<
      TransactionResult<InvokeReceipt<undefined, TokenEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      options?: InvokeSendUnsafeTransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<undefined, TokenEvent> & { readonly transaction: InvocationTransaction }>;
  };
}

export interface TokenMigrationSmartContract {
  readonly amountPerNEO: () => Promise<BigNumber>;
  readonly approveSendTransfer: (
    from: AddressString | Promise<AddressString>,
    by: AddressString | Promise<AddressString>,
    amount: BigNumber | Promise<BigNumber>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<boolean, TokenEvent> & { readonly transaction: InvocationTransaction }>;
  readonly approvedTransfer: (
    from: AddressString | Promise<AddressString>,
    by?: AddressString | Promise<AddressString>,
  ) => Promise<BigNumber>;
  readonly balanceOf: (address: AddressString | Promise<AddressString>) => Promise<BigNumber>;
  readonly decimals: () => Promise<BigNumber>;
  readonly deploy: (
    owner?: AddressString | Promise<AddressString>,
    icoStartTimeSeconds?: BigNumber | Promise<BigNumber>,
    icoDurationSeconds?: BigNumber | Promise<BigNumber>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<boolean, TokenEvent> & { readonly transaction: InvocationTransaction }>;
  readonly icoDurationSeconds: () => Promise<BigNumber>;
  readonly icoStartTimeSeconds: () => Promise<BigNumber>;
  readonly mintTokens: (
    options?: InvokeReceiveTransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<undefined, TokenEvent> & { readonly transaction: InvocationTransaction }>;
  readonly name: () => Promise<string>;
  readonly owner: () => Promise<AddressString>;
  readonly refundAssets: (
    options?: InvokeSendUnsafeTransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<undefined, TokenEvent> & { readonly transaction: InvocationTransaction }>;
  readonly remaining: () => Promise<BigNumber>;
  readonly revokeSendTransfer: (
    from: AddressString | Promise<AddressString>,
    by: AddressString | Promise<AddressString>,
    amount: BigNumber | Promise<BigNumber>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<boolean, TokenEvent> & { readonly transaction: InvocationTransaction }>;
  readonly symbol: () => Promise<string>;
  readonly totalSupply: () => Promise<BigNumber>;
  readonly transfer: (
    from: AddressString | Promise<AddressString>,
    to: AddressString | Promise<AddressString>,
    amount: BigNumber | Promise<BigNumber>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<boolean, TokenEvent> & { readonly transaction: InvocationTransaction }>;
  readonly withdraw: (
    options?: InvokeSendUnsafeTransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<undefined, TokenEvent> & { readonly transaction: InvocationTransaction }>;
}
