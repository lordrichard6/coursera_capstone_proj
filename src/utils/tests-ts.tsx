import "@testing-library/jest-dom";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { render, RenderOptions } from "@testing-library/react";

type CustomRenderProps = Omit<RenderOptions, "queries">;

const customRender = (
  ui: ReactElement,
  { ...renderOptions }: CustomRenderProps = {}
) =>
  render(
    <BrowserRouter basename="/">
      {ui}
    </BrowserRouter>,
    renderOptions
  );

export * from "@testing-library/react";
export { customRender as render };