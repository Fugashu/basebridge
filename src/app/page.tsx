'use client';
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import HeroSectionComponent from '@/components/herosection.component';
import FooterComponent from '@/components/footer.component';
import { ProjectId } from '@/constants/project';
import { baseMainnet } from '@/constants/base';
import FaqComponent from '@/components/faq.component';
import DonationComponent from '@/components/donation.component';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  const chains = [mainnet, baseMainnet];
  const projectId = ProjectId;

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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <HeroSectionComponent />
        <DonationComponent />
        <FaqComponent />
        <FooterComponent />
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />{' '}
        <ToastContainer />
      </WagmiConfig>
    </div>
  );
}
