import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingConfirmation from "../pages/Bookingconfirmation";

describe("Booking Confirmation Test Suit", () => {
  const ride = {
    dropLocation: "Delhi",
    pickUpLocation: "Chennai",
    time: "2022-04-22 10:34:23",
    status: "confirmed",
  };

  test("Booking Confirmation renders on screen", () => {
    render(<BookingConfirmation ride={ride} />);

    expect(screen.getByRole("heading")).toHaveTextContent(
      "Ride Booked Successful"
    );
  });

  test("Ride Booking Failed renders on screen", () => {
    ride.status = "failed";
    render(<BookingConfirmation ride={ride} />);
    expect(screen.getByRole("heading")).toHaveTextContent(
      "Ride Booking Failed"
    );
  });
});
