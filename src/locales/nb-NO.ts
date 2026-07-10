import component from "./nb-NO/component";
import globalHeader from "./nb-NO/globalHeader";
import menu from "./nb-NO/menu";
import pages from "./nb-NO/pages";
import pwa from "./nb-NO/pwa";
import settingDrawer from "./nb-NO/settingDrawer";
import settings from "./nb-NO/settings";

export default {
  "navBar.lang": "Språk",
  "layout.user.link.help": "Hjelp",
  "layout.user.link.privacy": "Personvern",
  "layout.user.link.terms": "Vilkår",
  "app.preview.down.block": "Last ned denne siden til ditt lokale prosjekt",
  "app.welcome.link.fetch-blocks": "Hent alle blokker",
  "app.welcome.link.block-list":
    "Bygg raskt standard sider basert på utvikling med `blokker`",
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...pages,
};
