import 'normalize.css';
import './style.scss';

import { initRouter } from './js/router';
import { header } from './js/components/header';
import { footer } from './js/components/footer';

const init = () => {
  document.body.append(header());
  initRouter();
  document.body.append(footer());
};

init();
