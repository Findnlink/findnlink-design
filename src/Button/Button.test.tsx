import React from "react";
import { render } from "@testing-library/react";

import { Button } from "./Button";
import { Props } from "./Button.types";

describe("Test Component", () => {
  let props: Props;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Button {...props} />);

  it("should render foo text correctly", () => {

    const { getByTestId } = renderComponent();

    const component = getByTestId("Button");

    expect(component).toHaveTextContent("harvey was here");
  });
});
