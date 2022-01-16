import { Textfit } from "react-textfit";
import "../Styles/Screen.css";

const Screen = ({ value }) => {
  return (
    <Textfit className="screen" mode="single" max={70}>
      {value}
    </Textfit>
  );
};

export default Screen;

/**
 * Screen component will be the top-child component of Wrapper component and will display the results/value
 *
 * We are using react-textfit library to handle longer values
 */
