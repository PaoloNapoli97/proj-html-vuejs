import { createApp } from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faClock,
  faPhone,
  faEnvelope,
  faGraduationCap,
  faLock,
  faPenToSquare,
  faAward,
  faNetworkWired,
  faBriefcase,
  faPlane,
  faChartLine,
  faScaleBalanced,
  faInbox,
  faArrowRight,
  faQuoteRight
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
