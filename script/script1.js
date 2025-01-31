var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img");
var close_img = true;
var img
document.body.onclick = function (event) {
  img = event.target.id;
  if (close_img == false) { //點擊關閉放大圖片
    modal.style.display = "none";
    close_img = true;
  }
  if (img != '' && close_img == true) {  //開啟放大圖片
    img = document.getElementById(event.target.id).className;
    if (img == "card-img-top") {
      modal.style.display = "block";
      modalImg.src = event.target.src;
      close_img = false;
    }
  }
}

var span = document.getElementsByClassName("close")[0]; //右上角關閉放大圖片功能
span.onclick = function () {
  modal.style.display = "none";
}

function copy(img_url_id) { //複製圖片網址
  var img_url = document.getElementById(img_url_id).src;
  navigator.clipboard.writeText(img_url)
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
}

function search(){ //搜尋圖片
  var search_text = document.getElementById('search_text');
  var all_img = document.querySelectorAll('.all_img');
  var i
  for(i=0;i<all_img.length;i++){
    if(all_img[i].title.includes(search_text.value)){
      all_img[i].style.display = "block";
    }
    else{
      all_img[i].style.display = "none";
    }
  }
  search_text.value='';
}
