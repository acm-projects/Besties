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
        <span>
            <h1 class="text-secondary text-m font-bold">Team {teams[0]}</h1>
        
            <h1 class="text-secondary text-m font-bold">{points} points</h1>
        </span>

    </topHeader>

    <!-- Question Card -->
    <qCard>
        <div class="card bg-base-100 shadow-xl">
            
            <div class="card-body">
                <p>12/30</p>
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
            <button class="team-button">
                <span>
                    <h3 class="font-bold text-lg text-left ">Feature 1</h3>
                    <p class="py-4 text-left">This is a detailed and fun description of the powerup yayyy</p> 
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
                    <h3 class="font-bold text-lg text-left ">Feature 2</h3>
                    <p class="py-4 text-left">This is a detailed and fun description of the powerup yayyy</p> 
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
                    <h3 class="font-bold text-lg text-left ">Feature 3</h3>
                    <p class="py-4 text-left">This is a detailed and fun description of the powerup yayyy</p> 
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
                    <h3 class="font-bold text-lg text-left ">Feature 4</h3>
                    <p class="py-4 text-left">This is a detailed and fun description of the powerup yayyy</p> 
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
        margin-left: 5%;
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
    }

    select{
        margin-left: 160px;
        margin-top:-50px;
        position: relative
    }

    .team-button{
        border: none;
        color: black;
        width: 300px;
        height: 120px; 
        text-align: center;
        display: inline-block;
        font-size: 16px;
        margin-left: 8px;
        cursor: pointer;
        border-radius: 10px;
        background: #FFCFDE;
        box-shadow: 0px 4px 6px 0px rgba(62, 62, 62, 0.25);
        padding:10px;
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
        margin-left: 80px;
        cursor: pointer;
        border-radius: 15px;
        background: #FFCFDE;
        box-shadow: 0px 4px 6px 0px rgba(62, 62, 62, 0.25);
        margin-bottom: 10px;
        margin-top:720px;
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
        padding-top: 17px;
        padding-left: 30px;
        /* padding-bottom: 15px;  */
    }

    .topHeader-points{
        /* padding-top: -40px; */
        padding-left: 250px;
        /* position:fixed; */
    }


</style>