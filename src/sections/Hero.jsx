import React, { Suspense } from 'react';
import {Canvas} from "@react-three/fiber";
import { PerspectiveCamera, Ring } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import HackerRoom from '../components/HackerRoom';
import {useMediaQuery} from "react-responsive";
import { calculateSizes } from '../constants';
import Target from '../components/target';
import ReactLogo from '../components/ReactLogo';
import Cube from '../components/Cube';
import Rings from '../components/Rings';
import HeroCamera from '../components/Herocamera';
import Button from '../components/Button';

const Hero = () =>  {
     
    const isSmall = useMediaQuery({maxWidth: 440})
    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery({maxWidth: 768, maxWidth: 1024})

    const sizes = calculateSizes(isSmall, isMobile, isTablet) 

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className='sm:text-2xl text-xl font-medium text-white text-center font-generalsans'>Hi, I'm Sakiyah <span className='waving-hand'>👋</span></p>
                <p className='hero_tag text-gray_gradient'>creating phenomena</p>
            </div>

            <div className="w-full h-height absolute inset-0">

               
                <Canvas className='w-full h-full'> 
                    <Suspense fallback={<CanvasLoader/>}>
                    <PerspectiveCamera makeDefault position={[0,0,20]}/>   
                    <HeroCamera isMobile={isMobile}>
                        <HackerRoom
                          position={sizes.deskPosition} //  in the scene
                           scale={sizes.deskScale} //  of the original size
                           rotation={[0, -Math.PI, 0]} />
                    
                    </HeroCamera>             
                    

                    <group>
                        <Target position={sizes.targetPosition}/>
                        <ReactLogo position={sizes.reactLogoPosition}/>
                        <Cube position={sizes.cubePosition}/>
                        <Rings position={sizes.ringPosition}/>
        
                    </group>

        

                    <ambientLight intensity={1}/>
                    <directionalLight position={[10,10,10]} intensity={1}/>
                    </Suspense>

                </Canvas>


            </div>

            <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
                <a href='#contact' className='w-fit'>
                    <Button name="Let's Work together" isBeam containerClass="sm:w-fit sm:min-w-96" />
                </a>
            </div>
            
        </section>
    );
}

export default Hero;