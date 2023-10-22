<script> 
	import {onMount} from "svelte"


	let isPageLoaded = false;

	onMount(() =>{
		isPageLoaded = true;
	})

	
</script>

{#if !isPageLoaded}
	<div class = "loader">
		<img src = "Besties_logo_2.png" alt  = "" />
	</div>
{/if}
<slot />

<style>
	.loader{
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: grid;
		place-items: center;
		background-color: pink;
		z-index: 9999;
	}
</style>

