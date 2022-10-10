const size = {
  xs: "400px",
  sm: "768px",
  lg: "1200px",
};

const device = {
  xs: `(max-width:${size.xs})`,
  sm: `(max-width:${size.sm})`,
  lg: `(min-width:${size.lg})`,
};
export default { size, device };
