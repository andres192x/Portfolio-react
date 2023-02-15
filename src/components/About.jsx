import Logo from '../assets/logo.png';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="mt-44">
        <div className="container mx-auto flex px-10 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                    Hi, I'm Andres
                    <br className="hidden lg:inline-block" /> I love building awesome apps.
                </h1>
                <p className="mb-8 leading-relaxed">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde cumque natus dolorum ea ipsam maxime veritatis quia aspernatur nisi in ex sit dicta laudantium impedit, aliquam minus ab, eum mollitia.
                </p>
                <div className="flex justify-center">
                    <Link to={"/contact"} className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Work with me</Link>
                    <Link to={"/projects"} className="ml-4 inline-flex hover:text-gray-400 border-0 py-2 px-6 focus:outline-none bg-gray-700 text-white rounded text-lg">See my projects</Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded" src={Logo} alt="Hero" />
            </div>
        </div>
    </section>
  )
}

export default About