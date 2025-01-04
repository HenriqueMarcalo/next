import React from 'react';
import { BtnProps } from '../../app/models/interfaces';

export default function Btn({ onOpen, cartItemCount }: BtnProps) {
  return (
    <button
      onClick={onOpen}
      className="fixed bottom-4 right-4 bg-[#0a0a0a88] text-[#4ECDC4] p-4 rounded-full border border-[#4ECDC4] shadow-lg hover:drop-shadow-neon focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] transition-all duration-300"
    >
      <div className="relative">
        <div className="flex items-center">
          🛒 ({cartItemCount})
        </div>
      </div>
    </button>
  );
}
