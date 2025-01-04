import React from 'react';
import CategoryFilter from './CategoryFilter';
import SortFilter from './SortFilter';
import SearchFilter from './SearchFilter';
import { FilterProps } from '../../app/models/interfaces';

export default function FilterBar({ 
  onCategoryChange, 
  onSortChange, 
  onSearchChange,
  searchValue 
}: FilterProps) {
  return (
    <div className="bg-[#0a0a0a88] p-4 rounded-lg shadow-2xl mb-6 border border-[#4ECDC4]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <CategoryFilter onCategoryChange={onCategoryChange} />
        <SortFilter onSortChange={onSortChange} />
        <SearchFilter 
          onSearchChange={onSearchChange}
          searchValue={searchValue}
        />
      </div>
    </div>
  );
}