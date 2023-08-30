const Button = ({ className, width, height, viewBox, path, pressed }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      className={`${className} ${pressed ? "pressed" : "released"}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path} />
    </svg>
  );
};

export default Button;
