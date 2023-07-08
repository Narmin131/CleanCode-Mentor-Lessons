// import { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./App.css"
const App = () => {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  const options = {
    loop: true,
    items: 3,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    dots: false,
    nav: true,
  };

  return (
    <>
      <section  style={{ width: "100%", height: "80vh", backgroundColor: "bisque", position:'relative' }}>
        <OwlCarousel className="owl-theme" {...options}>
          <div
            className="item"
            style={{ width: "300px", height: "3100px", backgroundColor: "red" }}
          >
            <h4>1</h4>
          </div>
          <div
            className="item"
            style={{ width: "300px", height: "300px", backgroundColor: "red" }}
          >
            <h4>2</h4>
          </div>
          <div
            className="item"
            style={{ width: "300px", height: "300px", backgroundColor: "red" }}
          >
            <h4>3</h4>
          </div>
          <div
            className="item"
            style={{ width: "300px", height: "300px", backgroundColor: "red" }}
          >
            <h4>4</h4>
          </div>
          <div
            className="item"
            style={{ width: "300px", height: "300px", backgroundColor: "red" }}
          >
            <h4>5</h4>
          </div>
          <div
            className="item"
            style={{ width: "300px", height: "300px", backgroundColor: "red" }}
          >
            <h4>6</h4>
          </div>
          <div
            className="item"
            style={{ width: "300px", height: "300px", backgroundColor: "red" }}
          >
            <h4>7</h4>
          </div>
        </OwlCarousel>
      </section>
      ;
    </>
  );
};

export default App;
