import "../Styles/Wrapper.css";

const Wrapper = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;

/**
 * Wrapper component will be the frame holding all the components forming the calculator
 */
