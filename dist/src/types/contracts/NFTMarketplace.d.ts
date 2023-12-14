import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../common";
export declare namespace NFTMarketplace {
    type NFTStruct = {
        nftContract: AddressLike;
        tokenId: BigNumberish;
        seller: AddressLike;
        owner: AddressLike;
        price: BigNumberish;
        listed: boolean;
    };
    type NFTStructOutput = [
        nftContract: string,
        tokenId: bigint,
        seller: string,
        owner: string,
        price: bigint,
        listed: boolean
    ] & {
        nftContract: string;
        tokenId: bigint;
        seller: string;
        owner: string;
        price: bigint;
        listed: boolean;
    };
}
export interface NFTMarketplaceInterface extends Interface {
    getFunction(nameOrSignature: "LISTING_FEE" | "buyNFT" | "getListedNFTs" | "getMyListNFTs" | "getMyNFTs" | "listNFT" | "resellNft"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "NFTListed" | "NFTSold"): EventFragment;
    encodeFunctionData(functionFragment: "LISTING_FEE", values?: undefined): string;
    encodeFunctionData(functionFragment: "buyNFT", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getListedNFTs", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMyListNFTs", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMyNFTs", values?: undefined): string;
    encodeFunctionData(functionFragment: "listNFT", values: [AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "resellNft", values: [AddressLike, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "LISTING_FEE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buyNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getListedNFTs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMyListNFTs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMyNFTs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "listNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resellNft", data: BytesLike): Result;
}
export declare namespace NFTListedEvent {
    type InputTuple = [
        nftContract: AddressLike,
        tokenId: BigNumberish,
        seller: AddressLike,
        owner: AddressLike,
        price: BigNumberish
    ];
    type OutputTuple = [
        nftContract: string,
        tokenId: bigint,
        seller: string,
        owner: string,
        price: bigint
    ];
    interface OutputObject {
        nftContract: string;
        tokenId: bigint;
        seller: string;
        owner: string;
        price: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NFTSoldEvent {
    type InputTuple = [
        nftContract: AddressLike,
        tokenId: BigNumberish,
        seller: AddressLike,
        owner: AddressLike,
        price: BigNumberish
    ];
    type OutputTuple = [
        nftContract: string,
        tokenId: bigint,
        seller: string,
        owner: string,
        price: bigint
    ];
    interface OutputObject {
        nftContract: string;
        tokenId: bigint;
        seller: string;
        owner: string;
        price: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface NFTMarketplace extends BaseContract {
    connect(runner?: ContractRunner | null): NFTMarketplace;
    waitForDeployment(): Promise<this>;
    interface: NFTMarketplaceInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    LISTING_FEE: TypedContractMethod<[], [bigint], "view">;
    buyNFT: TypedContractMethod<[
        _nftContract: AddressLike,
        _tokenId: BigNumberish
    ], [
        void
    ], "payable">;
    getListedNFTs: TypedContractMethod<[
    ], [
        NFTMarketplace.NFTStructOutput[]
    ], "view">;
    getMyListNFTs: TypedContractMethod<[
    ], [
        NFTMarketplace.NFTStructOutput[]
    ], "view">;
    getMyNFTs: TypedContractMethod<[
    ], [
        NFTMarketplace.NFTStructOutput[]
    ], "view">;
    listNFT: TypedContractMethod<[
        _nftContract: AddressLike,
        _tokenId: BigNumberish,
        _price: BigNumberish
    ], [
        void
    ], "payable">;
    resellNft: TypedContractMethod<[
        _nftContract: AddressLike,
        _tokenId: BigNumberish,
        _price: BigNumberish
    ], [
        void
    ], "payable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "LISTING_FEE"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "buyNFT"): TypedContractMethod<[
        _nftContract: AddressLike,
        _tokenId: BigNumberish
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "getListedNFTs"): TypedContractMethod<[], [NFTMarketplace.NFTStructOutput[]], "view">;
    getFunction(nameOrSignature: "getMyListNFTs"): TypedContractMethod<[], [NFTMarketplace.NFTStructOutput[]], "view">;
    getFunction(nameOrSignature: "getMyNFTs"): TypedContractMethod<[], [NFTMarketplace.NFTStructOutput[]], "view">;
    getFunction(nameOrSignature: "listNFT"): TypedContractMethod<[
        _nftContract: AddressLike,
        _tokenId: BigNumberish,
        _price: BigNumberish
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "resellNft"): TypedContractMethod<[
        _nftContract: AddressLike,
        _tokenId: BigNumberish,
        _price: BigNumberish
    ], [
        void
    ], "payable">;
    getEvent(key: "NFTListed"): TypedContractEvent<NFTListedEvent.InputTuple, NFTListedEvent.OutputTuple, NFTListedEvent.OutputObject>;
    getEvent(key: "NFTSold"): TypedContractEvent<NFTSoldEvent.InputTuple, NFTSoldEvent.OutputTuple, NFTSoldEvent.OutputObject>;
    filters: {
        "NFTListed(address,uint256,address,address,uint256)": TypedContractEvent<NFTListedEvent.InputTuple, NFTListedEvent.OutputTuple, NFTListedEvent.OutputObject>;
        NFTListed: TypedContractEvent<NFTListedEvent.InputTuple, NFTListedEvent.OutputTuple, NFTListedEvent.OutputObject>;
        "NFTSold(address,uint256,address,address,uint256)": TypedContractEvent<NFTSoldEvent.InputTuple, NFTSoldEvent.OutputTuple, NFTSoldEvent.OutputObject>;
        NFTSold: TypedContractEvent<NFTSoldEvent.InputTuple, NFTSoldEvent.OutputTuple, NFTSoldEvent.OutputObject>;
    };
}