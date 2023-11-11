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
      position: relative;
      width: 1440px;
      height: 1024px;
      background: #DF7A97;
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
      font-family: 'RocknRoll One', sans-serif;
      font-weight: 400;
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
      font-family: 'Average Sans', sans-serif;
      font-weight: 400;
      font-size: 45px;
      line-height: 58px;
      text-align: center;
      color: #8B1D3E;
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
      left: 50%;
      bottom: 50px;
      transform: translateX(-50%);
      padding: 10px 20px;
      font-size: 24px;
      cursor: pointer;
      background-color: #8B1D3E;
      color: white;
      border: none;
      border-radius: 5px;
    }
  </style>

  <div class="pre-game-screen">
    <div class="header-rectangle"></div>
    <h1 class="pre-game-title">Pre-Game Time!</h1>
    <p class="description">
      Answer these questions to determine your besties for the game!
    </p>
    <!-- Questions -->
    <div class="question" style="top: 441px; left: 222px;">
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
    </div>

    <button class="submit-button" on:click={submitAnswers}>Submit Answers</button>
  </div>