import { FaBars } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";

const Toggle = () => {
  function OpenToggle() {
    console.log("click");
  }
  return (
    <div>
      <div className="icon-toggle">
        <div className="toggle-open">
          <FaBars onClick={OpenToggle} />
        </div>
        <div className="toggle-close">
          <VscChromeClose />
        </div>
      </div>
    </div>
  );
};
export default Toggle;
