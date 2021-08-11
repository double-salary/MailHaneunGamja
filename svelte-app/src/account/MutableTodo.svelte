<script>
	import { afterUpdate } from 'svelte';
	import flash from './flash.js';

	export let bookmark;

	let li;

	// afterUpdate(() => {
	// 	flash(li);
	// });
</script>


<!-- the text will flash red whenever
		the `todo` object changes -->

<li bind:this={li} class="bookmark-box">
    <div class="bookmark-categories">
        <div class="bookmark-lcmc">
            <div class="large-category">{ bookmark.lc }</div>
            {#if bookmark.mc == undefined}<div></div> {:else}<div class="medium-category">{ bookmark.mc }</div>{/if}            
        </div>
        <div class="small-category">{ bookmark.sc }</div>
    </div>
    <img on:click src="../resources/img/bookmark-solid.svg" alt="bookmark"width="16" height="22" viewBox="0 0 16 22">
</li>