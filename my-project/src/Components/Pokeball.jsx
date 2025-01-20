import { useState } from 'react';
import {useTransition, animated, useSpring} from '@react-spring/web';
import circle from '../assets/circle.svg';
import innerCircle from '../assets/inner-circle.svg';


export default function Pokeball(){

    let i = 0;

    const [isVisible, setIsVisible] = useState(true);
    const [pokemon, setPokemon] = useState("");

    const transition = useTransition(isVisible, {
        from: {x:0, y:-700},
        enter: {x:0, y:0},
        leave: {x:0, y:-700},
    });

    const transition2 = useTransition(isVisible, {
        from: {x:0, y:700},
        enter: {x:0, y:0},
        leave: {x:0, y:700},
    });

    const transition3 = useTransition(isVisible, {
    });

    const AnimatedBlock = ({ className, animationConfig, text, children }) => {
        const props = useSpring(animationConfig);

        console.log(i++)
        
        return (
          <animated.div className={className} style={props}>
            {text}
          </animated.div>
        );
      };

    function handleIsVisible(){
        if(pokemon.trim() !== ""){
            setIsVisible(c => !c);
        }
    }
    
    return(<section className='h-full'> 



               {transition((style, item) => item ? <animated.header style={style} className="h-2/4 bg-red-500 w-full flex justify-center items-center relative">

                    <h1 className='siteTitle absolute top-10 text-yellow-300'>Poké-Fetcher</h1>
                    <input className='rounded-lg w-1/6 min-w-52 p-3 border-4 border-black mt-10 outline-none' type="text" placeholder='Enter Pokémon Name...' value={pokemon} onChange={() => setPokemon(event.target.value)}/>

                    <div className="h-1/6 bg-black w-full -bottom-10 absolute flex justify-center items-center">
                        
                        <img className='w-1/6 min-w-52' src={circle} alt="outerCircle" />
                        <h1 onClick={handleIsVisible} className='absolute z-10 cursor-pointer transition-all hover:text-red-200' id='searchText'>Search</h1>
                        <img onClick={handleIsVisible} className='w-1/12 min-w-32 absolute cursor-pointer' id='innerCircle' src={innerCircle} alt="search" />
                    </div>
                    </animated.header> : '' )}
              
                {transition2((style, item) => item ?
                <animated.footer style={style} className='h-2/4 flex justify-center bg-white relative -z-10'>
                    <h1 className='text-black z-10 absolute bottom-0'>&copy; 2025 by Pooperdoop</h1>
                </animated.footer> : '')}

        {transition3((style, item) => item ? "":                
                <div style={style} className='h-full w-full bg-gray-200 absolute -z-10 flex justify-center items-center grid grid-cols-8 overflow-hidden'>

               
                    <div className=' bg-gray-200 col-span-full xl:col-start-2 xl:col-end-8 h-3/4 rounded-lg grid grid-cols-8 grid-rows-4 md:grid-flow-row sm:grid-flow-row'>

                    <AnimatedBlock className='bg-red-300 row-span-2 lg:col-span-2 sm:col-span-3 col-span-full infoDiv divBorder' 
                        animationConfig={{ from: { transform: 'translateX(-100vw)' }, to: { transform: 'translateX(0)',  config:{duration:200}}}} text="01" />

                    <AnimatedBlock className='bg-blue-300 row-span-1 lg:col-span-6 sm:col-span-5 col-span-full infoDiv divBorder' 
                        animationConfig={{ from: { transform: 'translateX(100vw)' }, to: { transform: 'translateX(0)' },  config:{duration:300}}} text="02" />

                    <AnimatedBlock className='bg-yellow-300 row-span-1 lg:col-span-6 sm:col-span-5 col-span-full infoDiv divBorder' 
                        animationConfig={{ from: {  transform: 'translateX(100vw)' }, to: {  transform: 'translateX(0)' },  config:{duration:600}}} text="03" />

                    <div className=' bg-gray-200 row-span-2 sm:col-span-3 col-span-full grid grid-cols-4 grid-rows-4 m-7 infoDiv4'>
                        <AnimatedBlock className="innerInfoDiv divBorder bg-green-100 col-span-2 row-span-2" 
                            animationConfig={{ from: { transform: 'translateX(-100vw)'}, to: { transform: 'translateX(0)'},  config:{duration:600} }} text="4.1" />

                        <AnimatedBlock className="innerInfoDiv divBorder bg-green-200 col-span-2 row-span-2" 
                            animationConfig={{ from: { transform: 'translateX(-100vw)'}, to: { transform: 'translateX(0)'},  config:{duration:500} }} text="4.2" />

                        <AnimatedBlock className="innerInfoDiv divBorder bg-green-400 col-span-2 row-span-2" 
                            animationConfig={{ from: { transform: 'translateY(100vh)' }, to: { transform: 'translateY(0)' },  config:{duration:700}}}text="4.3" />

                        <AnimatedBlock className="innerInfoDiv divBorder bg-green-500 col-span-2 row-span-2" 
                            animationConfig={{ from: { transform: 'translateY(100vh)' }, to: { transform: 'translateY(0)' },  config:{duration:400}}} text="4.4" />
                    </div>

                    <AnimatedBlock className='bg-orange-300 row-span-2 sm:col-span-5 col-span-full infoDiv divBorder' 
                        animationConfig={{ from: { transform: 'translateY(100vh)' }, to: { transform: 'translateY(0)' },  config:{duration:700}}} text="05" /> 

                    </div> 
                </div>)}


            </section>);
}