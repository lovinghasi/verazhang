function createFooterLinks(containerName, links, pageName) {
    var ul = document.createElement('ul');
    ul.className = "list-inline";
    // Featured 
    var featuredLi = document.createElement('li');
    var featuredText = document.createTextNode("Featured");
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
    emailLink.appendChild(emailText);
    emailLink.className = "black-link-underline";
    emailLink.href = "mailto:wei.vera.zhang@gmail.com?Subject=From%20www.verazhang.com";
    emailLi.appendChild(emailLink);
    ul.appendChild(emailLi);
    // Support 

    var supportLi = document.createElement('li');

    var supportText = document.createTextNode("Support me");
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