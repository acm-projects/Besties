<script>
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
</script>

<!-- MAKE BARS THICKER!!! -->

<body class="h-screen w-screen bg-gradient-to-br from-rose-400 via-pink-400 to-fuchsia-400 ...">
        <topHeader class="grid w-screen rounded-b-2xl bg-info place-content-center space-y-1">
            <h1 class="text-secondary text-6xl font-bold">Besties Scoreboard</h1>
        </topHeader>

    <button on:click={handleClick}>
        {#if visible}
            <subHead transition:fly={{ y: -200, duration: 1000 }} class="text-center text-6xl">Which Besties team won? 🥁</subHead>
        {/if}    
    </button>
    
    {#if visible2}
        <div>
            <team2 transition:fly={{ delay: 1750, y: 200, duration: 1000 }}>
                <t2 class="text-2xl">Team 2</t2>
                <bar2></bar2>
            </team2>
            <team1 transition:fly={{ delay: 2750, y: 200, duration: 1000 }}>
                <t1 class="text-2xl">Team 1</t1>
                <bar></bar>
            </team1>
            <team3 transition:fly={{ delay: 750, y: 200, duration: 1000 }}>
                <t3 class="text-2xl">Team 3</t3>
                <bar3></bar3>
            </team3>
        </div>
        <div transition:fade={{ delay: 250, duration: 300 }}>
            <topStage></topStage>
            <botStage></botStage>
        </div>
    {/if}  
</body>

<style>
    body{
        /* font-family: 'Lucida Sans', sans-serif; */
        /* font-family:'Times New Roman', Times, serif */
        font-family: 'Open Sans', sans;
    }
    subHead{
        position: absolute;
        top: 60%;
        left: 50%;
        margin-top: -50px;
        margin-left: -400px;
        width: 800px;
        height: 100px;
        color: #fcdeed;
    }

    team1{
      display:flex;
      position:relative;
      margin-left:47%;
      margin-top:-370px; /* */
    }

    t1{
        position:relative;
        margin-top:-50px;
        color: #fcdeed;
    }

    bar{
        position:relative;
        border-radius: 0.75rem;
        border-top: 390px solid #eccbdb;   /* */
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        margin-left: -100px;
        width: 125px;
    }
    
    
    team2{
      display:flex;
      position:relative;
      margin-left:20%;
      margin-top:220px; /* */
    }

    t2{
        position:relative;
        margin-top:-50px;
        color: #fcdeed;   /* */
    }

    bar2{
        position:relative;
        border-radius: 0.75rem;
        border-top: 240px solid #eccbdb;   /* */
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        margin-left: -100px;
        width: 125px;
    }


    team3{
      display:flex;
      position:relative;
      margin-left:75%;
      margin-top:-15%; /* */
    }

    t3{
        position:relative;
        margin-top:-50px;
        color: #fcdeed;   /* */
    }

    bar3{
        position:relative;
        border-radius: 0.75rem;
        border-top: 200px solid #eccbdb;   /* */
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        margin-left: -100px;
        width: 125px;
    }

    topHeader{
        height:160px;
        padding-top: 20px;
        padding-bottom: 15px;
    }

    botStage{
        position:absolute;
        bottom:0;
        border-radius: 0.75rem;
        width: 87%;
        height:50px;
        margin-top: 40px;
        margin-bottom: 50px;
        margin-left: 95px;
        background: #8D368D;
    }
    topStage{
        position:absolute;
        bottom:0;
        width: 83%;
        height:60px;
        margin-left: 120px;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        background: #752575;
    }
</style>



