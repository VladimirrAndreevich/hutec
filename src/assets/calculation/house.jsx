const SvgComponent = ({ color, idSvg }) => {
  // Объект с соответствиями idSvg и SVG-компонентами
  const svgComponents = {
    svg1: (
      <svg
        width="42"
        height="44"
        viewBox="0 0 42 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5.07898"
          y="32.8549"
          width="27.6452"
          height="2.09677"
          stroke={color}
        />
        <rect
          x="3.53064"
          y="36.1775"
          width="30.7419"
          height="1.32258"
          stroke={color}
        />
        <path
          d="M18.9015 4.48387L1.09509 21.129V17.6452L18.9015 1L37.0951 17.2581V21.129L18.9015 4.48387Z"
          stroke={color}
        />
        <path
          d="M4.96606 17.2581V31.5807H32.837V17.2581L18.9015 4.48389L4.96606 17.2581Z"
          stroke={color}
        />
        <path
          d="M28.579 6.03223V8.35481L31.6758 11.0645V6.03223H28.579Z"
          stroke={color}
        />
        <path
          d="M0.0952148 42L2.59521 43.4434V40.5566L0.0952148 42ZM38.0952 42L35.5952 40.5566V43.4434L38.0952 42ZM2.34521 42.25H35.8452V41.75H2.34521V42.25Z"
          fill={color}
        />
        <path
          d="M40.0952 38L41.5386 35.5L38.6518 35.5L40.0952 38ZM40.0952 0.5L38.6518 3L41.5386 3L40.0952 0.5ZM40.3452 35.75L40.3452 2.75L39.8452 2.75L39.8452 35.75L40.3452 35.75Z"
          fill={color}
        />
      </svg>
    ),
    svg2: (
      <svg
        width="43"
        height="8"
        viewBox="0 0 43 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40.4009 5.94138H3.26882C3.11433 5.94138 2.95984 5.78842 2.95984 5.63546V1.12308C2.95984 0.970119 3.11433 0.817139 3.26882 0.817139H40.4009C40.5554 0.817139 40.7099 0.970119 40.7099 1.12308V5.63546C40.7176 5.78842 40.5554 5.94138 40.4009 5.94138ZM3.66278 5.25305H40.0919V1.429H3.66278V5.25305Z"
          fill={color}
        />
        <path
          d="M42.432 7.92982H1.24453C1.09003 7.92982 0.935547 7.77686 0.935547 7.6239V5.63539C0.935547 5.48243 1.09003 5.32947 1.24453 5.32947H42.432C42.5865 5.32947 42.741 5.48243 42.741 5.63539V7.6239C42.741 7.77686 42.5865 7.92982 42.432 7.92982ZM1.63075 7.24149H42.123V5.94131H1.63075V7.24149Z"
          fill={color}
        />
        <path
          d="M40.4005 4.1823H7.2466C7.09211 4.1823 6.93762 4.02932 6.93762 3.87635C6.93762 3.72339 7.09211 3.57043 7.2466 3.57043H40.4005C40.555 3.57043 40.7095 3.72339 40.7095 3.87635C40.7172 4.02932 40.555 4.1823 40.4005 4.1823Z"
          fill={color}
        />
      </svg>
    ),
    svg3: (
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M36.6892 36.4241H0.933141C0.7621 36.4241 0.591064 36.2531 0.591064 36.0821V17.6015C0.591064 17.5159 0.67659 17.4304 0.67659 17.3449L18.5589 0.839462C18.7299 0.668421 18.901 0.668421 19.0806 0.839462L36.9629 17.2594C37.0484 17.3449 37.0484 17.4304 37.0484 17.5159V35.9965C37.1254 36.2531 36.9543 36.4241 36.6892 36.4241ZM1.28378 35.6545H36.2616V17.7725L18.8155 1.52361L1.28378 17.7725V35.6545Z"
          fill="#383736"
        />
        <path
          d="M0.665283 17.7642V36.2642H36.6653V17.7642L18.6653 1.26416L0.665283 17.7642Z"
          stroke={color}
        />
      </svg>
    ),
    svg4: (
      <svg
        width="48"
        height="29"
        viewBox="0 0 48 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.5262 6.01001L0.526245 27.51V23.01L23.5262 1.51001L47.0262 22.51V27.51L23.5262 6.01001Z"
          stroke={color}
        />
        <path
          d="M36.0262 9.01001V12.01L40.0262 15.51V9.01001H36.0262Z"
          stroke={color}
        />
      </svg>
    ),
    svg5: (
      <svg
        width="43"
        height="43"
        viewBox="0 0 43 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.4363 35.9332H5.91996C5.76547 35.9332 5.61096 35.7802 5.61096 35.6273V0.828404C5.61096 0.675442 5.76547 0.522461 5.91996 0.522461H37.4363C37.5907 0.522461 37.7452 0.675442 37.7452 0.828404V35.5508C37.7452 35.7802 37.5907 35.9332 37.4363 35.9332ZM6.30619 35.2449H37.1195V1.21081H6.30619V35.2449Z"
          fill={color}
        />
        <path
          d="M40.2405 40.4455H3.10842C2.95393 40.4455 2.79944 40.2926 2.79944 40.1396V35.6272C2.79944 35.4743 2.95393 35.3213 3.10842 35.3213H40.2405C40.395 35.3213 40.5495 35.4743 40.5495 35.6272V40.1396C40.5572 40.2926 40.395 40.4455 40.2405 40.4455ZM3.50238 39.7572H39.9315V35.9332H3.50238V39.7572Z"
          fill={color}
        />
        <path
          d="M42.2715 42.434H1.084C0.929511 42.434 0.775024 42.281 0.775024 42.128V40.1395C0.775024 39.9866 0.929511 39.8336 1.084 39.8336H42.2715C42.426 39.8336 42.5805 39.9866 42.5805 40.1395V42.128C42.5805 42.281 42.426 42.434 42.2715 42.434ZM1.47023 41.7456H41.9625V40.4455H1.47023V41.7456Z"
          fill={color}
        />
        <path
          d="M40.24 38.6864H7.08608C6.93159 38.6864 6.7771 38.5335 6.7771 38.3805C6.7771 38.2275 6.93159 38.0746 7.08608 38.0746H40.24C40.3945 38.0746 40.549 38.2275 40.549 38.3805C40.5567 38.5335 40.3945 38.6864 40.24 38.6864Z"
          fill={color}
        />
        <rect
          x="9.25476"
          y="4.00586"
          width="24.5"
          height="2.5"
          stroke={color}
          strokeWidth="0.5"
        />
        <rect
          x="9.25476"
          y="9.00586"
          width="24.5"
          height="2.5"
          stroke={color}
          strokeWidth="0.5"
        />
        <rect
          x="9.25476"
          y="14.0059"
          width="24.5"
          height="2.5"
          stroke={color}
          strokeWidth="0.5"
        />
        <rect
          x="9.25476"
          y="19.0059"
          width="24.5"
          height="2.5"
          stroke={color}
          strokeWidth="0.5"
        />
        <rect
          x="9.25476"
          y="24.0059"
          width="24.5"
          height="2.5"
          stroke={color}
          strokeWidth="0.5"
        />
        <rect
          x="9.25476"
          y="29.0059"
          width="24.5"
          height="2.5"
          stroke={color}
          strokeWidth="0.5"
        />
        <rect
          x="9.25476"
          y="6.50586"
          width="24.5"
          height="2.5"
          stroke={color}
          strokeWidth="0.5"
        />
        <rect
          x="9.25476"
          y="11.5059"
          width="24.5"
          height="2.5"
          stroke={color}
          strokeWidth="0.5"
        />
        <rect
          x="9.25476"
          y="16.5059"
          width="24.5"
          height="2.5"
          stroke={color}
          strokeWidth="0.5"
        />
        <rect
          x="9.25476"
          y="21.5059"
          width="24.5"
          height="2.5"
          stroke={color}
          strokeWidth="0.5"
        />
        <rect
          x="9.25476"
          y="26.5059"
          width="24.5"
          height="2.5"
          stroke={color}
          strokeWidth="0.5"
        />
        <rect
          x="9.25476"
          y="31.5059"
          width="24.5"
          height="2.5"
          stroke={color}
          strokeWidth="0.5"
        />
      </svg>
    ),
    svg6: (
      <svg
        width="42"
        height="43"
        viewBox="0 0 42 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M36.7746 36.179H5.25834C5.10385 36.179 4.94934 36.0261 4.94934 35.8731V1.07425C4.94934 0.921291 5.10385 0.768311 5.25834 0.768311H36.7746C36.9291 0.768311 37.0836 0.921291 37.0836 1.07425V35.7966C37.0836 36.0261 36.9291 36.179 36.7746 36.179ZM5.64457 35.4907H36.4579V1.45666H5.64457V35.4907Z"
          fill={color}
        />
        <path
          d="M39.5791 40.6914H2.44704C2.29255 40.6914 2.13806 40.5384 2.13806 40.3855V35.8731C2.13806 35.7201 2.29255 35.5671 2.44704 35.5671H39.5791C39.7336 35.5671 39.8881 35.7201 39.8881 35.8731V40.3855C39.8958 40.5384 39.7336 40.6914 39.5791 40.6914ZM2.841 40.0031H39.2701V36.179H2.841V40.0031Z"
          fill={color}
        />
        <path
          d="M21.5621 36.1789H8.70013C8.57827 36.1789 8.45642 36.026 8.45642 35.873V4.3628C8.45642 4.20984 8.57827 4.05688 8.70013 4.05688H21.5621C21.684 4.05688 21.8058 4.20984 21.8058 4.3628V35.873C21.8667 36.026 21.7449 36.1789 21.5621 36.1789ZM9.01087 35.4906H21.3184V4.66872H9.01087V35.4906Z"
          fill={color}
        />
        <path
          d="M34.0455 36.1789H21.1835C21.0617 36.1789 20.9398 36.026 20.9398 35.873V4.3628C20.9398 4.20984 21.0617 4.05688 21.1835 4.05688H34.0455C34.1674 4.05688 34.2892 4.20984 34.2892 4.3628V35.873C34.3501 36.026 34.2283 36.1789 34.0455 36.1789ZM21.4943 35.4906H33.8018V4.66872H21.4943V35.4906Z"
          fill={color}
        />
        <path
          d="M29.7498 10.7028C29.6726 10.7028 29.5953 10.7028 29.5953 10.6263C29.4408 10.5498 29.3636 10.3204 29.4408 10.1674L31.2329 7.18468C31.3102 7.03172 31.5419 6.95523 31.7041 7.03171C31.8586 7.10819 31.9359 7.33764 31.8586 7.4906L30.0665 10.4734C30.0588 10.7028 29.9043 10.7028 29.7498 10.7028Z"
          fill={color}
        />
        <path
          d="M29.2791 13.9914C29.2019 13.9914 29.1246 13.9914 29.1246 13.9149C28.9701 13.8384 28.8929 13.609 28.9701 13.456L30.7622 10.4732C30.8395 10.3203 31.0712 10.2438 31.2334 10.3203C31.3879 10.3968 31.4652 10.6262 31.3879 10.7792L29.5958 13.7619C29.5186 13.9149 29.3563 13.9914 29.2791 13.9914Z"
          fill={color}
        />
        <path
          d="M16.7498 10.7028C16.6726 10.7028 16.5953 10.7028 16.5953 10.6263C16.4408 10.5498 16.3636 10.3204 16.4408 10.1674L18.2329 7.18468C18.3102 7.03172 18.5419 6.95523 18.7041 7.03171C18.8586 7.10819 18.9359 7.33764 18.8586 7.4906L17.0665 10.4734C17.0588 10.7028 16.9043 10.7028 16.7498 10.7028Z"
          fill={color}
        />
        <path
          d="M16.2791 13.9914C16.2019 13.9914 16.1246 13.9914 16.1246 13.9149C15.9701 13.8384 15.8929 13.609 15.9701 13.456L17.7622 10.4732C17.8395 10.3203 18.0712 10.2438 18.2334 10.3203C18.3879 10.3968 18.4652 10.6262 18.3879 10.7792L16.5958 13.7619C16.5186 13.9149 16.3563 13.9914 16.2791 13.9914Z"
          fill={color}
        />
        <path
          d="M41.6102 42.6798H0.422748C0.268256 42.6798 0.11377 42.5269 0.11377 42.3739V40.3854C0.11377 40.2324 0.268256 40.0795 0.422748 40.0795H41.6102C41.7647 40.0795 41.9192 40.2324 41.9192 40.3854V42.3739C41.9192 42.5269 41.7647 42.6798 41.6102 42.6798ZM0.808977 41.9915H41.3012V40.6913H0.808977V41.9915Z"
          fill={color}
        />
        <path
          d="M39.5786 38.9323H6.4247C6.27021 38.9323 6.11572 38.7793 6.11572 38.6264C6.11572 38.4734 6.27021 38.3204 6.4247 38.3204H39.5786C39.7331 38.3204 39.8876 38.4734 39.8876 38.6264C39.8953 38.7793 39.7331 38.9323 39.5786 38.9323Z"
          fill={color}
        />
        <circle
          cx="18.4397"
          cy="21.5017"
          r="1.25"
          stroke={color}
          strokeWidth="0.5"
        />
        <circle
          cx="24.4397"
          cy="21.5017"
          r="1.25"
          stroke={color}
          strokeWidth="0.5"
        />
      </svg>
    ),
    svg7: (
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M36.8167 35.4249H5.30046C5.14597 35.4249 4.99146 35.2719 4.99146 35.119V0.320103C4.99146 0.167141 5.14597 0.0141602 5.30046 0.0141602H36.8167C36.9712 0.0141602 37.1257 0.167141 37.1257 0.320103V35.0425C37.1257 35.2719 36.9712 35.4249 36.8167 35.4249ZM5.68669 34.7366H36.5V0.702508H5.68669V34.7366Z"
          fill={color}
        />
        <path
          d="M39.62 39.9372H2.48793C2.33344 39.9372 2.17896 39.7843 2.17896 39.6313V35.1189C2.17896 34.966 2.33344 34.813 2.48793 34.813H39.62C39.7745 34.813 39.929 34.966 39.929 35.1189V39.6313C39.9367 39.7843 39.7745 39.9372 39.62 39.9372ZM2.88189 39.2489H39.311V35.4249H2.88189V39.2489Z"
          fill={color}
        />
        <path
          d="M38.9171 13.3983H36.8082C36.6538 13.3983 36.4993 13.2453 36.4993 13.0924V6.82096C36.4993 6.668 36.6538 6.51501 36.8082 6.51501H38.9171C39.0716 6.51501 39.226 6.668 39.226 6.82096V13.0924C39.311 13.2453 39.1565 13.3983 38.9171 13.3983ZM37.125 12.71H38.5308V7.12688H37.125V12.71Z"
          fill={color}
        />
        <path
          d="M38.9171 27.7767H36.8082C36.6538 27.7767 36.4993 27.6238 36.4993 27.4708V21.1994C36.4993 21.0464 36.6538 20.8934 36.8082 20.8934H38.9171C39.0716 20.8934 39.226 21.0464 39.226 21.1994V27.4708C39.311 27.6238 39.1565 27.7767 38.9171 27.7767ZM37.125 27.0884H38.5308V21.5053H37.125V27.0884Z"
          fill={color}
        />
        <path
          d="M33.302 35.4249H25.1139C24.9594 35.4249 24.8049 35.2719 24.8049 35.119V3.60878C24.8049 3.45581 24.9594 3.30286 25.1139 3.30286H33.302C33.4565 3.30286 33.611 3.45581 33.611 3.60878V35.119C33.6187 35.2719 33.4565 35.4249 33.302 35.4249ZM25.5001 34.7366H32.993V3.9147H25.5001V34.7366Z"
          fill={color}
        />
        <path
          d="M25.1136 35.4249H8.80703C8.65253 35.4249 8.49805 35.2719 8.49805 35.119V3.60878C8.49805 3.45581 8.65253 3.30286 8.80703 3.30286H25.1136C25.2681 3.30286 25.4226 3.45581 25.4226 3.60878V35.119C25.4999 35.2719 25.3454 35.4249 25.1136 35.4249ZM9.20099 34.7366H24.8047V3.9147H9.20099V34.7366Z"
          fill={color}
        />
        <path
          d="M33.302 28.0062H25.1139C24.9594 28.0062 24.8049 27.8533 24.8049 27.7003V3.60878C24.8049 3.45581 24.9594 3.30286 25.1139 3.30286H33.302C33.4565 3.30286 33.611 3.45581 33.611 3.60878V27.7003C33.6187 27.8533 33.4565 28.0062 33.302 28.0062ZM25.5001 27.3179H32.993V3.9147H25.5001V27.3179Z"
          fill={color}
        />
        <path
          d="M15.4343 15.7692C15.357 15.7692 15.2798 15.7692 15.2798 15.6927C15.1253 15.6162 15.048 15.3868 15.1253 15.2338L19.9609 6.97385C20.0381 6.82089 20.2699 6.74442 20.4321 6.8209C20.5866 6.89738 20.6638 7.12681 20.5866 7.27977L15.751 15.5397C15.6737 15.6927 15.5192 15.7692 15.4343 15.7692Z"
          fill={color}
        />
        <path
          d="M13.4108 19.1344C13.3336 19.1344 13.2563 19.1344 13.2563 19.0579C13.1018 18.9814 13.0246 18.752 13.1018 18.599L14.4305 16.3811C14.5077 16.2281 14.7395 16.1516 14.9017 16.2281C15.0562 16.3046 15.1334 16.5341 15.0562 16.687L13.7275 18.905C13.6426 19.0579 13.4881 19.1344 13.4108 19.1344Z"
          fill={color}
        />
        <path
          d="M16.3767 19.0579C16.2994 19.0579 16.2222 19.0579 16.2222 18.9814C16.0677 18.9049 15.9904 18.6755 16.0677 18.5225L19.1111 13.3983C19.1884 13.2453 19.4201 13.1689 19.5824 13.2453C19.7368 13.3218 19.8141 13.5513 19.7368 13.7042L16.6934 18.8284C16.6084 18.9814 16.4539 19.0579 16.3767 19.0579Z"
          fill={color}
        />
        <path
          d="M29.0915 20.2051C29.0142 20.2051 28.937 20.2051 28.937 20.1286C28.7825 20.0522 28.7053 19.8227 28.7825 19.6698L30.5746 16.687C30.6518 16.534 30.8836 16.4575 31.0458 16.534C31.2003 16.6105 31.2775 16.84 31.2003 16.9929L29.4082 19.9757C29.4005 20.2051 29.246 20.2051 29.0915 20.2051Z"
          fill={color}
        />
        <path
          d="M28.6208 23.4938C28.5435 23.4938 28.4663 23.4938 28.4663 23.4173C28.3118 23.3408 28.2346 23.1114 28.3118 22.9584L30.1039 19.9757C30.1812 19.8227 30.4129 19.7462 30.5751 19.8227C30.7296 19.8992 30.8068 20.1286 30.7296 20.2816L28.9375 23.2644C28.8602 23.4173 28.698 23.4938 28.6208 23.4938Z"
          fill={color}
        />
        <path
          d="M41.652 41.9257H0.464496C0.310005 41.9257 0.155518 41.7727 0.155518 41.6197V39.6312C0.155518 39.4783 0.310005 39.3253 0.464496 39.3253H41.652C41.8065 39.3253 41.961 39.4783 41.961 39.6312V41.6197C41.961 41.7727 41.8065 41.9257 41.652 41.9257ZM0.850725 41.2373H41.343V39.9372H0.850725V41.2373Z"
          fill={color}
        />
        <path
          d="M39.6204 38.1781H6.46645C6.31196 38.1781 6.15747 38.0252 6.15747 37.8722C6.15747 37.7192 6.31196 37.5663 6.46645 37.5663H39.6204C39.7749 37.5663 39.9293 37.7192 39.9293 37.8722C39.9371 38.0252 39.7749 38.1781 39.6204 38.1781Z"
          fill={color}
        />
      </svg>
    ),
  };

  return svgComponents[idSvg] || null;
};

export default SvgComponent;