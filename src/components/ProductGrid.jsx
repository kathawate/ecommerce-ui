import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function ProductGrid() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-2xl font-serif text-center mb-10 tracking-widest">
        TRENDING COLLECTION
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}