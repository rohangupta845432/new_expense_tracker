import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";
import SignUpForm from "./SignupForm.js";

describe("Render Login Element", () => {
  test('Render "Email"', () => {
    render(
      <BrowserRouter>
        <SignUpForm />
      </BrowserRouter>
    );

    const testElement = screen.getByText("Email", { exact: false });
    expect(testElement).toBeInTheDocument();
  });

  test("Render Password", () => {
    render(
      <BrowserRouter>
        <SignUpForm />
      </BrowserRouter>
    );
    const testElement = screen.getByText("Password");
    expect(testElement).toBeInTheDocument();
  });

  test('Render "Confirm Password"', () => {
    render(
      <BrowserRouter>
        <SignUpForm />
      </BrowserRouter>
    );
    const testElement = screen.getByText("Confirm Password");
    expect(testElement).toBeInTheDocument();
  });

  test('render "If You Have An Account Login" ', () => {
    render(
      <BrowserRouter>
        <SignUpForm />
      </BrowserRouter>
    );
    const testElement = screen.getByText("If You Have An Account", {
      exact: false,
    });
    expect(testElement).toBeInTheDocument();
  });
});
