'use client';

import { toast } from 'react-toastify';
import { useState } from 'react';
import { Web3Button } from '@web3modal/react';
import { parseEther } from 'ethers';
import {
  useAccount,
  usePrepareSendTransaction,
  useSendTransaction,
  useWaitForTransaction,
} from 'wagmi';
import { useDebounce } from 'use-debounce';
import { switchNetwork } from '@wagmi/core';
import { BASE_PROXY_CONTRACT_ADDRESS } from '@/constants/base';

export default function HeroSectionComponent() {
  const { isConnected } = useAccount();
  const [amount, setAmount] = useState('');
  const [debouncedTo] = useDebounce(BASE_PROXY_CONTRACT_ADDRESS, 500);
  const [debouncedAmount] = useDebounce(amount, 500);
  const { config } = usePrepareSendTransaction({
    to: debouncedTo,
    value: debouncedAmount ? parseEther(debouncedAmount) : undefined,
  });
  const { data, sendTransaction } = useSendTransaction(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });
  const deposit = () => {
    if (!isConnected) {
      toast.error('Connect your wallet first.');
      return;
    }
    sendTransaction?.();
  };

  return (
    <div className="bg-gray-900">
      <div className="relative isolate pt-14">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                BaseBridge
              </h1>{' '}
              <div className={'m-12'}>
                <Web3Button />
              </div>
              <p className="mt-6 text-lg leading-8 text-gray-300 text-justify m-12">
                This app provides an easy to use, open source, feeless GUI to
                bridge ETH from Ethereum Mainnet to Base Mainnet. Connect your
                wallet to get started. To add the Base Mainnet network to your
                wallet{' '}
                <button
                  onClick={() => switchNetwork({ chainId: 8453 })}
                  className={'underline'}
                >
                  click here
                </button>
                .
              </p>
              <div>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">
                      <img
                        className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                        src={'/ethereum-eth-logo.svg'}
                      />{' '}
                    </span>
                  </div>
                  <input
                    type="number"
                    name="ETH amount"
                    id="ETH amount"
                    onChange={(e) => {
                      console.log(typeof e.target.value);
                      if (e.target.value !== '') {
                        try {
                          parseEther(e.target.value);
                        } catch (e) {
                          return;
                        }
                      }
                      setAmount(e.target.value);
                    }}
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="0.00"
                    value={amount}
                    aria-label="Amount (ether)"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-gray-500 sm:text-sm">ETH</span>
                  </div>
                </div>
                <div className="mt-6 text-2xl leading-8 text-gray-300">
                  You will receive:
                  <div className={'flex justify-center gap-2 items-center'}>
                    <p>{amount ? amount : 0}</p>
                    <img
                      className="h-5 justify-center "
                      aria-hidden="true"
                      src={'/base-logo-in-blue.svg'}
                    />
                    <p>ETH</p>
                  </div>
                </div>{' '}
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button
                  onClick={() => deposit()}
                  className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Deposit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
