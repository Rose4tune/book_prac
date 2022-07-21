(() => {
  const carouselUl = document.querySelector(".carousel-list");
  const imageInput = document.querySelector('#image-upload-input');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  function changTransform(){
    const items = document.querySelectorAll('.carousel-item');

    items.forEach((e, i) => {
      let degree = 360/items.length;

      if(items.length > 1){
        if(i == 0){
          e.style.transform = 'rotateY(0deg) translateZ(250px)'
        } else {
          e.style.transform = `rotateY(${degree * i}deg) translateZ(250px) rotateY(-${degree * i}deg)`
        }
      }

      if(items.length >= 5){
        if(i == 0){
          e.style.transform = 'rotateY(0deg) translateZ(250px)'
        } else if(i == 1){
          e.style.transform = 'rotateY(72deg) translateZ(250px) rotateY(-72deg)'
        } else if(i == 2){
          e.style.transform = 'rotateY(144deg) translateZ(250px) rotateY(-144deg) translateX(400px)'
        } else if(i == items.length - 2){
          e.style.transform = 'rotateY(216deg) translateZ(250px) rotateY(-216deg) translateX(-400px)'
        } else if(i == items.length - 1){
          e.style.transform = 'rotateY(288deg) translateZ(250px) rotateY(-288deg)'
        } else{
          e.style.transform = `rotateY(${degree * i}deg) translateZ(250px) rotateY(-${degree * i}deg)`
        }
      }
    });
  }

  function moveNext(){
    const items = document.querySelectorAll('.carousel-item'); //배열

    if(items.length > 1){
      const currentItem = document.querySelector('.now');
      const next = currentItem.nextElementSibling;
      carouselUl.appendChild(currentItem);
      currentItem.classList.remove('now');
      next.classList.add('now');
      changTransform();
    }
  }
  function movePrev(){
    const items = document.querySelectorAll('.carousel-item');

    if(items.length > 1){
      const currentItem = document.querySelector('.now');
      const lastItem = carouselUl.lastElementChild;

      carouselUl.insertBefore(lastItem, items[0]);
      currentItem.classList.remove('now');
      lastItem.classList.add('now');
      changTransform();
    }
  }

  function createTag(url){
    const list = document.createElement('li');
    const img = document.createElement('img');
    list.classList.add('carousel-item');
    img.src = url;
    list.appendChild(img);

    const items = document.querySelectorAll('.carousel-item');
    items.forEach(items => {
      items.classList.remove('now');
    });
    list.classList.add('now');

    return list;
  }

  function uploadImg(value) {
    const items = document.querySelectorAll('.carousel-item');

    if(value.files){
      const reader = new FileReader(); //파일 읽어오기

      reader.onload = e => {
        const imgUrl = e.target.result;
        carouselUl.insertBefore(createTag(imgUrl), items[0]);
        changTransform();
      }

      reader.readAsDataURL(value.files[0]) //컨텐츠 읽기-onload event 자동 실행
    }
  }

  imageInput.addEventListener('change', e => {
    uploadImg(e.target);
  })
  nextBtn.addEventListener('click', moveNext);
  prevBtn.addEventListener('click', movePrev);

  window.onload = () => {
    changTransform();
  }
})();