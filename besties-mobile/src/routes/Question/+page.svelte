<script>
    import { tweened } from 'svelte/motion';

    // -- Q&A DATA --
    const questions = [
		{ 
            "question": "What is one food that Ponyo loves to eat?",
            "answers":["Ramen", "Ham", "Sandwiches", "Eggs"],
            "pointsAvailable": 5,
            "pointsEarned": 0
        },
        { 
            "question": "Which movie was the last Studio Ghibli movie?",
            "answers":["Ponyo", "When Marnie was there", "The Boy and the Heron", "The Secret World of Arriety"],
            "pointsAvailable": 25,
            "pointsEarned": 0
        },
        { 
            "question": "What happens at the beginning of The Grave of the Fireflies?",
            "answers":["Seita is found dead at the station", "Seita and Setsuko are seen living in another country", "Seita, Setsuko, and their group are given aid", "Seita and Setsuko reunite with their mom"],
            "pointsAvailable": 15,
            "pointsEarned": 25
        },
        { 
            "question": "What type of spirit is Haku in Spirited Away?",
            "answers":["A wind spirit", "A water spirit", "A river spirit", "A mountain spirit"],
            "pointsAvailable": 10,
            "pointsEarned": 20
        },
        { 
            "question": "What did Sophie make in Howl’s Moving Castle?",
            "answers":["Shawls", "Hats", "Dresses", "Accessories"],
            "pointsAvailable": 10,
            "pointsEarned": 40
        },

	];


    // -- TEAM OPTIONS --
    const teams = [
		"Besties",
        "Wasted",
        "Michelin Archives"
	];

    // -- CURRENT QUESTION --
    let qNum = 0;
    function updateQNum(){
        qNum++;
        console.log("clickednext " + qNum + "  original seconds- " + seconds);
        seconds = 20;
        countdown();
        
        selectedColorBool = false;
        selectedColorBool2 = false;
        selectedColorBool3 = false;
        selectedColorBool4 = false;
        powerupColorBool = false;
    }



    // -- TIMER COUNTDOWN --
    let original = 20; // total num of seconds
	let timer = tweened(original)
    setInterval(() => {
            if ($timer > 0) $timer--;
    }, 1000);

    function countdown(){
        // let original = 10;
        timer = tweened(original)
        // dont need to modify code below
        setInterval(() => {
            if ($timer > 0) $timer--;
        }, 1000);
    }
    $: minutes = Math.floor($timer / 60);
    $: seconds = Math.floor($timer - minutes * 60)


    // -- ANSWERED BUTTON COLOR --
    let selectedColorBool = false;
    let selectedColorBool2 = false;
    let selectedColorBool3 = false;
    let selectedColorBool4 = false;

    function testFunc(){
        console.log("button 1 clicked ");
        selectedColorBool = true;
    }
    function testFunc2(){
        console.log("button 2 clicked ");
        selectedColorBool2 = true;
    }
    function testFunc3(){
        console.log("button 3 clicked ");
        selectedColorBool3 = true;
    }
    function testFunc4(){
        console.log("button 4 clicked ");
        selectedColorBool4 = true;
    }

    // -- GIRLBOSS POWERUP --
    let powerupColorBool = false;
    function powerupFunc(){
        powerupColorBool = true;
    }
    
</script>


<body class="h-screen w-screen">

    <topHeader class="grid w-screen rounded-b-2xl bg-info space-y-1">
        <span class="flex">
            <h1 class="text-secondary text-m font-bold">Team {teams[0]}</h1>
            <h1 class="text-secondary text-m font-bold topHeader-points">{questions[qNum].pointsEarned} points</h1>
        </span>

    </topHeader>

    <!-- Question Card -->
    <qCard>
        <button onclick="my_modal_3.showModal()">
            <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
                <!-- <p>12/30</p> -->
                <span class="flex">
                    <p>{qNum + 1}/5</p>
                    <p class="numPoints font-bold">{questions[qNum].pointsAvailable} points</p>
                </span>
                <h2 class="card-title text-center">{questions[qNum].question}</h2>        
            </div>
        </div>
        </button>
        
    </qCard>

    <!-- Radial Timer Countdown -->
    <timer>
            <div class="radial-progress text-primary bg-white" style="--value:{seconds}*100/20; --size:4rem;">{seconds}</div>
    </timer>


    <!-- Answer Cards -->
    <answers class="flex flex-col space-y-5 ...">
        <button class="answer-button" class:selectedColor={selectedColorBool} on:click={testFunc}>
            <span>{questions[qNum].answers[0]}</span>
        </button>
        <button class="answer-button" class:selectedColor2={selectedColorBool2} on:click={testFunc2}>
            <span>{questions[qNum].answers[1]}</span>
        </button>
        <button class="answer-button" class:selectedColor3={selectedColorBool3} on:click={testFunc3}>
            <span>{questions[qNum].answers[2]}</span>
        </button>
        <button class="answer-button" class:selectedColor4={selectedColorBool4} on:click={testFunc4}>
            <span>{questions[qNum].answers[3]}</span>
        </button>
    </answers>

    <!-- Freeze Attack -->
    <dialog id="my_modal_3" class="modal">
    <div class="modal-box">
        <h3 class="font-bold text-4xl text-center">Oh No! 😱</h3>
        <h3 class="py-3 font-bold text-4xl text-center">You have been frozen by</h3>
        <h3 class="py-3 font-bold text-4xl text-secondary text-center">Team Sisi!</h3>
        <h3 class="py-5 font-bold text-2xl text-center">You won't be able to answer this question!</h3>
    </div>
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
    </dialog>   
    

    <!-- Powerup Stuff -->
        
    <!-- Open the modal using ID.showModal() method -->
    <powerupButton>
        <button class="btn pButton" onclick="my_modal_2.showModal()">Access Powerups</button>
        <dialog id="my_modal_2" class="modal">
        <div class="modal-box">
            <h3 class="font-bold text-2xl text-center">Powerups</h3>
            <br />
            <div class="powerUp-choices">
                <button class="team-button">
                    <span>
                        <span class="flex">
                            <h3 class="font-bold text-lg text-left ">Girlypop Flashbang</h3>
                            <h3 class="font-bold text-lg text-left powerOne">10 points</h3>
                        </span>
                        <p class="py-2 text-left">Freeze another team's screens for 30 seconds! 😈</p> 
                    </span>
                    <span>
                        <select class="select select-bordered w-25 max-w-xs">
                            <option disabled selected>Teams</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </span>
                
                </button>
                <button class="team-button">
                    <span>
                        <span class="flex">
                            <h3 class="font-bold text-lg text-left ">Gatekeep the Guess</h3>
                            <h3 class="font-bold text-lg text-left powerOne">10 points</h3>
                        </span>
                        <p class="py-2 text-left">Hide the correct answer choice from another team! 🙅‍♀️</p> 
                    </span>
                    <span>
                        <select class="select select-bordered w-25 max-w-xs">
                            <option disabled selected>Teams</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </span>
                </button>
                <button class="team-button">
                    <span>
                        <span class="flex">
                            <h3 class="font-bold text-lg text-left ">Gaslight</h3>
                            <h3 class="font-bold text-lg text-left powerTwo">10 points</h3>
                        </span>
                        <p class="py-2 text-left">Confuse another team into picking the wrong answer 👀</p> 
                    </span>
                    <span>
                        <select class="select select-bordered w-25 max-w-xs">
                            <option disabled selected>Teams</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </span>
                </button>
                <button class="team-button" class:powerupColor={powerupColorBool} on:click={powerupFunc}>
                    <span>
                        <span class="flex">
                            <h3 class="font-bold text-lg text-left ">Girlboss</h3>
                            <h3 class="font-bold text-lg text-left powerTwo">20 points</h3>
                        </span>
                        <p class="py-2 text-left">Earn double points for the next 30 seconds! 😇</p> 
                    </span>
                </button>
            </div>
            
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
        </dialog>   
    </powerupButton>

    <!-- Next Button -->
    <button on:click={updateQNum} class="next-button font-bold">
        <span> NEXT </span>
    </button>

</body>

<style>
    .flex {
        display: flex;
        /* Optional: Adjust other flex properties if needed */
    }

    body{
        background-color: #7A1E71;
        font-family: 'Open Sans', sans;
    }

    qCard{
        position:absolute;
        margin-top:35%;
        margin-left: 5%;
        margin-right: 10%;
        width:90%;
    }

    answers{
        position:absolute;
        margin-top:84%;
        margin-left:8%;
        align-items: center;
    }

    aCard{
        /* margin-top:100%;*/
        /* margin-left: 15%; */
        /* margin-right: 10%; */
        box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); 
        padding: -20%;
    }

    timer{
        margin-left: 43%;
        margin-top: 28%;
        /* align-self: center; */
        position: absolute;
    }

    powerupButton{
        margin-left: 30%;
        margin-top: 30px;
        position:absolute;
        align-content: center;
    }

    .pButton{
        background: linear-gradient(90deg, #FFCDE8 20%, #DF86E4 100%);
    }

    select{
        margin-left: 25px;
        margin-top:-30px;
        position: absolute;
    }

    .team-button{
        border: none;
        color: black;
        width: 320px;
        height: 140px; 
        text-align: center;
        display: inline-block;
        font-size: 16px;
        margin-left: -2px;
        cursor: pointer;
        border-radius: 10px;
        background: #FFCFDE;
        box-shadow: 0px 4px 6px 0px rgba(62, 62, 62, 0.25);
        padding: 10px;
        padding-left: 15px;
        /* padding-top: 0px; */
        margin-bottom: 20px;
    }

    .next-button{
        border: none;
        color: black;
        width: 230px;
        height: 50px; 
        text-align: center;
        display: inline-block;
        font-size: 16px;
        margin-left: 22%;
        cursor: pointer;
        border-radius: 15px;
        background: #FFCFDE;
        box-shadow: 0px 4px 6px 0px rgba(62, 62, 62, 0.25);
        margin-bottom: 10px;
        margin-top:760px;
        position:absolute;
    }

    .answer-button{
        border: none;
        color: black;
        width: 350px;
        height: 75px; 
        text-align: center;
        display: inline-block;
        font-size: 20px;
        cursor: pointer;
        border-radius: 10px;
        background: #FFCFDE;
        box-shadow: 0px 4px 6px 0px rgba(62, 62, 62, 0.25);
        /* margin-left: 80px;
        margin-bottom: 10px;
        margin-top:800px;
        position:absolute; */
    }

    topHeader{
        height:50px;
        padding-top: 12px;
        padding-left: 30px;
        /* padding-bottom: 15px;  */
    }

    .topHeader-points{
        /* padding-top: -40px; */
        padding-left: 180px;
        /* position:fixed; */
    }

    .powerUp-choices{
        margin-left: 2%;
        /* padding-top: 10%; */
    }

    .powerOne{
        /* padding-top: -40px; */
        padding-left: 30px;
        /* position:fixed; */
        color:#7A1E71;
    }

    .powerTwo{
        /* padding-top: -40px; */
        padding-left: 132px;
        /* position:fixed; */
        color:#7A1E71;
    }

    .numPoints{
        padding-left: 190px;
        color:#96003A;
    }

    .selectedColor{
        background-color: #04AA6D;
    }

    .selectedColor2{
        background-color: #04AA6D;
    }

    .selectedColor3{
        background-color: #04AA6D;
    }

    .selectedColor4{
        background-color: #D1678E;
    }

    .powerupColor{
        background-color: #D1678E;
    }


</style>