import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";
import LoginForm from "./LoginForm";

describe("Render Login Element", () => {
  test("Render Password", () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
    const testElement = screen.getByText("Password");
    expect(testElement).toBeInTheDocument();
  });

  test('Render "Email"', () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    const testElement = screen.getByText("Email", { exact: false });
    expect(testElement).toBeInTheDocument();
  });

  test("Async ", () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => {
        return { idToken: "ahsdjkahsdk", email: "abcd@gmail.com" };
      },
    });
  });
});
