<script>
    let showLeaderboard = false;
  
    function toggleLeaderboard() {
      showLeaderboard = !showLeaderboard;
    }
  </script>
  
  <style>
    /* iPhone */
    .iphone {
      position: relative;
      width: 414px;
      height: 844px;
      overflow-y: scroll;
      background: #7A1E71;
    }
  
    /* Frame 7 */
    .frame7 {
      position: absolute;
      width: 364px;
      height: 76px;
      left: 24px;
      top: 631px;
      background: #E36C8F;
      border-radius: 10px;
    }
  
    /* Ellipse 1 */
    .ellipse1 {
      position: absolute;
      width: 40px;
      height: 40px;
      left: 13px;
      top: 18px;
      background: url(.png);
    }
  
    /* Leaders board */
    .leadersBoard {
      position: absolute;
      width: 54px;
      height: 25px;
      left: 76px;
      top: 26px;
      font-family: 'Average Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 19px;
      line-height: 25px;
      color: #FFFFFF;
    }
  
    /* 500pt */
    .pt500 {
      position: absolute;
      width: 45px;
      height: 25px;
      left: 249px;
      top: 26px;
      font-family: 'Average Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 19px;
      line-height: 25px;
      color: #FFFFFF;
    }
  
    /* akar-icons:chevron-up */
    .chevronUp {
      position: absolute;
      width: 30px;
      height: 30px;
      left: 323px;
      top: 23px;
    }
  
    /* Vector */
    .vector {
      position: absolute;
      left: 16.67%;
      right: 16.67%;
      top: 29.17%;
      bottom: 37.5%;
      border: 4.16667px solid #0D782B;
    }
  
    /* Frame 6 */
    .frame6 {
      position: absolute;
      width: 364px;
      height: 76px;
      left: 25px;
      top: 733px;
      background: #E36C8F;
      border-radius: 10px;
    }
  
    /* Ellipse 1 */
    .ellipse1-frame6 {
      position: absolute;
      width: 40px;
      height: 40px;
      left: 13px;
      top: 18px;
      background: url(.png);
    }
  
    /* Leaders board for Frame 6 */
    .leadersBoard-frame6 {
      position: absolute;
      width: 57px;
      height: 25px;
      left: 76px;
      top: 26px;
      font-family: 'Average Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 19px;
      line-height: 25px;
      color: #FFFFFF;
    }
  
    /* 500pt for Frame 6 */
    .pt500-frame6 {
      position: absolute;
      width: 44px;
      height: 25px;
      left: 249px;
      top: 26px;
      font-family: 'Average Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 19px;
      line-height: 25px;
      color: #FFFFFF;
    }
  
    /* akar-icons:chevron-up for Frame 6 */
    .chevronUp-frame6 {
      position: absolute;
      width: 30px;
      height: 30px;
      left: 323px;
      top: 23px;
    }
  
    /* Vector for Frame 6 */
    .vector-frame6 {
      position: absolute;
      left: 16.67%;
      right: 16.67%;
      top: 37.5%;
      bottom: 29.17%;
      border: 4.16667px solid #691C17;
    }
  
    /* Rectangle 1 */
    .rectangle1 {
      position: absolute;
      width: 430px;
      height: 604px;
      left: -8px;
      top: 0px;
      background: #E36C8F;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      border-radius: 30px;
    }
  
    /* Ellipse 1 for Rectangle 1 */
    .ellipse1-rectangle1 {
      position: absolute;
      width: 166px;
      height: 156px;
      left: 124px;
      top: 169px;
      background: #F8C359;
      border: 3px solid #FFAA00;
    }
  
    /* Group 1 */
    .group1 {
      position: absolute;
      width: 90px;
      height: 74px;
      left: 161px;
      top: 206px;
    }
  
    /* Vector in Group 1 */
    .vector-group1 {
      position: absolute;
      left: 40.81%;
      right: 41.29%;
      top: 26.7%;
      bottom: 66.82%;
      background: #FFAA00;
    }
  
    /* Ellipse 4 */
    .ellipse4 {
      position: absolute;
      width: 21.18px;
      height: 22.08px;
      left: 195.41px;
      top: 206px;
      background: #FFAA00;
    }
  
    /* Ellipse 7 */
    .ellipse7 {
      position: absolute;
      width: 15.88px;
      height: 16.56px;
      left: 198.06px;
      top: 247.39px;
      background: #957916;
    }
  
    /* Ellipse 5 */
    .ellipse5 {
      position: absolute;
      width: 13.24px;
      height: 13.8px;
      left: 237.76px;
      top: 228.07px;
      background: #FFAA00;
    }
  
    /* Ellipse 6 */
    .ellipse6 {
      position: absolute;
      width: 13.24px;
      height: 13.8px;
      left: 161px;
      top: 228.07px;
      background: #FFAA00;
    }
  
    /* Ellipse 8 */
    .ellipse8 {
      position: absolute;
      width: 7.94px;
      height: 8.28px;
      left: 182.18px;
      top: 255.67px;
      background: #957916;
    }
  
    /* Ellipse 9 */
    .ellipse9 {
      position: absolute;
      width: 7.94px;
      height: 8.28px;
      left: 221.88px;
      top: 255.67px;
      background: #957916;
    }
  
    /* Rectangle 7 */
    .rectangle7 {
      position: absolute;
      width: 33.39px;
      height: 33.39px;
      left: 207.04px;
      top: 298.28px;
      background: #FFAA00;
      border-radius: 5px;
      transform: matrix(0.73, 0.68, -0.73, 0.68, 0, 0);
    }
  
    /* 1 */
    .number1 {
      position: absolute;
      width: 8px;
      height: 19px;
      left: 203px;
      top: 312px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: #FFFFFF;
    }
  
    /* Congrats! You are in 1st Place */
    .congratsText {
      position: absolute;
      left: 6.76%;
      right: 7.49%;
      top: 44.55%;
      bottom: 51.66%;
      font-family: 'Average Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 32px;
      text-align: center;
      color: #FFF1F5;
    }
  </style>
  
  <div class="iphone">
    <div class="frame7">
      <div class="ellipse1"></div>
      <div class="leadersBoard">Leaders board</div>
      <div class="pt500">500pt</div>
      <div class="chevronUp"></div>
      <div class="vector"></div>
    </div>
    <div class="frame6">
      <div class="ellipse1-frame6"></div>
      <div class="leadersBoard-frame6">Leaders board</div>
      <div class="pt500-frame6">500pt</div>
      <div class="chevronUp-frame6"></div>
      <div class="vector-frame6"></div>
    </div>
    <div class="rectangle1">
      <div class="ellipse1-rectangle1"></div>
      <div class="group1">
        <div class="vector-group1"></div>
      </div>
      <div class="ellipse4"></div>
      <div class="ellipse7"></div>
      <div class="ellipse5"></div>
      <div class="ellipse6"></div>
      <div class="ellipse8"></div>
      <div class="ellipse9"></div>
      <div class="rectangle7"></div>
      <div class="number1">1</div>
      <div class="congratsText">Congrats! You are in 1st Place</div>
    </div>
  </div>

  