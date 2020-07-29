interface CallOptions {
    _compoundProvider?: any;
    abi?: string | object[];
    provider?: any;
    network?: string;
    from?: number | string;
    gasPrice?: number;
    gasLimit?: number;
    value?: number | string;
    data?: number | string;
    chainId?: number;
    nonce?: number;
    privateKey?: string;
    mnemonic?: string;
}
/**
 * This is a generic method for invoking JSON RPC's `eth_call` with ethers.js.
 *     Use this method to execute a smart contract's constant or non-constant
 *     member without using gas. This is a read-only method intended to read a
 *     value or test a transaction for valid parameters. It does not create a
 *     transaction on the block chain.
 *
 * @param {string} address The Ethereum address the transaction is directed to.
 * @param {string} method The smart contract member in which to invoke.
 * @param {any[]} [parameters] Parameters of the method to invoke.
 * @param {CallOptions} [options] Options to set for `eth_call`, optional ABI
 *     (as JSON object), and ethers.js method overrides. The ABI can be a string
 *     of the single intended method, an array of many methods, or a JSON object
 *     of the ABI generated by a Solidity compiler.
 *
 * @returns {any} Return value of the invoked smart contract member or an error
 *     object if the call failed.
 */
export declare function read(address: string, method: string, parameters?: any[], options?: CallOptions): Promise<any>;
/**
 * This is a generic method for invoking JSON RPC's `eth_sendTransaction` with
 *     ethers.js. Use this method to create a transaction that invokes a smart
 *     contract method. Returns an ethers.js `TransactionResponse` object.
 *
 * @param {string} address The Ethereum address the transaction is directed to.
 * @param {string} method The smart contract member in which to invoke.
 * @param {any[]} [parameters] Parameters of the method to invoke.
 * @param {CallOptions} [options] Options to set for `eth_sendTransaction`,
 *     (as JSON object), and ethers.js method overrides. The ABI can be a string
 *     optional ABI of the single intended method, an array of many methods, or
 *     a JSON object of the ABI generated by a Solidity compiler.
 *
 * @returns {any} Returns an ethers.js `TransactionResponse` object or an error
 *     object if the transaction failed.
 */
export declare function trx(address: string, method: string, parameters?: any[], options?: CallOptions): Promise<any>;
export declare function getProviderNetwork(provider: any): Promise<{
    id: any;
    name: any;
}>;
export declare function getBalance(address: string, provider: any): Promise<any>;
export declare function createProvider(options?: CallOptions): any;
export {};
