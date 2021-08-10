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
      <img
        src="../resources/img/cheveron-down.svg"
        alt="down button"
        class="new_dropbtn_img responsive"
      />
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
      <img
        src="../resources/img/cheveron-down.svg"
        alt="down button"
        class="new_dropbtn_img responsive"
      />
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
      <img
        src="../resources/img/cheveron-down.svg"
        alt="down button"
        class="new_dropbtn_img responsive"
      />
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
      <img
        src="../resources/img/cheveron-down.svg"
        alt="down button"
        class="new_dropbtn_img responsive"
      />
    </button>
    <div class="new_dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
</div>
<div class="new_login">
  {#if !userInfo}
    <a href="/.auth/login/google?post_login_redirect_uri=/products/">로그인 / 회원가입</a>
  {/if}
  {#if userInfo}
    <a href="/.auth/logout?post_logout_redirect_uri=/products/">로그아웃</a>
  {/if}
</div>

<style>
  .new_navbar {
    width: 70%; /*new_navbar와 new_login 7:3으로 width 분할(화면좁아서 개행되면 width 100%로 사용)*/
    display: flex;
    justify-content: space-evenly; /*적당히 가운데 몰리게*/
    margin-top: 0px;
    background-color: rgba(0, 0, 0, 0);
    height: 90px;
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
    justify-content: center; /*가운데정렬*/
  }

  .new_dropdown .new_dropbtn {
    font-family: 'NanumSquare';
    font-size: 20px;
    font-weight: bold;
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
  }

  .new_dropbtn:hover {
    color: var(--purple-main);
    fill: var(--purple-main);
  }

  .new_dropbtn_img {
    max-width: 9px;
    margin-left: 6px;
  }

  .new_dropdown-content {
    display: none;
    position: absolute;
    margin-top: 70px; /*메뉴 hover했을때 하단 메뉴가 바로 아래에 위치하게 하는 용도*/
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
    display: flex;
    justify-content: center; /*가운데정렬*/
    margin-top: 0px;
    background-color: rgba(0, 0, 0, 0);
    height: 90px;
  }

  .new_login a {
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

<script>
  import { onMount } from 'svelte';
  import { Link } from 'svelte-routing';

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