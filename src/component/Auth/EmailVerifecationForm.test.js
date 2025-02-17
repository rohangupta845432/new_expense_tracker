import { render, screen } from "@testing-library/react";
import EmailVerifecationForm from "./EmailVerifecationForm";

test('Render "Verify Your Email"', () => {
  render(<EmailVerifecationForm />);

  const testElement = screen.getByText("Verify Your Email");
  expect(testElement).toBeInTheDocument();
});
