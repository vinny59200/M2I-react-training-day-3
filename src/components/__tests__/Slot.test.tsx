import { render, screen, fireEvent } from "@testing-library/react";
import MySlot from "../MySlot";

test("paragraph c should be in document", async () => {
  render(<MySlot >VV the best</MySlot>);
    expect(screen.getByText(/VV the best/)).toBeInTheDocument();
});
