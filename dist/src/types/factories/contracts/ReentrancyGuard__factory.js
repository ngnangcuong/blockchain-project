"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReentrancyGuard__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
];
const _bytecode = "0x6080604052348015600f57600080fd5b506001600081905550603f8060256000396000f3fe6080604052600080fdfea264697066735822122066895883ccd95f64be4386b1d45945ba7383f2e347413ae1137d5a03227b6b0d64736f6c63430008140033";
const isSuperArgs = (xs) => xs.length > 1;
class ReentrancyGuard__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    connect(runner) {
        return super.connect(runner);
    }
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.ReentrancyGuard__factory = ReentrancyGuard__factory;
ReentrancyGuard__factory.bytecode = _bytecode;
ReentrancyGuard__factory.abi = _abi;
//# sourceMappingURL=ReentrancyGuard__factory.js.map