// 1. Select the anchor tag
const links = document.querySelectorAll("a");

// 2. Use getAttribute(attrName) to check the attribute
console.log(links[0].getAttribute("href"));

// 3. Select a-two & set "href" attribute
links[1].setAttribute("href", "https://github.com/lucsasl");