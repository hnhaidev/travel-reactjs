const destinationDetails = (title, text) => (
  <div className="destinationInfo__details">
    <div className="destinationInfo__details__head">{title}</div>
    <div className="destinationInfo__details__text">{text}</div>
  </div>
);

function DestinationInfo({ details }) {
  return (
    <div className="destinationInfo">
      <div className="container">
        <h2 className="heading">Overview</h2>
        <div className="row">
          <div className="col-8">
            <p className="destinationInfo__p">{details.details}</p>
          </div>
        </div>

        <h2 className="heading">Good to know</h2>
        <div className="row">
          <div className="col-8">
            {destinationDetails("Language", details.language)}
            {destinationDetails("Currency", details.currency)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationInfo;
