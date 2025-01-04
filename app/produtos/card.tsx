import React, { useState } from "react";
import { CardProps } from "../models/interfaces";

export default function Card({ addToCart, ...props }: CardProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(props);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1000);
  };

  return (
    <section className="bg-[#0a0a0a88] border-none rounded-xl shadow-2xl hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 flex flex-col">
      {/* Product Image */}
      <article className="overflow-hidden rounded-t-xl pt-10 bg-[#181616]">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-50 object-contain"
        />
      </article>
      {/* Card Body */}
      <article className="p-4 flex-grow">
        <h2 className="text-lg font-bold text-[#4ECDC4] drop-shadow-neon">
          {props.title}
        </h2>
        <p className="text-sm text-[#4ECDC4] italic font-bold pb-2">
          {props.category}
        </p>
        <p className="text-sm text-[#ededed]">
          {props.description}
        </p>
      </article>
      {/* Card Footer */}
      <article className="p-4 border-t border-[#4ECDC4] flex justify-between items-center">
        <span className="text-lg font-bold text-[#4ECDC4] drop-shadow-neon">
          {props.price.toFixed(2)}€
        </span>
        <article className="text-sm text-[#4ECDC4] flex items-center">
          {props.rating.rate}⭐{" "}
          <span className="text-gray-400 ml-2">({props.rating.count})</span>
        </article>
      </article>
      <button
        onClick={handleAddToCart}
        className={`w-full py-2 rounded transition-colors duration-200 
          bg-[#0a0a0a] hover:bg-[#181616] text-[#4ECDC4] border border-[#4ECDC4]
          drop-shadow-neon hover:drop-shadow-neon-hover`}
      >
        {isAdded ? 'Adicionado' : 'Adicionar ao Carrinho'}
      </button>
    </section>
  );
}