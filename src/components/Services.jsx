import { useState, useContext } from "react";
import SharedContext from "../context/SharedContext";
import { BiChevronRight } from "react-icons/bi";

function Services() {
  const [state] = useState({
    heading:
      "why customers love travel friends? because we provide unique services.",
    subHeading:
      "Our aim is to provide professional and unique services to customers, and we have provided high quality services to our customers thats why they love travel friends.",
  });

  const {
    sharedData: { servicesData },
  } = useContext(SharedContext);

  // component ServiesLeft
  const ServicesLeft = (heading, subHeading) => {
    return (
      <div className="services__left">
        <h1 className="services__left__heading animation">{heading}</h1>
        <p className="services__left__paragraph animation">{subHeading}</p>
      </div>
    );
  };

  // component ServiesList
  const ServicesList = (services) => {
    const [current, setCurrent] = useState(0);
    const showDetails = (index) => {
      setCurrent(index);
    };

    return services.length > 0
      ? services.map((service, index) => (
          <div className="services__list animation" key={index}>
            <h4
              className={`services__list__heading ${
                current === index
                  ? "services__list__heading--active"
                  : "services__list__heading--normal"
              }`}
              onClick={() => showDetails(index)}
            >
              <BiChevronRight
                size={20}
                className={`${
                  current === index ? "services__rotate" : "services__back"
                }`}
                color={`${current === index ? "#ff4d58" : "black"}`}
              />
              {service.heading}
            </h4>
            <p
              className={`services__list__details ${
                current === index ? "services__list__details--show" : ""
              }`}
            >
              {service.p}
            </p>
          </div>
        ))
      : "";
  };

  return (
    <div className="services">
      <div className="services__contents">
        <div className="container">
          <div className="row ml-minus-15 mr-minus-15">
            <div className="col-6 p-15">
              {ServicesLeft(state.heading, state.subHeading)}
            </div>
            <div className="col-6 p-15">{ServicesList(servicesData)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
