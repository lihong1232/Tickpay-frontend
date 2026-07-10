import component from "./en-US/component";
import globalHeader from "./en-US/globalHeader";
import menu from "./en-US/menu";
import pages from "./en-US/pages";
import pwa from "./en-US/pwa";
import settingDrawer from "./en-US/settingDrawer";
import settings from "./en-US/settings";

export default {
  "navBar.lang": "Idiomas",
  "layout.user.link.help": "Ayuda",
  "layout.user.link.privacy": "Privacidad",
  "layout.user.link.terms": "Términos",
  "app.preview.down.block": "Descargar esta página a tu proyecto local",
  "app.welcome.link.fetch-blocks": "Obtener todos los bloques",
  "app.welcome.link.block-list":
    "Construye rápidamente páginas estándar basadas en el desarrollo de `bloques`",
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...pages,
};
