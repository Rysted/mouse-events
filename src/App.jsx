import { useState } from "react";
import data from "./data";
import Button from "./components/Button";

import "./App.css";
import shell from "./assets/shell.png";
import design from "./assets/design.png";
import razer from "./assets/razer.png";

const App = () => {
  const handleContextMenu = (e) => {
    e.preventDefault(); // Evita que aparezca el menú del clic derecho
  };

  const [pressed, setPressed] = useState(false);

  const handleWheel = (event) => {
    const scrollDirection = event.deltaY > 0 ? "down" : "up";

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
    <main
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onContextMenu={handleContextMenu}
    >
      <div className="mouse">
        {data.map((button, index) => (
          <Button
            key={index}
            className={button.name}
            width={button.width}
            height={button.height}
            viewBox={button.viewBox}
            path={button.path}
            pressed={button.name === pressed}
            /* Únicamente para el evento de desplazamiento hacia arriba y hacia abajo */
            stroke={button.stroke}
            strokeWidth={button.strokeWidth}
            strokeLinejoin={button.strokeLinejoin}
          />
        ))}

        {/* Images */}
        <img className="shell" src={shell} alt="mouse shell" />
        <img className="design" src={design} alt="mouse design" />
        <img className="razer" src={razer} alt="mouse razer" />
      </div>
    </main>
  );
};

export default App;
