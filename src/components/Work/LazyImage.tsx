"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'
import React, { useRef, useState } from 'react'

interface LazyImageProps{
    src: string;
    alt: string;
    fill?:boolean;
    className?: string;
}

gsap.registerPlugin(ScrollTrigger)
function LazyImage({src,alt,className}:LazyImageProps) {

    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const [isLooaded,setIsLoaded] = useState(false);

    useGSAP(() => {
  if (!isLooaded || !imageRef.current) return;

  gsap.fromTo(
  imageRef.current.querySelector("img"),
  { opacity: 0, scale: 1.3 }, 
  {
    opacity: 1,
    scale: 1.2,   
    duration: 0.8,
    ease: "power2.out",
  }
);

  gsap.fromTo(imageRef.current, {
    yPercent:20,
  },{
    yPercent: 0,    
    ease: "none",
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: true,     
    },
  });

}, { scope: containerRef, dependencies: [isLooaded] });


 return (
  <div ref={containerRef} className={`relative size-full overflow-hidden ${className}`}>
    <div
      className="absolute inset-0 before:absolute before:inset-0 before:bg-white before:content-['']"
      aria-hidden="true"
    />

    <div ref={imageRef} className="absolute inset-0 z-10 scale-[1]">
      <Image
        src={src}
        alt={alt}
        fill
        loading="lazy"
        sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
        className="size-full object-cover opacity-0"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  </div>
);

}

export default LazyImage
