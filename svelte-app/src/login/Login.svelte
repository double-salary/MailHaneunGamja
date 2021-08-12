<script>
    import './login.css';
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

<div class="login-container">
    <div class="login-explain">
    또 말하는 감자가<br>
    되어버리셨나요?
    </div>
    <!--div태그 전체에 로그인 링크 달기-->
    <div class="login-google" onclick="location.href='/.auth/login/google?post_login_redirect_uri=/landing/';">
        <img src="https://img.icons8.com/color/35/000000/google-logo.png"/>
        <span>구글 로그인 하러가기</span>
    </div>
</div>