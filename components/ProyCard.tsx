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
        className={`border rounded-xl ${
          bigProyImg === imgURL
            ? "border-grisclaro border-opacity-60 shadow-[0_0_10px_1px_rgba(30,125,103,0.7)]"
            : "border-transparent"
        } cursor-pointer max-sm:flex-1 ${
          isFirstImage ? "first-image-style" : ""
        }`}
        onClick={handleClick}
      >
        <div className='flex justify-center items-center w-12 h-12 rounded-xl'>
          <img
            src={`/img/${imgURL}.webp`}
            alt={`imagen de ${imgURL}`}
            className='object-contain'
          />
        </div>
      </div>
    </>
  );
};

export default ProyCard;
