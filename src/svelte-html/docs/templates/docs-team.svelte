<script>
import Base from "../../base.svelte";
import Bobby from "../../bobby.svelte";

    export let name;
    export let role;
    export let hired;
    export let left;
    export let desc;
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const hireSplit =  hired.split('/');
    const hireFunc = new Date(hireSplit[2], hireSplit[0], hireSplit[1]);
    const hireDate = `${months[hireFunc.getMonth() - 1]}. ${hireFunc.getDate()} ${hireFunc.getFullYear()}`
    const leaveDate = leftAt();
    function leftAt() {
        if (left) {
            const leaveSplit =  left.split('/');
            const leaveFunc = new Date(leaveSplit[2], leaveSplit[0], leaveSplit[1]);
            const leaveDt = `${months[leaveFunc.getMonth() - 1]}. ${leaveFunc.getDate()} ${leaveFunc.getFullYear()}`
            return leaveDt;
        }
    }
</script>
<style>
    .team-member {
        display: flex;
        flex-direction: column;
        padding: 0.5em;
        background: #150411;
        gap: 0.5rem;
        /* please end my pain below for fucks sake */
        width: fit-content;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        height: fit-content;
        height: -webkit-fit-content;
        height: -moz-fit-content;
    }
    .team-member img {
        width: 5em;
        height: 5em;
        margin-right: 0.5rem;
        background-color: #281428;
    }
    .member-name, .joined-at, .left-at, .team-role {
        font-weight: 700;
    }
    .member-name, .joined-at, .left-at, .team-role, .team-desc {
        margin: 0;
        margin-top: 0.05rem !important;
        margin-bottom: 0.05rem !important;
    }
    .joined-at, .left-at, .team-desc {
        font-size: 0.6em !important;
        line-height: 1.5em;
    }
    .member-name {
        margin-top: 0 !important;
    }
    .member-name, .team-role {
        text-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
    }
    .team-member img, .team-role, .team-member {
        border-radius: 5px;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }
    .team-desc {
        font-weight: 400;
        max-width: 20em;
    }
    .ambassador-member {
      background: linear-gradient(90deg, rgba(108,104,217,1) 0%, rgba(136,132,241,1) 100%);
    }
    .staff-member {
      background: linear-gradient(90deg, rgba(10,200,50,1) 0%, rgba(30,150,120,1) 100%);
    }
    .moderator-member {
      background: linear-gradient(90deg, rgba(68,69,255,1) 0%, rgba(51,121,193,1) 100%);
    }
    .admin-member {
      background: linear-gradient(90deg, rgba(196,41,169,1) 0%, rgba(141,53,206,1) 100%);
    }
    .owner-member {
      background: linear-gradient(90deg, rgba(176,11,105,1) 0%, rgba(204,0,204,1) 100%);
    }
    .team-role {
        padding: 0.2rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        display: inline;
        font-size: 0.75rem !important;
        text-transform: capitalize;
    }
</style>
<div class="team-member">
    <div style="display: flex; flex-direction: row;">
        <img src="../src/assets/team/{name}.png" alt={name}>
        <div id="info">
            <h3 class="member-name">{name}</h3>
            <p class="team-role {role}-member">{role}</p>
            <div class="join-leave">
                <h4 class="joined-at"><span style="color:#ffe500;">Day of Hire:</span> {hireDate}</h4>
                {#if leaveDate}
                    <h4 class="left-at"><span style="color:#ffe500;">Day of Leave:</span> {leaveDate}</h4>
                {/if}
            </div>
        </div>
    </div>
    <p class="team-desc">{desc}</p>
</div>
