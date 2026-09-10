import { Metadata } from 'next';
import { products } from '@/data/products';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'Store — VELORIX UAV',
  description: 'Components, kits and development tools.',
};

export default function StorePage() {
  const categories = ['All', 'Components', 'Kits', 'Tools', 'Accessories'];

  return (
    <main className="pt-32 pb-40 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">STORE</h1>
              <p className="text-text-secondary text-xl md:text-2xl font-light tracking-wide max-w-2xl">
                Components, kits and development tools.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, idx) => (
                <button 
                  key={cat}
                  className={`px-4 py-2 text-xs font-mono tracking-widest uppercase border ${
                    idx === 0 
                      ? 'border-border-active bg-surface text-text-primary' 
                      : 'border-border text-text-secondary hover:border-border-active hover:text-text-primary'
                  } transition-colors`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <Reveal key={product.id} delay={idx * 0.1}>
                <div className="group flex flex-col border border-border bg-surface hover:border-border-active transition-colors duration-300 h-full">
                  <div className="aspect-square w-full bg-[#0d0d0d] relative overflow-hidden flex items-center justify-center border-b border-border">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(#1f1f1f 1px, transparent 1px)',
                      backgroundSize: '24px 24px'
                    }} />
                    <span className="text-text-tertiary font-mono text-sm tracking-widest z-10 uppercase">
                      {product.id}
                    </span>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-lg font-medium tracking-tight mb-1">{product.name}</h2>
                        <p className="text-text-secondary font-mono text-xs tracking-widest uppercase">{product.category}</p>
                      </div>
                    </div>
                    
                    <div className="mt-auto pt-6 flex items-center justify-between">
                      <span className="text-sm font-mono text-text-primary">
                        {product.price ? `$${product.price}` : 'COMING SOON'}
                      </span>
                      <span className={`text-[10px] font-mono tracking-widest uppercase px-2 py-1 border ${
                        product.status === 'coming-soon' ? 'border-border text-text-tertiary' : 'border-accent text-accent'
                      }`}>
                        {product.status.replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.2}>
            <div className="py-32 text-center border border-border bg-surface">
              <p className="text-text-secondary font-mono tracking-widest uppercase">
                Products launching soon. Stay tuned.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </main>
  );
}
