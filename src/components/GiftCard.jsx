const GiftCard = ({img}) => {
    return (
        <div className="carousel rounded-box ">
        <div className="carousel-item w-full transform transition-transform duration-300 hover:-translate-y-6 cursor-pointer">
          <img
            src={img}
            className="w-full"
            alt="Tailwind CSS Carousel component" />
        </div>
      </div>
    );
};

export default GiftCard;