import React from "react";
import { shallow } from "enzyme";
import AddProduct from "./Add-Product";

describe("AddProduct", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AddProduct />);
    expect(wrapper).toMatchSnapshot();
  });
});
