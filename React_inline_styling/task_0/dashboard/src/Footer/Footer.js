import { getFullYear, getFooterCopy } from "../utils/utils";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
    </div>
  );
}

export default Footer;
