<script>
	import { scaleLinear } from 'd3-scale';
	
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
	

	<div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
		<svg>
			<!-- y axis -->
			<g class="axis y-axis">
				{#each yTicks as tick}
					<g class="tick tick-{tick}" transform="translate(0, {yScale(tick)})">
						<line x2="100%" />
						<text y="-4">{tick}</text>
					</g>
				{/each}
			</g>

			<!-- x axis -->
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
	</div>

</body>

<!-- <div class="header">
    <h1>Besties Leaderboard</h1>
    <h2>Keep answering questions to win your team points!</h2>
</div> -->



<style>
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
</style>