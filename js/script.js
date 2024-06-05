const lang_menu = document.querySelector('.language-list');
const lang_btn = document.querySelector('.language-btn');
const lang_txt = document.querySelectorAll('.lang .txt a');

const title1_1 = document.querySelector('.lang_1');
const title1_2 = document.querySelector('.lang_1_2');
const title2 = document.querySelector('.lang_2');
const title3 = document.querySelector('.lang_3');
const title4 = document.querySelector('.lang_4');
const title5 = document.querySelector('.lang_5');
const title6 = document.querySelector('.lang_6');
const title7 = document.querySelector('.lang_7');
const title1_frame = document.querySelector('.sec_1 .second_title .title');

const menu_btn = document.querySelector('.header .list-span');
const menu_list = document.querySelector('.list-wrap');

// scroll
let currentY = 0;
window.addEventListener('scroll', () => {
  const $body = document.querySelector('body');
  const sec_2 = document.querySelector('.sec_2');
  const sec_3 = document.querySelector('.sec_3');
  const sec2Offset = sec_2.offsetTop - 500; // offset == sec의 시작 위치
  const sec3Offset = sec_3.offsetTop - 500; // offset == sec의 시작 위치
  const scrollTop = window.scrollY;

  // header
  const header = document.querySelector('header');
  if (scrollTop > currentY) { // header 올라감
    header.classList.add('active');
    menu_list.classList.remove('clicked');
    menu_btn.classList.remove('clicked');
    lang_menu.classList.remove('active');
  } else {
    header.classList.remove('active');
    menu_list.classList.remove('clicked');
    menu_btn.classList.remove('clicked');
    lang_menu.classList.remove('active');
  }
  currentY = scrollTop;

  // sec_2 background bg
  if (scrollTop > sec2Offset && scrollTop < sec3Offset) {
    $body.classList.add('bg');
  } else {
    $body.classList.remove('bg');
  }

  // 스크롤 내리면 나타남
  if (scrollTop > 200) {
    top_btn.classList.add('active');    
    lang_btn.classList.add('active');    
  } else {
    top_btn.classList.remove('active');    
    lang_btn.classList.remove('active');    
  }
})
// top-btn
const top_btn = document.querySelector('.top-btn');
top_btn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

// language-btn
lang_btn.addEventListener('click', function() {
  lang_menu.classList.toggle('active');
});


function changeLanguage(language) { // textContent 삽입
  switch(language) {
    case 'ko' :
      console.log(1)
      title1_frame.style.width = ''
      title1_1.textContent = '우리는 전세계 사람들이 우리의 서비스를 통해'
      title1_2.textContent = '쉽게 멋진 컨텐츠를 제작할 수 있도록 돕습니다.'
      title2.textContent = '전세계 1억 명 이상이 사용하는 최고의 사진/영상 편집 앱'
      title3.innerHTML = `쉽고 빠른 영상 전문 편집 앱 <br> 영상편집에 필요한 모든 기능을 제공합니다.`
      title4.textContent = '포토그래퍼들에게 사랑받는 전문 사진 편집 앱'
      title5.textContent = '주소 서울시 구로구 디지털로드33길 12 우림E비즈니스센터 2차 4층'
      title6.textContent = '이메일 contact@jellybus.com'
      title7.textContent = 'JellyBus 앱 다운로드'
      break;
      case 'en' :
        console.log(2)
      title1_frame.style.width = ''
      title1_1.textContent = 'We help people around the world'
      title1_2.textContent = 'easily create great content through our services.'
      title2.textContent = 'The best photo/video editing app used by over 100 million people around the world'
      title3.textContent = 'Easy and fast professional video editing app. It provides all the functions necessary for video editing'
      title4.textContent = 'Professional photo editing app loved by photographers'
      title5.textContent = 'Address 4F, Woorim E-Biz Center II, 12, Digital-ro 33-gil, Guro-gu, Seoul, Korea'
      title6.textContent = 'E-mail contact@jellybus.com'
      title7.textContent = 'JellyBus App Download'
      break;
      case 'jp' :
        console.log(3)
        // title1_frame.style.width = '708px'
        title1_1.textContent = '当社のサービスを通じて、'
        title1_2.textContent = '世界中の人々が簡単に素晴らしいコンテンツを作成できるようお手伝いします。'
        title2.textContent = '世界中で1億人以上が使用する最高の写真/ビデオ編集アプリ'
        title3.textContent = '簡単で高速なプロ仕様のビデオ編集アプリ。ビデオ編集に必要なすべての機能を備えています。'
        title4.textContent = '写真家に愛されるプロの写真編集アプリ'
        title5.textContent = '住所 韓国ソウル特別市九老区デジタルロード33ギル12、ウーリムEビジネスセンターII 4階'
        title6.textContent = 'Eメール contact@jellybus.com'
        title7.textContent = 'JellyBus アプリのダウンロード'
      break;
  }
}
lang_txt.forEach(value => { // data-language
  value.addEventListener('click', function() {
    if (!lang_menu.classList.contains('active')) return;
    value.classList.add('checked');
    lang_txt.forEach(siblings => {
      if (this !== siblings) {
        siblings.classList.remove('checked');
      }
    })

    const language = value.getAttribute('data-language');
    changeLanguage(language);  
  });
});

// aos
AOS.init();

// hamburger 
menu_btn.addEventListener('click', function() {
  this.classList.toggle('clicked');
  if (this.classList.value.includes('clicked')) {
    menu_list.classList.add('clicked')
  } else {
    menu_list.classList.remove('clicked')
  }
})