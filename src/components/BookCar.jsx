import { useEffect, useState, useCallback } from "react";
import CarAudi from "../images/cars-big/audia1.jpg";
import CarGolf from "../images/cars-big/golf6.jpg";
import CarToyota from "../images/cars-big/toyotacamry.jpg";
import CarBmw from "../images/cars-big/bmw320.jpg";
import CarMercedes from "../images/cars-big/benz.jpg";
import CarPassat from "../images/cars-big/passatcc.jpg";

function BookCar() {
  const [modal, setModal] = useState(false);

  // booking car
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");

  // modal infos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");

  // handlers (using useCallback for performance)
  const handleName = useCallback((e) => setName(e.target.value), []);
  const handleLastName = useCallback((e) => setLastName(e.target.value), []);
  const handlePhone = useCallback((e) => setPhone(e.target.value), []);
  const handleAge = useCallback((e) => setAge(e.target.value), []);
  const handleEmail = useCallback((e) => setEmail(e.target.value), []);
  const handleAddress = useCallback((e) => setAddress(e.target.value), []);
  const handleCity = useCallback((e) => setCity(e.target.value), []);
  const handleZip = useCallback((e) => setZipCode(e.target.value), []);

  const handleCar = useCallback((e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  }, []);

  const handlePick = useCallback((e) => setPickUp(e.target.value), []);
  const handleDrop = useCallback((e) => setDropOff(e.target.value), []);
  const handlePickTime = useCallback((e) => setPickTime(e.target.value), []);
  const handleDropTime = useCallback((e) => setDropTime(e.target.value), []);

  // open modal when all inputs are fulfilled
  const openModal = useCallback(
    (e) => {
      e.preventDefault();
      const errorMsg = document.querySelector(".error-message");
      if (
        pickUp === "" ||
        dropOff === "" ||
        pickTime === "" ||
        dropTime === "" ||
        carType === ""
      ) {
        errorMsg.style.display = "flex";
      } else {
        setModal((prev) => !prev);
        const modalDiv = document.querySelector(".booking-modal");
        if (modalDiv) modalDiv.scroll(0, 0);
        errorMsg.style.display = "none";
      }
    },
    [pickUp, dropOff, pickTime, dropTime, carType]
  );

  // disable page scroll when modal is displayed
  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "auto";
  }, [modal]);

  // confirm modal booking
  const confirmBooking = useCallback(
    (e) => {
      e.preventDefault();
      setModal(false);
      const doneMsg = document.querySelector(".booking-done");
      if (doneMsg) doneMsg.style.display = "flex";
    },
    []
  );

  // based on value name show car img
  let imgUrl;
  switch (carImg) {
    case "Audi A1 S-Line":
      imgUrl = CarAudi;
      break;
    case "VW Golf 6":
      imgUrl = CarGolf;
      break;
    case "Toyota Camry":
      imgUrl = CarToyota;
      break;
    case "BMW 320 ModernLine":
      imgUrl = CarBmw;
      break;
    case "Mercedes-Benz GLK":
      imgUrl = CarMercedes;
      break;
    case "VW Passat CC":
      imgUrl = CarPassat;
      break;
    default:
      imgUrl = "";
  }

  // hide message
  const hideMessage = useCallback(() => {
    const doneMsg = document.querySelector(".booking-done");
    if (doneMsg) doneMsg.style.display = "none";
  }, []);

  return (
    <>
      <section id="booking-section" className="book-section">
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Book a car in Morocco</h2>

              <p className="error-message">
                All fields required! <i className="fa-solid fa-xmark"></i>
              </p>

              <p className="booking-done">
                Check your email to confirm your reservation.{" "}
                <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
              </p>

              <form className="box-form">
                <div className="box-form__car-type">
                  <label htmlFor="carType">
                    <i className="fa-solid fa-car"></i> &nbsp; Select Your Car
                    Type <b>*</b>
                  </label>
                  <select
                    id="carType"
                    value={carType}
                    onChange={handleCar}
                  >
                    <option value="">Select your car type</option>
                    <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                    <option value="VW Golf 6">VW Golf 6</option>
                    <option value="Toyota Camry">Toyota Camry</option>
                    <option value="BMW 320 ModernLine">
                      BMW 320 ModernLine
                    </option>
                    <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                    <option value="VW Passat CC">VW Passat CC</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label htmlFor="pickUp">
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Pick-up{" "}
                    <b>*</b>
                  </label>
                  <select
                    id="pickUp"
                    value={pickUp}
                    onChange={handlePick}
                  >
                    <option value="">Select pick-up city</option>
                    <option value="Rabat">Rabat</option>
                    <option value="Casablanca">Casablanca</option>
                    <option value="Marrakech">Marrakech</option>
                    <option value="Agadir">Agadir</option>
                    <option value="Fes">Fes</option>
                    <option value="Tangier">Tangier</option>
                    <option value="Essaouira">Essaouira</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label htmlFor="dropOff">
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Drop-off{" "}
                    <b>*</b>
                  </label>
                  <select
                    id="dropOff"
                    value={dropOff}
                    onChange={handleDrop}
                  >
                    <option value="">Select drop-off city</option>
                    <option value="Rabat">Rabat</option>
                    <option value="Casablanca">Casablanca</option>
                    <option value="Marrakech">Marrakech</option>
                    <option value="Agadir">Agadir</option>
                    <option value="Fes">Fes</option>
                    <option value="Tangier">Tangier</option>
                    <option value="Essaouira">Essaouira</option>
                  </select>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <i className="fa-regular fa-calendar-days"></i> &nbsp;
                    Pick-up <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    type="date"
                  />
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <i className="fa-regular fa-calendar-days"></i> &nbsp;
                    Drop-off <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                  />
                </div>

                <button onClick={openModal} type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Modal ------------------------------------ */}
      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        <div className="booking-modal__title">
          <h2>Complete Reservation</h2>
          <i onClick={openModal} className="fa-solid fa-xmark"></i>
        </div>

        <div className="booking-modal__message">
          <h4>
            <i className="fa-solid fa-circle-info"></i> Upon completing this
            reservation enquiry, you will receive:
          </h4>
          <p>
            Your rental voucher to produce on arrival at the rental desk and a
            toll‑free customer support number.
          </p>
        </div>

        <div className="booking-modal__car-info">
          <div className="dates-div">
            <div className="booking-modal__car-info__dates">
              <h5>Location & Date</h5>
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Pick-Up Date & Time</h6>
                  <p>
                    {pickTime} /{" "}
                    <input type="time" className="input-time" />
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Drop-Off Date & Time</h6>
                  <p>
                    {dropTime} /{" "}
                    <input type="time" className="input-time" />
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Pick-Up Location</h6>
                  <p>{pickUp}</p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Drop-Off Location</h6>
                  <p>{dropOff}</p>
                </div>
              </span>
            </div>
          </div>

          <div className="booking-modal__car-info__model">
            <h5>
              <span>Car -</span> {carType}
            </h5>
            {imgUrl && <img src={imgUrl} alt="Selected car" />}
          </div>
        </div>

        <div className="booking-modal__person-info">
          <h4>Personal Information</h4>
          <form className="info-form">
            <div className="info-form__2col">
              <span>
                <label htmlFor="firstName">
                  First Name <b>*</b>
                </label>
                <input
                  id="firstName"
                  value={name}
                  onChange={handleName}
                  type="text"
                  placeholder="Enter your first name"
                />
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label htmlFor="lastName">
                  Last Name <b>*</b>
                </label>
                <input
                  id="lastName"
                  value={lastName}
                  onChange={handleLastName}
                  type="text"
                  placeholder="Enter your last name"
                />
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label htmlFor="phone">
                  Phone Number <b>*</b>
                </label>
                <input
                  id="phone"
                  value={phone}
                  onChange={handlePhone}
                  type="tel"
                  placeholder="+212 6xx-xxxxxx"
                />
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label htmlFor="age">
                  Age <b>*</b>
                </label>
                <input
                  id="age"
                  value={age}
                  onChange={handleAge}
                  type="number"
                  placeholder="18"
                  min="18"
                />
                <p className="error-modal">This field is required.</p>
              </span>
            </div>

            <div className="info-form__1col">
              <span>
                <label htmlFor="email">
                  Email <b>*</b>
                </label>
                <input
                  id="email"
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  placeholder="Enter your email address"
                />
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label htmlFor="address">
                  Address <b>*</b>
                </label>
                <input
                  id="address"
                  value={address}
                  onChange={handleAddress}
                  type="text"
                  placeholder="Street address"
                />
                <p className="error-modal">This field is required.</p>
              </span>
            </div>

            <div className="info-form__2col">
              <span>
                <label htmlFor="city">
                  City <b>*</b>
                </label>
                <input
                  id="city"
                  value={city}
                  onChange={handleCity}
                  type="text"
                  placeholder="e.g. Casablanca"
                />
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label htmlFor="zip">
                  Zip Code <b>*</b>
                </label>
                <input
                  id="zip"
                  value={zipcode}
                  onChange={handleZip}
                  type="text"
                  placeholder="Enter your zip code"
                />
                <p className="error-modal">This field is required.</p>
              </span>
            </div>

            <span className="info-form__checkbox">
              <input type="checkbox" id="newsletter" />
              <label htmlFor="newsletter">
                Please send me latest news and updates
              </label>
            </span>

            <div className="reserve-button">
              <button onClick={confirmBooking} type="button">
                Reserve Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookCar;