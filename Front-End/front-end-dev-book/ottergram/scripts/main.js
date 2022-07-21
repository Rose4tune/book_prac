var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_KEY = 27;

// 상세 이미지와 제목 변경하는 함수
function setDetails(imageUrl, titleText) {
  'use strict';

  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

// 섬네일 엘리먼트 참조자를 인자로 받고, 이미지 경로 반환
function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

// 섬네일 엘리먼트 참조자를 인자로 받고, 제목 반환
function titleFromThumbnail(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

// 3개의 함수 함께 가져옴
function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumbnail(thumbnail));
  // setDetails( // 이미지-제목 변경 함수 실행
  //   imageFromThumb(thumbnail), // para imageUrl 값 = 이미지 경로 반환 함수로 지정
  //   titleFromThumbnail(thumbnail) // para titleText 값 = 제목 반환 함수  지정
  // );
}

// 각 섬네일의 이벤트 리스너 추가
function addThumbClickHandler(thumb) {
  thumb.addEventListener('click', function (event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
    showDetails();
  });
}


// 모든 엘리먼트 결과 값을 변수에 할당
function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR); //Nodelist 반환
  var thumbnailArray = [].slice.call(thumbnails); //배열로 변환
  return thumbnailArray;
}

// 이미지 숨기기 함수 설정
function hiddenDetails() {
  'use strict';
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

// 이미지 다시 보이기
function showDetails() {
  'use strict';
  var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function() {
    frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50);
}

// 이미지 숨기기 키 입력 이벤트 감지
function addKeyPressHandler() {
  'use strict';
  document.body.addEventListener('keyup', function(event) {
    event.preventDefault();
    console.log(event.keyCode);
    if (event.keyCode === ESC_KEY) {
      hiddenDetails();
    }
  });
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  addKeyPressHandler();
}

initializeEvents();
