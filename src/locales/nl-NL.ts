import component from "./nl-NL/component";
import globalHeader from "./nl-NL/globalHeader";
import menu from "./nl-NL/menu";
import pages from "./nl-NL/pages";
import pwa from "./nl-NL/pwa";
import settingDrawer from "./nl-NL/settingDrawer";
import settings from "./nl-NL/settings";

export default {
  "navBar.lang": "Talen",
  "layout.user.link.help": "Help",
  "layout.user.link.privacy": "Privacy",
  "layout.user.link.terms": "Voorwaarden",
  "app.preview.down.block": "Download deze pagina naar je lokale project",
  "app.welcome.link.fetch-blocks": "Haal alle blokken op",
  "app.welcome.link.block-list":
    "Bouw snel standaardpagina's op basis van ontwikkeling met `blokken`",
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...pages,
};
