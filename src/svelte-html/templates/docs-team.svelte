<style lang="postcss">
  .team-member {
    @apply gap-2 p-2 bg-purple-dark flex flex-col w-auto;
    /* please end my pain below for fucks sake */
    img {
      @apply w-24 h-24 mr-2 bg-purple-light;
    }
  }
  .member-name,
  .joined-at,
  .left-at,
  .team-role {
    @apply font-bold;
  }
  .member-name,
  .joined-at,
  .left-at,
  .team-role,
  .team-desc {
    @apply m-0 mx-1 !important;
  }
  .joined-at,
  .left-at,
  .team-desc {
    @apply text-sm !important;
  }
  .member-name {
    @apply mt-0;
  }
  .member-name,
  .team-role {
    @apply bdf-drop-shadow-sm;
  }
  .team-member img,
  .team-role,
  .team-member {
    @apply rounded shadow;
  }
  .team-desc {
    @apply font-normal;
    max-width: 20em;
  }
  .ambassador-member {
    background: linear-gradient(
      90deg,
      rgba(108, 104, 217, 1) 0%,
      rgba(136, 132, 241, 1) 100%
    );
  }
  .staff-member {
    background: linear-gradient(
      90deg,
      rgba(10, 200, 50, 1) 0%,
      rgba(30, 150, 120, 1) 100%
    );
  }
  .moderator-member {
    background: linear-gradient(
      90deg,
      rgba(68, 69, 255, 1) 0%,
      rgba(51, 121, 193, 1) 100%
    );
  }
  .admin-member {
    background: linear-gradient(
      90deg,
      rgba(196, 41, 169, 1) 0%,
      rgba(141, 53, 206, 1) 100%
    );
  }
  .owner-member {
    background: linear-gradient(
      90deg,
      rgba(176, 11, 105, 1) 0%,
      rgba(204, 0, 204, 1) 100%
    );
  }
  .team-role {
    @apply inline p-1 px-2 text-xs capitalize leading-8 !important;
  }
</style>

<script>
  import Base from "../base.svelte"
  import Bobby from "../bobby.svelte"

  export let name
  export let role
  export let hired
  export let left
  export let desc
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  const hireSplit = hired.split("/")
  const hireFunc = new Date(hireSplit[2], hireSplit[0], hireSplit[1])
  const hireDate = `${
    months[hireFunc.getMonth() - 1]
  }. ${hireFunc.getDate()} ${hireFunc.getFullYear()}`
  const leaveDate = leftAt()
  function leftAt() {
    if (left) {
      const leaveSplit = left.split("/")
      const leaveFunc = new Date(leaveSplit[2], leaveSplit[0], leaveSplit[1])
      const leaveDt = `${
        months[leaveFunc.getMonth() - 1]
      }. ${leaveFunc.getDate()} ${leaveFunc.getFullYear()}`
      return leaveDt
    }
  }
</script>

<div class="team-member">
  <div style="display: flex; flex-direction: row;">
    <img src="../src/assets/team/{name}.png" alt={name} />
    <div id="info">
      <h3 class="member-name">{name}</h3>
      <p class="team-role {role}-member">{role}</p>
      <div class="join-leave">
        <h4 class="joined-at">
          <span style="color:#ffe500;">Day of Hire:</span>
          {hireDate}
        </h4>
        {#if leaveDate}
          <h4 class="left-at">
            <span style="color:#ffe500;">Day of Leave:</span>
            {leaveDate}
          </h4>
        {/if}
      </div>
    </div>
  </div>
  <p class="team-desc">{desc}</p>
</div>
