import "../Styles/ButtonBox.css";

const ButtonBox = ({ children }) => {
  return <div className="buttonBox">{children}</div>;
};

export default ButtonBox;

/**
 * ButtonBox will be a child-component to Wrapper component and will act as a frame to hold all the button components
 */
