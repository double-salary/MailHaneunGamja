<script>
  import './account/mypage.css';
  import './mails/Mails.css';
  import './landings/landings.css';
  import './styles.scss';
  import './global.css';
  import { Router, Link, Route } from 'svelte-routing';
  import About from './About.svelte';
  import Products from './products/Products.svelte';
  import Account from './account/Mypage.svelte';
  import Mails from './mails/Mails.svelte';
  import Landing from './landings/Landing.svelte';
  import Login from './login/Login.svelte';

  import { HeaderBar, NavBar, PageNotFound, Redirect } from './components';

  export let url = '';
</script>

<svelte:head>
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css"
  />
</svelte:head>

<HeaderBar />

<Router {url}></Router>
  <Route path="/">
    <Redirect path="/landing" />
  </Route>
  <Route path="/landing" component={Landing} />
  <Route path="/login" component={Login} />
  <Route path="/about" component={About} />
  <Route path="/accounts/me" component={Account} />
  <Route path="/mails" component={Mails} />
  <Route path="**" component={PageNotFound} />
</Router>

<style>
</style>
