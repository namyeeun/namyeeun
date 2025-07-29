$(document).ready(function () {
  //nav
  $("nav a").on("click", function (e) {
    const targetId = $(this).attr("href");
    if (targetId === "index.html") {
      return;
    }
    e.preventDefault();
    const targetOffset = $(targetId).offset().top;

    $("html,body").animate({ scrollTop: targetOffset }, 0);
  });

  //tab
  let contents = document.getElementsByClassName("contents")[0];
  let tabHeader = contents.getElementsByClassName("tab-header")[0];
  let tabBody = contents.getElementsByClassName("tab-body")[0];
  let tabsPane = tabHeader.getElementsByTagName("div");

  for (let i = 0; i < tabsPane.length; i++) {
    tabsPane[i].addEventListener("click", function () {
      tabHeader.getElementsByClassName("active")[0].classList.remove("active");
      tabsPane[i].classList.add("active");
      tabBody.getElementsByClassName("active")[0].classList.remove("active");
      tabBody.getElementsByTagName("div")[i].classList.add("active");

      let imgSrc = "";
      switch (i) {
        case 0:
          imgSrc = "images/hansol.png";
          break;
        case 1:
          imgSrc = "images/lg.png";
          break;
        case 2:
          imgSrc = "images/hansol_kids.png";
          break;
        case 3:
          imgSrc = "images/asiana.png";
          break;
        case 4:
          imgSrc = "images/kwangdong.png";
          break;
      }

      $("#monitorImg").attr("src", imgSrc);
    });
  }

  $("#monitorImg").on("click", function () {
    let activeIndex = $(".tab-header > div").index(
      $(".tab-header > div.active")
    );

    // let urls = [
    //   "https://www.hansolhomedeco.com/",
    //   "https://www.lgcare.com/",
    //   "https://www.hansolkids.org/",
    //   "https://flyasiana.com/",
    //   "https://www.ekdp.com/",
    // ];
    window.open(urls[activeIndex], "_blank");
  });
}); //ready
