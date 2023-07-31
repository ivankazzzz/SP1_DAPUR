const fs = require("fs");
const fsextra = require("fs-extra");

const xlsxFile = require("read-excel-file/node");
const htmlPrivacy = require("./htmlPrivacy.js");
const htmlAbout = require("./htmlAbout.js");
const htmlStore = require("./htmlStore.js");
const htmlPrintables = require("./htmlPrintables.js");
const htmlCompare = require("./htmlCompare.js");
const htmlList = require("./htmlList.js");
const htmlElement = require("./htmlElement.js");
const htmlIndex = require("./htmlIndex.js");
const htmlCredits = require("./htmlCredits.js");
const htmlTranslation = require("./htmlTranslation.js");
const html404 = require("./html404.js");
const htmlSitemap = require("./htmlSitemap.js");
const htmlRobots = require("./htmlRobots.js");
const htmlManifest = require("./htmlManifest.js");
const htmlSolubility = require("./htmlSolubility.js");
const htmlReactivity = require("./htmlReactivity.js");

let svgFooter = "</svg>";
let svgHdr =
  "<svg xmlns='http://www.w3.org/2000/svg' width='1.75em' height='1.75em' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>";
let svgHdr2 =
  "<svg xmlns='http://www.w3.org/2000/svg' width='1.75em' height='1.75em' viewBox='1 1 22 22' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>";

let logoIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 10.054 10.054" class="periodic-table-logo" fill="#fff"><path d="M3.146 1.905a1.301 1.301 0 00-1.301 1.301 1.301 1.301 0 001.009 1.266 1.596 1.596 0 011.553-1.581 1.301 1.301 0 00-1.261-.986zm4.841 1.581a1.508 1.508 0 00-1.47 1.178l-.824-.1a.126.126 0 00-.14.11.126.126 0 00.11.14l.821.1a1.508 1.508 0 00-.004.081 1.508 1.508 0 001.508 1.508 1.508 1.508 0 001.508-1.508 1.508 1.508 0 00-1.508-1.508zm-4.331 1.69a.126.126 0 00-.078.028l-.843.683a1.301 1.301 0 00-.874-.34A1.301 1.301 0 00.56 6.848a1.301 1.301 0 001.301 1.301 1.301 1.301 0 001.301-1.301 1.301 1.301 0 00-.257-.774l.832-.674a.126.126 0 00.019-.177.126.126 0 00-.099-.047z"/><path d="M4.45 2.978a1.508 1.508 0 00-1.508 1.508 1.508 1.508 0 00.297.895l.292-.237a.201.201 0 01.283.03.201.201 0 01-.03.283l-.265.215a1.508 1.508 0 00.931.322 1.508 1.508 0 001.444-1.077l-.241-.029a.201.201 0 01-.175-.224.201.201 0 01.224-.175l.255.031a1.508 1.508 0 00.002-.034 1.508 1.508 0 00-1.508-1.508z" opacity=".7"/></svg>';

let listIcon = svgHdr + "<rect x='4' y='4' width='16' height='6' rx='2' /><rect x='4' y='14' width='16' height='6' rx='2' />" + svgFooter;

let compareIcon =
  svgHdr +
  "<rect x='3' y='3' width='6' height='6' rx='1' /><rect x='15' y='15' width='6' height='6' rx='1' /><path d='M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3' /><path d='M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3' />" +
  svgFooter;

let tablesIcon =
  svgHdr +
  "<rect x='4' y='4' width='16' height='16' rx='2' /><line x1='4' y1='10' x2='20' y2='10' /><line x1='10' y1='4' x2='10' y2='20' />" +
  svgFooter;

let printablesIcon =
  svgHdr +
  "<path d='M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2' /><path d='M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4' /><rect x='7' y='13' width='10' height='8' rx='2' />" +
  svgFooter;

let storeIcon = svgHdr + "<path d='M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0' />" + svgFooter;

let translationIcon = svgHdr2 + "<path d='M5 7h7m-2 -2v2a5 8 0 0 1 -5 8m1 -4a7 4 0 0 0 6.7 4' /><path d='M11 19l4 -9l4 9m-.9 -2h-6.2' />" + svgFooter;

let settingsIcon =
  svgHdr +
  "<path d='M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z' /><circle cx='12' cy='12' r='3' />" +
  svgFooter;

  let coffeeIcon =
 `<svg fill="none" xmlns="http://www.w3.org/2000/svg" height='1.4em' viewBox="0 0 884 1279">
 <path d="m791.1 297.52-.87-.52-2.03-.62a4.83 4.83 0 0 0 2.9 1.14ZM803.9 388.9l-.98.27.98-.28ZM791.48 297.38a1.77 1.77 0 0 1-.36-.09v.24a.74.74 0 0 0 .36-.15Z" fill="#0D0C22"/><path d="M791.11 297.53h.13v-.08l-.13.08ZM803.11 388.73l1.48-.85.55-.3.5-.54c-.94.4-1.8.98-2.53 1.69ZM793.67 299.51l-1.45-1.37-.98-.53c.53.93 1.4 1.61 2.43 1.9ZM430.02 1186.18a7.55 7.55 0 0 0-2.94 2.27l.9-.58c.63-.57 1.5-1.24 2.04-1.69ZM641.19 1144.63c0-1.3-.64-1.06-.49 3.58 0-.37.16-.75.23-1.11.09-.83.15-1.64.26-2.47ZM619.28 1186.18a7.55 7.55 0 0 0-2.94 2.27l.91-.58c.62-.57 1.5-1.24 2.03-1.69ZM281.3 1196.06a6.3 6.3 0 0 0-3.1-1.45c.94.45 1.87.9 2.48 1.24l.62.21ZM247.84 1164.01a9.9 9.9 0 0 0-1.22-3.85c.47 1.23.87 2.5 1.19 3.78l.03.07Z" fill="#0D0C22"/>
 <path d="M472.62 590.84c-45.94 19.66-98.07 41.96-165.64 41.96a313.58 313.58 0 0 1-83.63-11.53l46.74 479.81a80.17 80.17 0 0 0 79.9 73.57s66.26 3.44 88.38 3.44c23.8 0 95.15-3.44 95.15-3.44a80.16 80.16 0 0 0 79.89-73.57l50.05-530.2c-22.37-7.64-44.94-12.72-70.4-12.72-44-.02-79.47 15.14-120.44 32.68Z" fill="#FD0"/>
 <path d="m78.69 386.13.79.74.52.31c-.4-.4-.84-.75-1.31-1.05Z" fill="#0D0C22"/>
 <path d="m879.57 341.85-7.04-35.5c-6.31-31.85-20.65-61.94-53.34-73.45-10.48-3.69-22.37-5.27-30.4-12.89-8.04-7.62-10.41-19.46-12.27-30.44-3.44-20.15-6.68-40.31-10.2-60.43-3.05-17.29-5.46-36.72-13.4-52.58-10.32-21.3-31.74-33.76-53.04-42a305.5 305.5 0 0 0-33.36-10.32C613.3 10.19 557.34 5.04 502.59 2.09a1376.27 1376.27 0 0 0-197.17 3.27c-48.8 4.44-100.2 9.8-146.56 26.69-16.95 6.17-34.42 13.59-47.3 26.68-15.82 16.1-20.98 40.97-9.43 61.04 8.2 14.24 22.1 24.3 36.86 30.97a298.95 298.95 0 0 0 59.84 19.47c57.3 12.67 116.64 17.64 175.18 19.76 64.88 2.62 129.86.5 194.43-6.35a1107 1107 0 0 0 47.82-6.32c18.74-2.87 30.76-27.37 25.24-44.44-6.6-20.4-24.37-28.32-44.45-25.24-2.95.46-5.9.9-8.86 1.32l-2.13.31a1083.06 1083.06 0 0 1-62.67 6.13 1401.5 1401.5 0 0 1-95.03 3.27c-31.14 0-62.3-.88-93.38-2.93-14.18-.93-28.32-2.1-42.43-3.54-6.42-.67-12.82-1.38-19.22-2.17l-6.09-.78-1.32-.18-6.32-.92a665.35 665.35 0 0 1-38.58-6.88 5.8 5.8 0 0 1 0-11.32h.25a626.13 626.13 0 0 1 33.4-6.13l11.21-1.72h.1c7-.46 14.05-1.72 21.01-2.54 60.63-6.31 121.62-8.46 182.55-6.44 29.57.86 59.14 2.6 88.58 5.6 6.33.65 12.63 1.34 18.92 2.11 2.41.3 4.84.64 7.26.93l4.9.7a678.06 678.06 0 0 1 42.5 7.73c20.9 4.54 47.72 6.02 57.01 28.9 2.96 7.27 4.3 15.34 5.94 22.96l2.08 9.72a153589.1 153589.1 0 0 0 14.9 69.36 12.6 12.6 0 0 1-10.6 15.13h-.13l-3.02.4-2.97.4a1829.3 1829.3 0 0 1-84.26 8.95 2005.84 2005.84 0 0 1-168.49 6.78 1975.74 1975.74 0 0 1-225.99-13.14c-8.12-.97-16.24-2-24.36-3.05 6.3.8-4.58-.62-6.78-.93-5.16-.72-10.32-1.47-15.49-2.25-17.32-2.6-34.55-5.8-51.84-8.6-20.9-3.45-40.9-1.73-59.8 8.6a87 87 0 0 0-36.02 37.34c-8.16 16.86-10.58 35.22-14.23 53.33C4 342.2-1.68 361.7.47 380.3c4.63 40.14 32.7 72.76 73.06 80.06a2071.67 2071.67 0 0 0 114.44 17.2 2114.8 2114.8 0 0 0 489.99 2.83 25.81 25.81 0 0 1 28.5 28.29l-3.83 37.13-23.09 225.07a178840.62 178840.62 0 0 1-31.12 302.87c-2.2 21.84-2.52 44.36-6.66 65.94-6.54 33.93-29.51 54.77-63.03 62.39a439.17 439.17 0 0 1-93.57 10.94c-34.91.19-69.8-1.36-104.72-1.17-37.27.21-82.92-3.23-111.68-30.97-25.28-24.36-28.77-62.51-32.22-95.5-4.58-43.67-9.13-87.33-13.64-130.99l-25.3-242.76-16.36-157.08c-.27-2.6-.55-5.16-.8-7.78-1.97-18.74-15.23-37.08-36.14-36.13-17.9.79-38.23 16-36.13 36.13l12.13 116.45 25.08 240.9c7.15 68.42 14.28 136.85 21.4 205.3 1.37 13.11 2.66 26.26 4.1 39.37 7.87 71.65 62.59 110.26 130.34 121.13 39.58 6.37 80.12 7.68 120.28 8.33 51.48.83 103.48 2.81 154.12-6.52 75.03-13.77 131.33-63.87 139.37-141.59l6.88-67.33c7.63-74.24 15.25-148.49 22.85-222.74l24.88-242.6 11.4-111.2a25.8 25.8 0 0 1 20.8-22.7c21.45-4.17 41.96-11.31 57.22-27.64 24.3-26 29.13-59.9 20.55-94.07ZM72.43 365.83c.33-.15-.28 2.65-.53 3.96-.05-1.98.05-3.73.53-3.96Zm2.08 16.11c.17-.12.69.57 1.22 1.4-.8-.76-1.32-1.33-1.24-1.4h.02Zm2.05 2.7c.74 1.26 1.14 2.05 0 0Zm4.11 3.34h.1c0 .12.2.24.26.36a2.67 2.67 0 0 0-.38-.36h.02Zm720.13-5c-7.71 7.34-19.33 10.75-30.8 12.45-128.7 19.1-259.29 28.77-389.4 24.5-93.12-3.18-185.26-13.52-277.46-26.55-9.03-1.27-18.82-2.92-25.03-9.58-11.7-12.56-5.96-37.86-2.91-53.03 2.79-13.9 8.12-32.44 24.66-34.41 25.8-3.03 55.78 7.86 81.32 11.73 30.74 4.7 61.6 8.45 92.56 11.27 132.19 12.04 266.59 10.17 398.18-7.45 23.99-3.22 47.88-6.97 71.7-11.24 21.22-3.8 44.74-10.94 57.55 11.03 8.8 14.97 9.97 35 8.6 51.92a28.94 28.94 0 0 1-9 19.37h.03Z" fill="#fff"/>
 </svg>`;

let toggleIcon =
  svgHdr + "<line x1='4' y1='6' x2='20' y2='6' /><line x1='4' y1='12' x2='20' y2='12' /><line x1='4' y1='18'x2='20' y2='18' />" + svgFooter;

// let lightIcon =
//   svgHdr +
//   "<circle cx='12' cy='12' r='4' /><path d='M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7' />" +
//   svgFooter;

// let darkIcon = svgHdr + "<path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z' />" + svgFooter;

let lightIcon =
  "<svg xmlns='http://www.w3.org/2000/svg' width='1.75em' height='1.75em' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='4' /><path d='M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7' /></svg>";

let darkIcon =
  "<svg xmlns='http://www.w3.org/2000/svg' width='1.75em' height='1.75em' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z' /></svg>";

xlsxFile("../../../OneDrive/Translation/Periodic Table others.xlsm").then((rows) => {
  let languages = [
    { lang: "en", name: "English", col: 3, punc: "dot", regular: "NotoSans", bcp: "en-US", code: "1" },
    { lang: "en-gb", name: "English (UK)", col: 40, punc: "dot", regular: "NotoSans", bcp: "en-GB", code: "45" },
    { lang: "af", name: "Afrikaans", col: 44, punc: "comma", regular: "NotoSans", bcp: "af-ZA", code: "60" },
    { lang: "id", name: "Bahasa Indonesia", col: 21, punc: "comma", regular: "NotoSans", bcp: "id-ID", code: "54" },
    { lang: "ms", name: "Bahasa Melayu", col: 41, punc: "dot", regular: "NotoSans", bcp: "ms-MY", code: "55" },

    { lang: "ca", name: "Català", col: 25, punc: "comma", regular: "NotoSans", bcp: "ca-ES", code: "23" },
    { lang: "cs", name: "Čeština", col: 24, punc: "comma", regular: "NotoSans", bcp: "cs-CZ", code: "13" },
    { lang: "da", name: "Dansk", col: 33, punc: "comma", regular: "NotoSans", bcp: "da-DK", code: "27" },
    { lang: "de", name: "Deutsch", col: 12, punc: "comma", regular: "NotoSans", bcp: "de-DE", code: "6" },
    { lang: "es", name: "Español", col: 4, punc: "comma", regular: "NotoSans", bcp: "es-ES", code: "79" },
    
    { lang: "fr", name: "Français", col: 5, punc: "comma", regular: "NotoSans", bcp: "fr-FR", code: "5" },
    { lang: "hr", name: "Hrvatski", col: 39, punc: "comma", regular: "NotoSans", bcp: "hr-HR", code: "22" },
    { lang: "it", name: "Italiano", col: 8, punc: "comma", regular: "NotoSans", bcp: "it-IT", code: "10" },
    { lang: "hu", name: "Magyar", col: 11, punc: "comma", regular: "NotoSans", bcp: "hu-HU", code: "21" },
    { lang: "nl", name: "Nederlands", col: 7, punc: "comma", regular: "NotoSans", bcp: "nl-NL", code: "12" },
    
    // { lang: "nb-no", name: "Norsk Bokmål", col: 27, punc: "comma", regular: "NotoSans", bcp: "nb-NO", code: "77" },
    // { lang: "nn-no", name: "Norsk Nynorsk", col: 38, punc: "comma", regular: "NotoSans", bcp: "nn-NO", code: "15" },
    // { lang: "pl", name: "Polski", col: 30, punc: "comma", regular: "NotoSans", bcp: "pl-PL", code: "16" },
    // { lang: "pt", name: "Português", col: 18, punc: "comma", regular: "NotoSans", bcp: "pt-PT", code: "563" },
    // { lang: "ro", name: "Română", col: 17, punc: "comma", regular: "NotoSans", bcp: "ro-RO", code: "19" },

    // { lang: "sk", name: "Slovenčina", col: 13, punc: "comma", regular: "NotoSans", bcp: "sk-SK", code: "34" },
    // { lang: "sl", name: "Slovenščina", col: 37, punc: "comma", regular: "NotoSans", bcp: "sl-SI", code: "659" },
    // { lang: "fi", name: "Suomi", col: 19, punc: "comma", regular: "NotoSans", bcp: "fi-FI", code: "18" },
    // { lang: "sv", name: "Svenska", col: 32, punc: "comma", regular: "NotoSans", bcp: "sv-SE", code: "17" },
    // { lang: "vi", name: "Tiếng Việt", col: 15, punc: "comma", regular: "NotoSans", bcp: "vi-VN", code: "50" },
    
    // { lang: "tr", name: "Türkçe", col: 22, punc: "comma", regular: "NotoSans", bcp: "tr-TR", code: "14" },
    // { lang: "uz", name: "Oʻzbek", col: 46, punc: "comma", regular: "NotoSans", bcp: "uz-UZ", code: "213" },
    // { lang: "eo", name: "Esperanto", col: 47, punc: "comma", regular: "NotoSans", bcp: "eo", code: "24" },
    // { lang: "el", name: "Ελληνικά", col: 35, punc: "comma", regular: "NotoSans", bcp: "el-GR", code: "20" },
    // { lang: "bg", name: "Български", col: 20, puncncu: "comma", regular: "NotoSans", bcp: "bg-BG", code: "576" },

    // { lang: "mk", name: "Македонски", col: 43, punc: "comma", regular: "NotoSans", bcp: "mk-MK", code: "644" },
    // { lang: "ru", name: "Русский", col: 9, punc: "comma", regular: "NotoSans", bcp: "ru-RU", code: "11" },
    // { lang: "sr", name: "Српски", col: 26, punc: "comma", regular: "NotoSans", bcp: "sr-Cyrl-CS", code: "462" },
    // { lang: "uk", name: "Українська", col: 14, punc: "comma", regular: "NotoSans", bcp: "uk-UA", code: "36" },
    // { lang: "hy", name: "Հայերեն", col: 42, punc: "comma", regular: "NotoSansArmenian-Regular", bcp: "hy-AM", code: "62" },

    // { lang: "he", name: "עברית", col: 36, punc: "dot", regular: "NotoSansHebrew-Regular", bcp: "he-IL", code: "42" },
    // { lang: "ar", name: "العربية", col: 31, punc: "dot", regular: "NotoSansKufiArabic-Regular", bcp: "ar-SA", code: "28" },
    // { lang: "fa", name: "فارسی", col: 16, punc: "dot", regular: "NotoSansKufiArabic-Regular", bcp: "fa-IR", code: "29" },
    // { lang: "hi", name: "हिंदी", col: 29, punc: "dot", regular: "NotoSansDevanagari-Regular", bcp: "hi-IN", code: "587" },
    // { lang: "th", name: "ไทย", col: 34, punc: "dot", regular: "NotoSansThai-Regular", bcp: "th-TH", code: "56" },
    
    // { lang: "ja", name: "日本語", col: 23, punc: "dot", regular: "NotoSansJP-Regular", bcp: "ja-JP", code: "4" },
    // { lang: "ko", name: "한국어", col: 10, punc: "dot", regular: "NotoSansKR-Regular", bcp: "ko-KR", code: "9" },
    // { lang: "zh-cn", name: "中文(简体)", col: 6, punc: "dot", regular: "NotoSansSC-Regular", bcp: "zh-CN", code: "3" },
    // { lang: "zh-tw", name: "中文(繁體)", col: 28, punc: "dot", regular: "NotoSansTC-Regular", bcp: "zh-TW", code: "2" },
    // { lang: "ta", name: "தமிழ்", col: 45, punc: "dot", regular: "NotoSansTamil-Regular", bcp: "ta-IN", code: "505" },
  ];

  let languagesForSelect = [
    { lang: "en", name: "English", col: 3, punc: "dot", regular: "NotoSans", code: "1" },
    { lang: "en-gb", name: "English (UK)", col: 40, punc: "dot", regular: "NotoSans", code: "45" },
    { lang: "af", name: "Afrikaans", col: 44, punc: "comma", regular: "NotoSans", code: "60" },
    { lang: "id", name: "Bahasa Indonesia", col: 21, punc: "comma", regular: "NotoSans", code: "54" },
    { lang: "ms", name: "Bahasa Melayu", col: 41, punc: "dot", regular: "NotoSans", code: "55" },
    { lang: "ca", name: "Català", col: 25, punc: "comma", regular: "NotoSans", code: "23" },
    { lang: "cs", name: "Čeština", col: 24, punc: "comma", regular: "NotoSans", code: "13" },
    { lang: "da", name: "Dansk", col: 33, punc: "comma", regular: "NotoSans", code: "27" },
    { lang: "de", name: "Deutsch", col: 12, punc: "comma", regular: "NotoSans", code: "6" },
    { lang: "es", name: "Español", col: 4, punc: "comma", regular: "NotoSans", code: "79" },
    { lang: "eo", name: "Esperanto", col: 47, punc: "comma", regular: "NotoSans", code: "24" },
    { lang: "fr", name: "Français", col: 5, punc: "comma", regular: "NotoSans", code: "5" },
    { lang: "hr", name: "Hrvatski", col: 39, punc: "comma", regular: "NotoSans", code: "22" },
    { lang: "it", name: "Italiano", col: 8, punc: "comma", regular: "NotoSans", code: "10" },
    { lang: "hu", name: "Magyar", col: 11, punc: "comma", regular: "NotoSans", code: "21" },
    { lang: "nl", name: "Nederlands", col: 7, punc: "comma", regular: "NotoSans", code: "12" },
    { lang: "nb-no", name: "Norsk Bokmål", col: 27, punc: "comma", regular: "NotoSans", code: "77" },
    { lang: "nn-no", name: "Norsk Nynorsk", col: 38, punc: "comma", regular: "NotoSans", code: "15" },
    { lang: "pl", name: "Polski", col: 30, punc: "comma", regular: "NotoSans", code: "16" },
    { lang: "pt", name: "Português", col: 18, punc: "comma", regular: "NotoSans", code: "563" },
    { lang: "ro", name: "Română", col: 17, punc: "comma", regular: "NotoSans", code: "19" },
    { lang: "sk", name: "Slovenčina", col: 13, punc: "comma", regular: "NotoSans", code: "34" },
    { lang: "sl", name: "Slovenščina", col: 37, punc: "comma", regular: "NotoSans", code: "659" },
    { lang: "fi", name: "Suomi", col: 19, punc: "comma", regular: "NotoSans", code: "18" },
    { lang: "sv", name: "Svenska", col: 32, punc: "comma", regular: "NotoSans", code: "17" },
    { lang: "vi", name: "Tiếng Việt", col: 15, punc: "comma", regular: "NotoSans", code: "50" },
    { lang: "tr", name: "Türkçe", col: 22, punc: "comma", regular: "NotoSans", code: "14" },
    { lang: "el", name: "Ελληνικά", col: 35, punc: "comma", regular: "NotoSans", code: "20" },
    { lang: "bg", name: "Български", col: 20, punc: "comma", regular: "NotoSans", code: "576" },
    { lang: "mk", name: "Македонски", col: 43, punc: "comma", regular: "NotoSans", code: "644" },
    { lang: "ru", name: "Русский", col: 9, punc: "comma", regular: "NotoSans", code: "11" },
    { lang: "sr", name: "Српски", col: 26, punc: "comma", regular: "NotoSans", code: "462" },
    { lang: "uz", name: "Oʻzbek", col: 46, punc: "comma", regular: "NotoSans", code: "213" },
    { lang: "hy", name: "Հայերեն", col: 42, punc: "comma", regular: "NotoSansArmenian-Regular", code: "62" },
    { lang: "uk", name: "Українська", col: 14, punc: "comma", regular: "NotoSans", code: "36" },
    { lang: "he", name: "עברית", col: 36, punc: "dot", regular: "NotoSansHebrew-Regular", code: "42" },
    { lang: "ar", name: "العربية", col: 31, punc: "dot", regular: "NotoSansKufiArabic-Regular", code: "28" },
    { lang: "fa", name: "فارسی", col: 16, punc: "dot", regular: "NotoSansKufiArabic-Regular", code: "29" },
    { lang: "ta", name: "தமிழ்", col: 45, punc: "dot", regular: "NotoSansTamil-Regular", code: "505" },
    { lang: "hi", name: "हिंदी", col: 29, punc: "dot", regular: "NotoSansDevanagari-Regular", code: "587" },
    { lang: "th", name: "ไทย", col: 34, punc: "dot", regular: "NotoSansThai-Regular", code: "56" },
    { lang: "ja", name: "日本語", col: 23, punc: "dot", regular: "NotoSansJP-Regular", code: "4" },
    { lang: "ko", name: "한국어", col: 10, punc: "dot", regular: "NotoSansKR-Regular", code: "9" },
    { lang: "zh-cn", name: "中文(简体)", col: 6, punc: "dot", regular: "NotoSansSC-Regular", code: "3" },
    { lang: "zh-tw", name: "中文(繁體)", col: 28, punc: "dot", regular: "NotoSansTC-Regular", code: "2" },
  ];

  languages.forEach((language) => {
    let langValues = printObject(language.col); // es
    let lang = language.lang;

    var cssDir = lang + "/css";
    var jsDir = lang + "/js";
    var fontDir = lang + "/fonts";

    if (!fs.existsSync(lang)) fs.mkdirSync(lang);

    if (!fs.existsSync(cssDir)) fs.mkdirSync(cssDir);
    if (!fs.existsSync(jsDir)) fs.mkdirSync(jsDir);
    if (!fs.existsSync(fontDir)) fs.mkdirSync(fontDir);

    // fs.access(lang + "/fonts/" + language.regular + ".woff2", (err) => {
    //   if (err) {
    //     fs.copyFile("fonts3/" + language.regular + ".woff2", lang + "/fonts/" + language.regular + ".woff2", (err) => {
    //       if (err) throw err;
    //     });
    //   }
    // });

    fs.copyFile("global.css", lang + "/css/global2.css", (err) => {
      if (err) throw err;
    });

    fs.copyFile("htmlJS.js", lang + "/js/htmlJS.js", (err) => {
      if (err) throw err;
    });

    // fs.copyFile("pwabuilder-sw.js", lang + "/pwabuilder-sw.js", (err) => {
    //   if (err) throw err;
    // });

    // fs.copyFile("favicon-32x32.png", lang + "/favicon-32x32.png", (err) => {
    //   if (err) throw err;
    // });

    // fs.copyFile("favicon-16x16.png", lang + "/favicon-16x16.png", (err) => {
    //   if (err) throw err;
    // });

    // fsextra
    //   .copy("images2", lang + "/images")
    //   .then(() => console.log("Files copied successfully!"))
    //   .catch((err) => console.error(err));

    function printObject(col) {
      let o = {};
      for (let j = 1; j < rows.length; j++) {
        o[rows[j][2]] = rows[j][col] === "" || !rows[j][col] ? rows[j][3] : rows[j][col];
      }

      return o;
    }
    let pages = [
      { page: "manifest", keywords: "manifest", title: "manifest" },
      { page: "robots", keywords: "robots", title: "robots" },
      { page: "sitemap", keywords: "sitemap", title: "sitemap" },
      { page: "404", keywords: "404", title: "Page Not Found" },
      { page: "about", keywords: langValues.about, title: langValues.about },
      { page: "index", keywords: langValues.homeHeader, title: langValues.homeHeader },
      { page: "privacy-policy", keywords: langValues.privacy, title: langValues.privacy },
      { page: "store", keywords: langValues.store + ", tees", title: langValues.store },
      { page: "printables", keywords: langValues.printables + ", poster, flash cards", title: langValues.printables },
      { page: "list", keywords: langValues.list, title: langValues.list },
      { page: "element", keywords: "element", title: langValues.helium },
      { page: "compare", keywords: langValues.compare + ", comparison", title: langValues.compare },
      { page: "credits", keywords: langValues.credits + ", translators, " + langValues.translation, title: langValues.credits },
      { page: "translation", keywords: langValues.translation + ", translators", title: langValues.translation },
      { page: "solubility-chart", keywords: langValues.solubilityChart, title: langValues.solubilityChart },
      { page: "reactivity-series", keywords: langValues.reactivitySeries, title: langValues.reactivitySeries },
    ];

    let defaultHead = [
      "<!DOCTYPE html>",
      "<html lang='" +
        lang +
        "' class='normalFont' data-direction='" +
        (lang === "ar" || lang === "fa" || lang === "he" ? "rtl" : "ltr") +
        "' data-theme='dark' data-style='1'>",
      "<head>",
      "<meta charset='utf-8'/>",
      "<meta http-equiv='X-UA-Compatible' content='IE=edge'/>",
      "<meta name='viewport' content='width=device-width,initial-scale=1'/>",
      "<link rel='apple-touch-icon' sizes='180x180' href='images/icons/apple-touch-icon.png'/>",
      "<link rel='icon' type='image/png' sizes='32x32' href='./favicon-32x32.png'/>",
      "<link rel='icon' type='image/png' sizes='16x16' href='./favicon-16x16.png'/>",
      "<link rel='manifest' href='manifest.json'/>",
      "<link rel='mask-icon' href='safari-pinned-tab.svg' color='#0078d7'/>",

      "<meta name='msapplication-TileColor' content='#0078d7'/>",
      "<meta name='msapplication-TileImage' content='images/icons/mstile-144x144.png'/>",
      "<meta name='msapplication-square70x70logo' content='images/icons/mstile-70x70.png'/>",
      "<meta name='msapplication-square150x150logo' content='images/icons/mstile-150x150.png'/>",
      "<meta name='msapplication-wide310x150logo' content='images/icons/mstile-310x150.png'/>",
      "<meta name='msapplication-square310x310logo' content='images/icons/mstile-310x310.png'/>",
      "<meta name='theme-color' content='#003c6c'/>",
      "<meta name='google' content='notranslate'/>",
      "<meta name='robots' content='index,follow'/>",
      "<meta name='format-detection' content='telephone=no'/>",
      "<meta name='mobile-web-app-capable' content='yes'/>",
      "<meta name='apple-mobile-web-app-capable' content='yes'/>",
      "<meta name='author' content='Naveen CS'/>",
      "<meta name='twitter:card' content='summary_large_image'/>",
      "<meta name='twitter:site' content='@MrNaveenCS'/>",
      "<meta property='og:site_name' content='Periodic-Table.io'/>",
      "<meta property='og:type' content='website'/>",
      "<script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2799761399763923' crossorigin='anonymous'></script>"
    ];

    let colorList = [
      { id: "color1", value: "253, 58, 74", title: "Red" },
      { id: "color2", value: "245, 128, 37", title: "Orange" },
      { id: "color3", value: "255, 167, 0", title: "Yellow" },
      { id: "color4", value: "123, 113, 81", title: "Brown" },
      { id: "color5", value: "91, 170, 9", title: "Lime" },
      { id: "color6", value: "26, 152, 90", title: "Green" },
      { id: "color7", value: "59, 168, 221", title: "Cyan" },
      { id: "color8", value: "0, 120, 215", title: "Blue" },
      { id: "color9", value: "139, 102, 204", title: "Purple" },
      { id: "color10", value: "228, 27, 144", title: "Pink" },
    ];

    let nav1 = [
      "<div id='overlap' class='collapsed' onclick='sideBar()'></div>",
      "<section id='sidebar' class='collapsed'>",
      "<div class='settingsGrid items-center'>",
      "<div class='grayText'>" + langValues.language + "</div>",
      "<div>",
      "<select id='languageSelectSetting' class='select-css' aria-label='" + langValues.language + "' onchange='setLanguage()'>",
    ];

    let langNav = [];

    languagesForSelect.forEach((langVal) => {
      langNav.push("<option value='" + langVal.lang + "'>" + langVal.name + "</option>");
    });

    let nav2 = [
      "</select>",
      "</div>",
      "<div class='grayText self-start'>" + langValues.temperature + "</div>",
      "<div class='radio-toolbar radio-temp'>",
      "<input type='radio' id='tempcelsius' name='temperature' value='celsius' onchange='setTemp()' />",
      "<label class='disable-select' for='tempcelsius'>" +
        langValues.tempCelsius +
        "</label><input type='radio' id='tempfahrenheit' name='temperature' value='fahrenheit' onchange='setTemp()' />",
      "<label class='disable-select' for='tempfahrenheit'>" + langValues.tempFahrenheit + "</label>",
      "</div>",
      "<div class='grayText self-start'>" + langValues.labelColorMain + "</div>",
      "<div class='radio-toolbar radio-color'>",
    ];

    let colorNav = [];
    colorList.forEach((color) => {
      colorNav.push(
        `<input type='radio' id='${color.id}' name='tableColor' value='${color.value}' onchange='setColorSettings()'><label id='${color.id}Label' class='disable-select' title='${color.title}' for='${color.id}'></label>`
      );
    });

    let nav3 = [
      "</div>",
      "<div id='settingPeriodicTable' class='span-2'>" + langValues.homeHeader + "</div>",
      "<div class='grayText'>" + langValues.tableWidth + "</div>",
      "<div>",
      "<select id='marginSetting' class='select-css' aria-label='" + langValues.tableWidth + "'>",
      "<option value='1'>100%</option>",
      "<option value='0.95'>95%</option>",
      "<option value='0.9'>90%</option>",
      "<option value='0.85'>85%</option>",
      "<option value='0.8'>80%</option>",
      "</select>",
      "</div>",
      "<div id='nameSettingLabel' class='grayText'>" + langValues.labelName + "</div>",
      "<div>",
      "<label class='switch'>",
      "<input id='nameSelectSetting' type='checkbox' aria-labelledby='nameSettingLabel'>",
      "<span class='slider round' ></span>",
      "</label>",
      "</div>",
      "<div id='atmWtSettingLabel' class='grayText'>" + langValues.labelAtmWtMain + "</div>",
      "<div>",
      "<label class='switch'>",
      "<input id='atmNoSelectSetting' type='checkbox' aria-labelledby='atmWtSettingLabel'>",
      "<span class='slider round' ></span>",
      "</label>",
      "</div>",
      "<div class='grayText self-start' id='tableStyle'>" + langValues.style + "</div>",
      "<div class='radio-toolbar radio-style'>",
      "<input type='radio' id='style1' name='tableStyle' value='1' onchange='setStyle()' >",
      "<label id='style1Label' class='disable-select' for='style1'></label>",
      "<input type='radio' id='style2' name='tableStyle' value='2' onchange='setStyle()' >",
      "<label id='style2Label' class='disable-select' for='style2'></label>",
      "<input type='radio' id='style3' name='tableStyle' value='3' onchange='setStyle()' >",
      "<label id='style3Label' class='disable-select' for='style3'></label>",
      "</div>",
      "</div>",
      "</section><nav>",
      "<a id='logo' href='.' aria-label='Home'>",
      logoIcon,
      "</a>",
    ];

    let nav4 = [
      "<input type='checkbox' id='drop' />",
      "<ul>",
      "<li>",
      "<a title=" + langValues.list + " href='list'>",
      listIcon + "<span id='listLink'>" + langValues.list + "</span></a>",
      "</li>",
      "<li>",
      "<a title=" + langValues.compare + " href='compare'>" + compareIcon + "<span id='compareLink'>" + langValues.compare + "</span></a>",
      "</li>",
      "<li>",
      "<label for='drop-1' class='toggle'>",
      tablesIcon +
        "<span>" +
        langValues.tables +
        "</span>" +
        " <svg xmlns='http://www.w3.org/2000/svg' width='1.2em' height='1.2em' viewBox='5 5 15 15' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9' /></svg></label>",
      "<a id='tablesLink'>",
      tablesIcon +
        "<span>" +
        langValues.tables +
        "</span>" +
        " <svg xmlns='http://www.w3.org/2000/svg' width='1.2em' height='1.2em' viewBox='5 5 15 15' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9' /></svg></a>",
      "<input type='checkbox' id='drop-1' />",
      "<ul>",
      "<li><a class='tablesList' href='solubility-chart'>" + langValues.solubilityChart + "</a></li>",
      "<li><a class='tablesList' href='reactivity-series'>" + langValues.reactivitySeries + "</a></li>",
      "</ul>",
      "</li>",
      "<li>",
      "<a title=" + langValues.printables + " href='printables'>",
      printablesIcon + "<span id='printableLink'>" + langValues.printables + "</span></a>",
      "</li>",
      "<li>",
      "<a title=" + langValues.store + " href='store'>",
      storeIcon + "<span id='storeLink'>" + langValues.store + "</span></a>",
      "</li>",
      "<li>",
      "<a title=" + langValues.translation + " href='translation'>",
      translationIcon + "<span id='translateLink'>" + langValues.translation + "</span></a>",
      "</li>",
      "</ul>",
      "<a target='_blank' href='https://www.buymeacoffee.com/naveencs' rel='noopener noreferrer' class='px-4 flex' id='coffeeIcon'>",
      coffeeIcon,
      "</a>",
      "<button onclick='sideBar()' title='" + langValues.settings + "'>",
      settingsIcon + "</button>",
      "<button id='themeIcon' onclick='changeTheme()' data-theme='light' title='" + langValues.theme + "'>",
      lightIcon + "</button>",
      "<label for='drop' onclick='toggleMenu()' class='toggle burger'>" + toggleIcon + "</label>",
      "</nav>",
    ];

    let defaultNav = nav1.concat(langNav).concat(nav2).concat(colorNav).concat(nav3);

    let defaultFooter = [
      "<section class='footer grayText'>",
      "<div class='flex flex-wrap justify-center pt-2'>",
      "<a target='_blank' href='https://feedback.periodic-table.io/' rel='noopener noreferrer' class='m-1 px-4 py-2'>",
      langValues.suggestions,
      "</a>",
      "<a href='translation' class='m-1 px-4 py-2'>" + langValues.translate + "</a>",
      "<a href='about' class='m-1 px-4 py-2'>" + langValues.about + "</a>",
      "<a href='credits' class='m-1 px-4 py-2'>" + langValues.credits + "</a>",
      "<a href='privacy-policy' class='m-1 px-4 py-2'>" + langValues.privacy + "</a>",
      "</div>",
      "<div class='flex flex-wrap justify-center pt-2 py-4'>",
      "<a target='_blank' href='https://github.com/catchspider2002/periodic-table.io' rel='noopener noreferrer' class='flex m-1 p-2' title='Github'>",
      "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 512 512' stroke='currentColor' fill='currentColor'>",
      "<path d='M256 6.178c-141 0-256 115-256 256 0 113 73 209 175 243 13 3 18-5 18-12 0-6-1-26-1-48-71 16-86-30-86-30-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 40 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-68 0 0 21-6 70 27 20-6 42-9 64-9s44 3 64 9c49-33 70-27 70-27 14 36 6 62 3 68 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48 0 34-1 61-1 70 0 7 5 15 18 12 102-34 175-130 175-243 0-141-115-256-256-256z' />",
      "</svg>",
      "</a>",
      "<a target='_blank' href='https://www.instagram.com/periodictableio/' rel='noopener noreferrer' class='flex m-1 p-2' title='Instagram'>",
      "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 512 512' stroke='currentColor' fill='currentColor'>",
      "<path d='M466 256c0-68 0-77-2-103-1-25-5-39-8-48-5-12-11-20-20-29s-17-15-29-20c-9-3-23-7-47-8-27-2-36-2-104-2s-76 0-103 2c-25 1-39 5-48 8-12 5-20 11-29 20s-15 17-19 29c-4 9-8 23-9 47-1 27-2 36-2 104s1 76 2 103c1 25 5 39 9 48 4 12 10 20 19 29s17 15 29 19c9 4 23 8 48 9 27 1 35 2 103 2s77-1 103-2c25-1 39-5 48-9 12-4 20-10 29-19s15-17 20-29c3-9 7-23 8-48 2-27 2-35 2-103zm46 0c0 69 0 78-2 105-1 28-5 46-11 63-7 16-16 31-30 45s-29 23-45 30c-17 6-35 10-62 11-28 2-37 2-106 2-70 0-78 0-106-2-27-1-45-5-62-11-17-7-31-16-45-30s-23-29-30-45c-6-17-10-35-11-62-2-28-2-36-2-106 0-69 0-78 2-105 1-28 5-46 11-63 7-16 16-31 30-45s28-23 45-29c17-7 35-11 62-12 28-1 36-2 106-2 69 0 78 1 105 2 28 1 46 5 62 12 17 6 32 15 46 29s23 28 29 45c7 17 11 35 12 62 2 28 2 36 2 106zm-125 0c0 73-58 131-131 131s-132-58-132-131 59-132 132-132 131 59 131 132zm-216 0c0 47 38 85 85 85s85-38 85-85-38-85-85-85-85 38-85 85zM393 89c-17 0-31 13-31 30s14 31 31 31 30-14 30-31-13-30-30-30z' />",
      "</svg>",
      "</a>",
      "</div>",
      `<div class='flex place-content-center'><a href="https://www.buymeacoffee.com/naveencs" class="bmcCta mx-auto" rel="noopener noreferrer" target="_blank" title="Buy me a coffee">
      <div class="flex items-center" style="background-color:#FF813F;padding:.65rem 1rem;border-radius:.75rem;">
      <svg viewBox="0 0 67.64 97.92" xmlns="http://www.w3.org/2000/svg" fill="none" style="height:42px">
      <path d="M36.18 45.23c-3.52 1.5-7.51 3.23-12.7 3.23a24 24 0 0 1-6.4-.89l3.59 36.74a6.14 6.14 0 0 0 6.12 5.63s5.07.26 6.76.26c1.83 0 7.29-.26 7.29-.26a6.14 6.14 0 0 0 6.12-5.63l3.83-40.6a16.3 16.3 0 0 0-5.4-.97c-3.36 0-6.08 1.16-9.21 2.5z" fill="#ffc800"/>
      <path d="m67.34 26.17-.54-2.72c-.48-2.43-1.58-4.74-4.08-5.62-.8-.28-1.72-.4-2.33-.99-.62-.58-.8-1.49-.94-2.33l-.78-4.62c-.23-1.33-.42-2.8-1.03-4.03-.8-1.63-2.43-2.58-4.06-3.2-.83-.33-1.7-.59-2.55-.8C46.95.77 42.67.38 38.48.15c-5.03-.28-10.08-.2-15.1.25-3.73.34-7.67.75-11.22 2.04A9.5 9.5 0 0 0 8.54 4.5a3.92 3.92 0 0 0-.72 4.67 6.05 6.05 0 0 0 2.82 2.37c1.47.66 3 1.16 4.58 1.5 4.39.96 8.93 1.34 13.4 1.5 4.98.2 9.96.04 14.9-.48 1.22-.14 2.44-.3 3.66-.49 1.44-.22 2.36-2.1 1.93-3.4-.5-1.56-1.86-2.17-3.4-1.93l-.68.1-.16.02a95.5 95.5 0 0 1-4.8.47 107.24 107.24 0 0 1-19.14-.4l-.47-.07h-.1l-.48-.08a50.9 50.9 0 0 1-2.96-.53.44.44 0 0 1 0-.87h.02a47.95 47.95 0 0 1 3.42-.6c.54-.03 1.08-.13 1.6-.2a102.3 102.3 0 0 1 22.2.1l.57.08.38.05c1.09.16 2.17.36 3.25.6 1.6.34 3.66.45 4.37 2.2.22.56.33 1.18.45 1.76l.16.75v.04l1.14 5.27a.95.95 0 0 1-.15.75.97.97 0 0 1-.66.4h-.01l-.23.04-.23.03a128.48 128.48 0 0 1-6.45.68 149.64 149.64 0 0 1-12.9.52 151.25 151.25 0 0 1-19.17-1.24l-.51-.07-1.2-.17c-1.32-.2-2.63-.45-3.96-.66a6.9 6.9 0 0 0-4.58.66 6.66 6.66 0 0 0-2.76 2.86c-.62 1.3-.8 2.7-1.08 4.08-.28 1.4-.72 2.88-.55 4.3a6.87 6.87 0 0 0 5.59 6.13 161.9 161.9 0 0 0 46.27 1.53 1.98 1.98 0 0 1 2.19 2.17l-.3 2.85a1089465 1089465 0 0 1-4.15 40.42c-.17 1.67-.2 3.4-.5 5.04-.5 2.6-2.27 4.2-4.83 4.78-2.35.54-4.76.82-7.17.84-2.67.01-5.34-.1-8.01-.1-2.86.02-6.35-.24-8.55-2.36-1.94-1.87-2.2-4.79-2.47-7.3l-1.04-10.04-1.94-18.59-1.25-12.02-.07-.6c-.15-1.43-1.16-2.84-2.76-2.77-1.37.06-2.93 1.23-2.77 2.77l.93 8.92 1.92 18.44 1.64 15.72.3 3.01c.6 5.5 4.8 8.44 9.99 9.27 3.03.5 6.14.6 9.2.64 3.95.06 7.93.22 11.8-.5 5.75-1.05 10.06-4.89 10.68-10.84l.53-5.15 1.75-17.05 1.9-18.58.87-8.5a1.98 1.98 0 0 1 1.6-1.75c1.64-.32 3.2-.87 4.38-2.12 1.86-1.99 2.23-4.58 1.57-7.2zm-61.8 1.84c.03 0-.02.2-.04.3 0-.15 0-.28.05-.3zm.16 1.23c.02 0 .06.04.1.1zm.16.2c.06.1.09.16 0 0zm.32.26.02.03a.21.21 0 0 0-.03-.03zm55.13-.38c-.6.56-1.48.82-2.36.95a166.3 166.3 0 0 1-29.81 1.9A200.69 200.69 0 0 1 7.9 30.12c-.7-.1-1.44-.23-1.92-.74-.9-.96-.46-2.9-.22-4.06.2-1.06.62-2.48 1.88-2.63 1.98-.23 4.28.6 6.23.9a136.85 136.85 0 0 0 37.57.3c1.84-.26 3.67-.54 5.5-.87 1.62-.3 3.42-.84 4.4.84.67 1.15.76 2.68.66 3.98a2.2 2.2 0 0 1-.7 1.48z" fill="#0d0c22">
      </path></svg> 
      <span class="coffee text-xl">Buy me a coffee</span></div></a></div>`,
      "<div class='flex flex-wrap justify-center p-2 pb-8 self-center'>Made with&nbsp; <span style='color:#e25555'>❤</span> &nbsp;by <a target='_blank' href='https://twitter.com/MrNaveenCS/' rel='noopener noreferrer'>",
      "<span class='linkText'>Naveen CS</span>",
      "</a></div>",
      "</section>",
      "<!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{\"token\": \"667af63b5e7d4de992a251a834464e5d\"}'></script><!-- End Cloudflare Web Analytics -->",
      "</body></html>",
    ];

    pages.forEach((pageValue) => {
      let keywords =
        `${pageValue.keywords}, ${langValues.homeHeader}, chemical, ${langValues.elements}, interactive, PWA, ${langValues.properties}, ${langValues.uses}` +
        `, ${langValues.hist}, ${langValues.isotopes}, ${langValues.labelConfigMain}, ${langValues.labelElectronsMain}, name origin, images, hazards, diagram, chemistry, information`;
      let description = langValues.desc1 + "; " + langValues.desc2 + ".";

      let website = "https://periodic-table.io";
      if (lang !== "en") website = "https://" + lang + ".periodic-table.io";

      let title = pageValue.title + " - " + langValues.homeHeader;
      let page = pageValue.page;
      let link = website + "/" + pageValue.page;
      if (pageValue.page === "index") link = website + "/";

      // let image = website + "/images/icons/android-chrome-256x256.png";
      let image = "https://periodic-table.io/images/og-images/" + lang + "/" + pageValue.page + ".png";

      let metaTags1 = [
        "<meta name='keywords' content='" + keywords + "' />",
        "<meta name='description' content='" + description + "' />",
        "<meta property='og:description' content='" + description + "' />",
        "<meta name='twitter:description' content='" + description + "' />",
        "<meta property='og:title' content='" + title + "' />",
        "<meta name='twitter:title' content='" + title + "' />",
        "<title id='homeTitle'>" + title + "</title>",
        "<meta property='og:image' content='" + image + "' />",
        "<meta name='twitter:image' content='" + image + "' />",
        "<meta name='twitter:image:src' content='" + image + "' />",
        "<meta property='og:url' content='" + link + "' />",
        "<link rel='canonical' href='" + link + "' />",
      ];

      let metaAlternate = [];

      languagesForSelect.forEach((langVal) => {
        if (langVal.lang === "en") {
          if (pageValue.page === "index") metaAlternate.push("<link rel='alternate' hreflang='en' href='https://periodic-table.io/'/>");
          else metaAlternate.push("<link rel='alternate' hreflang='en' href='https://periodic-table.io/" + pageValue.page + "'/>");
        } else {
          if (pageValue.page === "index")
            metaAlternate.push("<link rel='alternate' hreflang='" + langVal.lang + "' href='https://" + langVal.lang + ".periodic-table.io/'/>");
          else
            metaAlternate.push(
              "<link rel='alternate' hreflang='" + langVal.lang + "' href='https://" + langVal.lang + ".periodic-table.io/" + pageValue.page + "'/>"
            );
        }
      });

      let metaTags2 = ["<link rel='stylesheet' href='css/global2.css' />", "<script defer src='js/htmlJS.js'></script>"];

      let metaTagsFonts = [
        "<link rel='preload' href='fonts/" + language.regular + ".woff2' as='font' crossorigin='anonymous' />",
        "<link rel='preload' href='fonts/NotoSans.woff2' as='font' crossorigin='anonymous' />",
      ];

      if (language.regular === "NotoSans") metaTagsFonts = ["<link rel='preload' href='fonts/NotoSans.woff2' as='font' crossorigin='anonymous' />"];

      let metaTags3 = [
        "<style>@font-face {font-family: SpecialRegular; src: url(fonts/" + language.regular + ".woff2) format('woff2'); font-display: swap;}",
        "@font-face {font-family: Regular;src: url(fonts/NotoSans.woff2) format('woff2'); font-display: swap;}",
        "</style>",
        "<script type='module'>",
        "import 'https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate';",
        "const el = document.createElement('pwa-update');",
        "document.body.appendChild(el);",
        "</script>",
        "</head><body>",
      ];

      let metaTags = metaTags1.concat(metaAlternate).concat(metaTags2).concat(metaTagsFonts).concat(metaTags3);

      switch (page) {
        // case "robots":
        //   htmlRobots.writeFile(lang, page);
        //   break;
        // case "manifest":
        //   htmlManifest.writeFile(lang, langValues, page);
        //   break;
        // case "sitemap":
        //   htmlSitemap.writeFile(lang, langValues, page, pages);
        //   break;
        // case "404":
        //   html404.writeFile(lang, langValues, page, defaultHead, metaTags, defaultNav, nav4, defaultFooter);
        //   break;
        // case "index":
        //   htmlIndex.writeFile(lang, langValues, page, defaultHead, metaTags, defaultNav, nav4, defaultFooter);
        //   break;
        // case "privacy-policy":
        //   htmlPrivacy.writeFile(lang, langValues, page, defaultHead, metaTags, defaultNav, nav4, defaultFooter);
        //   break;
        // case "solubility-chart":
        //   htmlSolubility.writeFile(lang, langValues, page, defaultHead, metaTags, defaultNav, nav4, defaultFooter);
        //   break;
        // case "reactivity-series":
        //   htmlReactivity.writeFile(lang, langValues, page, defaultHead, metaTags, defaultNav, nav4, defaultFooter);
        //   break;
        // case "about":
        //   htmlAbout.writeFile(lang, langValues, page, defaultHead, metaTags, defaultNav, nav4, defaultFooter);
        //   break;
        // case "store":
        //   htmlStore.writeFile(lang, langValues, page, defaultHead, metaTags, defaultNav, nav4, defaultFooter);
        //   break;
        // case "printables":
        //   htmlPrintables.writeFile(lang, langValues, page, defaultHead, metaTags, defaultNav, nav4, defaultFooter);
        //   break;
        // case "compare":
        //   htmlCompare.writeFile(lang, langValues, page, language.punc, defaultHead, metaTags, defaultNav, nav4, defaultFooter);
        //   break;
        // case "list":
        //   htmlList.writeFile(lang, langValues, page, defaultHead, metaTags, defaultNav, nav4, defaultFooter);
        //   break;
        // case "credits":
        //   htmlCredits.writeFile(lang, langValues, page, defaultHead, metaTags, defaultNav, nav4, defaultFooter);
        //   break;
        // case "translation":
        //   htmlTranslation.writeFile(lang, langValues, page, defaultHead, metaTags, defaultNav, nav4, defaultFooter);
        //   break;
        case "element":
          htmlElement.writeFile(
            lang,
            langValues,
            language.col,
            language.regular,
            language.punc,
            page,
            defaultHead,
            defaultNav,
            nav4,
            defaultFooter,
            languagesForSelect
          );
          break;
      }
    });
  });
});
