<script lang="ts">
    // TypeScript script content
    // Define your types and interfaces here
    type TeamMember  = {
      name: string;
      top: string;
    }
  
    const teamMembers: TeamMember[] = [
      { name: 'Petals', top: '55.21%' },
      { name: 'Sisi', top: '66%' },
      { name: 'Xander', top: '76.78%' },
      { name: 'Varshni', top: '87.56%' },
    ];
  </script>
  
  <style>
    .container {
      position: relative;
      width: 390px;
      height: 844px;
      background: linear-gradient(180deg, #125963 0%, #8B1D3E 100%);
    }
  
    .title {
      position: absolute;
      width: 100%; /* Adjusted for full width */
      text-align: center;
      top: 4.27%;
      font-family: 'RocknRoll One', sans-serif;
      font-weight: 400;
      font-size: 40px;
      line-height: 58px;
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
      top: 29.86%;
      font-family: 'Average Sans', sans-serif;
      font-weight: 400;
      font-size: 25px;
      line-height: 32px;
      text-align: center;
      color: #1F535F;
      margin: 0 auto; /* Center in the available space */
    }
  
    .team-member {
      position: absolute;
      width: 322px;
      height: 66px;
      left: 34px;
      background: #B0E1EB;
      border-radius: 10px;
      font-family: 'RocknRoll One', sans-serif;
      font-weight: 400;
      font-size: 30px;
      line-height: 43px;
      text-align: center;
      color: #21525F;
      margin-bottom: 20px; /* Added margin for spacing */
      padding: 10px; /* Added padding for content */
    }
  
    .rest-of-team {
      position: absolute;
      width: 86%; /* Adjusted for padding */
      top: 13.98%;
      font-family: 'Average Sans', sans-serif;
      font-weight: 400;
      font-size: 25px;
      line-height: 32px;
      text-align: center;
      color: #FFF1F5;
      margin: 0 auto; /* Center in the available space */
    }
  </style>
  
  <div class="container">
    <div class="title">Team 1</div>
    <div class="rectangle"></div>
    <div class="description">
      All of you guys answered mostly ‘B’ in the pre-game. So get to know your besties teammates so your team can beat the others in the game!
    </div>
    <div class="rest-of-team">
      Here are the rest of your besties!
    </div>
    {#each teamMembers as member (member.name)}
      <div class="team-member" style="top: {member.top};">
        {member.name}
      </div>
    {/each}
  </div>
  