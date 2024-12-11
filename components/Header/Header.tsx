import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="p-20 bg-transparent text-white font-bold">
      <h1 className="mt-4 text-6xl text-center text-cyan-400 drop-shadow-neon animate-slide-in">
        React & Next.js
      </h1>
      <nav className="w-full flex justify-center">
        <ul className="flex space-x-8 text-2xl">
          <li className="transition-transform duration-200 hover:scale-110">
            <Link
              href="/"
              className="text-cyan-300 no-underline hover:underline drop-shadow-neon hover:text-cyan-400"
            >
              Home
            </Link>
          </li>
          <li className="transition-transform duration-200 hover:scale-110">
            <Link
              href="/produtos"
              className="text-cyan-300 no-underline hover:underline drop-shadow-neon hover:text-cyan-400"
            >
              Produtos
            </Link>
          </li>
          <li className="transition-transform duration-200 hover:scale-110">
            <Link
              href="/tecnologias"
              className="text-cyan-300 no-underline hover:underline drop-shadow-neon hover:text-cyan-400"
            >
              Tecnologias
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}