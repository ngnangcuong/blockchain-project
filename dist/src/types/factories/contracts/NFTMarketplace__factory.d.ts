import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { NFTMarketplace, NFTMarketplaceInterface } from "../../contracts/NFTMarketplace";
type NFTMarketplaceConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NFTMarketplace__factory extends ContractFactory {
    constructor(...args: NFTMarketplaceConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<NFTMarketplace & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): NFTMarketplace__factory;
    static readonly bytecode = "0x6080604052655af3107a400060035534801561001a57600080fd5b50600160008190555033600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611ae2806100736000396000f3fe6080604052600436106100705760003560e01c806334f5b6241161004e57806334f5b624146100f6578063629cb2e414610112578063a82ba76f1461013d578063ad05f1b41461015957610070565b8063012386f0146100755780631a7a922e146100a05780632b86ae38146100cb575b600080fd5b34801561008157600080fd5b5061008a610175565b604051610097919061150d565b60405180910390f35b3480156100ac57600080fd5b506100b56103cf565b6040516100c2919061150d565b60405180910390f35b3480156100d757600080fd5b506100e061076d565b6040516100ed919061153e565b60405180910390f35b610110600480360381019061010b91906115b6565b610773565b005b34801561011e57600080fd5b506101276109b7565b604051610134919061150d565b60405180910390f35b61015760048036038101906101529190611609565b610ce3565b005b610173600480360381019061016e91906115b6565b610f57565b005b60606000600254905060006001548261018e9190611678565b905060008167ffffffffffffffff8111156101ac576101ab6116ac565b5b6040519080825280602002602001820160405280156101e557816020015b6101d26112d3565b8152602001906001900390816101ca5790505b5090506000805b848110156103c4576005600060018361020591906116db565b815260200190815260200160002060050160009054906101000a900460ff16156103b1576005600060018361023a91906116db565b81526020019081526020016000206040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600482015481526020016005820160009054906101000a900460ff1615151515815250508383815181106103975761039661170f565b5b602002602001018190525081806103ad9061173e565b9250505b80806103bc9061173e565b9150506101ec565b508194505050505090565b6060600060025490506000805b828110156104b4573373ffffffffffffffffffffffffffffffffffffffff166005600060018461040c91906116db565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614801561048d57506005600060018361046d91906116db565b815260200190815260200160002060050160009054906101000a900460ff165b156104a157818061049d9061173e565b9250505b80806104ac9061173e565b9150506103dc565b5060008167ffffffffffffffff8111156104d1576104d06116ac565b5b60405190808252806020026020018201604052801561050a57816020015b6104f76112d3565b8152602001906001900390816104ef5790505b5090506000805b84811015610762573373ffffffffffffffffffffffffffffffffffffffff166005600060018461054191906116db565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161480156105c25750600560006001836105a291906116db565b815260200190815260200160002060050160009054906101000a900460ff165b1561074f57600560006001836105d891906116db565b81526020019081526020016000206040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600482015481526020016005820160009054906101000a900460ff1615151515815250508383815181106107355761073461170f565b5b6020026020010181905250818061074b9061173e565b9250505b808061075a9061173e565b915050610511565b508194505050505090565b60035481565b600160008082825461078591906116db565b92505081905550600080549050600082116107d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107cc906117e3565b60405180910390fd5b6003543414610819576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108109061184f565b60405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b81526004016108569392919061187e565b600060405180830381600087803b15801561087057600080fd5b505af1158015610884573d6000803e3d6000fd5b505050506000600560008581526020019081526020016000209050338160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550308160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018160050160006101000a81548160ff0219169083151502179055508281600401819055506001600081548092919061095e906118b5565b91905055507fa0c6c0d02d86fdacecbaa5fdf5894bab204e31a778250474108540733a9b8d19858533308760405161099a9594939291906118de565b60405180910390a15060005481146109b157600080fd5b50505050565b6060600060025490506000805b82811015610a63573373ffffffffffffffffffffffffffffffffffffffff16600560006001846109f491906116db565b815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610a50578180610a4c9061173e565b9250505b8080610a5b9061173e565b9150506109c4565b5060008167ffffffffffffffff811115610a8057610a7f6116ac565b5b604051908082528060200260200182016040528015610ab957816020015b610aa66112d3565b815260200190600190039081610a9e5790505b5090506000805b84811015610cd8573373ffffffffffffffffffffffffffffffffffffffff1660056000600184610af091906116db565b815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610cc55760056000600183610b4e91906116db565b81526020019081526020016000206040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600482015481526020016005820160009054906101000a900460ff161515151581525050838381518110610cab57610caa61170f565b5b60200260200101819052508180610cc19061173e565b9250505b8080610cd09061173e565b915050610ac0565b508194505050505090565b6001600080828254610cf591906116db565b9250508190555060008054905060006005600084815260200190815260200160002090508060040154341015610d60576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d57906119a3565b60405180910390fd5b60003390508160020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610dcf573d6000803e3d6000fd5b508473ffffffffffffffffffffffffffffffffffffffff166323b872dd308385600101546040518463ffffffff1660e01b8152600401610e1193929190611a22565b600060405180830381600087803b158015610e2b57600080fd5b505af1158015610e3f573d6000803e3d6000fd5b50505050808260030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008260050160006101000a81548160ff02191690831515021790555060016000815480929190610eb69061173e565b91905055507f16f1dbd97e6bf646d429ed186cce832f1f7fd9907814293b83181e9970ab7bd285858460020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168560030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1634604051610f3a959493929190611a59565b60405180910390a150506000548114610f5257600080fd5b505050565b6001600080828254610f6991906116db565b9250508190555060008054905060008211610fb9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb0906117e3565b60405180910390fd5b6003543414610ffd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ff49061184f565b60405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b815260040161103a9392919061187e565b600060405180830381600087803b15801561105457600080fd5b505af1158015611068573d6000803e3d6000fd5b50505050600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6003549081150290604051600060405180830381858888f193505050501580156110d6573d6000803e3d6000fd5b50600260008154809291906110ea9061173e565b91905055506040518060c001604052808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020013373ffffffffffffffffffffffffffffffffffffffff1681526020013073ffffffffffffffffffffffffffffffffffffffff168152602001838152602001600115158152506005600085815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506080820151816004015560a08201518160050160006101000a81548160ff0219169083151502179055509050507fa0c6c0d02d86fdacecbaa5fdf5894bab204e31a778250474108540733a9b8d1984843330866040516112b79594939291906118de565b60405180910390a160005481146112cd57600080fd5b50505050565b6040518060c00160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000151581525090565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006113a482611379565b9050919050565b6113b481611399565b82525050565b6000819050919050565b6113cd816113ba565b82525050565b60006113de82611379565b9050919050565b6113ee816113d3565b82525050565b60008115159050919050565b611409816113f4565b82525050565b60c08201600082015161142560008501826113ab565b50602082015161143860208501826113c4565b50604082015161144b60408501826113e5565b50606082015161145e60608501826113e5565b50608082015161147160808501826113c4565b5060a082015161148460a0850182611400565b50505050565b6000611496838361140f565b60c08301905092915050565b6000602082019050919050565b60006114ba8261134d565b6114c48185611358565b93506114cf83611369565b8060005b838110156115005781516114e7888261148a565b97506114f2836114a2565b9250506001810190506114d3565b5085935050505092915050565b6000602082019050818103600083015261152781846114af565b905092915050565b611538816113ba565b82525050565b6000602082019050611553600083018461152f565b92915050565b600080fd5b61156781611399565b811461157257600080fd5b50565b6000813590506115848161155e565b92915050565b611593816113ba565b811461159e57600080fd5b50565b6000813590506115b08161158a565b92915050565b6000806000606084860312156115cf576115ce611559565b5b60006115dd86828701611575565b93505060206115ee868287016115a1565b92505060406115ff868287016115a1565b9150509250925092565b600080604083850312156116205761161f611559565b5b600061162e85828601611575565b925050602061163f858286016115a1565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611683826113ba565b915061168e836113ba565b92508282039050818111156116a6576116a5611649565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006116e6826113ba565b91506116f1836113ba565b925082820190508082111561170957611708611649565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000611749826113ba565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361177b5761177a611649565b5b600182019050919050565b600082825260208201905092915050565b7f5072696365206d757374206265206174206c6561737420312077656900000000600082015250565b60006117cd601c83611786565b91506117d882611797565b602082019050919050565b600060208201905081810360008301526117fc816117c0565b9050919050565b7f4e6f7420656e6f75676820657468657220666f72206c697374696e6720666565600082015250565b6000611839602083611786565b915061184482611803565b602082019050919050565b600060208201905081810360008301526118688161182c565b9050919050565b61187881611399565b82525050565b6000606082019050611893600083018661186f565b6118a0602083018561186f565b6118ad604083018461152f565b949350505050565b60006118c0826113ba565b9150600082036118d3576118d2611649565b5b600182039050919050565b600060a0820190506118f3600083018861186f565b611900602083018761152f565b61190d604083018661186f565b61191a606083018561186f565b611927608083018461152f565b9695505050505050565b7f4e6f7420656e6f75676820657468657220746f20636f7665722061736b696e6760008201527f2070726963650000000000000000000000000000000000000000000000000000602082015250565b600061198d602683611786565b915061199882611931565b604082019050919050565b600060208201905081810360008301526119bc81611980565b9050919050565b6000819050919050565b60006119e86119e36119de84611379565b6119c3565b611379565b9050919050565b60006119fa826119cd565b9050919050565b6000611a0c826119ef565b9050919050565b611a1c81611a01565b82525050565b6000606082019050611a37600083018661186f565b611a446020830185611a13565b611a51604083018461152f565b949350505050565b600060a082019050611a6e600083018861186f565b611a7b602083018761152f565b611a886040830186611a13565b611a956060830185611a13565b611aa2608083018461152f565b969550505050505056fea2646970667358221220fd17c80760609b03c1c6dc28ab6b8a9a3e75934edac19b8550d22f65b31faf6d64736f6c63430008140033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "nftContract";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "seller";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "price";
            readonly type: "uint256";
        }];
        readonly name: "NFTListed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "nftContract";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "seller";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "price";
            readonly type: "uint256";
        }];
        readonly name: "NFTSold";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "LISTING_FEE";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_nftContract";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_tokenId";
            readonly type: "uint256";
        }];
        readonly name: "buyNFT";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getListedNFTs";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "nftContract";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }, {
                readonly internalType: "address payable";
                readonly name: "seller";
                readonly type: "address";
            }, {
                readonly internalType: "address payable";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "price";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "listed";
                readonly type: "bool";
            }];
            readonly internalType: "struct NFTMarketplace.NFT[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getMyListNFTs";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "nftContract";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }, {
                readonly internalType: "address payable";
                readonly name: "seller";
                readonly type: "address";
            }, {
                readonly internalType: "address payable";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "price";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "listed";
                readonly type: "bool";
            }];
            readonly internalType: "struct NFTMarketplace.NFT[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getMyNFTs";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "nftContract";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }, {
                readonly internalType: "address payable";
                readonly name: "seller";
                readonly type: "address";
            }, {
                readonly internalType: "address payable";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "price";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "listed";
                readonly type: "bool";
            }];
            readonly internalType: "struct NFTMarketplace.NFT[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_nftContract";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_price";
            readonly type: "uint256";
        }];
        readonly name: "listNFT";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_nftContract";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_price";
            readonly type: "uint256";
        }];
        readonly name: "resellNft";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): NFTMarketplaceInterface;
    static connect(address: string, runner?: ContractRunner | null): NFTMarketplace;
}
export {};
