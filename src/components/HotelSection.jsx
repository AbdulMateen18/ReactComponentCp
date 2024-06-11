const HotelSection = (props) => {
  return (
    <div className="bg-slate-100 mb-3">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>Price : ${props.price}</p>
      <img src={props.imagePath} alt="hello" />
    </div>
  );
};

export default HotelSection;
