<script>
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
      width: 1200px;
      height: 58px;
      left: 120px;
      top: 268px;
      /* font-family: 'Average Sans', sans-serif; */
      /* font-family: 'Open Sans', sans; */
      font-weight: 590;
      font-size: 30px;
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
      left: 88%;
      /* bottom: 90px; */
      top: 130px;
      transform: translateX(-50%);
      padding: 10px 20px;
      font-size: 24px;
      cursor: pointer;
      background-color: #752575;
      color: #fcdeed;
      border: none;
      border-radius: 5px;
      height:70px;
    }

    topHeader{
      height:240px;
      padding-top: 20px;
      padding-bottom: 15px;
      /* padding-right: 30px; */
    }

    .codeBox{
      position: relative;
      border: none;
      color: #8B1D3E;
      width: 350px;
      height: 120px; 
      text-align: center;
      display: inline-block;
      font-size: 60px;
      cursor: pointer;
      border-radius: 5px;
      background: #fcdeed;
      box-shadow: 0px 4px 6px 0px rgba(62, 62, 62, 0.25);
      margin-left: 540px;
    }

    .top-text{
      margin-left: 450px;
    }

    .group1{
      position: absolute;
      margin-top: 7%;
      margin-left: 5%;
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
        margin-top: 19%;
        margin-left: 5%;
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
      width: 260px;
      height: 120px; 
      text-align: center;
      display: inline-block;
      font-size: 18px;
      cursor: pointer;
      border-radius: 10px;
      background: #FFCFDE;
      box-shadow: 0px 4px 6px 0px rgba(62, 62, 62, 0.25);
    }

    .buttonTwo{
      position: relative;
      border: none;
      color: black;
      width: 260px;
      height: 120px; 
      text-align: center;
      display: inline-block;
      font-size: 18px;
      cursor: pointer;
      border-radius: 10px;
      background: #FFCFDE;
      box-shadow: 0px 4px 6px 0px rgba(62, 62, 62, 0.25);
    }

    .buttonThree{
      position: relative;
      border: none;
      color: black;
      width: 260px;
      height: 120px;
      text-align: center;
      display: inline-block;
      font-size: 18px;
      cursor: pointer;
      border-radius: 10px;
      background: #FFCFDE;
      box-shadow: 0px 4px 6px 0px rgba(62, 62, 62, 0.25);
    }

    .buttonFour{
      position: relative;
      border: none;
      color: black;
      width: 260px;
      height: 120px;
      text-align: center;
      display: inline-block;
      font-size: 18px;
      cursor: pointer;
      border-radius: 10px;
      background: #FFCFDE;
      box-shadow: 0px 4px 6px 0px rgba(62, 62, 62, 0.25);
    }

  </style>

  <div class="pre-game-screen h-screen w-screen bg-gradient-to-br from-rose-400 via-pink-400 to-fuchsia-400 ...">
    <topHeader class="grid w-screen rounded-b-2xl bg-info">
      <h1 class="text-accent top-text text-3xl font-bold">Enter the code below to join the game</h1>
      <button class="codeBox font-bold">s 1 A y</button>
      <button class="submit-button" on:click={submitAnswers}>Start Game!</button>
    </topHeader>

    <div class="group1 space-y-5 space-x-60 px-5">
      <h3 class="Q1 text-xl"> </h3>
      <button class="buttonOne">What is your favorite hobby?</button>
      <button class="buttonTwo" >What is your most used emoji?</button>
    </div>
    <div class="group2 space-y-5 space-x-60 px-5">
      <h3 class="Q1 text-xl"> </h3>
      <button class="buttonThree">What is your favorite taste?</button>
      <button class="buttonFour">What is your favorite drink?</button>
    </div>
    
    <!-- <div class="header-rectangle"></div> -->
    <!-- <h1 class="pre-game-title">Pre-Game Time!</h1> -->
    <p class="description ">
      Pre-Game Time! Answer these 4 questions to determine your besties for the game!
    </p>
    <p class="description ">
      Change color black!
    </p>
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