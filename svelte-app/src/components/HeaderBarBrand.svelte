<script>
  import { onMount } from 'svelte';

  const providers = ['google'];
  const redirect = window.location.pathname;
  let userInfo = undefined;

  onMount(async () => (userInfo = await getUserInfo()));

  async function getUserInfo() {
    try {
      const response = await fetch('/.auth/me');
      const payload = await response.json();
      const { clientPrincipal } = payload;
      return clientPrincipal;
    } catch (error) {
      console.error('No profile could be found');
      return undefined;
    }
  }

  function getProps({ href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === '/' ? isCurrent : isPartiallyCurrent || isCurrent;

    // The object returned here is spread on the anchor element's attributes
    if (isActive) {
      return { class: 'router-link-active' };
    }
    return {};
  }
</script>

<div class="new_navbar">
  <div class="new_dropdown" onclick="location.href='/landing';">
    <button class="new_dropbtn" style="cursor: pointer">
        <a href="/">
        <img
          src="../resources/img/logo.png"
          alt="멜하는감자"
          style="height: 40px"
        />
        <!--이미지 경로 기준은 public 폴더-->
        </a>
      </button>
  </div>

  <div class="new_dropdown">
    <button class="new_dropbtn for_svg"
      >성적
      <img
        src="../resources/img/cheveron-down.svg"
        alt="down button"
        class="new_dropbtn_img responsive"
      />
    </button>
    <div class="new_dropdown-content">
      <a href="#/mails/grades/corrections/1"><span class="first">성적정정</span></a>
      <a href="#/mails/grades/inquiries/1"><span>점수문의</span></a>
      <a href="#/mails/grades/evaluations/1"><span class="last">평가방식</span></a>
    </div>
  </div>

  <div class="new_dropdown">
    <button class="new_dropbtn for_svg"
      >수업
      <img
        src="../resources/img/cheveron-down.svg"
        alt="down button"
        class="new_dropbtn_img responsive"
      />
    </button>
    <div class="new_dropdown-content">
      <a href="#/mails/courses/submissions/1"><span class="first">과제제출</span></a>
      <a href="#/mails/courses/attendance/1"><span class="last">출결사항</span></a>
    </div>
  </div>

  <div class="new_dropdown">
    <button class="new_dropbtn for_svg"
      >수강신청
      <img
        src="../resources/img/cheveron-down.svg"
        alt="down button"
        class="new_dropbtn_img responsive"
      />
    </button>
    <div class="new_dropdown-content">
      <a href="#/mails/registration/exception/1"><span class="first">정원 외 수강신청</span></a>
      <a href="#/mails/registration/rule/1"><span class="last">이수규정</span></a>
    </div>
  </div>

  <div class="new_dropdown">
    <button class="new_dropbtn for_svg" style="cursor: pointer">
      <a href="#/mails/others/other/1"><span>기타문의</span></a>
    </button>
  </div>
</div>
<div class="new_login">
  {#if !userInfo}
    <a href="#/login/">로그인 / 회원가입</a><!--로그인페이지로 이동-->
  {/if}
  {#if userInfo}
    <a href="#/accounts/me" style="margin-right:10px;"><span>감자 프로필</span>
        <!-- <div><img src="../resources/img/short-potato.png"></div> -->
    </a><!--마이페이지로 연결-->
    <a href="/.auth/logout?post_logout_redirect_uri=/landing/">로그아웃</a>
  {/if}
</div>

<style>
  .new_navbar {
    width: 75%; /*new_navbar와 new_login 7:3으로 width 분할(화면좁아서 개행되면 width 100%로 사용)*/
    display: flex;
    justify-content: space-evenly; /*적당히 가운데 몰리게*/
    margin-top: 0px;
    background-color: rgba(0, 0, 0, 0);
    height: 90px;
  }

  .new_navbar span {
    float: left;
    font-size: 16px;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  .new_dropdown {
    display: flex;
    justify-content: center; /*가운데정렬*/
  }

  /*기타문의때문에 뒤에 있는 선택자 필요*/
  .new_dropdown .new_dropbtn,
  .new_dropdown .new_dropbtn span {
    font-family: 'NanumSquare';
    font-size: 20px;
    border: none;
    outline: none;
    color: var(--darkGray-text);
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
  }

  /*기타문의때문에 뒤에 있는 선택자 필요*/
  .new_dropbtn:hover,
  .new_dropbtn span:hover {
    color: var(--purple-main);
    fill: var(--purple-main);
  }

  /*svg 화살표 hover때 색깔 바꾸기*/
  .for_svg:hover {
    filter: invert(61%) sepia(89%) saturate(2528%) hue-rotate(210deg)
      brightness(100%) contrast(85%);
  }

  .new_dropbtn_img {
    max-width: 10px;
    margin-left: 6px;
  }

  .new_dropbtn_img:hover {
    fill: var(--purple-main);
  }

  .new_dropdown-content {
    display: none;
    position: absolute;
    margin-top: 80px; /*메뉴 hover했을때 하단 메뉴가 바로 아래에 위치하게 하는 용도*/
    background-color: #ffffff;
    min-width: 135px;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 8px;
  }

  .new_dropdown-content span {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    font-weight: 500;
  }

  .new_dropdown-content .first{
    border-radius: 8px 8px 0 0;
  }

  .new_dropdown-content .last{
    border-radius: 0 0 8px 8px;
  }

  .new_dropdown-content span:hover {
    background-color: #9189eb; /*뒷배경 넣어도 여기는 회색처리 해야할듯*/
    color: #ffffff;
  }


  .new_dropdown:hover .new_dropdown-content {
    display: block;
  }

  .new_login {
    width: 25%; /*new_navbar와 new_login 7:3으로 width 분할(화면좁아서 개행되면 100%로 사용)*/
    display: flex;
    justify-content: center; /*가운데정렬*/
    margin-top: 0px;
    background-color: rgba(0, 0, 0, 0);
    height: 90px;
  }

  /*선택자 조금 괴상하지만 Link태그 인식문제로 우선 이렇게 했습니다*/
  .new_login a,
  .new_login span,
  .new_login div {
    font-family: 'NanumSquare';
    font-size: 20px;
    font-weight: bold;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center; /*가운데정렬*/
    margin: 20px 0px;
    padding: 0px 12px;
    background-color: var(--purple-main);
    border-radius: 16px;
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
