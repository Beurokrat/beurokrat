"use client"
import React, { useState, useEffect, useRef } from 'react';
import HALO from 'vanta/dist/vanta.halo.min';
import Container from '@/app/_components/Container';

type VantaEffect = any;

interface HeroProps {
 // Define any props your component expects here
}

const Hero: React.FC<HeroProps> = (props) => {
 const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);
 const myRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
    if (!vantaEffect && myRef.current) {
      const effect = HALO({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        // baseColor: "#baff17",
        // backgroundColor: 0x1f253c,
        // amplitudeFactor: 2.00,
        size: 1,
      });
      setVantaEffect(effect);
    }

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
