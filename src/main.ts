import {
  delay,
  makeCounter,
  getRequired,
  describeSlot,
  type Slot,
} from "./utils.js";

const slots: Slot[] = [
  {
    day: "Monday",
    start: "10:00",
    end: "11:00",
    room: "Room 214",
  },
  {
    day: "Wednesday",
    start: "14:00",
    end: "15:00",
    room: "Room 214",
  },
];

const status = getRequired<HTMLParagraphElement>("#booking-status");
const tbody = getRequired<HTMLTableSectionElement>("#schedule tbody");
const nextBooking = makeCounter();

tbody.addEventListener("click", async (event: MouseEvent) => {
  const target = event.target;

  if (!(target instanceof Element)) {
    return;
  }

  const button = target.closest<HTMLButtonElement>("button[data-day]");
  const row = target.closest<HTMLTableRowElement>("tr");

  if (button === null || row === null || !tbody.contains(button)) {
    return;
  }

  const day = button.dataset.day;

  if (day === undefined) {
    return;
  }

  const slot = slots.find((item) => item.day === day);

  if (slot === undefined) {
    return;
  }

  status.textContent = `Updating ${day}...`;

  await delay(1000);

  const booked = row.classList.toggle("selected");
  const count = document.querySelectorAll("#schedule tr.selected").length;

  status.textContent = booked
    ? `Booking #${nextBooking()} confirmed: ${describeSlot(slot)}. ${count} of ${slots.length} slots booked.`
    : `Booking for ${day} cancelled. ${count} of ${slots.length} slots booked.`;
});
