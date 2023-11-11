import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, CardHeader, Image, Link } from "@nextui-org/react";

const ProjectsPage = () => {
  return (
    <main className="mb-12">
      <h2 className="text-center text-5xl font-bold mt-14 mb-10">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 p-10 lg:px-32 justify-items-center">
        <Card className="py-4 max-w-xs">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-medium uppercase font-bold">E-commerce app</p>
            <small className="text-default-500">2023-10</small>
            <h4 className="font-bold text-2xl mt-4">Ovillo Feliz - Artículos de Tejido</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div className="flex justify-center">
              <Image
                alt="Card background"
                className="object-cover rounded-xl my-3"
                src="proy_ovillofeliz.png"
                width={270}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 text-center font-bold">
              <span className="bg-pink-300 rounded-full py-2 cursor-pointer">
                <FontAwesomeIcon icon={faGithub} className="me-2" />
                <Link className=" text-blue-950" href="https://github.com/aolivos15/P5-ecommerce" target="_blank">GitHub</Link>
                </span>
              <span className="bg-purple-300 rounded-full py-2 cursor-pointer">
                <FontAwesomeIcon icon={faUpRightFromSquare} className="me-2" />
                <Link className=" text-blue-950" href="https://whimsical-paprenjak-d13344.netlify.app/" target="_blank">Visitar</Link>
              </span>
            </div>
          </CardBody>
        </Card>

        <Card className="py-4 max-w-xs">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-medium uppercase font-bold">Sistema de reservaciones</p>
            <small className="text-default-500">2023-08</small>
            <h4 className="font-bold text-2xl mt-4">Cafetería Dulces Migajas</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div className="flex justify-center">
              <Image
                alt="Card background"
                className="object-cover rounded-xl my-3"
                src="proy_dulcesmigajas.png"
                width={270}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 text-center font-bold">
              <span className="bg-pink-300 rounded-full py-2 cursor-pointer">
                <FontAwesomeIcon icon={faGithub} className="me-2" />
                <Link className=" text-blue-950" href="https://github.com/aolivos15/P4-react" target="_blank">GitHub</Link>
                </span>
              <span className="bg-purple-300 rounded-full py-2 cursor-pointer">
                <FontAwesomeIcon icon={faUpRightFromSquare} className="me-2" />
                <Link className=" text-blue-950" href="https://boisterous-cuchufli-158be8.netlify.app/" target="_blank">Visitar</Link>
              </span>
            </div>
          </CardBody>
        </Card>

        <Card className="py-4 max-w-xs">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-medium uppercase font-bold">Consumo de API + Chart.js</p>
            <small className="text-default-500">2023-07</small>
            <h4 className="font-bold text-2xl mt-4">Comparador de Pokemon</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div className="flex justify-center">
              <Image
                alt="Card background"
                className="object-cover rounded-xl my-3"
                src="proy_pokemon.png"
                width={270}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 text-center font-bold">
              <span className="bg-pink-300 rounded-full py-2 cursor-pointer">
                <FontAwesomeIcon icon={faGithub} className="me-2" />
                <Link className=" text-blue-950" href="https://github.com/aolivos15/P3-async" target="_blank">GitHub</Link>
                </span>
              <span className="bg-purple-300 rounded-full py-2 cursor-pointer">
                <FontAwesomeIcon icon={faUpRightFromSquare} className="me-2" />
                <Link className=" text-blue-950" href="https://aolivos15.github.io/P3-async/" target="_blank">Visitar</Link>
              </span>
            </div>
          </CardBody>
        </Card>

        <Card className="py-4 max-w-xs">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-medium uppercase font-bold">CRUD</p>
            <small className="text-default-500">2023-06</small>
            <h4 className="font-bold text-2xl mt-4">Corazón de Frutilla - Lista de productos</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div className="flex justify-center">
              <Image
                alt="Card background"
                className="object-cover rounded-xl my-3"
                src="proy_crud.png"
                width={270}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 text-center font-bold">
              <span className="bg-pink-300 rounded-full py-2 cursor-pointer">
                <FontAwesomeIcon icon={faGithub} className="me-2" />
                <Link className=" text-blue-950" href="https://github.com/aolivos15/P2-CRUD" target="_blank">GitHub</Link>
                </span>
              <span className="bg-purple-300 rounded-full py-2 cursor-pointer">
                <FontAwesomeIcon icon={faUpRightFromSquare} className="me-2" />
                <Link className=" text-blue-950" href="https://aolivos15.github.io/P2-CRUD/" target="_blank">Visitar</Link>
              </span>
            </div>
          </CardBody>
        </Card>

        <Card className="py-4 max-w-xs">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-medium uppercase font-bold">Landing page</p>
            <small className="text-default-500">2023-05</small>
            <h4 className="font-bold text-2xl mt-4">Corazón de Frutilla - Artículos de tejido</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div className="flex justify-center">
              <Image
                alt="Card background"
                className="object-cover rounded-xl my-3"
                src="proy_landing.png"
                width={270}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 text-center font-bold">
              <span className="bg-pink-300 rounded-full py-2 cursor-pointer">
                <FontAwesomeIcon icon={faGithub} className="me-2" />
                <Link className=" text-blue-950" href="https://github.com/aolivos15/P1-landing-page" target="_blank">GitHub</Link>
                </span>
              <span className="bg-purple-300 rounded-full py-2 cursor-pointer">
                <FontAwesomeIcon icon={faUpRightFromSquare} className="me-2" />
                <Link className=" text-blue-950" href="https://aolivos15.github.io/P1-landing-page/" target="_blank">Visitar</Link>
              </span>
            </div>
          </CardBody>
        </Card>

      </div>
    </main>
  )
}

export default ProjectsPage;