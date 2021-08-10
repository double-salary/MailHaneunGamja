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

  import { HeaderBar, NavBar, PageNotFound, Redirect } from './components';
  import Landings from './landings/Landings.svelte';

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
<Landings />

<!-- <div class="section columns">
  <Router {url}>
    <NavBar />
    <main class="column">
      <div>
        <Route path="/">
          <Redirect path="/products" />
        </Route>
        <Route path="/products" component={Products} />
        <Route path="/about" component={About} />
        <Route path="/account" component={Account} />
        <Route path="/mails" component={Mails} />
        <Route path="**" component={PageNotFound} />
      </div>
    </main>
  </Router>

</div> -->

<style>
  
</style>
