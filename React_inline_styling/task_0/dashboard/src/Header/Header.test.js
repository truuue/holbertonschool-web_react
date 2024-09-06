import Header from "./Header";
import { shallow } from "enzyme";

describe("<Header />", () => {
  it("renders without crashing", () => {
    shallow(<Header />);
  });

  it("renders img and h1 tags", () => {
    const header = shallow(<Header />);
    expect(header.find("img")).toHaveLength(1);
    expect(header.find("h1")).toHaveLength(1);
  });
});
