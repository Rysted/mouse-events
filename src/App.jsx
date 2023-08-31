import { useState } from "react";
import data from "./data";
import Icon from "./components/Icon";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const handleContextMenu = (e) => {
    e.preventDefault(); // Evita que aparezca el menú del clic derecho
  };

  const [pressed, setPressed] = useState(false);

  const handleWheel = (e) => {
    const scrollDirection = e.deltaY > 0 ? "up" : "down";

    setPressed(scrollDirection);

    setTimeout(() => {
      setPressed(false);
    }, 100);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();

    const buttonClicked = data[e.button].name;

    setPressed(buttonClicked);
  };

  const handleMouseUp = () => {
    setPressed(false);
  };

  return (
    <>
      <main
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onContextMenu={handleContextMenu}
      >
        <div className="mouse">
          {data.map((svg, index) => {
            const {
              name,
              width,
              height,
              viewBox,
              path,
              stroke,
              strokeWidth,
              strokeLinejoin,
            } = svg;

            return (
              <Icon
                key={index}
                className={name}
                width={width}
                height={height}
                viewBox={viewBox}
                path={path}
                pressed={name === pressed}
                /* Únicamente para el evento de desplazamiento hacia arriba y hacia abajo */
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinejoin={strokeLinejoin}
              />
            );
          })}

          <img className="design" src="/design.png" alt="mouse design" />
          <img className="razer" src="/razer.png" alt="mouse razer" />
          <img className="shell" src="/shell.png" alt="mouse shell" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
