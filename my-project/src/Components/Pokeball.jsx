import { useState } from 'react';
import {useTransition, animated, useSpring} from '@react-spring/web';
import circle from '../assets/circle.svg';
import innerCircle from '../assets/inner-circle.svg';


export default function Pokeball(){


    const [isVisible, setIsVisible] = useState(true);
    const [pokemonSprite, setPokemonSprite] = useState("");
    const [pokemonID, setPokemonID] = useState("");
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonFlavorText, setPokemonFlavorText] = useState("");
    const [bgColor, setBgColor] = useState("");
    const [headerColor, setHeaderColor] = useState("");
    const [pokemonHP, setPokemonHP] = useState("");
    const [pokemonAttack, setPokemonAttack] = useState("");
    const [pokemonDefense, setPokemonDefense] = useState("");
    const [pokemonSpeed, setPokemonSpeed] = useState("");
    const [pokemon, setPokemon] = useState("");
    const [evolutionaryLine, setEvolutionaryLine] = useState([]);
    const evolutionArray = []; // Array to hold the evolutionary line

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

    // for animation of each innerDiv
    const AnimatedBlock = ({ className, animationConfig, text, children }) => {
        const props = useSpring(animationConfig);
        
        return (
          <animated.div className={`${className} ${bgColor}`} style={props}>
            {text} {children}
          </animated.div>
        );
      };

          
    function handleReturn(){

        setIsVisible(c => !c);
        setPokemon(p => p="");
        
        console.log(isVisible); 
    }


    async function handleIsVisible(){
        if(pokemon.trim() !== ""){
            try{
                // searching the API if pokemon exists
                const fetchedPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);

                getEvolutionaryLine(pokemon);

                if(!fetchedPokemon.ok){
                    alert("There is no such Pokemon!");
                    return;
                } else{
                    //getting pokemon data from API
                    const pokemonData = await fetchedPokemon.json();
                    const pokemonSprite = pokemonData.sprites.front_default;
                    const pokemonID = pokemonData.id;
                    const pokemonName = pokemonData.name;
                    const pokemonHP = pokemonData.stats[0].base_stat;
                    const pokemonAttack = pokemonData.stats[1].base_stat;
                    const pokemonDef = pokemonData.stats[2].base_stat;
                    const pokemonSpeed = pokemonData.stats[5].base_stat
                    const pokemonType = pokemonData.types[0].type.name;

                    setPokemonHP(H => H = pokemonHP);
                    setPokemonAttack(a => a = pokemonAttack);
                    setPokemonDefense(d => d = pokemonDef);
                    setPokemonSpeed(s => s = pokemonSpeed);
                    setPokemonSprite(s => s = pokemonSprite);
                    setPokemonID(I => I = pokemonID);
                    setPokemonName(n => n = pokemonName);

                    //another fetch for the flavor text of the pokemon
                    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonID}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data.evolution_chain);

                        const pokemonFlavorText = data.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text;
                        setPokemonFlavorText(f => f =  pokemonFlavorText)
                    })
                    .catch(error => alert('Error fetching data'));

                    switch(pokemonType){
                        case "grass":
                            setBgColor(b => b="bg-green-300")
                            setHeaderColor(b => b="bg-green-500")
                            break;
                        case "water":
                            setBgColor(b => b="bg-blue-500")
                            setHeaderColor(b => b="bg-blue-700")
                            break;
                        case "fire":
                            setBgColor(b => b="bg-red-500")
                            setHeaderColor(b => b="bg-red-700")
                            break;
                        case "electric":
                             setBgColor(b => b="bg-yellow-200")
                             setHeaderColor(b => b="bg-yellow-400")
                            break;
                        case "ice":
                            setBgColor(b => b="bg-blue-400")
                            setHeaderColor(b => b="bg-blue-600")
                            break;
                        case "psychic":
                            setBgColor(b => b="bg-violet-200")
                            setHeaderColor(b => b="bg-violet-400")
                        break;
                        case "fairy":
                            setBgColor(b => b="bg-pink-200")
                            setHeaderColor(b => b="bg-pink-400")
                        break;
                        case "dragon":
                            setBgColor(b => b="bg-purple-500")
                            setHeaderColor(b => b="bg-purple-700")
                        break;
                        case "dark":
                            setBgColor(b => b="bg-gray-500")
                            setHeaderColor(b => b="bg-gray-700")
                        break;
                        case "normal":
                            setBgColor(b => b="bg-gray-200")
                            setHeaderColor(b => b="bg-gray-400")
                        break;
                        case "fighting":
                            setBgColor(b => b="bg-orange-200")
                            setHeaderColor(b => b="bg-orange-400")
                        break;
                        case "flying":
                            setBgColor(b => b="bg-blue-200")
                            setHeaderColor(b => b="bg-blue-400")
                        break;
                        case "poison":
                            setBgColor(b => b="bg-purple-400")
                            setHeaderColor(b => b="bg-purple-600")
                        break;
                        case "ground":
                            setBgColor(b => b="bg-brown-200")
                            setHeaderColor(b => b="bg-brown-400")
                        break;
                        case "rock":
                            setBgColor(b => b="bg-yellow-100")
                            setHeaderColor(b => b="bg-yellow-300")
                        break;
                        case "bug":
                            setBgColor(b => b="bg-lime-300")
                            setHeaderColor(b => b="bg-lime-500")
                        break;
                        case "ghost":
                            setBgColor(b => b="bg-violet-400")
                            setHeaderColor(b => b="bg-violet-600")
                        break;
                        case "steel":
                            setBgColor(b => b="bg-sky-300")
                            setHeaderColor(b => b="bg-sky-500")
                        break;
                        case "stellar":
                            setBgColor(b => b="bg-teal-300")
                            setHeaderColor(b => b="bg-teal-500")
                        break;
                        default:
                            setBgColor(b => b="bg-white-300")
                            setHeaderColor(b => b="bg-white-500")
                            break;
                    }

                    console.log(pokemonData);
                    document.body.classList.add(`${bgColor}`);
                    setIsVisible(c => !c);
             }
            } catch(e){

            };

        }
    }

    async function getEvolutionaryLine(pokemon) {
        try {
            const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`);
            const speciesData = await speciesResponse.json();
    
            // Get the evolution chain URL
            const evolutionChainUrl = speciesData.evolution_chain.url;
    
            // Fetch the evolution chain data
            const evolutionResponse = await fetch(evolutionChainUrl);
            const evolutionData = await evolutionResponse.json();
    
            // Process and display the evolutionary line
            let currentEvolution = evolutionData.chain;
    
            // Loop through the evolutionary chain
            while (currentEvolution) {

                const pokemonLine = await fetch((`https://pokeapi.co/api/v2/pokemon/${currentEvolution.species.name}`)) // Get current info of the pokemon
                const pokemonLineData = await pokemonLine.json(); 
                const pokemonLineSprite = pokemonLineData.sprites.front_default;// Get Sprite of pokemon

                evolutionArray.push(pokemonLineSprite); // Add the Pokémon Sprite name to the array
                currentEvolution = currentEvolution.evolves_to[0]; // Move to the next evolution
                
            }

            console.log(`Evolutionary line for ${pokemon}:`, evolutionArray);

            const evolutionSprites = evolutionArray.map((src, index) => (
                <img
                key = {index}
                src = {src}
                className='w-1/3'
                />
            ));

            setEvolutionaryLine(e => e = evolutionSprites);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return(<section className='h-full'> 

                <header className={`absolute  ${headerColor} h-16 w-full flex`}>
                <h1 onClick={handleReturn} className='siteTitleSmall text-yellow-300 ml-3 cursor-pointer'>Poké-Fetcher</h1>
                </header>

               {transition((style, item) => item ? <animated.div style={style} className="h-2/4 bg-red-500 w-full flex justify-center items-center relative">
                    <h1 className='siteTitle absolute top-10 text-yellow-300'>Poké-Fetcher</h1>
                    <input className='rounded-lg w-1/6 min-w-52 p-3 border-4 border-black mt-10 outline-none' type="text" id="pokemonName" placeholder='Enter Pokémon Name...' value={pokemon} onChange={() => setPokemon(event.target.value)}/>

                    <div className="h-1/6 bg-black w-full -bottom-10 absolute flex justify-center items-center">
                        
                        <img className='w-1/6 min-w-52' src={circle} alt="outerCircle" />
                        <button onClick={handleIsVisible} className='absolute z-10 cursor-pointer transition-all hover:text-red-200 border-none' id='searchText'>Search</button>
                        <img onClick={handleIsVisible} className='w-1/12 min-w-32 absolute cursor-pointer' id='innerCircle' src={innerCircle} alt="search" />
                    </div>
                    </animated.div> : '' )}
              
                {transition2((style, item) => item ?
                    <animated.div style={style} className='h-2/4 flex justify-center bg-white relative -z-10'>
                        <h1 className='text-black z-10 absolute bottom-0'>&copy; 2025 by Pooperdoop</h1>
                    </animated.div> : '')}

                {transition3((style, item) => item ? "":        

                    <div style={style} className={`h-full w-full ${bgColor} absolute -z-20 flex sm:items-start md:items-center justify-start grid grid-cols-8 overflow-x-hidden sm:overflow-y-auto`}>

                
                        <div className= {`${bgColor} col-span-full xl:col-start-2 xl:col-end-8 h-3/4 rounded-lg grid grid-cols-8 grid-rows-1 md:grid-rows-4  md:grid-flow-row sm:grid-flow-row md:mt-0 mt-16`}>

                        <AnimatedBlock className=' row-span-2 lg:col-span-2 sm:col-span-3 col-span-full infoDiv divBorder ' 
                            animationConfig={{ from: { transform: 'translateX(-100vw)' }, to: { transform: 'translateX(0)',  config:{duration:200}}}}>
                                <img className='w-full h-full pokemonSprite' src={pokemonSprite} />
                                </AnimatedBlock> 

                        <AnimatedBlock className=' row-span-1 lg:col-span-6 sm:col-span-5 col-span-full infoDiv divBorder' 
                            animationConfig={{ from: { transform: 'translateX(100vw)' }, to: { transform: 'translateX(0)' },  config:{duration:300}}} >
                                <h1 className='z-10 text-center pokemonName'>#{pokemonID}: {pokemonName}</h1>
                            </AnimatedBlock>

                        <AnimatedBlock className=' row-span-1 lg:col-span-6 sm:col-span-5 col-span-full infoDiv divBorder' 
                            animationConfig={{ from: {  transform: 'translateX(100vw)' }, to: {  transform: 'translateX(0)' },  config:{duration:600}}}>
                            <p className='text-center autoSize'>{pokemonFlavorText}</p>
                         </AnimatedBlock>


                        <div className={` ${bgColor} row-span-2 sm:col-span-3 col-span-full grid grid-cols-4 grid-rows-4 m-7 infoDiv4`} >
                            
                            <AnimatedBlock className="innerInfoDiv divBorder  col-span-2 row-span-2" 
                                animationConfig={{ from: { transform: 'translateX(-100vw)'}, to: { transform: 'translateX(0)'},  config:{duration:600} }} text="Base HP" >
                                    <h1 className='pokemonStats'>{pokemonHP}</h1>
                                </AnimatedBlock>

                            <AnimatedBlock className="innerInfoDiv divBorder  col-span-2 row-span-2" 
                                animationConfig={{ from: { transform: 'translateX(-100vw)'}, to: { transform: 'translateX(0)'},  config:{duration:500} }} text="Base Attack" >
                                    <h1 className='pokemonStats'>{pokemonAttack}</h1>
                                </AnimatedBlock>

                            <AnimatedBlock className="innerInfoDiv divBorder col-span-2 row-span-2" 
                                animationConfig={{ from: { transform: 'translateY(100vh)' }, to: { transform: 'translateY(0)' },  config:{duration:700}}}text="Base Defense">
                                    <h1 className='pokemonStats'>{pokemonDefense}</h1>
                                </AnimatedBlock>

                            <AnimatedBlock className="innerInfoDiv divBorder  col-span-2 row-span-2" 
                                animationConfig={{ from: { transform: 'translateY(100vh)' }, to: { transform: 'translateY(0)' },  config:{duration:400}}} text="Base Speed" >
                                    <h1 className='pokemonStats'>{pokemonSpeed}</h1>
                                </AnimatedBlock>
                        </div>

                        <AnimatedBlock className=' md:row-span-2  sm:col-span-5 col-span-full infoDiv divBorder relative p-10' 
                            animationConfig={{ from: { transform: 'translateY(100vh)' }, to: { transform: 'translateY(0)' },  config:{duration:700}}} >
                                <h1 className='top-0 absolute'>Evolution Line</h1>
                                {evolutionaryLine}

                            </AnimatedBlock>

                        </div> 
                    </div> )}
            </section>);
}