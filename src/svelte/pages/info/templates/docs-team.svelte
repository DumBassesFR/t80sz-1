<style lang="postcss">
  .team-member {
    @apply gap-2 p-2 bg-yellow-light flex flex-col w-auto;
    img {
      @apply w-24 h-24 2xl:w-32 2xl:h-32 mr-2;
      background-color: rgb(87, 62, 21);
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
    @apply text-sm 2xl:text-xl !important;
  }
  .member-name {
    @apply mt-0;
  }
  .member-name,
  .team-role {
    @apply bdf-drop-shadow-sm shadow;
  }
  .team-member img,
  .team-role,
  .team-member {
    @apply rounded shadow;
  }
  .team-desc {
    @apply font-normal;
    min-width: 5em;
    min-height: 5em;
    max-width: 50vw;
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
    @apply inline p-1 2xl:py-0 px-2 text-xs 2xl:text-2xl capitalize !important;
    line-height: 3rem !important;
  }
</style>

<script lang="ts">
  import Base from "../../../base.svelte"
  import Bobby from "../../../bobby.svelte"

  export let name: string,
    role: string,
    hired: string,
    left: string,
    desc: string
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
  const hireWrap = () => {
    const hireSplit = hired.split("/")
    const hireFunc = new Date(hireSplit[2], hireSplit[0] - 1, hireSplit[1])
    const hireDate = `${
      months[hireFunc.getMonth()]
    }. ${hireFunc.getDate()}, ${hireFunc.getFullYear()}`
    return hireDate;
  }
  const leaveDate = leftAt()
  function leftAt() {
    if (left) {
      const leaveSplit = left.split("/")
      const leaveFunc = new Date(
        leaveSplit[2],
        leaveSplit[0] - 1,
        leaveSplit[1]
      )
      const leaveDt = `${
        months[leaveFunc.getMonth()]
      }. ${leaveFunc.getDate()}, ${leaveFunc.getFullYear()}`
      return leaveDt
    }
  }
</script>
<div class="team-member">
  <div style="display: flex; flex-direction: row;">
    <img
      loading="lazy"
      src="../../../../../src/assets/team/{name}.png"
      alt={name} />
    <div id="info">
      <h3 class="member-name">{name}</h3>
      <p class="team-role {role}-member">{role}</p>
      {#if audio}
        <a href="{audio}" style="text-decoration: none; color: #ffe500;"><b>[Audio Available]</b></a>
      {/if}
      <div class="join-leave">
        {#if hired}
          <h4 class="joined-at">
            <span style="color:#FFEA33;">Day of Hire:</span>
            {hireWrap()}
          </h4>
        {/if}
        {#if leaveDate}
          <h4 class="left-at">
            <span style="color:#FFEA33;">Day of Leave:</span>
            {leaveDate}
          </h4>
        {/if}
      </div>
    </div>
  </div>
  <p class="team-desc">{desc}</p>
</div>
