<script>
    export let gradient;   
	const gradientSets = ['90deg, rgba(11,241,49,1) 0%, rgba(32,179,123,1) 100%', '90deg,  rgba(68,69,255,1) 0%, rgba(51,121,193,1) 100%', '90deg, rgba(255,229,0,1) 0%, rgba(249,190,17,1) 100%', '90deg, rgba(242,139,39,1) 0%, rgba(249,190,17,1) 100%', '90deg, rgba(196,41,169,1) 0%, rgba(141,53,206,1) 100%'] // green, blue, yellow, orange, purple	
    function gradientVal() {
        switch(gradient) {
            case 'green':
                return gradientSets[0];
                break;
            case 'blue':
                return gradientSets[1];
                break;
            case 'purple':
                return gradientSets[4];
                break;
            case 'orange':
                return gradientSets[3];
                break;
            case 'yellow':
                return gradientSets[2];
                break;
        }
    }
</script>
<style lang="postcss">
    .back-button {
        @apply flex flex-row items-center px-2 text-base text-purple-dark shadow rounded w-auto;
        line-height: 0;
        .back-icon {
            @apply font-icon mr-1;
        }
    }
    .back-icon, .back-text {
        @apply filter-drop-shadow-sm filter;
    }
</style>
<a href="#home">
    <div class="back-button" style="background: linear-gradient({gradientVal()});">
        <p class="back-icon">home</p>
        <p class="back-text">back to homepage</p>
    </div>
</a>