
import React from "react";
import { Product } from "../models/interfaces";

export default function Card({
  title,
  category,
  price,
  description,
  image,
  rating,
}: Product) {
  return (
    <section className="bg-white border rounded-xl shadow-xl hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 flex flex-col w-45">
      {/* Imagem do Produto */}
      <article className="overflow-hidden rounded-t-lx pt-10">
        <img
          src={image}
          alt={title}
          className="w-full h-[2rem] object-contain"
        />
      </article>

      {/* Corpo do Card */}
      <article className="p-4 flex-grow">
        <h2 className="text-[1rem] font-bold text-red-300">
          {title}
        </h2>
        <p className="text-[0.6rem] text-red-500 italic font-bold pb-2">
          {category}
        </p>
        <p className="text-[0.4rem] text-gray-900">
          {description}
        </p>
      </article>

      {/* Rodapé do Card */}
      <article className="p-4 border-t flex justify-between items-center">
        <span className="text-[0.6rem] font-bold text-red-500">
          {price.toFixed(2)}€
        </span>
        <article className="text-[0.6rem] text-yellow-500 flex items-center">
          {rating.rate}⭐{" "}
          <span className="text-gray-400 ml-2">({rating.count})</span>
        </article>
      </article>
    </section>
  );
}