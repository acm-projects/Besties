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
    
  // State to store the answers to each question
  let answers = {
    q1: '',
    q2: '',
    q3: '',
    q4: ''
  };

  // Function to handle input changes
  /**
   * @param {string} question
   * @param {Event & { currentTarget: EventTarget & HTMLInputElement; }} event
   */
  function handleInputChange(question, event) {
    // Check if the event target is an HTML input element
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      // @ts-ignore
      answers[question] = target.value;
    }
  }

  // Function to submit the answers
  function submitAnswers() {
    console.log('Answers submitted:', answers);
    // Here you would typically send the answers to a server
    // or transition to the next part of your game
  }
  </script>

  <style>
    .pre-game-screen {
      /* position: relative; */
      /* width: 1440px;
      height: 1024px;
      background: #DF7A97; */
      /* font-family: 'Open Sans', sans; */
    }

    .header-rectangle {
      position: absolute;
      width: 1440px;
      height: 360px;
      top: 0;
      background: #F8ABC1;
    }

    .pre-game-title {
      position: absolute;
      width: 995px;
      height: 174px;
      left: 222px;
      top: 46px;
      /* font-family: 'RocknRoll One', sans-serif; */
      /* font-weight: 400; */
      font-size: 120px;
      line-height: 174px;
      color: #8B1D3E;
      border: 1px solid #8B1D3E;
      text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }

    .description {
      position: absolute;
      /* width: 1200px;
      height: 58px; */
      left: 110px;
      top: 220px;
      /* font-family: 'Average Sans', sans-serif; */
      /* font-family: 'Open Sans', sans; */
      font-weight: 590;
      font-size: 35px;
      /* line-height: 58px; */
      text-align: center;
      color: #fcdeed;
    }

    .question {
      position: absolute;
      width: 396px;
      height: 214px;
      background: #FCCCDA;
      box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      padding: 10px;
      box-sizing: border-box;
    }

    /* Positioning should be inline for dynamic values */

    .question input {
        /*
      width: 100%;
      font-size: 35px;
      line-height: 45px;
      border: none;
      margin-top: 40px; / Adjust as needed */
      padding: 10px;
    }

    .submit-button {
      position: absolute;
      left: 89%;
      /* bottom: 90px; */
      top: 80px;
      transform: translateX(-50%);
      padding: 10px 20px;
      font-size: 30px;
      cursor: pointer;
      background-color: #752575;
      color: #fcdeed;
      border: none;
      border-radius: 5px;
      height:100px;
      width: 200px;
      box-shadow: 0px 4px 6px 0px rgba(62, 62, 62, 0.25);
    }

    topHeader{
      height:200px;
      padding-top: 40px;
      padding-bottom: 15px;
      /* padding-right: 30px; */
    }

    .codeBox{
      position: absolute;
      border: none;
      color: #8B1D3E;
      width: 200px;
      height: 80px; 
      text-align: center;
      display: inline-block;
      font-size: 40px;
      cursor: pointer;
      border-radius: 5px;
      background: #fcdeed;
      /* box-shadow: 0px 4px 6px 0px rgba(62, 62, 62, 0.25); */
      margin-left: 660px;
      margin-top: 60px;
    }
    

    .playerBox{
      position: absolute;
      border: none;
      color: #8B1D3E;
      width: 120px;
      height: 80px; 
      text-align: center;
      display: inline-block;
      font-size: 45px;
      /* cursor: pointer; */
      border-radius: 5px;
      background: #fcdeed;
      /* box-shadow: 0px 4px 6px 0px rgba(62, 62, 62, 0.25); */
      margin-left: 80px;
      margin-top: 50px;
    }

    .playerNumText{   /* this is for number 2 */
      position: absolute;
      color: #8B1D3E;
      font-size: 45px;
      margin-left: 127px;
      margin-top: 55px;
    }

    .player-text{
      position:absolute;
      margin-left: 235px;
      margin-top:70px;
      color: #8B1D3E;
      font-size: 40px;
    }


    .top-text{
      margin-left: 425px;
      font-size: 40px;
    }

    .group1{
      position: absolute;
      margin-top: 6%;
      margin-left: 4%;
    }

    .Q1 {
      position: relative;
      width: 86%; /* Adjusted for padding */
      line-height: 32px;
      color: #FFF1F5;
      margin: 0 auto; /* Center in the available space */
    }

    .group2{
        position: absolute;
        margin-top: 17%;
        margin-left: 4%;
    }

    .Q2 {
        position: relative;
        width: 86%; /* Adjusted for padding */
        line-height: 32px;
        color: #FFF1F5;
        margin: 0 auto; /* Center in the available space */
    }

    .buttonOne{
      position: relative;
      border: none;
      color: black;
      width: 320px;
      height: 180px; 
      text-align: center;
      display: inline-block;
      font-size: 23px;
      cursor: pointer;
      border-radius: 6px;
      background: #FFCFDE;
      box-shadow: 0px 4px 6px 0px rgba(62, 62, 62, 0.25);
    }

    .buttonTwo{
      position: relative;
      border: none;
      color: black;
      width: 320px;
      height: 180px; 
      text-align: center;
      display: inline-block;
      font-size: 23px;
      cursor: pointer;
      border-radius: 6px;
      background: #FFCFDE;
      box-shadow: 0px 4px 6px 0px rgba(62, 62, 62, 0.25);
    }

    .buttonThree{
      position: relative;
      border: none;
      color: black;
      width: 320px;
      height: 180px; 
      text-align: center;
      display: inline-block;
      font-size: 23px;
      cursor: pointer;
      border-radius: 6px;
      background: #FFCFDE;
      box-shadow: 0px 4px 6px 0px rgba(62, 62, 62, 0.25);
    }

    .buttonFour{
      position: relative;
      border: none;
      color: black;
      width: 320px;
      height: 180px; 
      text-align: center;
      display: inline-block;
      font-size: 23px;
      cursor: pointer;
      border-radius: 6px;
      background: #FFCFDE;
      box-shadow: 0px 4px 6px 0px rgba(62, 62, 62, 0.25);
    }


  </style>

  <div class="pre-game-screen h-screen w-screen bg-gradient-to-br from-rose-400 via-pink-400 to-fuchsia-400 ...">
    <topHeader class="grid w-screen rounded-b-2xl bg-info">
      <h1 class="text-accent top-text text-2xl font-bold">Enter the code below to join the game</h1>
      <button class="codeBox font-bold">s 1 A y</button>
      <a href="/Leaderboard">
        <button class="submit-button">Start Game!</button>
      </a>

    <!-- <button class="playerBox font-bold">
      <div class="text-center text-6xl">0</div>
    </button> -->

    <button on:click={handleClick} class="playerBox font-bold">
      {#if visible}
        <div transition:fade={{ delay: 1500, duration: 200 }} class="text-center">0</div>
      {/if}
    </button>

    {#if visible2}
		<div transition:fade={{ delay: 2000, duration: 200 }} class="text-center playerNumText font-bold">2</div>
    {/if}  

    <button class="text-accent player-text text-3xl font-bold">Players</button>
    </topHeader>
    <div class="group1 space-y-30 space-x-60 px-6">
      <h3 class="Q1 text-xl"> </h3>
      <button class="buttonOne">What is your favorite hobby?</button>
      <button class="buttonTwo" >What is your most used emoji?</button>
    </div>
    <div class="group2 space-y-10 space-x-60 px-5">
      <h3 class="Q1 text-xl"> </h3>
      <button class="buttonThree">What is your favorite taste?</button>
      <button class="buttonFour">What is your favorite drink?</button>
    </div>
    
    <!-- <div class="header-rectangle"></div> -->
    <!-- <h1 class="pre-game-title">Pre-Game Time!</h1> -->
    <p class="description "> Pre-Game Time! Answer these 4 questions to determine your besties for the game!</p>
    <!-- Questions -->
    <!-- <div class="question" style="top: 441px; left: 222px;">
      <input type="text" placeholder="1: Question?" bind:value={answers.q1} on:input={(event) => handleInputChange('q1', event)} />
    </div>
    <div class="question" style="top: 441px; left: 818px;">
      <input type="text" placeholder="2: Question?" bind:value={answers.q2} on:input={(event) => handleInputChange('q2', event)} />
    </div>
    <div class="question" style="top: 735px; left: 222px;">
      <input type="text" placeholder="3: Question?" bind:value={answers.q3} on:input={(event) => handleInputChange('q3', event)} />
    </div>
    <div class="question" style="top: 735px; left: 818px;">
      <input type="text" placeholder="4: Question?" bind:value={answers.q4} on:input={(event) => handleInputChange('q4', event)} />
    </div> -->

    
  </div>