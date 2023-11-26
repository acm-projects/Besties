<!-- iPhone.svelte -->
<script lang="ts">
    let purpleHeartImage = 'purple-heart-image-url.png';
  </script>
  
  <style>
    .container {
      position: relative;
      width: 414px;
      height: 844px;
      overflow-y: scroll;
      background: #7A1E71;
    }
  
    .shape {
      position: absolute;
      border-radius: 30px;
    }
  
    .rectangle1 {
      width: 430px;
      height: 604px;
      left: -8px;
      top: 0px;
      background: #E36C8F;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }
  
    .ellipse1 {
      width: 166px;
      height: 156px;
      left: 124px;
      top: 169px;
      background: #F8C359;
      border: 3px solid #FFAA00;
    }
  
    .crown {
      width: 90px;
      height: 74px;
      left: 161px;
      top: 206px;
      background: #FFAA00;
    }
  
    .vector {
      position: absolute;
      left: 40.81%;
      right: 41.29%;
      top: 26.7%;
      bottom: 66.82%;
      background: #FFAA00;
    }
  
    .ellipse4 {
      width: 21.18px;
      height: 22.08px;
      left: 195.41px;
      top: 206px;
      background: #FFAA00;
    }
  
    .ellipse7 {
      width: 15.88px;
      height: 16.56px;
      left: 198.06px;
      top: 247.39px;
      background: #957916;
    }
  
    .ellipse5 {
      width: 13.24px;
      height: 13.8px;
      left: 237.76px;
      top: 228.07px;
      background: #FFAA00;
    }
  
    .ellipse6 {
      width: 13.24px;
      height: 13.8px;
      left: 161px;
      top: 228.07px;
      background: #FFAA00;
    }
  
    .ellipse8,
    .ellipse9 {
      width: 7.94px;
      height: 8.28px;
      background: #957916;
    }
  
    .ellipse8 {
      left: 182.18px;
      top: 255.67px;
    }
  
    .ellipse9 {
      left: 221.88px;
      top: 255.67px;
    }
  
    .rectangle7 {
      width: 33.39px;
      height: 33.39px;
      left: 207.04px;
      top: 298.28px;
      background: #FFAA00;
      border-radius: 5px;
      transform: matrix(0.73, 0.68, -0.73, 0.68, 0, 0);
    }
  
    .text1,
    .text2,
    .text3 {
      position: absolute;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      line-height: 1;
      color: #FFFFFF;
    }
  
    .text1 {
      width: 8px;
      height: 19px;
      font-size: 16px;
      left: 203px;
      top: 312px;
    }
  
    .text2,
    .text3 {
      width: 45px;
      height: 25px;
      font-family: 'Average Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 19px;
      line-height: 1.3;
      color: #FFFFFF;
    }
  
    .text2 {
      left: 280px;
      top: 764px;
    }
  
    .text3 {
      left: 280px;
      top: 670px;
    }
  
    .congrats {
      position: absolute;
      font-family: 'Average Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      text-align: center;
      line-height: 1.28;
      color: #FFF1F5;
      left: 6.76%;
      right: 7.49%;
      top: 44.55%;
      bottom: 51.66%;
    }
  
    .group {
      position: absolute;
      width: 364px;
      height: 76px;
      left: 28px;
    }
  
    .group10 {
      top: 739px;
    }
  
    .group11 {
      top: 645px;
    }
  
    .rectangle65 {
      position: absolute;
      width: 364px;
      height: 76px;
      background: #E36C8F;
      border-radius: 10px;
      top: 0;
    }
  
    .team1,
    .team2 {
      position: absolute;
      font-family: 'Average Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 1.3;
      color: #FFFFFF;
      width: 85px;
      height: 39px;
      top: 0;
    }
  
    .team1 {
      left: 92px;
    }
  
    .team2 {
      left: 92px;
    }
  
    .purple-heart {
      position: absolute;
      width: 38px;
      height: 34px;
      left: 44px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
  
    .purple-heart-1 {
      top: 761px;
      background-image: url({purpleHeartImage});
    }
  
    .purple-heart-2 {
      top: 667px;
      background-image: url({purpleHeartImage});
    }
  </style>
  
  <div class="container">
    <div class="rectangle1"></div>
    <div class="ellipse1"></div>
    <div class="crown"></div>
    <div class="vector"></div>
    <div class="ellipse4"></div>
    <div class="ellipse7"></div>
    <div class="ellipse5"></div>
    <div class="ellipse6"></div>
    <div class="ellipse8"></div>
    <div class="ellipse9"></div>
    <div class="rectangle7"></div>
    <div class="text1">1</div>
    <div class="congrats">Congrats! You are in 1st Place</div>
    <div class="group group10">
      <div class="rectangle65"></div>
      <div class="text2">500pt</div>
      <div class="team1">Team 1</div>
      <div class="purple-heart purple-heart-1"></div>
    </div>
    <div class="group group11">
      <div class="rectangle65"></div>
      <div class="text3">500pt</div>
      <div class="team2">Team 2</div>
      <div class="purple-heart purple-heart-2"></div>
    </div>
  </div>

  