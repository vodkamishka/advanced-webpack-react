import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
    .use(Backend)
    .use(LanguageDetector) // автоматически определяет язык пользователя
    .use(initReactI18next) // bind react-i18n to the instance
    .init({
        lng: 'ru',
        fallbackLng: 'ru', // язык по умолчанию
        debug: false,
        returnNull: false,

        interpolation: {
            escapeValue: false, // not needed for react!!
        },

        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json', // позволяет загружать переводы из внешних файлов
        },
    });

export default i18n;
