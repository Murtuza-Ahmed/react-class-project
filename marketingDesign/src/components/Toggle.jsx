import { FaBars } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";

const Toggle = () => {
  return (
    <div>
      <div className="icon-toggle">
        <div className="toogle-open">
          <FaBars />
        </div>
        <div className="toogle-close">
          <VscChromeClose />
        </div>
      </div>
    </div>
  );
};
export default Toggle;
