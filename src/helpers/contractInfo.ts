export const contractAddress = '0x3b53B9ff149117c2fD7A3e4c66E4e4a0F68CeDbD'
export const abi = [
    {
        inputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: '_from',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'string',
                name: '_mid',
                type: 'string',
            },
        ],
        name: 'Broadcast',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: '_from',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: '_to',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'string',
                name: '_mid',
                type: 'string',
            },
        ],
        name: 'Message',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: '_sender',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: '_subscription',
                type: 'address',
            },
        ],
        name: 'SubscribeBroadcast',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: '_sender',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: '_subscription',
                type: 'address',
            },
        ],
        name: 'UnsubscribeBroadcast',
        type: 'event',
    },
    {
        constant: true,
        inputs: [],
        name: 'getWhiteListOptIn',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'getLatestWhiteListIndex',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                internalType: 'uint256',
                name: '_index',
                type: 'uint256',
            },
        ],
        name: 'getWhiteList',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [],
        name: 'toggleWhiteList',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: '_receiver',
                type: 'address',
            },
        ],
        name: 'addToWhiteList',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: '_receiver',
                type: 'address',
            },
        ],
        name: 'removeWhiteList',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: '_receiver',
                type: 'address',
            },
            {
                internalType: 'string',
                name: '_mid',
                type: 'string',
            },
        ],
        name: 'sendMessage',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'string',
                name: '_mid',
                type: 'string',
            },
        ],
        name: 'sendBroadcast',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: 'subscription',
                type: 'address',
            },
        ],
        name: 'subscribeAddress',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: 'subscription',
                type: 'address',
            },
        ],
        name: 'unsubscribeAddress',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
]
