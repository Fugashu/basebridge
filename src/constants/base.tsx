import { Chain } from 'wagmi';

export const baseMainnet = {
  id: 8453,
  name: 'Base Mainnet',
  network: 'base',
  nativeCurrency: {
    decimals: 18,
    name: 'Base',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['https://mainnet.base.org'] },
    default: { http: ['https://mainnet.base.org'] },
  },
  blockExplorers: {
    etherscan: { name: 'BlockExplorer', url: 'https://basescan.org' },
    default: { name: 'BlockExplorer', url: 'https://basescan.org' },
  },
} as const satisfies Chain;
export const BASE_PROXY_CONTRACT_ADDRESS =
  '0x49048044d57e1c92a77f79988d21fa8faf74e97e';
