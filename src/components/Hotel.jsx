import HotelSection from "./HotelSection.jsx";
import img from "../assets/images/download.jfif";

const Hotel = () => {
  const hotelRooms = [
    {
      title: "Room 101",
      description: "Cozy room with a view.",
      price: 150,
      imagePath: img,
    },
    {
      title: "Suite 201",
      description: "Luxurious suite with a balcony.",
      price: 250,
      imagePath: img,
    },
    {
      title: "Deluxe Room 301",
      description: "Spacious deluxe room with premium amenities.",
      price: 200,
      imagePath: img,
    },
  ];

  return (
    <div className="border-8 border-solid border-purple-700 w-3/5">
      <div className="flex mb-3">
        <div>
          <p>300+ stays in Lisbon</p>
          <p>
            Review covid 19 restrictions before you book{" "}
            <span className="underline">Learn more</span>
          </p>
        </div>
        <div>
          <h1 className="text-purple-700 text-5xl font-bold ml-12">Results</h1>
        </div>
      </div>

      <div>
        {hotelRooms.map((room, index) => (
          <HotelSection key={index} {...room} />
        ))}
      </div>
    </div>
  );
};

export default Hotel;
