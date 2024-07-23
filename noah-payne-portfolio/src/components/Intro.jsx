import React from 'react';

function Intro() {
    return (
        <div className='flex items-center justify-center flex-col
        text-center pt-20 pb-6'>
            <h1 className='text-4xl md:text-7xl dark:text-stone mb-1 md:mb-3 font-bold'>Noah Payne</h1>
            <p className='text-base md:text-xl mb-3 font-medium'>Software Engineer </p>
            <p className='text-sm max-w-xl mb-6 font-bold'>
                I'm an indie self taught software engineer from Glasgow, based in Brighton! Offering experience working in Startups/large enterprises exploring Fullstack web development, Machine Learning and mobile IOS/Android to creating projects in C/C++ which include 
                Embedded Systems / IoT and Game Design in C/C++ mechanics, creating my own 2D and 3D engine using SFML/SDL2 and OpenGL to utilising Unreal and Unity.
               I am also a Freelance Generative Coding Artist posting on Instagram, {' '} 
                <a href="https://www.instagram.com/nopy_generative_diary"
                target="_blank" className='text-cyan-600 hover:underline 
                underline-offset-2 decoration-2
                decoration-red-600'
                rel="noereferrer noopener">
                nopy_generative_diary 
                </a>{''} that features art created using C++ and mathematics.
                </p>
        </div>
    )
}

export default Intro;


