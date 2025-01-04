import { ItemProps } from '../../app/models/interfaces';

export function Item({
  id,
  name,
  price,
  quantity,
  image,
  onUpdateQuantity,
  onRemove,
}: ItemProps) {
  return (
    <div className="flex items-center bg-[#0a0a0a] p-4 rounded-lg border border-[#4ECDC4] shadow-md">
      <img src={image} alt={name} className="w-16 h-16 mr-4 border border-[#4ECDC4] rounded-md" />
      <div className="flex-1 text-[#4ECDC4]">
        <h4 className="font-bold text-lg drop-shadow-neon">{name}</h4>
        <p className="text-[#4ECDC4] font-medium">{price.toFixed(2)}€</p>
        <div className="flex items-center mt-2">
          <button 
            onClick={() => onUpdateQuantity(id, quantity - 1)} 
            className="px-2 py-1 bg-[#0a0a0a88] text-[#4ECDC4] border border-[#4ECDC4] rounded-md hover:drop-shadow-neon focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] transition-all duration-300"
          >
            -
          </button>
          <span className="mx-4 text-lg font-bold text-[#4ECDC4]">{quantity}</span>
          <button 
            onClick={() => onUpdateQuantity(id, quantity + 1)} 
            className="px-2 py-1 bg-[#0a0a0a88] text-[#4ECDC4] border border-[#4ECDC4] rounded-md hover:drop-shadow-neon focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] transition-all duration-300"
          >
            +
          </button>
        </div>
      </div>
      <button 
        onClick={() => onRemove(id)} 
        className="ml-4 text-[#FF6B6B] font-bold hover:text-[#FF8787] transition-colors duration-300"
      >
        Remover
      </button>
    </div>
  );
}
