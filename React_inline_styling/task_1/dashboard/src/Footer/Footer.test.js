import Footer from "./Footer";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
StyleSheetTestUtils.suppressStyleInjection();

describe("<Footer />", () => {
  it("renders without crashing", () => {
    shallow(<Footer />);
  });

  it('renders the text "Copyright"', () => {
    const footer = shallow(<Footer />);
    expect(footer.text().includes("Copyright")).toBe(true);
  });
});
