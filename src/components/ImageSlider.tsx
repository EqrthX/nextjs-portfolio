'use client'
import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getAssetPath } from '@/libs/GetAssetPath'

interface ImageSliderProps {
  images: string[]
}

export default function ImageSlider({ images }: ImageSliderProps) {
  // ตั้งค่า options: loop = วนลูป, delay = ความเร็ว auto (4วิ)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }) 
  ])

  // ฟังก์ชันกดปุ่มซ้ายขวา
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  if (!images || images.length === 0) return null;

  return (
    <div className="relative group">
      {/* 1. Viewport: กำหนดความสูงตรงนี้สำคัญที่สุด! */}
      {/* แก้จากเดิมที่เป็น auto หรือ aspect-video ให้เป็นความสูงที่แน่นอน */}
      <div
        className="overflow-hidden rounded-3xl border border-gray-800 bg-[#111] h-64 md:h-125"
        ref={emblaRef}
      >
        {/* 2. Container */}
        <div className="flex touch-pan-y h-full">
          {images.map((src, index) => (
            <div
              className="flex-[0_0_100%] min-w-0 relative h-full"
              key={index}
            >
              {/* 3. Slide Item */}
              <img
                src={getAssetPath(src)}
                alt={`Slide ${index}`}
                className="object-cover" // สำคัญ: ช่วยให้รูปไม่เบี้ยวแม้อัตราส่วนจอจะเปลี่ยน
              />
            </div>
          ))}
        </div>
      </div>

      {/* ปุ่มกดซ้าย */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-amber-500 p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 backdrop-blur-md z-10"
      >
        <ChevronLeft size={24} />
      </button>

      {/* ปุ่มกดขวา */}
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-amber-500 p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 backdrop-blur-md z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* (Optional) Dots Indicator ด้านล่าง */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div key={index} className="w-2 h-2 rounded-full bg-white/50" />
        ))}
      </div>
    </div>
  )
}