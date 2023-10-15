<script>
	import { scaleLinear } from 'd3-scale';

	const teams = [
		{ name: "Team 1", points: 237 , color: "red"},
		{ name: "Team 2", points: 187 , color: "pink"},
		{ name: "Team 3", points: 176 , color: "purple"},
		{ name: "Team 4", points: 154 , color: "cyan"},
		{ name: "Team 5", points: 130 , color: "teal"},
		{ name: "Team 6", points: 120 , color: "hotpink"}
	];

	const xTicks = ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5", "Team 6"];
	const yTicks = [50, 100, 150, 200, 250];
	const padding = { top: 20, right: 15, bottom: 20, left: 25 };

	let width = 500;
	let height = 200;

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
<div class="header">
    <h1>Besties Leaderboard</h1>
    <h2>Keep answering questions to win your team points!</h2>
</div>

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

<style>
	h2 {
		text-align: center;
	}

    h1 {
        text-align: center;
    }

	.chart {
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
	}

	svg {
		position: relative;
		width: 100%;
		height: 200px;
	}

	.tick {
		font-family: Helvetica, Arial;
		font-size: 0.725em;
		font-weight: 200;
	}

	.tick line {
		stroke: #e2e2e2;
		stroke-dasharray: 2;
	}

	.tick text {
		fill: #ccc;
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
		opacity: 0.65;
	}
</style>