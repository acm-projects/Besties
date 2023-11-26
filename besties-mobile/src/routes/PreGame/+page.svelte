<script>
    let questionOne = false;
    function questionFunc(){
        questionOne = true;
    }

    let questionTwo = false;
    function questionFunc2(){
        questionTwo = true;
    }

    let questionThree = false;
    function questionFunc3(){
        questionThree = true;
    }

    let questionFour = false;
    function questionFunc4(){
        questionFour = true;
    }
</script>

<body class="w-screen">
    <h3 class="text-white font-bold text-4xl text-center title">Pre-Game Time!</h3>
    <div class="rest-of-team text-xl">Answer the questions below</div>
    <h3 class="py-3 text-xl text-center description">You’ll be paired up with others that have similar answers to form your besties team!</h3>
    <div class="group1 space-y-5 space-x-3 px-5">
        <h3 class="Q1 text-xl">What is your favorite hobby?</h3>
        <button class="buttonOne">Singing</button>
        <button class="buttonTwo" class:selectedColor={questionOne} on:click={questionFunc}>Drawing</button>
        <button class="buttonThree">Gaming</button>
        <button class="buttonFour">Reading</button>
    </div>
    <div class="group2 space-y-5 space-x-3 px-5">
        <h3 class="Q2 text-xl">What is your most used emoji?</h3>
        <button class="buttonOne">💀</button>
        <button class="buttonTwo" class:selectedColor2={questionTwo} on:click={questionFunc2}>😭</button>
        <button class="buttonThree">😂</button>
        <button class="buttonFour">😈</button>
    </div>
    <div class="group3 space-y-5 space-x-3 px-5">
        <h3 class="Q3 text-xl">Which one?</h3>
        <button class="buttonOne">Salty</button>
        <button class="buttonTwo">Spicy</button>
        <button class="buttonThree" class:selectedColor3={questionThree} on:click={questionFunc3}>Sweet</button>
        <button class="buttonFour">Sour</button>
    </div>
    <div class="group4 space-y-5 space-x-3 px-5">
        <h3 class="Q4 text-xl">Favorite drink?</h3>
        <button class="buttonOne">Coffee</button>
        <button class="buttonTwo" class:selectedColor4={questionFour} on:click={questionFunc4}>Boba</button>
        <button class="buttonThree">Tea</button>
        <button class="buttonFour">Soda</button>
    </div>
    <a href="/ChosenTeam">
        <button class="btn pButton font-bold">Next</button>
    </a>
</body>

<style>
    body{
        font-family: 'Open Sans', sans;
        background: linear-gradient(180deg, #E36C8F -50%, #7A1E71 100%);
        height: 1480px;
    }

    .flex {
        display: flex;
        /* Optional: Adjust other flex properties if needed */
    }

    .title {
        position: absolute;
        width: 100%; /* Adjusted for full width */
        text-align: center;
        top: 4.27%;
        font-size: 40px;
        color: #FFF1F5;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .description {
        position: absolute;
        width: 83%; /* Adjusted for padding */
        top: 19%;
        left: 8%;
        text-align: center;
        color: #FFF1F5;
        margin: 0 auto; /* Center in the available space */
    }

    .rest-of-team {
        position: absolute;
        width: 86%; /* Adjusted for padding */
        top: 14%;
        left: 8%;
        line-height: 32px;
        text-align: center;
        color: #FFF1F5;
        margin: 0 auto; /* Center in the available space */
    }
    .group1{
        position: absolute;
        margin-top: 75%;
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
        margin-top: 140%;
    }

    .Q2 {
        position: relative;
        width: 86%; /* Adjusted for padding */
        line-height: 32px;
        color: #FFF1F5;
        margin: 0 auto; /* Center in the available space */
    }

    .group3{
        position: absolute;
        margin-top: 205%;
    }

    .Q3 {
        position: relative;
        width: 86%; /* Adjusted for padding */
        line-height: 32px;
        color: #FFF1F5;
        margin: 0 auto; /* Center in the available space */
    }

    .group4{
        position: absolute;
        margin-top: 270%;
    }

    .Q4 {
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
        width: 165px;
        height: 70px; 
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
        width: 165px;
        height: 70px; 
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
        width: 165px;
        height: 70px; 
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
        width: 165px;
        height: 70px; 
        text-align: center;
        display: inline-block;
        font-size: 18px;
        cursor: pointer;
        border-radius: 10px;
        background: #FFCFDE;
        box-shadow: 0px 4px 6px 0px rgba(62, 62, 62, 0.25);
    }

    .pButton{
        background: linear-gradient(90deg, #FFCDE8 20%, #DF86E4 100%);
        margin-left: 23%;
        margin-top: 1380px;
        position:absolute;
        width: 230px;
        height: 50px; 
        border-radius: 15px;
        font-size: 18px;
    }

    .selectedColor{
        background-color: #D1678E;
    }

    .selectedColor2{
        background-color: #D1678E;
    }

    .selectedColor3{
        background-color: #D1678E;
    }

    .selectedColor4{
        background-color: #D1678E;
    }
</style>