interface ProyCardProps {
  imgURL: string;
  changeBigProyImage: (imgURL: string) => void;
  bigProyImg: string;
  isFirstImage?: boolean;
}

const ProyCard = ({ imgURL, changeBigProyImage, bigProyImg, isFirstImage }: ProyCardProps) => {
  const handleClick = (): void => {
    if (bigProyImg !== imgURL) {
      changeBigProyImage(imgURL);
    }
  };

  return (
    <>
      <div
        className={`border rounded-2xl transition duration-300 ${bigProyImg === imgURL
            ? "border-white/50 bg-white/10 shadow-lg"
            : "border-transparent hover:bg-white/5"
          } cursor-pointer max-sm:flex-1 ${isFirstImage ? "first-image-style" : ""
          }`}
        onClick={handleClick}
      >
        <div className='flex justify-center items-center w-12 h-12 rounded-2xl'>
          <img
            src={`/img/${imgURL}.webp`}
            alt={`imagen de ${imgURL}`}
            className='object-contain w-8 h-8 opacity-90'
          />
        </div>
      </div>
    </>
  );
};

export default ProyCard;
