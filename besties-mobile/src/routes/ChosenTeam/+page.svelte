<script lang="ts">
    // TypeScript script content
    // Define your types and interfaces here
    type TeamMember  = {
      name: string;
      top: string;
    }
  
    const teamMembers: TeamMember[] = [
      { name: 'Petals', top: '45%' },
      { name: 'Sisi', top: '56%' },
      { name: 'Xander', top: '67%' },
      { name: 'Varshni', top: '78%' },
    ];
</script>

<!-- '55.21%' },
      { name: 'Sisi', top: '66%' },
      { name: 'Xander', top: '76.78%' },
      { name: 'Varshni', top: '87.56%' }, -->

  
<style>
    body{
        font-family: 'Open Sans', sans;
    }

    .container {
      position: relative;
      width: 412px;
      height: 915px;
      background: linear-gradient(180deg, #E36C8F -50%, #7A1E71 100%);
    }
  
    .title {
      position: absolute;
      width: 100%; /* Adjusted for full width */
      text-align: center;
      top: 4.27%;
      /* font-family: 'RocknRoll One', sans-serif; */
      /* font-weight: 400; */
      font-size: 40px;
      /* line-height: 58px; */
      color: #FFF1F5;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  
    .rectangle {
      position: absolute;
      width: 100%; /* Adjusted for full width */
      top: 24.29%;
      background: #FFF1F5;
      border-radius: 30px 30px 0px 0px;
    }
  
    .description {
      position: absolute;
      width: 83%; /* Adjusted for padding */
      top: 20%;
      left: 8%;
      /* font-family: 'Average Sans', sans-serif; */
      /* font-weight: 400; */
      /* font-size: 25px; */
      /* line-height: 32px; */
      text-align: center;
      color: #FFF1F5;
      /* color: #1F535F; */
      margin: 0 auto; /* Center in the available space */
    }
  
    .team-member {
      position: absolute;
      width: 322px;
      height: 66px;
      left: 45px;
      background: #FFCFDE;
      border-radius: 10px;
      /* font-family: 'RocknRoll One', sans-serif; */
      /* font-weight: 350; */
      font-size: 30px;
      line-height: 43px;
      text-align: center;
      color: black;
      margin-bottom: 20px; /* Added margin for spacing */
      padding: 10px; /* Added padding for content */
    }
  
    .rest-of-team {
      position: absolute;
      width: 86%; /* Adjusted for padding */
      top: 14%;
      left: 8%;
      /* font-family: 'Average Sans', sans-serif; */
      font-weight: 400;
      font-size: 25px;
      line-height: 32px;
      text-align: center;
      color: #FFF1F5;
      margin: 0 auto; /* Center in the available space */
    }
</style>


<body>
    <div class="container">
    <!-- <div class="title">Team 1</div> -->
    <h3 class="text-secondary font-bold text-4xl text-center title">Team 1</h3>
    <a href="/Question">
        <h3 class="py-3 text-2xl text-center description"> All of you guys answered mostly ‘B’ in the pre-game. So get to know your besties teammates so your team can beat the others in the game!</h3>
    </a>
    <div class="rectangle"></div>
    <div class="rest-of-team">
      Here are the rest of your besties!
    </div>
        {#each teamMembers as member (member.name)}
        <div class="team-member" style="top: {member.top};">
            {member.name}
        </div>
        {/each}
    </div>
</body>
  
  
  