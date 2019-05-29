import React from "react";
import { render, fireEvent } from "react-testing-library";
import StreakBlock from "../StreakBlock";

const noop = () => {};
const setup = ({
  streak = 0,
  handleClickReset = noop,
  handleClickUpdate = noop
}) =>
  render(
    <StreakBlock
      streak={streak}
      handleClickReset={handleClickReset}
      handleClickUpdate={handleClickUpdate}
    />
  );

describe("StreakBlock", () => {
  it("Displays a streak counter", () => {
    const { getByText } = setup({ streak: 2 });
    expect(getByText("Current Streak: 2 Days")).toBeVisible();
  });

  it("Updates the streak", () => {
    const updateSpy = jest.fn();
    const { getByText } = setup({ streak: 1, handleClickUpdate: updateSpy });

    const updateButton = getByText("Update", {exact: false});
    fireEvent.click(updateButton);
    expect(updateSpy).toHaveBeenCalled();
  });

  it("Resets the streak", () => {
    const resetSpy = jest.fn();
    const { getByText } = setup({ streak: 1, handleClickReset: resetSpy });

    const resetButton = getByText("Reset", {exact: false});
    fireEvent.click(resetButton);
    expect(resetSpy).toHaveBeenCalled();
  });
});
