import component from "./sv-SE/component";
import globalHeader from "./sv-SE/globalHeader";
import menu from "./sv-SE/menu";
import pages from "./sv-SE/pages";
import pwa from "./sv-SE/pwa";
import settingDrawer from "./sv-SE/settingDrawer";
import settings from "./sv-SE/settings";

export default {
  "navBar.lang": "Språk",
  "layout.user.link.help": "Hjälp",
  "layout.user.link.privacy": "Integritet",
  "layout.user.link.terms": "Villkor",
  "app.preview.down.block": "Ladda ner den här sidan till ditt lokala projekt",
  "app.welcome.link.fetch-blocks": "Hämta alla block",
  "app.welcome.link.block-list":
    "Bygg snabbt standardsidor baserade på utveckling med `block`",
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...pages,
};
