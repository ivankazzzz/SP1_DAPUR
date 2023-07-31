const fs = require("fs");

const writeFile = (lang, langValues, page, defaultHead, metaTags, defaultNav, nav4, defaultFooter) => {
  let writeStream = fs.createWriteStream(lang + "/" + page + ".html");

  defaultHead.forEach((heads) => {
    writeStream.write(heads);
  });

  metaTags.forEach((tags) => {
    writeStream.write(tags);
  });

  defaultNav.forEach((navs) => {
    writeStream.write(navs);
  });

  writeStream.write("<h1 class='truncate'>" + langValues[page] + "</h1>");

  nav4.forEach((navs) => {
    writeStream.write(navs);
  });

  let starIcon =
    "<svg xmlns='http://www.w3.org/2000/svg' class='icon' viewBox='0 0 24 24' transform='translate(0,4)'><path d='M12 17.75L5.83 21 7 14.12 2 9.26l6.9-1L11.99 2l3.09 6.25 6.9 1-5 4.87L18.16 21z'/></svg>";
  let checkIcon =
    "<svg xmlns='http://www.w3.org/2000/svg' class='icon' viewBox='0 0 24 24' transform='translate(0,4)'><circle cx='12' cy='12' r='9'/><path d='M9 12l2 2l4 -4'/></svg>";

  writeStream.write("<div class='content-wrapper'>");
  writeStream.write("<div class='container'>");
  writeStream.write("<div class='text-upper aboutHeader text-center pb-8'>" + langValues.about + "</div>");
  writeStream.write("<div>");
  writeStream.write(langValues.line1 + " ");
  writeStream.write(langValues.line2);
  writeStream.write("<div id='features'>");
  writeStream.write(starIcon + langValues.feature1);
  writeStream.write(starIcon + langValues.feature2);
  writeStream.write(starIcon + langValues.feature3);
  writeStream.write(starIcon + langValues.feature4);
  writeStream.write(starIcon + langValues.feature5);
  writeStream.write(starIcon + langValues.feature6);
  writeStream.write(starIcon + langValues.feature7);
  writeStream.write(starIcon + langValues.feature9);
  writeStream.write("</div>");
  writeStream.write("<span class='grayText'>" + langValues.contact + ": </span>");
  writeStream.write("<a class='underlineLink' href='mailto:naveen@periodic-table.io?subject=Periodic-Table.io'>naveen@periodic-table.io</a>");
  writeStream.write("<br />");
  writeStream.write("<span class='grayText'>Github: </span>");
  writeStream.write(
    "<a class='underlineLink' href='https://github.com/catchspider2002/periodic-table.io'>https://github.com/catchspider2002/periodic-table.io</a>"
  );
  writeStream.write("</div>");
  writeStream.write("<div class='text-upper aboutHeader text-center pt-16'>" + langValues.changelog + "</div>");
  writeStream.write("<div>");
  writeStream.write("<div id='logs'>");

  writeStream.write("<div class='versionHeader'>May 25, 2023</div>");
  writeStream.write(checkIcon + "<div>Updated Afrikaans, Norwegian Bokmål, Norwegian Nynorsk, Slovenian and Portuguese translations</div>"
  );

  writeStream.write("<div class='versionHeader'>April 6, 2023</div>");
  writeStream.write(checkIcon + "<div>Updated Afrikaans, Bulgarian, Catalan, Czech, Danish, Dutch, Finnish, German, Hebrew, Japanese, Korean, Malay, Serbian, Solvenian, Swedish, Thai and Vietnamese translations</div>"
  );

  writeStream.write("<div class='versionHeader'>March 21, 2023</div>");
  writeStream.write(checkIcon + "<div>Added <a class='underlineLink' target='_blank' href='https://www.buymeacoffee.com/naveencs' rel='noopener noreferrer'>Buy Me a Coffee</a> link at the header and footer</div>");
  writeStream.write(
    checkIcon +
      "<div>Updated Czech, Esperanto, Greek, French, Vietnamese, Chinese Traditional, Indonesian, Romanian and Swedish translations</div>"
  );

  writeStream.write("<div class='versionHeader'>September 7, 2022</div>");
  writeStream.write(checkIcon + "<div>Added Esperanto and Uzbek translations</div>");
  writeStream.write(
    checkIcon +
      "<div>Updated Danish, Czech, Greek, French, Hindi, Polish, Macedonian, Ukranian, Chinese Traditional, Indonesian and Swedish translations</div>"
  );

  writeStream.write("<div class='versionHeader'>Sep 2021</div>");
  writeStream.write(checkIcon + "<div>Updated Korean, Turkish, Portuguese and French translations</div>");

  writeStream.write("<div class='versionHeader'>Aug 2021</div>");
  writeStream.write(checkIcon + "<div>Updated French, Spanish, Croatian, Hindi and Chinese (Traditional) translations</div>");

  writeStream.write("<div class='versionHeader'>Jun 2021</div>");
  writeStream.write(checkIcon + "<div>Added a new printable - Flash Cards in <a class='underlineLink' href='printables'>Printables</a> page</div>");
  writeStream.write(checkIcon + "<div>Added Tamil translation</div>");
  writeStream.write(checkIcon + "<div>Updated French translation</div>");
  writeStream.write(
    checkIcon + "<div>Updated the <a class='underlineLink' href='translation'>Translation</a> page to use links instead of images</div>"
  );

  writeStream.write("<div class='versionHeader'>May 2021</div>");
  writeStream.write(checkIcon + "<div>Added a new printable - Flash Cards in <a class='underlineLink' href='printables'>Printables</a> page</div>");
  writeStream.write(
    checkIcon +
      "<div>Included Tamil and Telugu for anyone to translate as per <a class='underlineLink' target='_blank' href='https://feedback.periodic-table.io/' rel='noopener noreferrer'>Suggestions</a> by users</div>"
  );
  writeStream.write(checkIcon + "<div>Updated external links to be opened in new tab</div>");
  writeStream.write(checkIcon + "<div>Updated Armenian, Hebrew and Chinese (Simplified) translations</div>");

  writeStream.write("<div class='versionHeader'>Apr 2021</div>");
  writeStream.write(checkIcon + "<div>Updated Spanish, Portuguese, French, Hungarian, Persian, Russian, Slovak and Polish translations</div>");
  writeStream.write(checkIcon + "<div>Fixed the broken links in the <a class='underlineLink' href='store'>Store</a> page</div>");
  writeStream.write(checkIcon + "<div>Minor corrections to the solubility table</div>");

  writeStream.write("<div class='versionHeader'>Mar 2021</div>");
  writeStream.write(checkIcon + "<div>Added Solubility Chart and Reactivity Series under Tables menu</div>");
  writeStream.write(checkIcon + "<div>Added social images to all pages to show up when the pages are shared on social media</div>");
  writeStream.write(checkIcon + "<div>Fixed the incorrect font sizes in the navigation bar</div>");
  writeStream.write(
    checkIcon +
      "<div>Updated Italian, Dutch, German, Portuguese, Polish, Croatian, Russian, Armenian, Japanese and Chinese (Simplified) translations</div>"
  );

  writeStream.write("<div class='versionHeader'>Feb 2021</div>");
  writeStream.write(
    checkIcon + "<div>Complete rewrite of the website to deploy the code faster; Individual language versions have their own subdomains;</div>"
  );
  writeStream.write(checkIcon + "<div>Added Afrikaans translation</div>");
  writeStream.write(
    checkIcon +
      "<div>Updated Norwegian Bokmal, Spanish, Vietnamese, Chinese(Simplified), Chinese(Traditional), Japanese, German, Portuguese, French and Italian translations</div>"
  );

  writeStream.write("<div class='versionHeader'>Nov 2020</div>");
  writeStream.write(checkIcon + "<div>Added Crystal Structure image to the element page</div>");
  writeStream.write(checkIcon + "<div>Added Macedonian translation</div>");
  writeStream.write(
    checkIcon + "<div>Updated Armenian, Greek, Spanish, Italian, Portuguese, Slovenian, Thai, Vietnamese and Chinese(Simplified) translations</div>"
  );
  writeStream.write("<div class='versionHeader'>Oct 2020</div>");
  writeStream.write(checkIcon + "<div>Added Armenian and Malay translations</div>");
  writeStream.write(checkIcon + "<div>Added a new printable - Flash Cards in <a class='underlineLink' href='printables'>Printables</a> page</div>");
  writeStream.write(
    checkIcon + "<div>Updated Croatian, Greek, Hebrew, Hindi, Norwegian Bokmal, Polish, Romanian, Vietnamese and Dutch translations</div>"
  );
  writeStream.write(checkIcon + "<div>Fixed the top navbar so that the navbar does not overlap the scrollbar</div>");
  writeStream.write("<div class='versionHeader'>Aug 2020</div>");
  writeStream.write(checkIcon + "<div>Updated the icons in the navbar to outline icons</div>");
  writeStream.write(checkIcon + "<div>Simplified localisation and individual languages will now be included in the url</div>");
  writeStream.write(checkIcon + "<div>Added a new printable in <a class='underlineLink' href='printables'>Printables</a> page</div>");
  writeStream.write(checkIcon + "<div>Added CAS Number and PubChem CID Number</div>");
  writeStream.write(checkIcon + "<div>Fixed electron configuration rendering issues in Edge and Chrome</div>");
  writeStream.write(
    checkIcon +
      "<div>Updated Arabic, Persian, Hindi, Italian, Indonesian, Vietnamese, German, Greek, Polish, Dutch, Slovak, Chinese (Simplified) and Chinese (Traditional) translations</div>"
  );
  writeStream.write("<div class='versionHeader'>Jul 2020</div>");
  writeStream.write(checkIcon + "<div>Added a new printable in <a class='underlineLink' href='printables'>Printables</a> page</div>");
  writeStream.write(
    checkIcon +
      "<div>Added a new page - <a class='underlineLink' href='translation'>Translation</a> where you can check the status of each language and contribute translations</div>"
  );
  writeStream.write(checkIcon + "<div>Added mass number, number of protons, electrons and neutrons</div>");
  writeStream.write(checkIcon + "<div>The line height for the Elements page is increased and the text is easily readable</div>");
  writeStream.write(checkIcon + "<div>Updated Polish, Croatian, Chinese Simplified, Croatian and Korean translation</div>");
  writeStream.write(checkIcon + "<div>Added an option in Settings to change the style of the periodic table from 3 options</div>");
  writeStream.write(checkIcon + "<div>Replaced the dropdown for temperature in Settings with a radio select</div>");
  writeStream.write(
    checkIcon + "<div>Updated the navbar header from a gradient to solid color which now matches with the window color when opened as PWA</div>"
  );
  writeStream.write("<div class='versionHeader'>Jun 2020</div>");
  writeStream.write(checkIcon + "<div>Modified the style of the element page to use more shadows and less color</div>");
  writeStream.write(checkIcon + "<div>Modified the colors of the Settings popup for both light and dark themes</div>");
  writeStream.write(checkIcon + "<div>Added Instagram page link to the footer</div>");
  writeStream.write(checkIcon + "<div>Added a new printable in <a class='underlineLink' href='printables'>Printables</a> page</div>");
  writeStream.write(
    checkIcon +
      "<div>Added <a class='underlineLink' target='_blank' href='https://feedback.periodic-table.io/' rel='noopener noreferrer'>Suggestions</a> where new suggestions or feature requests can be provided</div>"
  );
  writeStream.write(checkIcon + "<div>Fonts for Thai and Hebrew are updated</div>");
  writeStream.write(checkIcon + "<div>Reduced extra spacing on top and bottom sides of the electronic configuration</div>");
  writeStream.write(checkIcon + "<div>Updated Chinese Simplified, Croatian, Portuguese and Danish translations</div>");
  writeStream.write("<div class='versionHeader'>May 2020</div>");
  writeStream.write(checkIcon + "<div>Updated Polish, Russian, Vietnamese, Slovenian, Chinese Simplified translations</div>");
  writeStream.write(
    checkIcon +
      "<div>Added a new page - <a class='underlineLink' href='printables'>Printables</a> which provides a printable version of the periodic table which will be updated regularly</div>"
  );
  writeStream.write(
    checkIcon +
      "<div>Added a new page - <a class='underlineLink' href='credits'>Credits</a> for translations which was earlier appearing in About page</div>"
  );
  writeStream.write(checkIcon + "<div>Added icons to the navigation bar at the top</div>");
  writeStream.write(checkIcon + "<div>Added footer component on all pages which includes quick links not available in the top navigation bar</div>");
  writeStream.write(checkIcon + "<div>Updated link colors to match the theme color</div>");
  writeStream.write(checkIcon + "<div>Reduced the number of colors in Settings from 25 to 10 which matches with the periodic table colors</div>");
  writeStream.write(checkIcon + "<div>Fixed the layout bug where the 2nd and 3rd row were appearing with a huge space on iOS devices</div>");
  writeStream.write(checkIcon + "<div>Fixed scrollbar styles for all browsers</div>");
  writeStream.write(checkIcon + "<div>Added an open-source license on Github</div>");
  writeStream.write(
    checkIcon +
      "<div>Removed theme switching to enable light or dark mode from Settings and a dedicated button is available in the top navigation bar</div>"
  );
  writeStream.write(checkIcon + "<div>Replaced the existing static image of electronic configuration with an animated version</div>");
  writeStream.write(checkIcon + "<div>Please contact me at naveen@periodic-table.io if you have any suggestions or issues with the website</div>");
  writeStream.write("<div class='versionHeader'>Feb 2020</div>");
  writeStream.write(checkIcon + "<div>Modified colors at the navigation bar for better accessibility</div>");
  writeStream.write(
    checkIcon +
      "<div>Updated Persian, Croatian, Hungarian, Polish, Greek, Hebrew, Portuguese, German, Spanish, Chinese (Traditional), Russian, Thai, French, Italian, Chinese (Simplified) and Turkish translations</div>"
  );
  writeStream.write("<div class='versionHeader'>May 2019</div>");
  writeStream.write(checkIcon + "<div>Added Store page for t-shirts and other merchandise</div>");
  writeStream.write(checkIcon + "<div>Added English (UK) translation</div>");
  writeStream.write(
    checkIcon + "<div>Updated Chinese (Simplified), Portuguese, Spanish, Indonesian, Vietnamese and Chinese (Traditional) translations</div>"
  );
  writeStream.write("<div class='versionHeader'>Apr 2019</div>");
  writeStream.write(checkIcon + "<div>Updated Arabic, Italian and Croatian translations</div>");
  writeStream.write("<div class='versionHeader'>Dec 2018</div>");
  writeStream.write(checkIcon + "<div>Added Slovenian, Norwegian (Nynorsk) and Croatian translations</div>");
  writeStream.write(checkIcon + "<div>Updated Danish, Japanese and Italian translations</div>");
  writeStream.write("<div class='versionHeader'>Nov 2018</div>");
  writeStream.write(checkIcon + "<div>Added Danish, Greek, Thai and Hebrew translations</div>");
  writeStream.write(
    checkIcon + "<div>Updated Arabic, Chinese (Traditional), Chinese (Simplified), Portuguese, Catalan, German and Japanese translations</div>"
  );
  writeStream.write("<div class='versionHeader'>Jun 2018</div>");
  writeStream.write(checkIcon + "<div>Updated Russian, French and Arabic translations</div>");
  writeStream.write("<div class='versionHeader'>May 2018</div>");
  writeStream.write(
    checkIcon + "<div>Updated Persian, Czech, Italian, Dutch, Catalan, Vietnamese, Hungarian, Indonesian and Japanese translations</div>"
  );
  writeStream.write("<div class='versionHeader'>Apr 2018</div>");
  writeStream.write(checkIcon + "<div>Updated Dutch and Korean translations</div>");
  writeStream.write("<div class='versionHeader'>Mar 2018</div>");
  writeStream.write(checkIcon + "<div>Released the first version of the website with Progressive Web App (PWA) features</div>");
  writeStream.write(checkIcon + "<div>Updated the colors of the periodic table</div>");
  writeStream.write(checkIcon + "<div>Added options for wide and large tiles when website is pinned to Start on Windows 10</div>");
  writeStream.write(checkIcon + "<div>Added Hindi, Chinese (Traditional), Arabic, Polish and Swedish translations</div>");
  writeStream.write(checkIcon + "<div>Updated Japanese and Dutch translations</div>");
  writeStream.write("</div>");
  writeStream.write("</div>");
  writeStream.write("<div class='text-upper aboutHeader text-center pt-16 pb-8'>" + langValues.languages + "</div>");
  writeStream.write("<div>");
  writeStream.write("<div class='pb-8'>");
  writeStream.write(langValues.enTrans + "; " + langValues.afTrans + "; " + langValues.arTrans + "; " + langValues.bgTrans + "; ");
  writeStream.write(langValues.caTrans + "; " + langValues.csTrans + "; " + langValues.daTrans + "; " + langValues.deTrans + "; ");
  writeStream.write(langValues.elTrans + "; " + langValues.esTrans + "; " + langValues.eoTrans + "; " + langValues.faTrans + "; ");
  writeStream.write(langValues.fiTrans + "; " + langValues.frTrans + "; " + langValues.heTrans + "; " + langValues.hiTrans + "; ");
  writeStream.write(langValues.hrTrans + "; " + langValues.huTrans + "; " + langValues.hyTrans + "; " + langValues.idTrans + "; ");
  writeStream.write(langValues.itTrans + "; " + langValues.jaTrans + "; " + langValues.koTrans + "; " + langValues.mkTrans + "; ");
  writeStream.write(langValues.msTrans + "; " + langValues.nlTrans + "; " + langValues.nnTrans + "; " + langValues.plTrans + "; ");
  writeStream.write(langValues.ptTrans + "; " + langValues.roTrans + "; " + langValues.ruTrans + "; " + langValues.skTrans + "; ");
  writeStream.write(langValues.slTrans + "; " + langValues.srTrans + "; " + langValues.svTrans + "; " + langValues.taTrans + "; ");
  writeStream.write(langValues.thTrans + "; " + langValues.trTrans + "; " + langValues.ukTrans + "; " + langValues.uzTrans + "; ");
  writeStream.write(langValues.viTrans + "; " + langValues.zhTrans + "; " + langValues.chTrans + "; ");
  writeStream.write("</div>");
  writeStream.write("</div>");
  writeStream.write("</div>");
  writeStream.write("</div>");

  defaultFooter.forEach((footers) => {
    writeStream.write(footers);
  });

  // the finish event is emitted when all data has been flushed from the stream
  writeStream.on("finish", () => {
    console.log("Created " + lang + "-" + page);
  });

  // close the stream
  writeStream.end();
};

exports.writeFile = writeFile;
