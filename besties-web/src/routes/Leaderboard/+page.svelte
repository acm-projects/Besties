<script>
	import { scaleLinear } from 'd3-scale';
	import { fly, fade } from 'svelte/transition';
    
    let visible = true; //decides if intial message should fade out
    let visible2 = false; //decided if scores should fade in

    /**
   * @param {any} _event
   */
    function handleClick(_event) { //used quick fix here
        visible = false;
        visible2 = true;
	}
	
	const teams = [
		{ name: "Team 1", points: 237 , color: "slateblue"},
		{ name: "Team 2", points: 187 , color: "teal"},
		// { name: "Team 3", points: 176 , color: "red"},
		// { name: "Team 4", points: 154 , color: "pink"},
		// { name: "Team 5", points: 130 , color: "teal"},
		// { name: "Team 6", points: 120 , color: "hotpink"},
		// { name: "Team 7", points: 120 , color: "green"}
	];

	const xTicks = ["Team 1", "Team 2"];
	const yTicks = [50, 100, 150, 200, 250];
	const padding = { top: 50, right: 85, bottom: 50, left: 85 };

	let width = 500;
	let height = 200;

	/**
     * @param {string} tick
     */
	function formatMobile(tick) {
		return "'" + tick.toString().slice(-2);
	}

	$: xScale = scaleLinear()
		.domain([0, xTicks.length])
		.range([padding.left, width - padding.right]);

	$: yScale = scaleLinear()
		.domain([0, Math.max.apply(null, yTicks)])
		.range([height - padding.bottom, padding.top]);

	$: innerWidth = width - (padding.left + padding.right);
	$: barWidth = innerWidth / xTicks.length;
</script>

<body class="h-screen w-screen bg-gradient-to-br from-rose-400 via-pink-400 to-fuchsia-400 ...">
	<topHeader class="grid w-screen rounded-b-2xl bg-info place-content-center space-y-1">
		<a href="/Results">
			<h1 class="text-accent text-6xl font-bold">Besties Leaderboard</h1>
		</a>
	</topHeader>
	<!-- <button class="firstBarOne">hi</button> -->
	
	
	<span class="flex ">
		<h3 class="textOne text-4xl">Team 1</h3>
		<h3 class="textTwo text-4xl">Team 2</h3>
	</span>
	
	

	<!-- <div class="group1 space-x-20 px-6">
		<div class="buttonOne"></div>
		<div class="buttonTwo" ></div>
	</div> -->

	

	<button on:click={handleClick}>
        {#if visible}
            <div transition:fade={{ delay: 2500, duration: 200 }} class="text-center text-6xl">
				<div class="group1 space-x-40 px-6">
					<div class="buttonOne"></div>
					<div class="buttonTwo" ></div>
				</div>
			</div>
        {/if}    
    </button>
    
    {#if visible2}
		<div transition:fade={{ delay: 3000, duration: 200 }}>
			<div class="group2 space-x-40 px-6">
				<div class="buttonOneSecond"></div>
				<div class="buttonTwoSecond" ></div>
			</div>
		</div>
		
    {/if}  

	

	<!-- <div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
		<svg>
			y axis
			<g class="axis y-axis">
				{#each yTicks as tick}
					<g class="tick tick-{tick}" transform="translate(0, {yScale(tick)})">
						<line x2="100%" />
						<text y="-4">{tick}</text>
					</g>
				{/each}
			</g>

			
			<g class="axis x-axis">
				{#each teams as team, i}
					<g class="tick" transform="translate({xScale(i)},{height})">
						<text x={barWidth / 2} y="-4">{width > 380 ? team.name : formatMobile(team.name)}</text>
					</g>
				{/each}
			</g>

			<g class="bars">
				{#each teams as team, i}
					<rect
						x={xScale(i) + 2}
						y={yScale(team.points)}
						width={barWidth - 4}
						height={yScale(0) - yScale(team.points)}
						style="fill:{team.color};"
					/>
				{/each}
			</g>
		</svg>
	</div> -->

	

</body>

<!-- <div class="header">
    <h1>Besties Leaderboard</h1>
    <h2>Keep answering questions to win your team points!</h2>
</div> -->



<style>
	.flex {
        display: flex;
        /* Optional: Adjust other flex properties if needed */
    }
	
	* {
    	margin:0;
	}

	topHeader{
        height:160px;
        padding-top: 20px;
        padding-bottom: 15px;
    }

	h2 {
		text-align: center;
        font-size:  25px;
        color: purple;
	}

    /* h1 {
        text-align: center;
        font-size:  50px;
        color: purple;
    } */

	.chart {
		width: 100%;
		/* margin-top: 10%; */
		height: 70%;
		margin: 0 auto;
		/* background-color:#d12eb2; */
		/* border-radius: 10px; */
	}

    /* .header {
		background-color:	pink;
        position: center;
		width:	100%;
        height: 200px;
		margin: 0;
		border-radius: 25px;
	} */

	svg {
		position: relative;
		width: 100%;
		height: 500px;
	}

	.tick {
		/* font-family: Helvetica, Arial; */
		font-size: 2em;
		font-weight: 400;
	}

	/* .tick line {
		stroke: black;
		stroke-dasharray: 2;
	} */

	.tick text {
		fill: #FFDBED;
		text-anchor: start;
	}

	.tick.tick-0 line {
		stroke-dasharray: 0;
	}

	.x-axis .tick text {
		text-anchor: middle;
	}

	.bars rect {
		stroke: none;
		/* opacity: 0.65; */
	}

	.group1{
      position: absolute;
      margin-top: 21%;
      margin-left: 9%;
    }

	.buttonOne{
      position: relative;
      border: none;
      width: 500px;
      height: 50px; 
      text-align: center;
      display: inline-block;
      font-size: 26px;
      /* cursor: pointer; */
      border-radius: 6px;
      background-color: slateblue;
      box-shadow: 0px 4px 6px 0px rgba(62, 62, 62, 0.25);
    }

    .buttonTwo{
      position: relative;
      border: none;
      width: 500px;
      height: 100px;
      text-align: center;
      display: inline-block;
      font-size: 26px;
      /* cursor: pointer; */
      border-radius: 6px;
      background-color: teal;
      box-shadow: 0px 4px 6px 0px rgba(62, 62, 62, 0.25);
    }

	.group2{
      position: absolute;
      margin-top: 7%;
      margin-left: 9%;
    }

	.buttonOneSecond{
      position: relative;
      border: none;
      width: 500px;
      height: 300px; 
      text-align: center;
      display: inline-block;
      font-size: 26px;
      /* cursor: pointer; */
      border-radius: 6px;
      background-color: slateblue;
      box-shadow: 0px 4px 6px 0px rgba(62, 62, 62, 0.25);
    }

    .buttonTwoSecond{
      position: relative;
      border: none;
      width: 500px;
      height: 250px;
      text-align: center;
      display: inline-block;
      font-size: 26px;
      /* cursor: pointer; */
      border-radius: 6px;
      background-color: teal;
      box-shadow: 0px 4px 6px 0px rgba(62, 62, 62, 0.25);
    }

	.textOne{
		position:absolute;
		margin-left:23%;
		margin-top: 31%;
		color: #fcdeed;
	}

	.textTwo{
		position:absolute;
		margin-left:67%;
		margin-top: 31%;
		color: #fcdeed;
	}

</style>