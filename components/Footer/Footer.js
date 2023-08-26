import Image from "next/image";
import css from "../Footer/Footer.module.css";

export default function Footer() {
  return (
    <div className={css.background__color}>
      <footer className="container">
        <div className={css.footer__container}>
          <div className={css.footer__one}>
            <div className={css.footer__first}>
              <div className={css.footer__iconspans}>
                <a className={css.footer__linklogo} href="/src/index.html">
                  <Image
                    src="/LogoFooter.svg"
                    alt="logo"
                    width="38"
                    height="38"
                  />
                </a>
                <div className={css.footer_logospans}>
                  <span className={css.footer__logotext}>Dikretum</span>
                  {/* <span className={css.footer__logotextsecond}>Law</span> */}
                </div>
              </div>
              <div className={css.footer__groupLanguage}>
                <svg className={css.footer__languageSvg}>
                  <use href={`/sprite.svg#icon-language`}></use>
                </svg>
                <p className={css.footer__language}>UA</p>
                <button className={css.footer__languageBtn}>
                  <svg className={css.footer__iconDownSvg}>
                    <use href={`/sprite.svg#icon-downfooter`}></use>
                  </svg>
                </button>
              </div>
              <div className={css.footer__mailBox}>
                <svg className={css.footer__iconMail}>
                  <use href={`/sprite.svg#icon-mail`}></use>
                </svg>
                <a href="/" className={css.footer__mail}>
                  contact@zakon.com
                </a>
              </div>
              <div className={css.footer__social}>
                <a className={css.footer__iconSocial}>
                  <Image
                    src="/icon-facebook.svg"
                    alt="icon-facebook"
                    width="40"
                    height="40"
                  />
                </a>
                <a className={css.footer__iconSocial}>
                  <Image
                    src="/icon-instagram.svg"
                    alt="icon-instagram"
                    width="40"
                    height="40"
                  />
                </a>
                <a className={css.footer__iconSocial}>
                  <Image
                    src="/icon-twitter.svg"
                    alt="icon-twitter"
                    width="40"
                    height="40"
                  />
                </a>
              </div>
            </div>
            <div className={css.footer__second}>
              <ul className={css.footer__list}>
                <li className={css.footer__item}>
                  <a href="components/MainPage">Головна</a>
                </li>
                <li className={css.footer__item}>
                  <a href="components/Documentation">Документація</a>
                </li>
                <li className={css.footer__item}>
                  <a href="components/Search">Пошук</a>
                </li>
                <li className={css.footer__item}>
                  <a href="components/Rules">Правила користування</a>
                </li>
                <li className={css.footer__item}>
                  <a href="components/Contacts">Контакти</a>
                </li>
              </ul>
            </div>
            <div className={css.footer__third}>
              <ul className={css.footer__list}>
                <li className={css.footer__item}>
                  <a href="components/AboutUs">Про нас</a>
                </li>
                <li className={css.footer__item}>
                  <a href="components/OurComand">Наша команда</a>
                </li>
                <li className={css.footer__item}>
                  <a href="components/Career">Кар’єра</a>
                </li>
                <li className={css.footer__item}>
                  <a href="components/Clients">Клієнти</a>
                </li>
                <li className={css.footer__item}>
                  <a href="components/Feedbacks">Відгуки</a>
                </li>
              </ul>
            </div>
            <div className={css.footer__fourth}>
              <ul className={css.footer__list}>
                <li className={css.footer__item}>
                  <a href="components/AllDocumentation">Всі документи</a>
                </li>
                <li className={css.footer__item}>
                  <a href="components/NewTakes">Нові надходження</a>
                </li>
                <li className={css.footer__item}>
                  <a href="components/PopularDocumentation">
                    Популярні документи
                  </a>
                </li>
                <li className={css.footer__item}>
                  <a href="components/FirstLawer">Первинні законодавчі акти</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={css.footer__two}>
            <div className={css.footer__line}></div>
            <div className={css.footer__allrights}>
              <div className={css.footer__zakon}>
                <p className={css.footer__zakonwhite}>Zakon.ua |</p>
                <p className={css.footer__zakonall}>
                  All rights reserved. © 2023
                </p>
              </div>
              <div className={css.footer__privacy}>
                <ul className={css.footer__listprivacy}>
                  <li className={css.footer__itemprivacy}>
                    <a href="/">Privacy & terms</a>
                  </li>
                  <li className={css.footer__itemprivacy}>
                    <a href="/">Terms of Service</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
