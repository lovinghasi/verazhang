function changeLanguage(language) {
   if (language == '中文') {
      localStorage.setItem('verazhang.com?language=','中文');
   } else {
      localStorage.setItem('verazhang.com?language=','English');
   }
   location.reload();
}

function createHeaderContents(containerName, pageTitle) {
    var buttonDiv = document.createElement('div');
    buttonDiv.style = "padding-right: 10px;";
    buttonDiv.align = "right";
    // create a English button
    var buttonEnglish = document.createElement('button');
    buttonEnglish.type = "button";
    buttonEnglish.style = "display: inline-block;";
    buttonEnglish.onclick = function () {
       changeLanguage('English'); 
    }
    var buttonEnglishText = document.createTextNode('English');
    buttonEnglish.appendChild(buttonEnglishText);
    buttonDiv.appendChild(buttonEnglish);
    // create a Chinese button
    var buttonChinese = document.createElement('button');
    buttonChinese.type = "button";
    buttonChinese.style = "display: inline-block;";
    buttonChinese.onclick = function () {
       changeLanguage('中文');
    }
    var buttonChineseText = document.createTextNode('中文');
    buttonChinese.appendChild(buttonChineseText);
    buttonDiv.appendChild(buttonChinese);
    document.getElementById(containerName).appendChild(buttonDiv);
    var title = document.createElement('h1');
    title.align = "center";
    var language = localStorage.getItem('verazhang.com?language=');
    var titleText = document.createTextNode(pageTitle[language]);
    title.appendChild(titleText);
    document.getElementById(containerName).appendChild(title);
}
function createFooterLinks(containerName, links, pageName) {
    var ul = document.createElement('ul');
    ul.className = "list-inline";
    var language = localStorage.getItem('verazhang.com?language=');
    // Featured 
    var featuredLi = document.createElement('li');
    var featuredText = document.createTextNode("Featured");
    if (language == "中文") {
        featuredText = document.createTextNode("主打作品");
    }
    if (pageName == "Featured") {
        featuredLi.appendChild(featuredText);
    } else {
        var featuredLink = document.createElement('a');

        featuredLink.appendChild(featuredText);
        featuredLink.className = "black-link-underline";
        featuredLink.href = links['featured'];
        featuredLi.appendChild(featuredLink);
    }
    ul.appendChild(featuredLi);
    // Art 
    var artLi = document.createElement('li');
    var artText = document.createTextNode("Art works");
    if (language == "中文") {
        artText = document.createTextNode("艺术作品");
    }
    if (pageName == "Art works") {
        artLi.appendChild(artText);
    } else {
        var artLink = document.createElement('a');
        artLink.appendChild(artText);
        artLink.className = "black-link-underline";
        artLink.href = links['artworks'];
        artLi.appendChild(artLink);
    }
    ul.appendChild(artLi);
    // Blog 
    var blogLi = document.createElement('li');
    var blogText = document.createTextNode("Blog");
    if (language == "中文") {
        blogText = document.createTextNode("博客");
    }
    if (pageName == "Blog") {
        blogLi.appendChild(blogText);
    } else {
        var blogLink = document.createElement('a');
        blogLink.appendChild(blogText);
        blogLink.className = "black-link-underline";
        blogLink.href = links['blog'];
        blogLi.appendChild(blogLink);
    }
    ul.appendChild(blogLi);
    // About me
    var aboutMeLi = document.createElement('li');
    var aboutMeText = document.createTextNode("About me");
    if (language == "中文") {
        aboutMeText = document.createTextNode("关于我");
    }
    if (pageName == "About me") {
        aboutMeLi.appendChild(aboutMeText);
    } else {
        var aboutMeLink = document.createElement('a');
        aboutMeLink.appendChild(aboutMeText);
        aboutMeLink.className = "black-link-underline";
        aboutMeLink.href = links['aboutme'];
        aboutMeLi.appendChild(aboutMeLink);
    }
    ul.appendChild(aboutMeLi);
    // Instagram
    if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
        var instaLi = document.createElement('li');
        var instaLink = document.createElement('a');
        var instaText = document.createTextNode("Instagram");
        instaLink.appendChild(instaText);
        instaLink.className = "black-link-underline";
        instaLink.href = "instagram://user?username=vera_z";
        instaLi.appendChild(instaLink);
        ul.appendChild(instaLi);
    } else {
        var instaLi = document.createElement('li');
        var instaLink = document.createElement('a');
        var instaText = document.createTextNode("Instagram");
        instaLink.appendChild(instaText);
        instaLink.className = "black-link-underline";
        instaLink.href = "http://www.instagram.com/vera_z/";
        instaLi.appendChild(instaLink);
        ul.appendChild(instaLi);
    }
    // Email 
    var emailLi = document.createElement('li');
    var emailLink = document.createElement('a');
    var emailText = document.createTextNode("Email");
    if (language == "中文") {
        emailText = document.createTextNode("邮件");
    }
    emailLink.appendChild(emailText);
    emailLink.className = "black-link-underline";
    emailLink.href = "mailto:wei.vera.zhang@gmail.com?Subject=From%20www.verazhang.com";
    emailLi.appendChild(emailLink);
    ul.appendChild(emailLi);
    // Support 
    var supportLi = document.createElement('li');
    var supportText = document.createTextNode("Support me");
    if (language == "中文") {
        supportText = document.createTextNode("支持我");
    }
    if (pageName == "Support") {
        supportLi.appendChild(supportText);
    } else {
        var supportLink = document.createElement('a');
        supportLink.appendChild(supportText);
        supportLink.className = "black-link-underline";
        supportLink.href = links['supportme'];
        supportLi.appendChild(supportLink);

    }
    ul.appendChild(supportLi);
    document.getElementById(containerName).appendChild(ul);
}