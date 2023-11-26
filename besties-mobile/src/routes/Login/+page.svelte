<script>
    let questionOne = false;
    function questionFunc(){
        questionOne = true;
    }

</script>

<body class="w-screen">
    <h3 class="text-white font-bold text-4xl text-center title">Login</h3>
    <div class="rest-of-team text-xl">Enter the game code on the screen & your name to get started!</div>
    <div class="codeText text-white text-xl">Game Code:</div>
    <input type="text" placeholder="Type here" class="codeField input input-secondary input-lg input-bordered w-full max-w-xs" />
    <div class="nameText text-white text-xl">Your Name:</div>
    <input type="text" placeholder="Type here" class="nameField input input-secondary input-lg input-bordered w-full max-w-xs" />
    <a href="/PreGame">
        <button class="btn pButton text-xl font-bold">Next</button>
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
        top: 16%;
        left: 8%;
        line-height: 32px;
        text-align: center;
        color: #FFF1F5;
        margin: 0 auto; /* Center in the available space */
    }
    
    .pButton{
        background: linear-gradient(90deg, #FFCDE8 20%, #DF86E4 100%);
        margin-left: 40px;
        margin-top: 720px;
        position:absolute;
        width: 320px;
        height: 70px; 
        border-radius: 15px;
        font-size: 16px;
    }

    .codeText{
        position: absolute;
        margin-top: 290px;
        margin-left: 40px;
    }

    .codeField{
        position: absolute;
        margin-top: 340px;
        margin-left: 40px;
    }

    .nameText{
        position: absolute;
        margin-top: 490px;
        margin-left: 40px;
    }

    .nameField{
        position: absolute;
        margin-top: 540px;
        margin-left: 40px;
    }
</style>