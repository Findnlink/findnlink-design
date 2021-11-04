import React from "react";
import { render } from "@testing-library/react";

import Add from "./Add";
import { AddProps } from "./Add.types";

describe("Add Component", () => {
  const renderComponent = () => render(<Add text="add new" color="0x4287f5" />);

  it("it works", () => {
    
  });
});
