import React from 'react';
import { toast } from 'react-toastify';

const DonationComponent = () => {
  return (
    <div className="bg-gray-900">
      <div
        className={
          'mx-auto max-w-2xl text-center flex-col justify-center items-center align-middle'
        }
      >
        <p>Support my work or buy me a coffee (ERC20)</p>
        <button
          onClick={() => {
            navigator.clipboard.writeText(
              '0x49d060820FD08f71553D7D73C970280df2FfEd48'
            );
            toast.success('Address copied to clipboard');
          }}
          className={'underline cursor-copy text-sm'}
        >
          0x49d060820FD08f71553D7D73C970280df2FfEd48
        </button>{' '}
      </div>
    </div>
  );
};

export default DonationComponent;
