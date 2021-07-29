import CityImage from "./CityImage";
import CityContents from "./CityContents";

function Cities({ cities, name }) {
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
                      <CityImage img={city.image} status={city.status} />

                      <CityContents city={city} />
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
