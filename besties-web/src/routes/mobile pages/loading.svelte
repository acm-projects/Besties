<script lang="ts">
    // TypeScript code
    let loadingProgress = 30; // Example variable to show loading progress
  </script>
  
  <style>
    .loading-container {
      position: relative;
      width: 375px;
      height: 812px;
      background: #FDC1D2;
    }
  
    .shadow {
      position: absolute;
      width: 292px;
      height: 23px;
      left: 42px;
      top: 413px;
      background: radial-gradient(100.64% 213.71% at -5.14% 100%, #224BDA 0%, #5949DB 29.69%, #AD33B8 54.17%, #C42EA3 77.08%, #E93AB8 100%);
      filter: blur(25px);
      border-radius: 20px;
    }
  
    .progress-bar {
      position: absolute;
      width: 301px;
      height: 29px;
      left: 42px;
      top: 399px;
      background: #FFFFFF;
      border-radius: 20px;
    }
  
    .progress {
      position: absolute;
      width: 30px; /* This width would be dynamic based on the loading progress */
      height: 21px;
      left: 50px;
      top: 403px;
      background: linear-gradient(60.14deg, #8B1D3E 5.72%, #E974A7 46.13%, #FFA9D7 76.28%);
      border-radius: 20px;
    }
  
    .ellipse-large {
      position: absolute;
      width: 103px;
      height: 103px;
      left: -192px;
      top: 361px;
      background: #FFFFFF;
      mix-blend-mode: overlay;
      filter: blur(25px);
    }
  
    .ellipse-small {
      position: absolute;
      width: 60px;
      height: 60px;
      left: -18px;
      top: 384px;
      background: #FFFFFF;
      mix-blend-mode: overlay;
      filter: blur(25px);
    }
  
    .logo {
      position: absolute;
      width: 324px;
      height: 120px;
      left: 26px;
      top: 266px;
      background: url('image.png');
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
  </style>
  
  <div class="loading-container">
    <div class="shadow"></div>
    <div class="progress-bar">
      <div class="progress" style="width: {loadingProgress}px;"></div>
    </div>
    <div class="ellipse-large"></div>
    <div class="ellipse-small"></div>
    <div class="logo"></div>
    <!-- Additional markup for logos, etc. -->
  </div>
  