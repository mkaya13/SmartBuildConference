const toggleButton = document.querySelector('.toggle-button');
const mainPageLogo = document.querySelector('.main-page-logo');
const navbarContent = document.querySelector('.navbar-content');
const mainPageCampaign = document.querySelector('.main-page-campaign');
const mainPageHeight = document.querySelector('.main-page');
const aboutMoreButton = document.querySelector('.speakers-button');
const aboutBox = document.querySelectorAll('.speaker-content');
const aboutBoxHidden = document.querySelectorAll('.box-hidden');
const speakerAboutText = document.querySelectorAll('.speaker-desktop-main');

let speakerTitle;
let speakerArrow;

const speakersObject = [
  {
    img: 'img/speaker-1.png',
    fullName: 'Vitalik Buterin',
    major: 'Co-founder of Ethereum',
    content:
      'Vitalik is going to summarize the ethereum merge, pros and possible cons. ',
  },
  {
    img: 'img/speaker-2.png',
    fullName: 'Patrick Collins',
    major: 'Founder of Alpha Blockchain, Chainlink Developer Expert',
    content:
      'Patrick will summarize the evaluation of microservices. Finally he will present the services the ChainLink offers.',
  },
  {
    img: 'img/speaker-3.png',
    fullName: 'Kain Warwick',
    major: 'Founder of Synthetix',
    content:
      'Kain is aiming to talk about DeFi and concepts of Stable coins, Margin-Trading, Flash Loans and many more.',
  },
  {
    img: 'img/speaker-4.png',
    fullName: 'Anatoly Yakovenko',
    major: 'Founder of Solana',
    content:
      'Anatoly is going to mention about the security and effectiveness measurements of the De-cent Blockchain Solana',
  },
  {
    img: 'img/speaker-5.png',
    fullName: 'Ben Golub',
    major: 'Executive Chairman in Storj, Interim CEO',
    content:
      'Storj is aiming to present data analytics in blockchain environment which is a fairly new concept in blockchain environment',
  },
  {
    img: 'img/speaker-6.png',
    fullName: 'Brian Armstrong',
    major: 'Coinbase Founder and CEO',
    content:
      'Brian is going to talk about the features of Coinbase and the newest feature of the Coinbase Blockchain which is Smart Contracts.',
  },
];

for (let i = 0; i < aboutBox.length; i += 1) {
  aboutBox[i].innerHTML = `
  <div class="speaker-item-1"><img class="speaker-img" src=${speakersObject[i].img}></div>
    <div class="speaker-item-2">
    <h2 class="speaker-name">${speakersObject[i].fullName}</h2>
    <h3 class="speaker-major">${speakersObject[i].major}</h3>
    <p class="speaker-paragraph">${speakersObject[i].content}</p>
  </div>`;
}

for (let i = 0; i < speakerAboutText.length; i += 1) {
  speakerAboutText[i].innerHTML = `
  <div class="speaker-item-1"><img class="speaker-img" src=${speakersObject[i].img}></div>
  <div class="speaker-about-text">
      <h2 class="speaker-name">${speakersObject[i].fullName}</h2>
      <h3 class="speaker-major">${speakersObject[i].major}</h3>
      <hr class="speaker-hr">
      <p class="speaker-paragraph">
        ${speakersObject[i].content}
      </p>
  </div>`;
}

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  navbarContent.classList.toggle('active');
  mainPageLogo.classList.toggle('active');
  mainPageCampaign.classList.toggle('active');
  console.log(mainPageHeight.style);
  mainPageHeight.classList.toggle('active');
});

if (aboutMoreButton !== null) {
  aboutMoreButton.addEventListener('click', () => {
    speakerTitle = document.querySelector('.speaker-title');
    speakerArrow = document.querySelector('.span-bottom-arrow');

    for (let i = 0; i < aboutBoxHidden.length; i += 1) {
      aboutBoxHidden[i].classList.toggle('active');
    }

    if (speakerTitle.innerText === 'MORE') {
      speakerTitle.innerText = 'LESS';
      speakerArrow.innerHTML = '<span class="top-arrow"></span>';
    } else {
      speakerTitle.innerText = 'MORE';
      speakerArrow.innerHTML = '<span class="bottom-arrow"></span>';
    }
  });
}
