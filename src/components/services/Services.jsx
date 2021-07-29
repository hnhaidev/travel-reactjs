import { useState, useContext } from "react";
import SharedContext from "../../context/SharedContext";
import ServicesLeft from "./ServicesLeft";
import ServicesList from "./ServicesList";

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

  return (
    <div className="services">
      <div className="services__contents">
        <div className="container">
          <div className="row ml-minus-15 mr-minus-15 services__contents__container">
            <div className="col-6 p-15">
              <ServicesLeft
                heading={state.heading}
                subHeading={state.subHeading}
              />
            </div>
            <div className="col-6 p-15">
              <ServicesList services={servicesData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
