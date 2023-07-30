'use client';
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrum, mainnet, polygon } from 'wagmi/chains';
import HeroSectionComponent from '@/components/herosection.component';
import FooterComponent from '@/components/footer.component';
import { PROJECT_ID } from '@/constants/project_id';
import { baseMainnet } from '@/constants/base-mainnet-network';
import FaqComponent from '@/components/faq.component';
import DonationComponent from '@/components/donation.component';

export default function Home() {
  const chains = [mainnet, baseMainnet];
  const projectId = PROJECT_ID;

  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId }),
  ]);
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient,
  });

  const ethereumClient = new EthereumClient(wagmiConfig, chains);

  return (
    <div>
      <WagmiConfig config={wagmiConfig}>
        <HeroSectionComponent />
        <DonationComponent />
        <FaqComponent />
        <FooterComponent />
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </WagmiConfig>
    </div>
  );
}
