import PropTypes from "prop-types";

const DevCard = ({ developer }) => {
  return (
    <div className="my-2 rounded-lg shadow-md">
      <div className="bg-white h-[450px] text-black rounded-xl">
        <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
          <img
            src={`${developer.img}`}
            alt=""
            className="h-44 w-44 rounded-full"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-4 p-2">
          <p className="text-xl font-semibold">{`${developer.name}`}</p>
          <p className="text-center text-sm">{`${developer.about}`}</p>

          {/* <div>
            <button className="bg-indigo-500 text-white text-md px-2 py-1 rounded-xl"> Read More</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

DevCard.propTypes = {
  developer: PropTypes.object,
};

export default DevCard;
