<script>
  import css from './SideBar.css';
  import { slide } from 'svelte/transition';
  export let entry;
  let isOpen = false;
  let active = false;
  const toggle = () => ((isOpen = !isOpen), (active = !active));
</script>

<div clss="side-bar">
  <button id="button" class:active on:click={toggle} aria-expanded={isOpen}>
    <span>
      {entry[0]}
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
      {#each entry[1] as item}
        <li>{item}</li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .side-bar {
    width: 30%;
  }
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
  .active {
    background-color: #9189eb;
    color: #ffffff;
  }
  span {
    text-align: start;
    width: 150px;
    color: #9189eb;
    font-size: 14px;
  }
  svg {
    margin-right: 30px;
    transition: transform 0.2s ease-in;
  }
  path {
    fill: #9189eb;
  }
  ul {
    padding: 10px 20px;
    line-height: 14px;
    color: #8992b0;
  }
  li {
    font-size: 12px;
    padding: 5px 0;
  }

  [aria-expanded='true'] svg {
    transform: rotate(0.5turn);
  }
</style>
