import DevCard from "./DevCard";
import DoggDexTeam from "../assets/DoggyDexTeam.png";
import Data from "../team-info.json"

const About = () => {
  return (
    <div className="mx-20 my-2" >
      <div  className="bg-indigo-500 flex justify-center items-center sm:px-6 py-4 h-40 rounded-xl">
      <img src={DoggDexTeam} className="object-scale-down max-h-full m-auto" alt="DoggyDex Team Logo" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {Data.map((member) => (
        <DevCard key={member.name} developer={member} />
      )) }
      </div>
    </div>
  );
};

export default About;