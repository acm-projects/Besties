<script lang="ts">
    // If you have any TypeScript variables or functions, they can be added here.
  </script>
  
  <style>
    .container {
      position: relative;
      width: 390px;
      height: 844px;
      background: #FDC1D2;
    }
  
    /* Assuming the vector is an SVG or image */
    .vector {
      position: absolute;
      width: 304px;
      height: 256px;
      left: 250px;
      top: 547.06px;
      background: #F3B2CA;
      transform: rotate(-85.49deg);
    }
  
    .logo {
      position: absolute;
      width: 324px;
      height: 120px;
      left: 33px;
      top: 302px;
      /* Placeholder for your image */
      background: url('/path/to/your/image.png');
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
  
    .loading-bar-container {
      position: absolute;
      width: 339px;
      height: 13.86px;
      left: 25px;
      top: 460px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
  
    .bar-background {
      width: 100%;
      height: 100%;
      background: #EED4E9;
      border-radius: 20px;
    }
  
    .bar-progress {
      width: 58%; /* Assuming a progress of 58% */
      height: 100%;
      background: #8B1D3E;
      border-radius: 20px;
    }
  
    /* Additional vector styles omitted for brevity */
  </style>
  
  <div class="container">
    <div class="vector"></div>
    <div class="logo"></div>
    <div class="loading-bar-container">
      <div class="bar-background">
        <div class="bar-progress"></div>
      </div>
    </div>
    <!-- Additional vectors omitted for brevity -->
  </div>
  