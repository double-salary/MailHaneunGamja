<script>
  /* css */
  import './account/mypage.css';
  import './landings/scenarioList.css';
  import './landings/landings.css';
  import './styles.scss';
  import './global.css';

  /* svelte */
  import { HeaderBar, PageNotFound } from './components';

  import Landing from './landings/Landing.svelte';
  import Account from './account/Mypage.svelte';
  import Mails from './mails/Mails.svelte';
  import ScenarioList from './landings/ScenarioList.svelte';
  import Login from './login/Login.svelte';

  /* router */
  import Router from 'svelte-spa-router';

  const routes = new Map();

  // ex #/account
  routes.set('/', Landing);
  routes.set('/scenarioList', ScenarioList);
  routes.set('/login', Login);
  routes.set('/account', Account);
  routes.set('/accounts/me', Account);
  routes.set('/mails', Mails);
  routes.set('/mails/*', Mails);
  routes.set('*', PageNotFound);

</script>

<svelte:head>
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css"
  />
</svelte:head>

<HeaderBar />

<Router {routes} />

<style>
</style>
