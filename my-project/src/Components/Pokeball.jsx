import { useState } from 'react';
import {useTransition, animated} from '@react-spring/web';
import circle from '../assets/circle.svg';
import innerCircle from '../assets/inner-circle.svg';


export default function Pokeball(){



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

    function handleIsVisible(){
        if(pokemon.trim() !== ""){
            setIsVisible(false);
        }
    }

    return(<section className='h-full'> 

                <div className='h-full w-full bg-white absolute -z-10 flex justify-center items-center grid grid-cols-8'>
                    <div className='bg-white col-span-full xl:col-start-2 xl:col-end-8 h-3/4 rounded-lg grid grid-cols-8 grid-rows-4 md:grid-flow-row sm:grid-flow-row'>
                        <div className='bg-red-300 row-span-2 lg:col-span-2 sm:col-span-3 col-span-full infoDiv divBorder'>01</div>
                        <div className='bg-blue-300 row-span-1 lg:col-span-6 sm:col-span-5 col-span-full infoDiv divBorder'>02</div>
                        <div className='bg-yellow-300 row-span-1 lg:col-span-6 sm:col-span-5 col-span-full infoDiv divBorder'>03</div>
                        <div className='bg-white row-span-2 sm:col-span-3 col-span-full grid grid-cols-4 grid-rows-4 m-7 infoDiv4'>

                            <div className="innerInfoDiv divBorder bg-green-100 col-span-2 row-span-2">4.1</div>
                            <div className="innerInfoDiv divBorder bg-green-200 col-span-2 row-span-2">4.2</div>
                            <div className="innerInfoDiv divBorder bg-green-400 col-span-2 row-span-2">4.3</div>
                            <div className="innerInfoDiv divBorder bg-green-500 col-span-2 row-span-2">4.4</div>

                        </div>
                        <div className='bg-orange-300 row-span-2 sm:col-span-5 col-span-full infoDiv divBorder'>05</div>
                    </div>
                </div>
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
            </section>);
}