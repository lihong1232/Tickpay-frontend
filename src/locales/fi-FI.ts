import component from "./fi-FI/component";
import globalHeader from "./fi-FI/globalHeader";
import menu from "./fi-FI/menu";
import pages from "./fi-FI/pages";
import pwa from "./fi-FI/pwa";
import settingDrawer from "./fi-FI/settingDrawer";
import settings from "./fi-FI/settings";

export default {
  "navBar.lang": "Kielet",
  "layout.user.link.help": "Ohje",
  "layout.user.link.privacy": "Tietosuoja",
  "layout.user.link.terms": "Käyttöehdot",
  "app.preview.down.block": "Lataa tämä sivu paikalliseen projektiisi",
  "app.welcome.link.fetch-blocks": "Hae kaikki lohkot",
  "app.welcome.link.block-list":
    "Rakenna nopeasti vakiosivuja `lohkoihin` perustuvan kehityksen avulla",
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...pages,
};
