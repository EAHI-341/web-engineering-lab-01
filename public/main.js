import { delay, makeCounter } from "./utils.js";

const tbody = document.querySelector("#schedule tbody");
const status = document.querySelector("#booking-status");

const nextBooking = makeCounter();

tbody.addEventListener("click", async (event) => {
  const button = event.target.closest("button[data-day]");

  if (!button || !tbody.contains(button)) {
    return;
  }

  const day = button.dataset.day;
  const row = button.closest("tr");

  status.textContent = `Updating ${day}...`;

  await delay(1000);

  row.classList.toggle("selected");

  const count = document.querySelectorAll("#schedule tr.selected").length;

  status.textContent =
    `Booking #${nextBooking()} confirmed for ${day}. ` +
    `${count} slot(s) booked.`;
});
