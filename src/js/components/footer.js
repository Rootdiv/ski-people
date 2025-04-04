import { layout } from './layout';

export const footer = () => {
  const elem = document.createElement('footer');
  elem.className = 'footer';

  const child = `
    <div class="footer__logo">
      <a href="/" class="footer__logo-link">
        <img src="/images/logo.svg" alt="" class="footer__logo-icon" />
      </a>
    </div>
    <div class="footer__social">
      <a href="tel:+79398391297" class="footer__social-phone">
        <svg width="12" height="14">
          <use href="/images/sprite.svg#phone" />
        </svg>
        +7 (939) 839 12 97
      </a>
      <ul class="footer__social-list">
        <li class="footer__social-item">
          <a href="#" class="footer__social-link">
            <svg width="24" height="24" class="">
              <use href="/images/sprite.svg#vk" />
            </svg>
          </a>
        </li>
        <li class="footer__social-item">
          <a href="#" class="footer__social-link">
            <svg width="24" height="24" class="">
              <use href="/images/sprite.svg#youtube" />
            </svg>
          </a>
        </li>
        <li class="footer__social-item">
          <a href="#" class="footer__social-link">
            <svg width="24" height="24" class="">
              <use href="/images/sprite.svg#telegram" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
    <ul class="footer__developer-list">
      <li class="footer__developer-item">
        Designer:&nbsp;<a href="https://t.me/Mrshmallowww" class="footer__developer-link">
          Anastasia Ilina
        </a>
      </li>
      <li class="footer__developer-item">
        Developer:&nbsp;<a href="https://t.me/Rootdiv" class="footer__developer-link"> Vladimir </a>
      </li>
    </ul>
    <p class="footer__copyright">&copy;SKI People, 2025</p>
  `;

  elem.append(layout(child, 'footer__container'));

  return elem;
};
