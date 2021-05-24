<script lang="typescript">
  import "../../css/statuscode.pcss";
  import { fade } from "svelte/transition";
  import Header from "../templates/header.svelte";
  export let name: string;
  import BackHome from "../templates/back-home.svelte";

</script>

<div id="unavailable">
  <div
    out:fade={{ duration: 200 }}
    in:fade={{ duration: 1000 }}
    id="unavailable-text"
  >
    <Header
      text="It looks like {name} is not ready for launch!"
      gradient="yellow"
    />
    <p class="na-desc">
      Please wait as we finish wrapping this missing page.<br />In the meantime,
      you can still access the rest of<br />the site's content.
    </p>
    <BackHome gradient="yellow" />
  </div>
  <div
    out:fade={{ duration: 200 }}
    in:fade={{ duration: 1000 }}
    id="unavailable-bobby"
  >
    <svg
      xmlns="http://www.w4.org/2000/svg"
      width="700"
      height="700"
      fill="none"
    >
      <defs />
      <g class="core-circle" filter="url(#filter0_d)">
        <circle cx="356" cy="342" r="260" fill="#281428" />
        <circle
          cx="356"
          cy="342"
          r="255"
          class="stroke-circle-na"
          stroke-linecap="round"
          stroke="url(#paint0_angular)"
          stroke-width="10"
        />
      </g>
      <g filter="url(#filter1_d)">
        <g class="shocked-bobby" clip-path="url(#clip0)">
          <path
            fill="#FDFAFF"
            stroke="#FDFAFF"
            d="M357.67 340.6a9.9 9.9 0 1110.06-17.05 9.9 9.9 0 01-10.06 17.05zM282.94 299.99A9.9 9.9 0 11293 282.93 9.9 9.9 0 01282.94 300z"
          />
          <path
            fill="#FDFAFF"
            d="M306.01 343.39a4.66 4.66 0 114.74-8.02 4.66 4.66 0 01-4.74 8.02z"
          />
          <path
            fill="url(#paint1_linear)"
            d="M389.26 362.96l52.71 31.1a10.13 10.13 0 11-10.3 17.45l-52.7-31.1a10.13 10.13 0 0110.3-17.45z"
          />
          <rect
            width="42"
            height="19"
            fill="url(#paint2_linear)"
            rx="9.5"
            transform="scale(-1 1) rotate(-30.55 400.49 632.51)"
          />
        </g>
        <path
          class="bobby-circle-na"
          stroke="url(#paint3_linear)"
          stroke-dasharray="25 25"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="15"
          d="M273.24 485.15c-76.41-45.09-101.8-143.59-56.71-220 45.09-76.4 143.59-101.8 220-56.7 76.41 45.09 101.8 143.58 56.71 220-45.1 76.4-143.59 101.8-220 56.7z"
        />
        <path
          class="bobby-ring-na"
          stroke="url(#paint4_linear)"
          stroke-dasharray="22 22"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="15"
          d="M523.08 406.65c25.39 22.36 21.53 36.98-11.12 42.54-65.21 11.74-246.87-54.67-321.33-174.9-19.77-33.35-10.14-48.09 28.68-43.22"
        />
      </g>
      <defs>
        <linearGradient
          id="paint1_linear"
          x1="443.08"
          x2="317.83"
          y1="405.75"
          y2="385.27"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F88" />
          <stop offset="1" stop-color="#E15959" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="1.67"
          x2="68.82"
          y1="8.91"
          y2="23.27"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F88" />
          <stop offset="1" stop-color="#E15959" />
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="497.5"
          x2="238"
          y1="397.5"
          y2="234.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0BF131" />
          <stop offset=".25" stop-color="#4445FF" />
          <stop offset=".55" stop-color="#C429A9" />
          <stop offset=".79" stop-color="#F28B27" />
          <stop offset="1" stop-color="#FFE500" />
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="480"
          x2="173.02"
          y1="456.5"
          y2="321.72"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0BF131" />
          <stop offset=".25" stop-color="#4445FF" />
          <stop offset=".55" stop-color="#C429A9" />
          <stop offset=".87" stop-color="#F28B27" />
          <stop offset="1" stop-color="#FFE500" />
        </linearGradient>
        <filter
          id="filter0_d"
          width="540"
          height="540"
          x="86"
          y="75"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter
          id="filter1_d"
          width="601.13"
          height="596"
          x="70"
          y="84"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <radialGradient
          id="paint0_angular"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(90 7 349) scale(260)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFE500" />
          <stop offset=".19" stop-color="#F28B27" />
          <stop offset=".38" stop-color="#C429A9" />
          <stop offset=".59" stop-color="#4445FF" />
          <stop offset=".79" stop-color="#0BF131" />
          <stop offset="1" stop-color="#FFE500" />
        </radialGradient>
        <clipPath id="clip0">
          <path
            fill="#fff"
            d="M0 0h297.9v63.9H0z"
            transform="scale(-1 1) rotate(-30.55 482.7 1113.78)"
          />
        </clipPath>
      </defs>
    </svg>
  </div>
</div>
