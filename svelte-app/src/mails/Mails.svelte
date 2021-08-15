<script>
  /* css */
  import css from './Mails.css';

  /* svelte */
  import Group from './Group.svelte';

  /* router */
  import Router from 'svelte-spa-router';

  const prefix = '/mails';
  const routes = {
    '/:category/:subcategory/:id': Group,
  };
</script>

<div class="container">
  <Router {routes} {prefix} />
</div>
