import { rainbowlandsCalendar } from "./rainbowlands.js";

const CALENDAR_ID = "rainbowlands";

Hooks.once("init", async function () {});

Hooks.once("ready", async function () {});

Hooks.on("calendaria.init", async () => {
});

Hooks.on("calendaria.ready", async ({ api, calendar, version }) => {
  if (!game.user.isGM) return;

  if (calendar.metadata.id === CALENDAR_ID) return;

  const addedCalendar = await api.addCalendar(
    CALENDAR_ID,
    rainbowlandsCalendar,
  );

  await api.switchCalendar(CALENDAR_ID);
});
