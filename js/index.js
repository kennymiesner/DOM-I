const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Task 2

// Add all nav link content
const navLinks = document.querySelectorAll('nav a')
navLinks[0].textContent = siteContent["nav"]["nav-item-1"]
navLinks[1].textContent = siteContent["nav"]["nav-item-2"]
navLinks[2].textContent = siteContent["nav"]["nav-item-3"]
navLinks[3].textContent = siteContent["nav"]["nav-item-4"]
navLinks[4].textContent = siteContent["nav"]["nav-item-5"]
navLinks[5].textContent = siteContent["nav"]["nav-item-6"]

// Add h1 content
const ctaTitle = document.querySelector('.cta-text h1')
ctaTitle.textContent = siteContent["cta"]["h1"]

// Add button content
const ctaButton = ctaTitle.nextElementSibling
ctaButton.textContent = siteContent["cta"]["button"]

// Add main logo
const logo = document.getElementById("logo-img")
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Add CTA image
const ctaImg = document.getElementById("cta-img")
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

// Add top section content
const topContent01 = document.querySelector(".top-content .text-content:nth-of-type(1)")
const topContent01title = topContent01.querySelector('h4')
const topContent01content = topContent01.querySelector('p')
const topContent02 = document.querySelector(".top-content .text-content:nth-of-type(2)")
const topContent02title = topContent02.querySelector('h4')
const topContent02content = topContent02.querySelector('p')

topContent01title.textContent = siteContent["main-content"]["features-h4"]
topContent01content.textContent = siteContent["main-content"]["features-content"]
topContent02title.textContent = siteContent["main-content"]["about-h4"]
topContent02content.textContent = siteContent["main-content"]["about-content"]

// Add middle image
const middleImg = document.getElementById("middle-img")
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Add bottom section content
const bottomContent01 = document.querySelector(".bottom-content .text-content:nth-of-type(1)")
const bottomContent01title = bottomContent01.querySelector('h4')
const bottomContent01content = bottomContent01.querySelector('p')
const bottomContent02 = document.querySelector(".bottom-content .text-content:nth-of-type(2)")
const bottomContent02title = bottomContent02.querySelector('h4')
const bottomContent02content = bottomContent02.querySelector('p')
const bottomContent03 = document.querySelector(".bottom-content .text-content:nth-of-type(3)")
const bottomContent03title = bottomContent03.querySelector('h4')
const bottomContent03content = bottomContent03.querySelector('p')

bottomContent01title.textContent = siteContent["main-content"]["services-h4"]
bottomContent01content.textContent = siteContent["main-content"]["services-content"]
bottomContent02title.textContent = siteContent["main-content"]["product-h4"]
bottomContent02content.textContent = siteContent["main-content"]["product-content"]
bottomContent03title.textContent = siteContent["main-content"]["vision-h4"]
bottomContent03content.textContent = siteContent["main-content"]["vision-content"]