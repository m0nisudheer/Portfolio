"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all'
import { getYear, TIMELINE_ENTRIES } from './data';
import LazyImage from './LazyImage';


gsap.registerPlugin(ScrollTrigger);
function Timeline() {
    const timelienRef = useRef<HTMLElement>(null);
    const years = getYear();

    useGSAP(() => {
        const articles = gsap.utils.toArray<HTMLElement>("article");
        const years = gsap.utils.toArray<HTMLElement>('[data-timeline="year"]');

        years.forEach((year, index) => {
            const chars = year.querySelectorAll(".char")
            gsap.set(chars, {
                yPercent: index === 0 ? 0 : 100,
                opacity: index === 0 ? 1 : 0,
            })
        })

        articles.forEach((article, index) => {
            if (index === 0) return;
            const currentYearChars = years[index - 1].querySelectorAll(".char");
            const nextYearChars = years[index].querySelectorAll(".char");

            const t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: article,
                    start: "top bottom",
                    end: "top top",
                    scrub: 1,
                },
            });
            t1.to(currentYearChars,{
                yPercent:-100,
                opacity:0,
                duration:4,
                stagger:1,
                ease:"cubic-bezier(0.23,1,0.32,1)"
            },0)
            t1.to(nextYearChars,{
                yPercent:0,
                autoAlpha:1,
                duration:4,
                stagger:1,
                ease:"cubic-bezier(0.23,1,0.32,1)"
            },0)
        });
    });
    return (
        <section className='relative'>
            <ul>
                {TIMELINE_ENTRIES.map(entry => (
                    <li key={entry.id}>
                        <article className='h-screen p-5'>
                            <ul className='relative w-full h-full'>
                                {entry.images.map((image, imgIndex) => (
                                    <li key={imgIndex} className={`absolute ${image.position} ${image.width}`}>
                                        <div className={`relative size-full ${image.aspectRatio}`}>
                                            <LazyImage
                                                src={image.src}
                                                alt={image.alt}
                                                className="object-cover"
                                                fill
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </li>
                ))}
            </ul>
            <div className='absolute top-0 left-0 -z-10 h-full w-full opacity-40'>
                <div data-timeline="years-wrapper" className='text-year sticky top-0 left-0 flex min-h-screen items-center justify-around w-full text-[#dd1414] '>
                    {years.map((year, index) => (
                        <div key={index}
                            data-timeline="year"
                            className='absolute top-1/2 left-0 flex w-full -translate-y-1/2 items-center justify-center leading-none'
                            style={{ clipPath: 'inset(12% 0 12% 0px)' }}
                        >
                            {year.split('').map((char, charIndex) => (
                                <span className={`char xl:text-[20rem] text-[4em] font-medium text-black ${index !== 0 ? 'invisible' : ''}`}>
                                    {char}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Timeline
