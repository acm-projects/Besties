<script>
    const questions = [
		{ 
            "question": "What's the difference between an int and a double?",
            "answers":["Numbers with a decimal", "idk", "The word is longer", "Nothing they are the same "]
        },
        { 
            "question": "What is 2+2?",
            "answers":["7", "2", "4", "9"]
        }
	];

    const teams = [
		"Besties",
        "Wasted",
        "Michelin Archives"
	];
    
    let points = 0;

    function updatePoints() {
		// console.log("makeFalse()");
		points++;
	}
    
</script>


<body class="h-screen w-screen">

    
    <!-- <a href="/">Home</a> -->
    
    <!-- <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Access Powerups</button> -->
    
    <!-- <aCard class="card bg-base-300 w-screen">
        <div class="card-body">
            <p class="text-center">{questions[0].answers[0]}</p>        
        </div>
    </aCard> -->

    <!-- place-content-center -->

    <topHeader class="grid w-screen rounded-b-2xl bg-info space-y-1">
        <span class="flex">
            <h1 class="text-secondary text-m font-bold">Team {teams[0]}</h1>
            <h1 class="text-secondary text-m font-bold topHeader-points">{points} points</h1>
        </span>

    </topHeader>

    <!-- Question Card -->
    <qCard>
        <div class="card bg-base-100 shadow-xl">
            
            <div class="card-body">
                <!-- <p>12/30</p> -->
                <span class="flex">
                    <p>12/30</p>
                    <p class="numPoints font-bold">5 points</p>
                    
                </span>
                <h2 class="card-title text-center">{questions[0].question}</h2>        
            </div>
        </div>
    </qCard>

    <!-- Radial Timer Countdown -->
    <timer>
            <div class="radial-progress text-primary bg-white" style="--value:80; --size:4rem;">8</div>
    </timer>

    <!-- <p class="text-center">{questions[0].answers[3]}</p> -->

    <!-- Answer Cards -->
    <answers class="flex flex-col space-y-5 ...">
        <button class="answer-button">
            <span> {questions[0].answers[0]} </span>
        </button>
        <button class="answer-button">
            <span> {questions[0].answers[1]} </span>
        </button>
        <button class="answer-button">
            <span> {questions[0].answers[2]} </span>
        </button>
        <button class="answer-button">
            <span> {questions[0].answers[3]} </span>
        </button>
    </answers>
    <!-- <answers class="flex flex-col space-y-4 ...">
        <aCard class="card bg-base-300">
            <div class="card-body">
                <p class="text-center">{questions[0].answers[0]}</p>        
            </div>
        </aCard>
        <aCard class="card bg-base-300">
            <div class="card-body">
                <p class="text-center">{questions[0].answers[1]}</p>        
            </div>
        </aCard>
        <aCard class="card bg-base-300">
            <div class="card-body">
                <p class="text-center">{questions[0].answers[2]}</p>        
            </div>
        </aCard>
        <aCard class="card bg-base-300">
            <div class="card-body">
                <p class="text-center">{questions[0].answers[3]}</p>        
            </div>
        </aCard>
        
    </answers> -->


    <!-- Powerup Stuff -->
        
    <!-- Open the modal using ID.showModal() method -->
    <powerupButton>
        <button class="btn" onclick="my_modal_2.showModal()">Access Powerups</button>
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
                <button class="team-button">
                    <span>
                        <span class="flex">
                            <h3 class="font-bold text-lg text-left ">Girlboss</h3>
                            <h3 class="font-bold text-lg text-left powerTwo">20 points</h3>
                        </span>
                        <p class="py-2 text-left">Earn double points for the next 30 seconds! 😇</p> 
                    </span>
                    <span>
                        <select class="select select-bordered w-25 max-w-xs">
                            <option disabled selected>Teams</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
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
    <button class="next-button font-bold">
        <span> NEXT </span>
    </button>

    

    


        
        
 
    
    
    
    <!-- <div>
        <aCard class="card bg-base-300">
            <div class="card-body">
                <p class="text-center">{questions[0].answers[0]}</p>        
            </div>
        </aCard>
    </div> -->

    <!-- <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
    </div> -->

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
        font-size: 16px;
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
        padding-left: 192px;
        color:#96003A;
    }


</style>