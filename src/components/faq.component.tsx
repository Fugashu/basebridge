import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { BASE_PROXY_CONTRACT_ADDRESS } from '@/constants/base';

const faqs = [
  {
    question: 'Is this secure?',
    answer: `The whole code is open source and available at ${process.env.NEXT_PUBLIC_GITHUB_LINK}. This app uses the official Base Proxy Contract ${BASE_PROXY_CONTRACT_ADDRESS}.`,
  },
  {
    question: 'Do you take a bridge fee?',
    answer: `No. It's completely free.`,
  },
  {
    question: 'How long does it take until the funds are bridged?',
    answer: `On average about 15 minutes, but the time fluctuates based on network congestion.`,
  },
  {
    question: 'Can I send any other assets than ETH?',
    answer: `No. Only ETH is supported right now.`,
  },
  {
    question: 'I want to report a bug. How can I do it?',
    answer: `You can message me on Twitter or Github. Thanks for your feedback!`,
  },
];

export default function FaqComponent() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-2 sm:py-32 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-300">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
