<script>
  import { slide } from 'svelte/transition';

  export let category;
  export let subcategory;
  export let scenarioTitle;
  export let scenarios;
  export let pathSubcategory;
  export let isOpen;

  const toggle = () => (isOpen = !isOpen);
</script>

<div class="menu">
  <button id="button" on:click={toggle} aria-expanded={isOpen}>
    <span>
      {scenarioTitle}
    </span>
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.165973 0.165973C0.38727 -0.0553243 0.746063 -0.0553243 0.96736 0.165973L4.56667 3.76528L8.16597 0.165973C8.38727 -0.0553243 8.74606 -0.0553243 8.96736 0.165973C9.18866 0.38727 9.18866 0.746063 8.96736 0.96736L4.96736 4.96736C4.74606 5.18866 4.38727 5.18866 4.16597 4.96736L0.165973 0.96736C-0.0553243 0.746063 -0.0553243 0.38727 0.165973 0.165973Z"
        fill="#3F424D"
      />
    </svg>
  </button>
  {#if isOpen}
    <ul transition:slide={{ duration: 300 }}>
      {#each scenarios as item, index}
        <a href="/#/mails/{category}/{subcategory}/{index + 1}">
          <li>
            {item}
          </li>
        </a>
      {/each}
    </ul>
  {/if}
</div>

<style>
  button {
    width: 100%;
    border: none;
    background: none;
    display: block;
    cursor: pointer;
    margin: 0;
    padding: 10px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    text-align: start;
    width: 150px;
    color: #9189eb;
    font-size: 20px;
  }
  svg {
    transition: transform 0.2s ease-in;
  }
  path {
    fill: #9189eb;
  }
  ul {
    padding: 16px 20px;
    line-height: 18px;
  }
  li {
    font-size: 18px;
    padding: 10px 0;
    color: #8992b0;
  }

  [aria-expanded='true'] svg {
    transform: rotate(0.5turn);
  }

  /* On screens that are less than 700px wide, make the sidebar into a topbar */
  @media screen and (max-width: 700px) {
    .menu {
      position: relative;
      text-align: center;
      width: 150px;
      display: inline-block;
      margin: 8px;
      height: 100%;
    }
    span {
      text-align: center;
      float: none;
      font-size: 16px;
    }
    svg {
      margin-left: 10px;
    }
    ul {
      width: 150px;
      display: block;
      position: absolute;
      line-height: 14px;
      text-align: center;
      background-color: #ffffff;
      padding: 5px;
      border-radius: 8px;
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    }
    li {
      font-size: 14px;
    }
  }

  /* On screens that are less than 400px, display the bar vertically, instead of horizontally */
  @media screen and (max-width: 400px) {
    span {
      font-size: 14px;
    }
    .menu {
      width: 80px;
    }
    ul {
      width: 80px;
    }
    li {
      font-size: 12px;
    }
  }
</style>
