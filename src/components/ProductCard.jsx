export default function ProductCard({ product }) {
  return (
    <div className="group cursor-pointer">
      <div className="h-80 overflow-hidden rounded-2xl bg-gray-100 flex items-center justify-center">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="mt-3 text-center">
        <p className="text-sm">{product.name}</p>
        <p className="text-xs text-gray-500">{product.price}</p>
      </div>
    </div>
  );
}