import React from "react";
import { Tecnologia } from "../models/interfaces";

export default function Card({
  title,
  image,
  description,
  rating,
}: Tecnologia) {
  return (
    <section className="bg-[#0a0a0a88] border-none rounded-xl shadow-2xl hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 flex flex-col">
      {/* Product Image */}
      <article className="overflow-hidden rounded-t-xl pt-10 bg-[#ffffff]">
        <img
          src={image}
          alt={title}
          className="w-full h-50 object-contain"
        />
      </article>
      {/* Card Body */}
      <article className="p-4 flex-grow">
        <h2 className="text-lg font-bold text-[#4ECDC4] drop-shadow-neon">
          {title}
        </h2>
        <p className="text-sm text-[#ededed]">
          {description}
        </p>
      </article>
      {/* Card Footer */}
      <article className="p-4 border-t border-[#4ECDC4] flex justify-between items-center">
        <article className="text-sm text-[#4ECDC4] flex items-center">
          {rating}⭐{" "}
        </article>
      </article>
    </section>
  );
}