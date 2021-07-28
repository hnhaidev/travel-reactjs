import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsStopwatch, BsCheck, BsX } from "react-icons/bs";

function Cities({ cities, name }) {
  const formate = (price) => {
    return `${price}.00`;
  };

  // Component: City Image
  const CityImage = (img, status) => {
    return (
      <div className="cities__body__image">
        <LazyLoadImage src={img} alt={img} />
        <div
          className={
            status === "Bestselling"
              ? "bestselling"
              : status === "New"
              ? "new"
              : status === "Hot"
              ? "hot"
              : ""
          }
        >
          {status}
        </div>
      </div>
    );
  };

  // Component: City Facilities
  const Facilities = (room, name) => (
    <div className="cities__body__contents__facilities">
      <div className="cities__body__contents__facilities__name">{room}</div>
      <div className="cities__body__contents__facilities__value">
        {name ? (
          <BsCheck size={20} color="#34D399" />
        ) : (
          <BsX size={20} color="#ff4d58" />
        )}
      </div>
    </div>
  );

  // Component: City Content
  const CityContents = (city) => (
    <div className="cities__body__contents">
      <div className="cities__body__contents__top">
        <div className="cities__body__contents__top__name">{city.name}</div>
        <div className="cities__body__contents__top__duration">
          <BsStopwatch size={18} color="#df2189" />
          <div className="cities__body__contents__top__duration__time">
            {city.duration}
          </div>
        </div>
      </div>

      <div className="cities__body__contents__price">
        <span className="cities__body__contents__price__dollor">$</span>
        {formate(city.price)}
      </div>

      {Facilities("room", city.room)}
      {Facilities("food", city.food)}

      <div className="cities__body__contents__button">
        <button className="btn-dark-sm">buy now</button>
      </div>
    </div>
  );

  //
  return (
    <div className="cities">
      <div className="container">
        <div className="cities__container">
          <h2 className="heading">Cities in {name}</h2>
          <div className="row mr-minus-15 ml-minus-15">
            {cities.length > 0
              ? cities.map((city) => (
                  <div className="col-3 p-15" key={city.id}>
                    <div className="cities__body">
                      {CityImage(city.image, city.status)}

                      {CityContents(city)}
                    </div>
                  </div>
                ))
              : `No cities in ${name}`}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cities;
