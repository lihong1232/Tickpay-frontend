import component from "./pl-PL/component";
import globalHeader from "./pl-PL/globalHeader";
import menu from "./pl-PL/menu";
import pages from "./pl-PL/pages";
import pwa from "./pl-PL/pwa";
import settingDrawer from "./pl-PL/settingDrawer";
import settings from "./pl-PL/settings";

export default {
  "navBar.lang": "Języki",
  "layout.user.link.help": "Pomoc",
  "layout.user.link.privacy": "Prywatność",
  "layout.user.link.terms": "Warunki",
  "app.preview.down.block": "Pobierz tę stronę do swojego lokalnego projektu",
  "app.welcome.link.fetch-blocks": "Pobierz wszystkie bloki",
  "app.welcome.link.block-list":
    "Szybko buduj standardowe strony w oparciu o rozwój z użyciem `bloków`",
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...pages,
};
