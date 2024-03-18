"use client"
import React, { useState, useEffect, useRef } from 'react';
import Container from '@/app/_components/container';

type VantaEffect = any;

declare global {
  interface Window {
     VANTA: any;
  }
 }
 
interface HeroProps {
 // Define any props your component expects here
}

const Hero: React.FC<HeroProps> = (props) => {
 const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);
 const myRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
    // Function to load the Vanta.js library
    const loadVantaScript = async () => {
      if (!window.VANTA) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js';
        script.async = true;
        document.body.appendChild(script);

        await new Promise((resolve) => {
          script.onload = resolve;
        });
      }
    };

    loadVantaScript().then(() => {
      if (!vantaEffect && myRef.current) {
        const effect = window.VANTA.HALO({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          size: 1,
        });
        setVantaEffect(effect);
      }
    });

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
 }, [vantaEffect]);

 return (
    <div style={{ zIndex: -10 }} className="-full h-screen" ref={myRef}>
      <div className="w-full h-full flex items-center bg-black/30">
        <Container>
          <div className="flex ">
            <h1 className='sm:text-4xl md:text-5xl bg-primary p-4 md:w-[40%] -mr-10 leading-10'>Unleashing Innovation, One Byte at a Time.</h1>
          </div>
        </Container>
      </div>
    </div>
 );
};

export default Hero;
