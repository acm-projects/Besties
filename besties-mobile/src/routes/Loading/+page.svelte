<script lang="ts">
  export let loadingPercentage: number = 0;
</script>

<style>
  /* Loading Bar Container */
  .loading-bar {
    position: relative;
    width: 375px;
    height: 812px;
    background: #FDC1D2;
  }

  /* Shadow */
  .shadow {
    position: absolute;
    width: 292px;
    height: 23px;
    left: 42px;
    top: 413px;
    background: radial-gradient(
      100.64% 213.71% at -5.14% 100%,
      #224BDA 0%,
      #5949DB 29.69%,
      #AD33B8 54.17%,
      #C42EA3 77.08%,
      #E93AB8 100%
    );
    filter: blur(25px);
    border-radius: 20px;
  }

  /* Rectangle 1 */
  .rectangle-1 {
    position: absolute;
    width: 301px;
    height: 29px;
    left: 42px;
    top: 399px;
    background: #FFFFFF;
    border-radius: 20px;
  }

  /* Rectangle 3 */
  .rectangle-3 {
    position: absolute;
    width: 30px;
    height: 21px;
    left: 50px;
    top: 403px;
    background: linear-gradient(60.14deg, #8B1D3E 5.72%, #E974A7 46.13%, #FFA9D7 76.28%);
    border-radius: 20px;
  }

  /* Mask group */
  .mask-group {
    position: absolute;
    width: 301px;
    height: 29px;
    left: 42px;
    top: 399px;
    mask: url(#mask);
  }

  /* Rectangle 4 */
  .rectangle-4 {
    position: absolute;
    width: 301px;
    height: 29px;
    left: 42px;
    top: 399px;
    background: #D9D9D9;
    border-radius: 32px;
  }

  /* Ellipse 1 */
  .ellipse-1 {
    position: absolute;
    width: 60px;
    height: 60px;
    left: -18px;
    top: 384px;
    background: #FFFFFF;
    mix-blend-mode: overlay;
    filter: blur(25px);
  }

  /* Ellipse 2 */
  .ellipse-2 {
    position: absolute;
    width: 103px;
    height: 103px;
    left: -192px;
    top: 361px;
    background: #FFFFFF;
    mix-blend-mode: overlay;
    filter: blur(25px);
  }

  /* Besties Logo */
  .besties-logo {
    position: absolute;
    width: 324px;
    height: 120px;
    left: 26px;
    top: 266px;
    background-image: url('image.png');
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
  }

  /* Loading Bar Progress */
  .loading-progress {
    position: absolute;
    width: calc(100% * var(--loading-percentage));
    height: 100%;
    background: linear-gradient(
      to right,
      #224BDA 0%,
      #5949DB 29.69%,
      #AD33B8 54.17%,
      #C42EA3 77.08%,
      #E93AB8 100%
    );
    border-radius: 20px;
  }
</style>

<div class="loading-bar">
  <div class="shadow"></div>
  <div class="rectangle-1"></div>
  <div class="rectangle-3"></div>
  <div class="mask-group">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 301 29">
      <mask id="mask">
        <rect width="301" height="29" fill="white" />
      </mask>
    </svg>
  </div>
  <div class="rectangle-4"></div>
  <div class="ellipse-1"></div>
  <div class="ellipse-2"></div>
  <div class="besties-logo"></div>
  <div class="loading-progress" style="--loading-percentage: {loadingPercentage / 100}"></div>
</div>
