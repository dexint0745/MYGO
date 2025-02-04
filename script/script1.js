var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img");
var close_img = true;
var img
document.body.onclick = function (event) {
  img = event.target.id;
  if (close_img == false) { //點擊關閉放大圖片
    modal.style.display = "none";
    document.body.style.overflow = 'visible';
    close_img = true;
  }
  if (img != '' && close_img == true) {  //開啟放大圖片
    img = document.getElementById(event.target.id).className;
    if (img == "card-img-top" && window.innerWidth > 995) {
      modal.style.display = "block";
      modalImg.src = event.target.src;
      document.body.style.overflow = 'hidden';
      close_img = false;
    }
  }
}

function copy(img_url_id) {  //複製圖片/網址
  var img_url = document.getElementById(img_url_id).src;
  navigator.clipboard.writeText(img_url)
  /*if (navigator.clipboard) {
    const imgpaint = new Image;
    const c = document.createElement('canvas');
    const ctx = c.getContext('2d');
    var img_copy_src = document.getElementById(img_url_id).src;
    function setCanvasImage(img_copy, func) {
      imgpaint.onload = function () {
        c.width = this.naturalWidth;
        c.height = this.naturalHeight;
        ctx.drawImage(this, 0, 0)
        c.toBlob(blob => {
          func(blob)
        }, 'image/png')
      }
      imgpaint.crossOrigin = 'anonymous';
      imgpaint.src = img_copy;
    }
    setCanvasImage(img_copy_src, (imgBlob) => {
      navigator.clipboard.write(
        [
          new ClipboardItem({ 'image/png': imgBlob })
        ]
      )
        .then(e => { alert('Image copied to clipboard') })
        .catch(e => { alert(e) })
    })
  } else {
    
  }*/
}

function download_img(download_img_id) {  //下載圖片
  let cvs = document.createElement('canvas'),
    ctx = cvs.getContext('2d');
  let img = document.createElement('img');
  var download_img_url = document.getElementById(download_img_id).src;
  img.onload = () => {
    cvs.width = img.width;
    cvs.height = img.height;
    ctx.drawImage(img, 0, 0);
    var url = cvs.toDataURL();
    var a = document.createElement('a');
    a.href = url;
    a.download = 'MygoMujica_' + download_img_id + '.jpg';
    a.click();
  };
  img.crossOrigin = 'anonymous';
  img.src = download_img_url;
}

var navbar_toggler = document.querySelector(".navbar-toggler");
function cancel(button_select_id) { //選擇特定角色button
  var all_img = document.querySelectorAll(".all_img");
  var apppint_img = document.querySelectorAll(button_select_id);
  var i
  if (button_select_id == "顯示全部") {
    for (i = 0; i < all_img.length; i++) {
      all_img[i].style.display = "block";
    }
  } else {
    for (i = 0; i < all_img.length; i++) {
      all_img[i].style.display = "none";
    }
    for (i = 0; i < apppint_img.length; i++) {
      apppint_img[i].style.display = "block";
    }
  }
  if (document.body.offsetWidth < 995) {
    navbar_toggler.click();
    modal.style.display = "none";
  }
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function search() { //搜尋圖片
  var search_text = document.getElementById('search_text');
  var all_img = document.querySelectorAll('.all_img');
  var i
  for (i = 0; i < all_img.length; i++) {
    if (all_img[i].title.includes(search_text.value)) {
      all_img[i].style.display = "block";
    }
    else {
      all_img[i].style.display = "none";
    }
  }
  search_text.value = '';
  if (document.body.offsetWidth < 995) {
    navbar_toggler.click();
    modal.style.display = "none";
  }
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

const input = document.querySelector('input'); //按enter搜尋
input.addEventListener('keydown', function (event) {
  var search_text = document.getElementById('search_text');
  var all_img = document.querySelectorAll('.all_img');
  var i
  if (event.key == "Enter") {
    console.log(event.key)
    for (i = 0; i < all_img.length; i++) {
      if (all_img[i].title.includes(search_text.value)) {
        all_img[i].style.display = "block";
      }
      else {
        all_img[i].style.display = "none";
      }
    }
    search_text.value = '';
    if (document.body.offsetWidth < 995) {
      navbar_toggler.click();
      modal.style.display = "none";
    }
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
});

var navbar_button = document.querySelectorAll('.navbar_button');//新增navbar_button class
window.onresize = function () {
  if (window.innerWidth < 995) {
    for (var i = 0; i < navbar_button.length; i++) {
      navbar_button[i].classList.add('btn-lg')
    }
  }
  else {
    for (var i = 0; i < navbar_button.length; i++) {
      navbar_button[i].classList.remove('btn-lg')
    }
  }
}
var navbar_toggler_click_bool = true
function navbar_toggler_click() { //背景點擊關閉navbar-collapse
  if (!navbar_toggler_click_bool) {
    modal.style.display = "none";
    document.body.style.overflow = 'visible';
    navbar_toggler_click_bool = true;
  }
  else {
    modal.style.display = "block";
    document.body.style.overflow = 'hidden';
    navbar_toggler_click_bool = false;
  }
}
function myModal_click() {
  if (!navbar_toggler_click_bool) {
    navbar_toggler.click();
    modal.style.display = "none";
    document.body.style.overflow = 'visible';
    navbar_toggler_click_bool = true;
  }
}
