import "./App.css";
import shell from "./assets/shell.png";
import design from "./assets/design.png";
import Button from "./components/Button";
import { useState } from "react";

const data = [
  {
    id: 0,
    name: "left",
    width: "277",
    height: "285",
    viewBox: "0 0 277 285",
    path: "M0 252L34.5 201L69.5 150L108.5 96L149 43L162.5 27.5L176.298 12.9501L218.5 0.5L257.327 57.5938L276.79 98.5L208.29 183.75L139.79 269L108.79 276.5L78.79 285L0 263.219V252Z",
  },
  {
    id: 1,
    name: "middle",
    width: "99",
    height: "105",
    viewBox: "0 0 99 105",
    path: "M0 89L2.5 76L6 64L13.5 48.5L18 41L23.5 34.5L33.5 23.5L45 14.5L58.7601 6.10361L66.5 2.5L75 0L87 7L98.5 14.5L95 22L78.5 41.5L63 61.5L30.5 101.637L27 103.5L23 104.5L19.5 103.5L16.67 101.637L11.0859 94.9917L4.5 92L0 89Z",
  },
  {
    id: 2,
    name: "right",
    width: "245",
    height: "274",
    viewBox: "0 0 245 274",
    path: "M35.5 273.5V269.5V266.5L36.4287 264.5L67 226.5L97.4287 188L137.5 141.5L158.5 118L179.5 95L221 54L238.5 40L241.5 25L244.5 10L238.5 8L223 7.5L202.262 4.70496L181.5 2L162 0.5L156.5 1L151.5 2.5L147 3.5L142.5 6L119.5 24.5L98 43.5L76 65L55 87.5L37 110L19.5 132.5L0 161L1 224L35.5 273.5Z",
  },
];

const App = () => {
  const handleContextMenu = (event) => {
    event.preventDefault(); // Evita que aparezca el menú del clic derecho
  };

  const [pressed, setPressed] = useState(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setPressed(e.button);
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    setPressed();
  };

  return (
    <main
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
            pressed={button.id === pressed}
          />
        ))}

        {/* Images */}
        <img className="shell" src={shell} alt="mouse shell" />
        <img className="design" src={design} alt="mouse design" />
      </div>
    </main>
  );
};

export default App;
