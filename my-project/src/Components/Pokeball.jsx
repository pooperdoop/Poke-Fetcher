import { useState } from 'react';
import {useTransition, animated} from '@react-spring/web';
import circle from '../assets/circle.svg';
import innerCircle from '../assets/inner-circle.svg';


export default function Pokeball(){


    const [isVisible, setIsVisible] = useState(true);
    const [pokemon, setPokemon] = useState('');

    const transition = useTransition(isVisible, {
        from: {x:0, y:-800, opacity: 0},
        enter: {x:0, y:0, opacity: 1},
        leave: {x:0, y:-800, opacity: 0},
    });

    const transition2 = useTransition(isVisible, {
        from: {x:0, y:800, opacity: 0},
        enter: {x:0, y:0, opacity: 1},
        leave: {x:0, y:800, opacity: 0},
    });

    function handleIsVisible(){
        if(pokemon.trim !== ''){
            setIsVisible(false);
        }
    }

    return(<section className='h-full'> 
               {transition((style, item) => item ? <animated.header style={style} className="h-2/4 bg-red-500 w-full flex justify-center items-center relative">

                    <h1 className='siteTitle absolute top-10 text-yellow-300'>Poké-Fetcher</h1>
                    <input className='rounded-lg w-1/6 min-w-52 p-3 border-4 border-black mt-10 outline-none' type="text" placeholder='Enter Pokémon Name...' value={pokemon} onChange={p => setPokemon(event.target.value)}/>

                    <div className="h-1/6 bg-black w-full -bottom-10 absolute flex justify-center items-center">
                        
                        <img className='w-1/6 min-w-52' src={circle} alt="outerCircle" />
                        <h1 onClick={handleIsVisible} className='absolute z-10 cursor-pointer'>Search</h1>
                        <img onClick={handleIsVisible} className='w-1/12 min-w-32 absolute cursor-pointer' src={innerCircle} alt="search" />
                    </div>
                    </animated.header> : '' )}
              
                {transition2((style, item) => item ?
                <animated.footer style={style} className='h-2/4 flex justify-center bg-white relative -z-10'>
                    <h1 className='text-black z-10 absolute bottom-0'>&copy; 2025 by Pooperdoop</h1>
                </animated.footer> : '')}
            </section>);
}