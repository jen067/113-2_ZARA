import {Link, NavLink } from 'react-router'
import { Flame } from 'lucide-react';
import { useState } from 'react';

function Navbar(){
    /*Woman, man, kids*/
    const classContent = [
        "WOMAN",
        "MAN",
        "KIDS"
    ]
    const sectionTitles = ["", "TOPS", "BOTTOMS", "JACKETS", ""];
    const navBarContent = [
        [
        [{to: "/products/category/the new", label: "The New"}],

        [{to: "/products/category/t-shirt", label: "T-Shirt"},
        {to: "/products/category/blouse", label: "Blouse"},
        {to: "/products/category/knitwear", label: "Knitwear"}],

        [{to: "/products/category/skirt", label: "Skirt"},
        {to: "/products/category/cover", label: "Cover"}],

        [{to: "/products/category/jacket", label: "Jacket"},
        {to: "/products/category/waistcoat", label: "Waistcoat"}],

        [{to: "/products/category/special prices", label: "Special Prices"}]
        ],
        [
            [{to: "#", label: "The New"}],
    
            [{to: "#", label: "T-Shirt"},
            {to: "#", label: "Shirt"},
            {to: "#", label: "Polo Shirt"}],
    
            [{to: "#", label: "Trouser"},
            {to: "#", label: "Jean"},
            {to: "#", label: "Short"}],
    
            [{to: "#", label: "Jacket"},
            {to: "#", label: "Blazer"}],
    
            [{to: "#", label: "Special Prices"}]
        ],
        [
            [{to: "#", label: "The New"}],
    
            [{to: "#", label: "T-Shirt"},
            {to: "#", label: "Knitwear"}],
    
            [{to: "#", label: "Skirt"}],
    
            [{to: "#", label: "Jacket"}],
    
            [{to: "#", label: "Special Prices"}]
            
        ]
    ]
    const [list_class, Setlist] = useState(0);

    return(
        <>
            {/*class*/}
            <div className="flex gap-10">
                {classContent.map((c, index) => (
                    <NavLink
                        key = {c}
                        onClick={() => Setlist(index)}
                        className={
                        ` mx-0 mb-3 transition-all duration-500 ease-in-out ${
                            list_class === index ? "opacity-100 font-normal" : "opacity-60"
                        } hover:opacity-100`
                        }
                    >
                        <p className='group transition duration-300 cursor-pointer tracking-widest hover:font-bold'>
                            {c}
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-black dark:bg-white">
                            </span>
                        </p>
                    </NavLink>
                ))}
            </div>

            <div className="flex flex-col gap-10">
                
                {navBarContent[list_class].map((group, index) => (
                    <div className="member" key={`section-${index}`}>
                        {sectionTitles[index] && (
                            <p className='
                            tracking-widest w-full border-b-1 opacity-50 pb-1 nth-3:underline'>{sectionTitles[index]}</p>
                        )}
                        {group.map(({to, label}, itemIndex)=>(
                            <NavLink
                                key={`${label}-${itemIndex}`}
                                to = {to || "#"}
                                onClick={(e) => {
                                    if (!to) {
                                    e.preventDefault();
                                    }
                                }}
                                className={({isActive}) =>
                                    `mx-6 mb-3 text-base transition-all duration-500 ease-in-out ${
                                        isActive && to!=="#" ? "opacity-100 font-normal" : "opacity-60"
                                    } hover:opacity-100 hover:[text-shadow:0px_0px_30px_white]`
                                }
                            >
                                <p className='hover:font-bold tracking-widest'>{label}</p>
                            </NavLink>
                        ))}  
                    </div>
                ))}
                
            </div>
        </>
    )
}

export default Navbar;