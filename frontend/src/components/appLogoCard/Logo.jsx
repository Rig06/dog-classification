import doggyDexLogo from "../../assets/doggyDexLogo.png";
const Logo = () => {
  return (
    <div  className="bg-indigo-500 flex justify-center items-center sm:px-6 p-6 my-2 rounded-lg">
      <img src={doggyDexLogo} className="object-scale-down max-h-full m-auto" alt="DoggyDex Logo" />
    </div>
  );
};

export default Logo;