//left button
function nextPicture_right() {
    let AllPictures = document.images;
    let safePic0 = document.images[0];

    for (let i = 0; i < AllPictures.length; i++) {
        document.images[0].src = document.images[1].src;
        document.images[1].src = document.images[2].src;
        document.images[2].src = document.images[3].src;
        document.images[3].src = document.images[4].src;
        document.images[4].src = safePic0.src;
    }
  }
  nextPicture_right();

//left button
  function nextPicture_left() {
    let AllPictures = document.images;
    let safePic4 = document.images[4];

    for (let i = 0; i < AllPictures.length; i++) {
        document.images[4].src = document.images[3].src;
        document.images[3].src = document.images[2].src;
        document.images[2].src = document.images[1].src;
        document.images[1].src = document.images[0].src;
        document.images[0].src = safePic4.src;
    }
  }
  nextPicture_left();