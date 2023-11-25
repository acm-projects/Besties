<body class="h-screen w-screen bg-gradient-to-br from-rose-400 via-pink-400 to-fuchsia-400 ...">
    <h1 class="text-white text-4xl font-bold">Pre-Game Questions</h1>
    <p>Answer the questions below. You’ll be paired up with others that have similar answers to form your besties team!</p>
    <img src = "../../static/Vector.svg" alt  = "" />
    <button onclick="my_modal_3.showModal()">open modal</button>
    <dialog id="my_modal_3" class="modal">
    <div class="modal-box">
        <h3 class="font-bold text-4xl text-center">Oh No!</h3>
        <h3 class="py-3 font-bold text-4xl text-center">You have been frozen by team Sisi! 😱</h3>
        <h3 class="py-5 font-bold text-2xl text-center">You won't be able to answer this question!</h3>
    </div>
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
    </dialog>   
</body>

<style>
    body{
        /* background-color: #7A1E71; */
        font-family: 'Open Sans', sans;
        /* align-items: center; */
    }
</style>