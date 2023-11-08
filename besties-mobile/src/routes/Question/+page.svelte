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
    
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Access Powerups</button>
    <qCard>
        <div class="radial-progress text-primary bg-white" style="--value:70;">8</div>
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
        margin-top:30%;
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
</style>