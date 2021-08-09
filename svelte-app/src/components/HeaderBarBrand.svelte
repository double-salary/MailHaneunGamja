<div class="new_navbar">
  <div class="new_dropdown">
    <button class="new_dropbtn">
      <img
        src="./resources/img/logo.png"
        alt="멜하는감자"
        style="height: 40px"
      />
      <!--이미지 경로 기준은 public 폴더-->
    </button>
  </div>

  <div class="new_dropdown">
    <button class="new_dropbtn"
      >성적
      <i class="fa fa-caret-down" />
    </button>
    <div class="new_dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>

  <div class="new_dropdown">
    <button class="new_dropbtn"
      >수업
      <i class="fa fa-caret-down" />
    </button>
    <div class="new_dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>

  <div class="new_dropdown">
    <button class="new_dropbtn"
      >수강신청
      <i class="fa fa-caret-down" />
    </button>
    <div class="new_dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>

  <div class="new_dropdown">
    <button class="new_dropbtn"
      >기타
      <i class="fa fa-caret-down" />
    </button>
    <div class="new_dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
</div>
<div class="new_login">
  <a href="/.auth/login/google?post_login_redirect_uri=/products/"
    >로그인 / 회원가입</a
  >
</div>

<style>
  .new_navbar {
    width: 70%; /*new_navbar와 new_login 7:3으로 width 분할(화면좁아서 개행되면 width 100%로 사용)*/
    display: flex;
    justify-content: space-evenly; /*적당히 가운데 몰리게*/
    margin-top: 18px;
  }

  .new_navbar a {
    float: left;
    font-size: 16px;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  .new_dropdown {
    display: flex;
    flex-direction: column;
    justify-content: center; /*가운데정렬*/
  }

  .new_dropdown .new_dropbtn {
    font-size: 16px;
    border: none;
    outline: none;
    color: black;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
  }

  .new_dropdown-content {
    display: none;
    position: absolute;
    margin-top: 180px; /*메뉴 hover했을때 하단 메뉴가 바로 아래에 위치하게 하는 용도*/
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .new_dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  .new_dropdown-content a:hover {
    background-color: #ddd; /*뒷배경 넣어도 여기는 회색처리 해야할듯*/
  }

  .new_dropdown:hover .new_dropdown-content {
    display: block;
  }

  .new_login {
    width: 30%; /*new_navbar와 new_login 7:3으로 width 분할(화면좁아서 개행되면 100%로 사용)*/
    margin-top: 18px;
    display: flex;
    justify-content: center; /*가운데정렬*/
  }

  .new_login a {
    font-size: 16px;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center; /*가운데정렬*/
  }

  /*new_navbar와 new_login 화면좁아서 개행되면 width 100%로 사용)*/
  @media screen and (max-width: 1024px) {
    .new_login {
      width: 100%;
    }
    .new_navbar {
      width: 100%;
    }
  }
</style>
