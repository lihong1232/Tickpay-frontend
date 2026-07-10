import component from "./pt-PT/component";
import globalHeader from "./pt-PT/globalHeader";
import menu from "./pt-PT/menu";
import pages from "./pt-PT/pages";
import pwa from "./pt-PT/pwa";
import settingDrawer from "./pt-PT/settingDrawer";
import settings from "./pt-PT/settings";

export default {
  "navBar.lang": "Idiomas",
  "layout.user.link.help": "Ajuda",
  "layout.user.link.privacy": "Privacidade",
  "layout.user.link.terms": "Termos",
  "app.preview.down.block": "Descarregar esta página para o seu projeto local",
  "app.welcome.link.fetch-blocks": "Obter todos os blocos",
  "app.welcome.link.block-list":
    "Construa rapidamente páginas padrão baseadas no desenvolvimento com `blocos`",
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...pages,
};
