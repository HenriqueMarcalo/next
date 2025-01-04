import React, { useState, useEffect } from 'react';
import { CategoryFilterProps } from '../../app/models/interfaces';

export default function CategoryFilter({ onCategoryChange }: CategoryFilterProps) {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://deisishop.pythonanywhere.com/categories/')
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch categories');
        return response.json();
      })
      .then(setCategories)
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div className="flex flex-col">
      <label className="text-lg font-bold text-[#4ECDC4] drop-shadow-neon">
        Categoria
      </label>
      <select
        onChange={(e) => onCategoryChange(e.target.value)}
        className="w-full px-3 py-2 bg-[#0a0a0a88] text-[#4ECDC4] border border-[#4ECDC4]  rounded-md 
        focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] 
        hover:drop-shadow-neon transition-all duration-300"
      >
        <option value="" className="bg-[#0a0a0a]">Todas as categorias</option>
        {categories.map((category) => (
          <option key={category} value={category} className="bg-[#0a0a0a]">
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}