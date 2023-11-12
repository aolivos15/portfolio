
const ExperiencePage = () => {

  const pinkPillClasses = 'bg-pink-300 rounded-full px-4 md:px-6 py-1 md:py-2 border-2 border-pink-600 border-dashed text-sm md:text-base inline-block drop-shadow-md me-2 mb-2';
  const purplePillClasses = 'bg-purple-300 rounded-full px-4 md:px-6 py-1 md:py-2 border-2 border-purple-600 border-dashed text-sm md:text-base inline-block drop-shadow-md me-2 mb-2';

  return (
    <div className="flex flex-col justify-center align-middle text-blue-950 my-12 md:my-16">

      <h2 className="text-center font-bold text-3xl md:text-5xl mb-12 md:mb-20">Experiencia</h2>
      <div className="max-w-3xl px-6 m-auto text-justify">

        <div className="border-2 border-dashed border-blue-950 rounded-3xl p-8 md:p-10 mb-10 bg-white/50 drop-shadow-lg">
          <p className="font-bold text-lg md:text-2xl text-center md:text-left">Desarrolladora full stack</p>
          <p className="mb-3 text-sm md:text-base text-center md:text-left">Laboratorio Mauletec ☆ jun 2023 - presente</p>
          <ul className="list-disc md:ms-6 mb-6 text-sm md:text-lg">
            <li>Montar plataforma de videollamadas en base a Jitsi para realizar terapias online.</li>
            <li>Desarrollar dashboard para que psicólogos puedan llevar registro de sus pacientes, notas de sesión, cuestionarios aplicados a pacientes, etc.</li>
            <li>Manejar base de datos para el dashboard.</li>
          </ul>
          <div className="text-center md:text-left">
            <span className={pinkPillClasses}>React.js</span>
            <span className={purplePillClasses}>Node.js</span>
            <span className={pinkPillClasses}>Express</span>
            <span className={purplePillClasses}>MongoDB</span>
          </div>
        </div>

        <div className="border-2 border-dashed border-blue-950 rounded-3xl p-10 mb-10 bg-white/50 drop-shadow-lg">
          <p className="font-bold text-lg md:text-2xl text-center md:text-left">Desarrolladora front end</p>
          <p className="mb-3 text-sm md:text-base text-center md:text-left">Laboratorio Mauletec ☆ mar 2021 - dic 2021</p>
          <ul className="list-disc md:ms-6 mb-6 text-sm md:text-lg">
            <li>Desarrollo de sitio web para la exposición "Realidad Virtual y Bioinformática: Ingenierías multidisciplinares", una feria interactiva realizada para dar a conocer estas disciplinas al público de la Región del Maule.</li>
            <li>Desarrollo del software para la actividad 2 de la feria, "Programando Proteínas", un videojuego de tipo puzzle diseñado para introducir a las personas al mundo de la programación, construido en base a la librería Blockly de Javascript.</li>
          </ul>
          <div className="text-center md:text-left">
            <span className={pinkPillClasses}>Javascript</span>
            <span className={purplePillClasses}>Blockly</span>
            <span className={pinkPillClasses}>Bootstrap</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ExperiencePage;