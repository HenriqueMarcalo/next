import React from 'react';
import { SearchFilterProps } from '../../app/models/interfaces';

export default function SearchFilter({ onSearchChange, searchValue }: SearchFilterProps) {
  return (
    <div className="flex flex-col">
      <label className="text-lg font-bold text-[#4ECDC4] drop-shadow-neon">
        Pesquisar
      </label>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Pesquise por produto"
        className="w-full px-3 py-2 bg-[#0a0a0a88] text-[#4ECDC4] border border-[#4ECDC4]  rounded-md 
        focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] 
        hover:drop-shadow-neon transition-all duration-300"
      />
    </div>
  );
}