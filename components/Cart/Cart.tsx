import React from 'react';
import { Item } from './Item';
import { CartProps } from '../../app/models/interfaces';

export function Cart({
  isOpen,
  onClose,
  cartItems,
  updateQuantity,
  removeFromCart,
  getTotal,
  handlePurchase,
}: CartProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#0a0a0a88] bg-opacity-50 z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out">
      <div className="bg-[#0a0a0a] rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto transition-transform transform duration-300 ease-in-out border border-[#4ECDC4]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-[#4ECDC4]">Carrinho</h2>
          <button onClick={onClose} className="text-[#4ECDC4] hover:drop-shadow-neon">
            ✕
          </button>
        </div>
        {cartItems.length === 0 ? (
          <p className="text-[#4ECDC4]">Seu carrinho está vazio</p>
        ) : (
          <>
            <div className="mt-4 mb-4">
              {cartItems.map((item) => (
                <Item
                  key={item.id}
                  id={item.id}
                  name={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  image={item.image}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </div>
            <div className="border-t border-[#4ECDC4] pt-4">
              <div className="flex justify-between font-bold text-xl text-[#4ECDC4]">
                <span>Total:</span>
                <span>{getTotal().toFixed(2)}€</span>
              </div>
            </div>
          </>
        )}
        <div className="mt-6 flex justify-between">
          <button
            onClick={onClose}
            className="bg-[#0a0a0a88] text-[#4ECDC4] hover:drop-shadow-neon py-2 px-4 rounded-lg w-full border border-[#4ECDC4] focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] transition-all duration-300"
          >
            Continuar Comprando
          </button>
          {cartItems.length === 0 ? (
            <button
              className="bg-[#0a0a0a88] text-[#4ECDC4] hover:drop-shadow-neon py-2 px-4 rounded-lg w-full ml-4 border border-[#4ECDC4] focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] transition-all duration-300"
              disabled
            >
              Finalizar Compra
            </button>
          ) : (
            <button
              onClick={handlePurchase}
              className="bg-[#0a0a0a88] text-[#4ECDC4] hover:drop-shadow-neon py-2 px-4 rounded-lg w-full ml-4 border border-[#4ECDC4] focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] transition-all duration-300"
            >
              Finalizar Compra
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
