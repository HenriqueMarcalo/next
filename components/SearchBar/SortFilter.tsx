import React from 'react';
import { SortFilterProps } from '../../app/models/interfaces';

export default function SortFilter({ onSortChange }: SortFilterProps) {
  return (
    <div className="flex flex-col">
      <label className="text-lg font-bold text-[#4ECDC4] drop-shadow-neon">
        Ordenar por
      </label>
      <select
        onChange={(e) => onSortChange(e.target.value)}
        className="w-full px-3 py-2 bg-[#0a0a0a88] text-[#4ECDC4] border border-[#4ECDC4] rounded-md 
        focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] 
        hover:drop-shadow-neon transition-all duration-300"
      >
        <option value="" className="bg-[#0a0a0a]">Selecione</option>
        <option value="price-asc" className="bg-[#0a0a0a]">Preço: Menor para Maior</option>
        <option value="price-desc" className="bg-[#0a0a0a]">Preço: Maior para Menor</option>
      </select>
    </div>
  );
}