import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@nextui-org/react";
import Image from "next/image";

const HomePage = () => {
  return (
    <main className='flex flex-col justify-center align-middle text-center py-16 lg:px-48 px-12'>
      <Image src="/photo.webp" width="200" height="200" alt="Fondo lila claro con constelaciones blancas" className='m-auto rounded-full border-4 border-purple-300' />
      <h1 className='text-blue-950 text-4xl font-bold my-8'>Hola, soy Andrea, desarrolladora web full stack :)</h1>
      <p className="text-blue-950 text-xl">Vivo en Talca, Chile, y me dedico a crear sitios web bonitos y funcionales.</p>
      <span className="mt-10 cursor-pointer">
        <Link className="bg-purple-300 text-blue-950 text-lg font-bold px-6 py-4 rounded-full" href="mailto:andrea.olivos.b@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="me-2" />Contáctame</Link>
      </span>
    </main>
  )
}

export default HomePage;