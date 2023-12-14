import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { ReentrancyGuard, ReentrancyGuardInterface } from "../../contracts/ReentrancyGuard";
type ReentrancyGuardConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ReentrancyGuard__factory extends ContractFactory {
    constructor(...args: ReentrancyGuardConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ReentrancyGuard & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): ReentrancyGuard__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b506001600081905550603f8060256000396000f3fe6080604052600080fdfea264697066735822122066895883ccd95f64be4386b1d45945ba7383f2e347413ae1137d5a03227b6b0d64736f6c63430008140033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }];
    static createInterface(): ReentrancyGuardInterface;
    static connect(address: string, runner?: ContractRunner | null): ReentrancyGuard;
}
export {};
