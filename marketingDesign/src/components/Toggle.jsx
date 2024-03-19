import { FaBars } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";

const Toggle = () => {
  return (
    <div>
      <div className="toogle-open">
        <FaBars />
      </div>
      <div className="toogle-close">
        <VscChromeClose />
      </div>
    </div>
  );
};
export default Toggle;
