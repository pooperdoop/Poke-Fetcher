import circle from '../assets/circle.svg';
import innerCircle from '../assets/inner-circle.svg';

export default function Header(){


    return(<header className="h-2/4 bg-red-500 w-full flex justify-center items-center relative">

                <h1 className='siteTitle absolute top-10'>Poké-Fetcher</h1>
                <input className='rounded-lg w-1/6 min-w-52 p-3 border-4 border-black mt-10 outline-none' type="text" placeholder='Enter Pokémon Name' />

                <div className="h-1/6 bg-black w-full -bottom-10 absolute flex justify-center items-center">
                     
                    <img className='w-1/6 min-w-52' src={circle} alt="" />
                    <img className='w-1/12 min-w-32 absolute' src={innerCircle} alt="search" />
                </div>
            </header>);
}