<script>
    
</script>

<style> 

  .image-container {
    display: inline-block; 
    text-align: center; 
    margin: 0 10px; 
    margin-right: 75px; 
    margin-left: 75px;
  }

  .image {
    max-width: 100%; /* Ensure the image doesn't exceed its container's width */
    width: 200px;
    height: 150px;
  }

  .text {
    text-align: center; /* Center-align the text */
    margin-top: 5px; /* Add a small space between the image and text */
    color: palevioletred;
    font-family: fantasy;
    font-size: medium;
    margin-bottom: 50px;
  }


  img {
    max-width:  100%;
    box-shadow: 0px 4px 8px rgb(0, 0, 0);
  }

  .first-image{
    margin-left: 200px;
    display: inline-block;
  }

  .sqaure{
    display: inline-block;
    margin-top: 10px;
    width: 150px;
    height: 27px;
    background-color: white;
  }

  .page{
    background-color: pink;
    height: 100vh;
    border: 10px;

  }

  .centered-text {
    text-align: center;
    font-size: larger;
    font-weight :bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  p {
        color: darkmagenta;
        font-family: 'Comic Sans MS', cursive;
		    font-size: 1.5em;
        margin-right: 0px;
    }


  .search-text-margin {
      margin-top: 90px; 
      display: inline-block;
      font-size: 2em;
      margin-left: 200px;
      margin-right : 0px;
      color: purple;
  }   

</style>

<div class="page">

    <div class="paragraph-container">
        <p class="search-text-margin">Search</p>
        <div class = "sqaure"></div>
      </div>

      <div class = "centered-text"><p>CHOOSE YOUR TRIVIA!</p></div>
      
    
    <div class = "shadowed-image">
        <div class = "first-image">
          <div class="image-container">
            <img src="ponyo.jpg" alt="Image 3" class="image" />
            <p class="text">Ghibli</p>
          </div>
        </div>

        <div class="image-container">
          <img src="dogs.jpg" alt="Image 2" class="image" />
          <p class="text">Dogs</p>
        </div>

        <div class="image-container">
          <img src="bird.jpg" alt="Image 3" class="image" />
          <p class="text">Birds</p>
        </div>

        <div class="image-container">
          <img src="scary.jpg" alt="Image 3" class="image" />
          <p class="text">Halloween</p>
        </div>

        <div class = "first-image">
          <div class="image-container">
            <img src="fast_food.jpg" alt="Image 3" class="image" />
            <p class="text"> Fast Food</p>
          </div>
        </div>

        <div class="image-container">
          <img src="zodiac.jpg" alt="Image 3" class="image" />
          <p class="text">Star Sign</p>
        </div>

        <div class="image-container">
          <img src="Harry_Potter.jpg" alt="Image 3" class="image" />
          <p class="text">Harry Potter</p>
        </div>

        <div class="image-container">
          <img src="avatar.jpg" alt="Image 3" class="image" />
          <p class="text">Avatar: The Last Airbender</p>
        </div>

        <div class = "first-image">
          <div class="image-container">
            <img src="utd.jpg" alt="Image 3" class="image" />
            <p class="text">Are you a true Comet?</p>
          </div>
        </div>
        
        <div class="image-container">
          <img src="history.jpeg" alt="Image 3" class="image" />
          <p class="text">History</p>
        </div>

        <div class="image-container">
          <img src="books.jpg" alt="Image 3" class="image" />
          <p class="text">Books</p>
        </div>

        <div class="image-container">
          <img src="art.jpg" alt="Image 3" class="image" />
          <p class="text">Art</p>
        </div>

      </div>
  </div>


