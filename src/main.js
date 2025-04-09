import 'normalize.css';
import './style.scss';

import { initRouter } from './js/router';
import { header } from './js/components/header';
import { footer } from './js/components/footer';

const init = () => {
  document.body.append(header());
  document.body.append(document.createElement('main'));
  document.body.append(footer());
  initRouter();
};

init();
