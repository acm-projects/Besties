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

    
</script>


<body class="h-screen w-screen">

    
    <!-- <a href="/">Home</a> -->
    
    <!-- <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Access Powerups</button> -->
    <qCard>
        
        <timer>
            <div class="radial-progress text-primary bg-white" style="--value:70;">8</div>
        </timer>

        <div class="card bg-base-100 shadow-xl">
            
            <div class="card-body">
                <p>12/30</p>
                <h2 class="card-title text-center">{questions[0].question}</h2>        
            </div>
        </div>
    </qCard>

    <answers class="flex flex-col space-y-4 ...">
        <aCard class="card bg-base-300">
            <!-- <p class="text-center">{questions[0].answers[3]}</p> -->
            <div class="card-body">
                <p class="text-center">{questions[0].answers[0]}</p>        
            </div>
        </aCard>
        <aCard class="card bg-base-300">
            <!-- <p class="text-center">{questions[0].answers[3]}</p> -->
            <div class="card-body">
                <p class="text-center">{questions[0].answers[1]}</p>        
            </div>
        </aCard>
        <aCard class="card bg-base-300">
            <!-- <p class="text-center">{questions[0].answers[3]}</p> -->
            <div class="card-body">
                <p class="text-center">{questions[0].answers[2]}</p>        
            </div>
        </aCard>
        <aCard class="card bg-base-300">
            <!-- <p class="text-center">{questions[0].answers[3]}</p> -->
            <div class="card-body">
                <p class="text-center">{questions[0].answers[3]}</p>        
            </div>
        </aCard>
        
    </answers>


    <div>
        
    </div>
    
    
       
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
    
    <button class="next-button font-bold" >
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
        margin-top:20%;
        margin-left: 10%;
        margin-right: 10%;
    }

    answers{
        position:fixed;
        margin-top:90%;
    }

    aCard{
        /* margin-top:100%;*/
        margin-left: 15%;
        /* margin-right: 10%; */
        box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); 
        /* padding: 10%; */
        width: 120%; 
    }

    timer{
        margin-left: 40%;
        margin-top: 15%;
        /* align-self: center; */
    }

    powerupButton{
        margin-left: 30%;
        margin-top: 10px;
        position:fixed;
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
        height: 45px; 
        text-align: center;
        display: inline-block;
        font-size: 16px;
        margin-left: 80px;
        cursor: pointer;
        border-radius: 10px;
        background: #FFCFDE;
        box-shadow: 0px 4px 6px 0px rgba(62, 62, 62, 0.25);
        margin-bottom: 10px;
        margin-top:770px;
        position:fixed;
    }

</style>