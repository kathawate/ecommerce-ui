export default function Hero() {
  return (
    <section className="h-screen bg-[url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <p className="tracking-[0.3em] mb-6">
          LUXURY KURTIS & PUNJABI DRESSES
        </p>

        <button className="border px-8 py-3 tracking-widest hover:bg-white hover:text-black transition">
          SHOP NOW
        </button>
      </div>
    </section>
  );
}