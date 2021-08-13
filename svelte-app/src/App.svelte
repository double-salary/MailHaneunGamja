<script>
  /* css */
  import './account/mypage.css';
  import './landings/landings.css';
  import './styles.scss';
  import './global.css';

  /* svelte */
  import { HeaderBar, PageNotFound } from './components';

  import Landing from './landings/Landing.svelte';
  import Account from './account/Mypage.svelte';
  import Mails from './mails/Mails.svelte';

  /* router */
  import Router from 'svelte-spa-router';

  const routes = new Map();

  routes.set('/', Landing);
  routes.set('/account/', Account); // #/account
  routes.set('/mails', Mails); // #/mails
  routes.set('/mails/*', Mails); // #/mails
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
