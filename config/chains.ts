import { ChainMap, ChainMetadata, ProtocolType } from '@hyperlane-xyz/sdk';

// import { chainMetadata } from '@hyperlane-xyz/sdk';
// A map of chain names to ChainMetadata
export const chains: ChainMap<ChainMetadata> = {
  // ----------- Add your chains here -----------------
  anvil1: {
    name: 'anvil1',
    protocol: ProtocolType.Ethereum,
    // anvil default chain id
    chainId: 31337,
    // Used to configure a Warp Route to bridge anvil1 ETH
    // to anvil2 in CI tests.
    nativeToken: {
      name: 'ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [
      {
        http: 'http://127.0.0.1:8545',
      },
    ],
    // You can set overrides for transaction fields here
    // transactionOverrides: {
    //   gasLimit: 1000000
    // },
  },
  optimism: {
    name: 'optimism',
    protocol: ProtocolType.Ethereum,
    chainId: 300,
    rpcUrls: [
      {
        http: 'https://rpc.ankr.com/optimism',
      },
    ],
  },
  // optimismGoerli: {
  //   name: 'optimismGoerli',
  //   protocol: ProtocolType.Ethereum,
  //   chainId: 420,
  //   rpcUrls: [
  //     {
  //       http: 'https://optimism-goerli.publicnode.com',
  //     },
  //     // {
  //     //   http: 'https://rpc.goerli.optimism.gateway.fm',
  //     // },
  //     // {
  //     //   http: 'https://opt-goerli.g.alchemy.com/v2/demo',
  //     // },
  //     // {
  //     //   http: 'https://endpoints.omniatech.io/v1/op/goerli/public',
  //     // },
  //   ],
  // },
  celo: {
    name: 'celo',
    protocol: ProtocolType.Ethereum,
    chainId: 42220,
    rpcUrls: [
      {
        http: 'https://rpc.ankr.com/polygon',
      },
    ],
  },
  alfajores: {
    name: 'alfajores',
    protocol: ProtocolType.Ethereum,
    chainId: 44787,
    rpcUrls: [
      {
        http: 'https://alfajores-forno.celo-testnet.org',
      },
    ],
  },
  polygon: {
    name: 'polygon',
    protocol: ProtocolType.Ethereum,
    chainId: 137,
    rpcUrls: [
      {
        http: 'https://rpc.ankr.com/polygon',
      },
    ],
  },
  mumbai: {
    name: 'mumbai',
    protocol: ProtocolType.Ethereum,
    chainId: 80001,
    rpcUrls: [
      {
        http: 'https://polygon-mumbai-bor.publicnode.com	',
      },
    ],
  },
  // --------------------------------------------------
  // You can also override the default chain metadata (completely)
  // ethereum: {
  //   ...chainMetadata.ethereum,
  //   publicRpcUrls: [
  //     {
  //       http: 'my.custom.rpc.url',
  //     }
  //   ],
  // }
};
