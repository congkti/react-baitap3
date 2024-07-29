import { useState } from "react";
import "./glasses.scss";

const GlassesStore = () => {
  let arrMatKinh = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "G8850U: square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "G8759H: square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "D6700HQ Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink D6005U square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink P8750 square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "P9700 square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "F8750 Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light F8500 pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink F4300 square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  const [matKinh, setMatKinh] = useState();

  return (
    <>
      <div className="mx-auto max-w-7xl py-5 min-h-full flex justify-center items-center">
        <div className="glasses_display ">
          <div className="frame">
            <div className="model">
              <img src="./glassesImage/model.jpg" />
            </div>

            {matKinh && (
              <div className="glasses">
                <img className="glasses_img" src={matKinh.url} />
                <div className="glasses_content">
                  <h3>{matKinh.name}</h3>
                  <p>{matKinh.desc}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="glasses_navButtons">
          {arrMatKinh.map((item, index) => {
            return (
              <button
                onClick={() => {
                  setMatKinh(item);
                }}
                className="flex items-center"
                key={index}
              >
                <img src={item.url} alt="" />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GlassesStore;
