import { fireEvent, render, screen } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";

test("button has correct initial color", () => {
    render(<App />);
    // find a element with role of button and text of "change to blue"
    const colorButton = screen.getByRole("button", { name: /change to blue/i });

    // expect background to be red
    expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});
test("button turns blue when clicked", () => {
    render(<App />);
    const colorButton = screen.getByRole("button", { name: /change to blue/i });
    // expect background to be red
    expect(colorButton).toHaveStyle({ backgroundColor: "red" });
    // click button
    fireEvent.click(colorButton);
    // expect background to be blue
    expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
    // expect button text to be "change to red"
    expect(colorButton.textContent).toBe("change to red");
});
test("initial conditions", () => {
    render(<App />);
    // check that button starts out enabled
    const colorButton = screen.getByRole("button", { name: /change to blue/i });
    expect(colorButton).toBeEnabled();
    // check that button starts out unchecked
    const checkBox = screen.getByRole("checkbox");
    expect(checkBox).not.toBeChecked();
});
test("button disabled when checkbox checked", () => {
    render(<App />);
    // check that button enabled
    const colorButton = screen.getByRole("button", { name: /change to blue/i });
    expect(colorButton).toBeEnabled();
    // check that checkbox unchecked
    const checkBox = screen.getByRole("checkbox");
    expect(checkBox).not.toBeChecked();
    // click checkbox
    fireEvent.click(checkBox);
    // expect checkbox to be checked
    expect(checkBox).toBeChecked();
    // expect button to be disabled
    expect(colorButton).toBeDisabled();
    // click checkbox
    fireEvent.click(checkBox);
    // expect checkbox to be unchecked
    expect(checkBox).not.toBeChecked();
    // expect button to be enabled
    expect(colorButton).toBeEnabled();
});
describe("spaces before camel-case capital letter", () => {
    test("works for no inner capital letters", () => {
        expect(replaceCamelWithSpaces("Red")).toBe("Red");
    });
    test("works for one inner capital letter", () => {
        expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
    });
    test("works for multiple inner capital letters", () => {
        expect(replaceCamelWithSpaces("MediumVioletRed")).toBe(
            "Medium Violet Red"
        );
    });
});
