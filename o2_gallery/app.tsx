import { ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b-2 border-gray-800 bg-gray-100">
        <div className="mx-auto max-w-[1440px] px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="h-12 w-48 border-2 border-gray-800 bg-gray-300 flex items-center justify-center">
              <span className="text-sm font-mono text-gray-600">[LOGO]</span>
            </div>
            <nav className="flex gap-8">
              {['Nav Link 1', 'Nav Link 2', 'Nav Link 3', 'Nav Link 4'].map((link, idx) => (
                <div key={idx} className="h-8 w-24 border border-gray-600 bg-gray-200 flex items-center justify-center">
                  <span className="text-xs font-mono text-gray-600">{link}</span>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-[1440px] px-8">
        {/* Section 1: Company Introduction */}
        <section className="py-16 pb-24 border-b border-gray-300">
          <div className="grid grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="h-16 border-2 border-gray-800 bg-gray-200 flex items-center px-6">
                <span className="text-sm font-mono text-gray-700">[Heading - Company Introduction]</span>
              </div>
              <div className="space-y-3">
                <div className="h-4 border border-gray-600 bg-gray-100"></div>
                <div className="h-4 border border-gray-600 bg-gray-100"></div>
                <div className="h-4 border border-gray-600 bg-gray-100"></div>
              </div>
            </div>
            {/* Right Column - Image Placeholder */}
            <div className="border-2 border-gray-800 bg-gray-300 aspect-[16/9] flex items-center justify-center">
              <span className="text-sm font-mono text-gray-600">[IMAGE PLACEHOLDER]</span>
            </div>
          </div>
        </section>

        {/* Section 2: Mission & Vision */}
        <section className="py-16 border-b border-gray-300">
          {/* Section Title */}
          <div className="text-center mb-10">
           
              <span className="text-sm font-mono text-gray-800">[Mission & Vision]</span>
            </div>
          
          
          {/* Cards Container */}
          <div className="grid grid-cols-2 gap-16">
            {/* Mission Card */}
            <div className="border border-gray-400 p-6">
              <div className="mb-4 pb-2">
                <span className="text-xs font-mono text-gray-800">[Mission]</span>
              </div>
              <div className="h-3 border border-gray-400 bg-white"></div>
            </div>
            
            {/* Vision Card */}
            <div className="border border-gray-400 p-6">
              <div className="mb-4 pb-2">
                <span className="text-xs font-mono text-gray-800">[Vision]</span>
              </div>
              <div className="h-3 border border-gray-400 bg-white"></div>
            </div>
          </div>
        </section>

        {/* Section 3: Urban Problem → O₂ Gallery Solution */}
        <section className="py-20">
          <div className="flex items-center gap-8">
            {/* Left Block - Urban Problem */}
            <div className="flex-1 border border-gray-400 p-6">
              <div className="mb-4 pb-2">
                <span className="text-xs font-mono text-gray-800">[Urban Problem]</span>
              </div>
              <div className="space-y-3">
                <div className="h-3 border border-gray-400 bg-white"></div>
                <div className="h-3 border border-gray-400 bg-white w-3/4"></div>
                <div className="h-3 border border-gray-400 bg-white w-3/4"></div>
              </div>
            </div>
            
            {/* Divider/Arrow */}
            <div className="flex-shrink-0">
              <ArrowRight size={24} className="text-gray-400" strokeWidth={1} />
            </div>

            {/* Right Block - O₂ Gallery Solution */}
            <div className="flex-1 border border-gray-400 p-6">
              <div className="mb-4 pb-2">
                <span className="text-xs font-mono text-gray-800">[O₂ Gallery Solution]</span>
              </div>
              <div className="space-y-3">
                <div className="h-3 border border-gray-400 bg-white"></div>
                <div className="h-3 border border-gray-400 bg-white w-3/4"></div>
                <div className="h-3 border border-gray-400 bg-white w-3/4"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Our Values */}
        <section className="py-20">
          {/* Section Title */}
          <div className="text-center mb-10">
            <span className="text-base font-mono text-gray-800 tracking-wide">[Our Values]</span>
          </div>
          
          {/* Cards Container */}
          <div className="grid grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="border border-gray-400 p-6">
                {/* Icon Placeholder - Small */}
                <div className="w-8 h-8 border border-gray-400 bg-white mb-4 mx-auto flex items-center justify-center">
                  <span className="text-xs font-mono text-gray-500">[i]</span>
                </div>
                {/* Value Title - Dominant */}
                <div className="mb-3 text-center">
                  <span className="text-xs font-mono text-gray-800">[Value {num}]</span>
                </div>
                {/* Placeholder Text */}
                <div className="h-3 border border-gray-400 bg-white"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Who We Serve */}
        <section className="py-16">
          {/* Section Title Centered */}
          <div className="text-center mb-12">
            <div className="h-14 border-2 border-gray-800 bg-gray-200 flex items-center justify-center mx-auto max-w-md">
              <span className="text-sm font-mono text-gray-700">[Who We Serve - Section Title]</span>
            </div>
          </div>
          {/* 4 Equal Cards */}
          <div className="grid grid-cols-4 gap-6">
            {['Homes', 'Builders', 'CSR', 'Government'].map((category) => (
              <div key={category} className="border-2 border-gray-800 bg-gray-100 p-8">
                {/* Icon Placeholder */}
                <div className="w-20 h-20 border-2 border-gray-700 bg-gray-300 mb-6 mx-auto flex items-center justify-center">
                  <span className="text-xs font-mono text-gray-600">[ICON]</span>
                </div>
                {/* Category Title */}
                <div className="h-10 border border-gray-700 bg-gray-200 flex items-center justify-center">
                  <span className="text-xs font-mono text-gray-700">[{category}]</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-gray-800 bg-gray-100 mt-16">
        <div className="mx-auto max-w-[1440px] px-8 py-12">
          <div className="grid grid-cols-4 gap-8 mb-8">
            {[1, 2, 3, 4].map((col) => (
              <div key={col}>
                <div className="h-8 border border-gray-700 bg-gray-200 flex items-center justify-center mb-4">
                  <span className="text-xs font-mono text-gray-600">[Footer Col {col}]</span>
                </div>
                <div className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="h-6 border border-gray-600 bg-gray-100"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-600 pt-6">
            <div className="h-6 border border-gray-600 bg-gray-100 w-64 mx-auto"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

