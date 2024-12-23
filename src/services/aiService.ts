import type { DesignAnalysis } from '../types/editor';

export async function analyzeDesign(file: File): Promise<DesignAnalysis> {
  // Mock response with beautiful GrapeJS components
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        layout: {
          type: 'grid',
          columns: 12,
          rows: 3,
        },
        components: [
          {
            type: 'header',
            html: `
              <header class="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] opacity-10 bg-cover bg-center"></div>
                <div class="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                  <nav class="flex justify-between items-center mb-16">
                    <div class="flex items-center gap-2">
                      <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                      </svg>
                      <h1 class="text-2xl font-bold text-white">Stellar</h1>
                    </div>
                    <div class="hidden md:flex gap-8 text-white/90">
                      <a href="#" class="hover:text-white transition-colors">Home</a>
                      <a href="#" class="hover:text-white transition-colors">Products</a>
                      <a href="#" class="hover:text-white transition-colors">About</a>
                      <a href="#" class="hover:text-white transition-colors">Contact</a>
                    </div>
                    <button class="px-4 py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-white/90 transition-colors">
                      Get Started
                    </button>
                  </nav>
                  <div class="text-center max-w-3xl mx-auto">
                    <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                      Transform Your Ideas Into Reality
                    </h2>
                    <p class="text-xl text-white/90 mb-12">
                      Create stunning websites with our innovative platform powered by AI
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                      <button class="px-8 py-4 bg-white text-indigo-600 rounded-lg font-medium hover:bg-white/90 transition-colors">
                        Start Building
                      </button>
                      <button class="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
                        Watch Demo
                      </button>
                    </div>
                  </div>
                </div>
                <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
              </header>
            `,
          },
          {
            type: 'product-card',
            html: `
              <div class="max-w-sm mx-auto transform hover:-translate-y-1 transition-all duration-300">
                <div class="relative group">
                  <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                  <div class="relative bg-white rounded-xl shadow-xl">
                    <div class="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" 
                        class="w-full h-60 object-cover rounded-t-xl" 
                        alt="Premium Headphones"
                      />
                      <div class="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-indigo-600">
                        New
                      </div>
                    </div>
                    <div class="p-6">
                      <h3 class="text-xl font-semibold mb-2 text-gray-900">Premium Headphones</h3>
                      <div class="flex gap-1 mb-4">
                        {Array(5).fill().map((_, i) => (
                          <svg key={i} class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p class="text-gray-600 mb-6">Experience crystal clear sound with our premium noise-cancelling headphones.</p>
                      <div class="flex justify-between items-center">
                        <div>
                          <span class="text-3xl font-bold text-indigo-600">$299</span>
                          <span class="text-sm text-gray-500 ml-2 line-through">$399</span>
                        </div>
                        <button class="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `,
          },
        ],
      });
    }, 2000);
  });
}