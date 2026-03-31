import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageItem {
  id: number;
  src: string;
  title: string;
  description: string;
  category: string;
}

interface ImageGalleryProps {
  images: ImageItem[];
  title?: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const handlePrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, images.length));
  };

  const hasMore = visibleCount < images.length;

  return (
    <>
      {title && (
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent">{title}</span>
        </h2>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.slice(0, visibleCount).map((image, index) => (
          <div
            key={image.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 group cursor-pointer overflow-hidden hover:shadow-md transition-all duration-300"
            onClick={() => setSelectedIndex(index)}
          >
            <div className="relative h-64 overflow-hidden rounded-lg mb-4">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-semibold">点击查看大图</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {image.title}
                </h3>
                <span className="px-2 py-1 rounded-md text-xs bg-blue-50 text-blue-600 border border-blue-100">
                  {image.category}
                </span>
              </div>
              <p className="text-sm text-slate-500">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 rounded-lg border border-blue-200 text-blue-600 hover:bg-blue-50 transition-colors font-medium"
          >
            加载更多
          </button>
        </div>
      )}

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].title}
                className="w-full h-auto rounded-lg"
              />

              {/* Navigation buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Info */}
            <div className="mt-4 text-white text-center">
              <h3 className="text-xl font-bold mb-2">
                {images[selectedIndex].title}
              </h3>
              <p className="text-sm text-gray-300">
                {images[selectedIndex].description}
              </p>
              <p className="text-xs text-gray-400 mt-2">
                {selectedIndex + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
