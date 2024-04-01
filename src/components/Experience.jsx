import React from 'react';
import css from "../assets/css.png";
import flutter from "../assets/flutter.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import mangodb from "../assets/mangodb.png";
import nodejs from "../assets/node.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";



const Experience = () => {
    const techs=[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:react,
            title:'React',
            style:'shadow-blue-600'
        },
        {
            id:4,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-400'
        },
        {
            id:5,
            src:nodejs,
            title:'Node JS',
            style:'shadow-green-500'
        },
        {
            id:6,
            src:flutter,
            title:'Flutter',
            style:'shadow-sky-400'
        },
        {
            id:7,
            src:github,
            title:'GitHub',
            style:'shadow-gray-500'
        },
        {
            id:8,
            src:mangodb,
            title:'MangoDB',
            style:'shadow-green-500'
        },
    ];
    
  return (
    <div name='experience' className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">Experience</p>
            <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-12 py-8 sm:px:0 ">
            {
                techs.map(({id,src,title,style})=>(
                    <div key={id} className={"shadow-md hover:scale-150 duration-500 py-2 rounded-lg "+""+style}>
                    <img className="w-20 mx-auto" src={src} alt="" />
                    <p className="mt-4">{title}</p>
                </div>
                ))
            }

        </div>

        </div>
    </div>
  )
}

export default Experience