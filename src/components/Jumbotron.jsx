import { Image } from '@nextui-org/react';

const Jumbotron = () => {
  return (
    <div className='flex flex-col justify-center align-middle text-center py-16 lg:px-48 px-12'>
      <Image src="photo.webp" width="200" className='m-auto rounded-full border-4 border-purple-300' />
      <h1 className='text-blue-950 text-3xl font-bold my-8'>Hola, soy Andrea, desarrolladora web full stack :)</h1>
      <div className='text-blue-950 space-x-4 space-y-4 lg:px-48 xl:px-60'>
        <span className='bg-pink-300 rounded-full px-4 py-3 inline-block'>HTML</span>
        <span className='bg-purple-300 rounded-full px-4 py-3 inline-block'>CSS</span>
        <span className='bg-pink-300 rounded-full px-4 py-3 inline-block'>Javascript</span>
        <span className='bg-purple-300 rounded-full px-4 py-3 inline-block'>React</span>
        <span className='bg-pink-300 rounded-full px-4 py-3 inline-block'>NodeJS</span>
        <span className='bg-purple-300 rounded-full px-4 py-3 inline-block'>Express</span>
        <span className='bg-pink-300 rounded-full px-4 py-3 inline-block'>MongoDB</span>
        <span className='bg-purple-300 rounded-full px-4 py-3 inline-block'>Bootstrap</span>
        <span className='bg-pink-300 rounded-full px-4 py-3 inline-block'>Tailwind</span>
      </div>
    </div>
  )
}

export default Jumbotron;