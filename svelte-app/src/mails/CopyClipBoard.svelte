<script>
	import { onMount } from 'svelte';
	
	export let mail;

	let textarea;
	
	onMount(() => {
		textarea.select();
		document.execCommand('copy');
	});
</script>

<textarea bind:value={mail} bind:this={textarea}></textarea>