---
title: ChatTTS
date: 2021-07-29 14:57:01
permalink: /ChatTTS
article: false
math: true
---

    <link rel="manifest" crossorigin="use-credentials" href="manifest.json">
    <link rel="icon" type="image/png" href="icon.png">
    <link rel="apple-touch-icon" href="icon.png" sizes="144x144">

    <link href="head.css" rel="stylesheet">
    <script type="text/javaScript" src="head.js"></script>

    <div style="display: none">
        <svg>
            <symbol viewBox="0 0 24 24" id="optionIcon">
                <path fill="currentColor"
                    d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z">
                </path>
            </symbol>
            <symbol viewBox="0 0 24 24" id="refreshIcon">
                <path fill="currentColor"
                    d="M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795z">
                </path>
            </symbol>
            <symbol viewBox="0 0 24 24" id="halfRefIcon">
                <path fill="currentColor"
                    d="M 4.009 12.163 C 4.012 12.206 2.02 12.329 2 12.098 C 2 6.575 6.477 2 12 2 C 17.523 2 22 6.477 22 12 C 22 14.136 21.33 16.116 20.19 17.74 L 17 12 L 20 12 C 19.999 5.842 13.333 1.993 7.999 5.073 C 3.211 8.343 4.374 12.389 4.009 12.163 Z" />
            </symbol>
            <symbol viewBox="-2 -2 20 20" id="copyIcon">
                <path fill="currentColor"
                    d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z">
                </path>
                <path fill="currentColor"
                    d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z">
                </path>
            </symbol>
            <symbol viewBox="0 0 24 24" id="delIcon">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 7v0a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v0M9 7h6M9 7H6m9 0h3m2 0h-2M4 7h2m0 0v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7">
                </path>
            </symbol>
            <symbol viewBox="0 0 24 24" id="readyVoiceIcon">
                <path fill="currentColor"
                    d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z">
                </path>
            </symbol>
            <symbol viewBox="0 0 20 20" id="pauseVoiceIcon">
                <path stroke="currentColor" stroke-width="2.4" d="M6 3v14M14 3v14"></path>
            </symbol>
            <symbol viewBox="0 0 16 16" id="resumeVoiceIcon">
                <path fill="currentColor" d="M4 3L4 13L12 8Z"></path>
            </symbol>
            <symbol viewBox="0 0 24 24" id="stopResIcon">
                <path fill="currentColor"
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16zM9 9h6v6H9V9z">
                </path>
            </symbol>
            <symbol viewBox="0 0 128 128" id="downAudioIcon">
                <path
                    d="M 64.662 1.549 C 56.549 4.524, 46.998 14.179, 45.523 20.895 C 45.041 23.089, 44.073 23.833, 40.433 24.807 C 34.752 26.326, 27.956 32.929, 25.527 39.289 C 24.273 42.574, 23.884 45.715, 24.196 50.034 C 24.620 55.897, 24.528 56.193, 21.836 57.585 C 17.142 60.012, 16 63.617, 16 76 C 16 88.463, 17.137 91.985, 21.967 94.483 C 28.244 97.729, 36.120 95.350, 38.579 89.466 C 39.387 87.532, 40 82.764, 40 78.415 C 40 70.971, 40.060 70.783, 42.250 71.370 C 43.487 71.701, 48.888 71.979, 54.250 71.986 L 64 72 64 76 L 64 80 57.122 80 C 49.420 80, 48.614 80.543, 47.547 86.453 C 46.552 91.964, 43.550 97.473, 40.273 99.803 C 33 104.974, 23.120 105.042, 16.118 99.971 C 11.407 96.558, 9.048 92.484, 8.145 86.205 C 6.963 77.979, 0.794 77.729, 0.191 85.883 C -0.196 91.111, 3.323 99.170, 8.062 103.908 C 11.290 107.136, 20.073 111.969, 22.750 111.990 C 23.540 111.996, 24 113.472, 24 116 C 24 119.740, 23.813 120, 21.122 120 C 17.674 120, 15.727 122.044, 16.173 125.195 C 16.492 127.441, 16.781 127.500, 27.391 127.500 C 36.676 127.500, 38.445 127.242, 39.386 125.750 C 40.993 123.203, 38.986 120.568, 35.149 120.187 C 32.206 119.894, 32 119.617, 32 115.956 C 32 112.509, 32.330 111.959, 34.750 111.377 C 42.181 109.591, 52.157 101.208, 53.575 95.559 C 53.928 94.152, 54.514 93, 54.878 93 C 55.242 93, 59.797 97.275, 65 102.500 C 70.762 108.286, 75.256 112, 76.495 112 C 77.769 112, 83.287 107.231, 91.264 99.236 C 101.113 89.366, 104 85.876, 104 83.843 C 104 80.580, 102.553 80, 94.418 80 L 88 80 88 76.105 L 88 72.211 99.750 71.815 C 113.117 71.364, 117.595 69.741, 122.762 63.473 C 128.159 56.925, 129.673 45.269, 126.134 37.500 C 123.787 32.346, 117.218 26.445, 112.132 24.921 C 108.617 23.868, 107.767 22.968, 105.028 17.405 C 99.364 5.901, 89.280 -0.062, 75.712 0.070 C 71.746 0.109, 66.773 0.774, 64.662 1.549 M 67.885 9.380 C 60.093 12.164, 55.057 17.704, 52.527 26.276 C 51.174 30.856, 50.220 31.617, 44.729 32.496 C 37.017 33.729, 30.917 42.446, 32.374 50.154 C 34.239 60.026, 40.582 63.944, 54.750 63.978 L 64 64 64 57.122 C 64 52.457, 64.449 49.872, 65.396 49.086 C 66.310 48.328, 70.370 48.027, 77.146 48.214 L 87.500 48.500 87.794 56.359 L 88.088 64.218 98.989 63.845 C 108.043 63.535, 110.356 63.125, 112.634 61.424 C 119.736 56.122, 121.911 47.667, 118.097 40.190 C 115.870 35.824, 110.154 32.014, 105.790 31.985 C 102.250 31.961, 101.126 30.787, 99.532 25.443 C 95.580 12.197, 80.880 4.736, 67.885 9.380 M 72 70.800 C 72 80.978, 71.625 85.975, 70.800 86.800 C 70.140 87.460, 67.781 88, 65.559 88 L 61.517 88 68.759 95.241 L 76 102.483 83.241 95.241 L 90.483 88 86.441 88 C 84.219 88, 81.860 87.460, 81.200 86.800 C 80.375 85.975, 80 80.978, 80 70.800 L 80 56 76 56 L 72 56 72 70.800 M 25.200 65.200 C 23.566 66.834, 23.566 85.166, 25.200 86.800 C 27.002 88.602, 29.798 88.246, 30.965 86.066 C 31.534 85.002, 32 80.472, 32 76 C 32 71.528, 31.534 66.998, 30.965 65.934 C 29.798 63.754, 27.002 63.398, 25.200 65.200"
                    stroke="none" fill="currentColor" fill-rule="evenodd" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="chatIcon">
                <path fill="currentColor"
                    d="m18 21l-1.4-1.4l1.575-1.6H14v-2h4.175L16.6 14.4L18 13l4 4l-4 4ZM3 21V6q0-.825.588-1.413T5 4h12q.825 0 1.413.588T19 6v5.075q-.25-.05-.5-.063T18 11q-.25 0-.5.013t-.5.062V6H5v10h7.075q-.05.25-.063.5T12 17q0 .25.013.5t.062.5H6l-3 3Zm4-11h8V8H7v2Zm0 4h5v-2H7v2Zm-2 2V6v10Z" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="chatEditIcon">
                <path fill="currentColor"
                    d="M5 19h1.4l8.625-8.625l-1.4-1.4L5 17.6V19ZM19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Zm-3.525-.725l-.7-.7l1.4 1.4l-.7-.7Z">
                </path>
            </symbol>
            <symbol viewBox="0 0 24 24" id="deleteIcon">
                <path fill="currentColor"
                    d="M8 20v-5h2v5h9v-7H5v7h3zm-4-9h16V8h-6V4h-4v4H4v3zM3 21v-8H2V7a1 1 0 0 1 1-1h5V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3h5a1 1 0 0 1 1 1v6h-1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z">
                </path>
            </symbol>
            <symbol viewBox="0 0 24 24" id="addIcon" stroke="currentColor" fill="none" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </symbol>
            <symbol viewBox="0 0 200 100" preserveAspectRatio="xMidYMid" id="loadingIcon">
                <g transform="translate(50 50)">
                    <circle cx="0" cy="0" r="15" fill="#e15b64">
                        <animateTransform attributeName="transform" type="scale" begin="-0.3333333333333333s"
                            calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1"
                            dur="1s" repeatCount="indefinite"></animateTransform>
                    </circle>
                </g>
                <g transform="translate(100 50)">
                    <circle cx="0" cy="0" r="15" fill="#f8b26a">
                        <animateTransform attributeName="transform" type="scale" begin="-0.16666666666666666s"
                            calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1"
                            dur="1s" repeatCount="indefinite"></animateTransform>
                    </circle>
                </g>
                <g transform="translate(150 50)">
                    <circle cx="0" cy="0" r="15" fill="#99c959">
                        <animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline"
                            keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s"
                            repeatCount="indefinite"></animateTransform>
                    </circle>
                </g>
            </symbol>
            <symbol viewBox="0 0 24 24" id="exportIcon">
                <path fill="currentColor"
                    d="m17.86 18l1.04 1c-1.4 1.2-3.96 2-6.9 2c-4.41 0-8-1.79-8-4V7c0-2.21 3.58-4 8-4c2.95 0 5.5.8 6.9 2l-1.04 1l-.36.4C16.65 5.77 14.78 5 12 5C8.13 5 6 6.5 6 7s2.13 2 6 2c1.37 0 2.5-.19 3.42-.46l.96.96H13.5v1.42c-.5.05-1 .08-1.5.08c-2.39 0-4.53-.53-6-1.36v2.81C7.3 13.4 9.58 14 12 14c.5 0 1-.03 1.5-.08v.58h2.88l-1 1l.12.11c-1.09.25-2.26.39-3.5.39c-2.28 0-4.39-.45-6-1.23V17c0 .5 2.13 2 6 2c2.78 0 4.65-.77 5.5-1.39l.36.39m1.06-10.92L17.5 8.5L20 11h-5v2h5l-2.5 2.5l1.42 1.42L23.84 12l-4.92-4.92Z" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="importIcon">
                <path fill="currentColor"
                    d="m8.84 12l-4.92 4.92L2.5 15.5L5 13H0v-2h5L2.5 8.5l1.42-1.42L8.84 12M12 3C8.59 3 5.68 4.07 4.53 5.57L5 6l1.03 1.07C6 7.05 6 7 6 7c0-.5 2.13-2 6-2s6 1.5 6 2s-2.13 2-6 2c-2.62 0-4.42-.69-5.32-1.28l3.12 3.12c.7.1 1.44.16 2.2.16c2.39 0 4.53-.53 6-1.36v2.81c-1.3.95-3.58 1.55-6 1.55c-.96 0-1.9-.1-2.76-.27l-1.65 1.64c1.32.4 2.82.63 4.41.63c2.28 0 4.39-.45 6-1.23V17c0 .5-2.13 2-6 2s-6-1.5-6-2v-.04L5 18l-.46.43C5.69 19.93 8.6 21 12 21c4.41 0 8-1.79 8-4V7c0-2.21-3.58-4-8-4Z" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="clearAllIcon">
                <path fill="currentColor"
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16zm0-9.414l2.828-2.829l1.415 1.415L13.414 12l2.829 2.828l-1.415 1.415L12 13.414l-2.828 2.829l-1.415-1.415L10.586 12L7.757 9.172l1.415-1.415L12 10.586z">
                </path>
            </symbol>
            <symbol viewBox="0 0 24 24" id="collapseFullIcon">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m20 20l-5-5m0 0v4m0-4h4M4 20l5-5m0 0v4m0-4H5M20 4l-5 5m0 0V5m0 4h4M4 4l5 5m0 0V5m0 4H5" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="expandFullIcon">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M9 9L4 4m0 0v4m0-4h4m7 5l5-5m0 0v4m0-4h-4M9 15l-5 5m0 0v-4m0 4h4m7-5l5 5m0 0v-4m0 4h-4" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="darkThemeIcon">
                <path fill="currentColor"
                    d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z">
                </path>
            </symbol>
            <symbol viewBox="0 0 24 24" id="lightThemeIcon">
                <path fill="currentColor"
                    d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z">
                </path>
            </symbol>
            <symbol viewBox="0 0 24 24" id="autoThemeIcon">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M9.173 14.83a4 4 0 1 1 5.657-5.657" />
                    <path
                        d="m11.294 12.707l.174.247a7.5 7.5 0 0 0 8.845 2.492A9 9 0 0 1 5.642 18.36M3 12h1m8-9v1M5.6 5.6l.7.7M3 21L21 3" />
                </g>
            </symbol>
            <symbol viewBox="0 0 24 24" id="newFolderIcon">
                <path fill="currentColor"
                    d="M14 16h2v-2h2v-2h-2v-2h-2v2h-2v2h2v2ZM2 20V4h8l2 2h10v14H2Zm2-2h16V8h-8.825l-2-2H4v12Zm0 0V6v12Z" />
            </symbol>
            <symbol viewBox="0 0 20 20" id="expandFolderIcon">
                <path fill="currentColor"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z">
                </path>
            </symbol>
            <symbol viewBox="0 0 24 24" id="closeIcon">
                <path fill="currentColor"
                    d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="settingIcon">
                <path fill="currentColor"
                    d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z">
                </path>
                <circle fill="currentColor" cx="12" cy="12" r="3.5"></circle>
            </symbol>
            <symbol viewBox="298 299 1808 1808" id="aiIcon">
                <path fill="white"
                    d="M1107.3 299.1c-198 0-373.9 127.3-435.2 315.3C544.8 640.6 434.9 720.2 370.5 833c-99.3 171.4-76.6 386.9 56.4 533.8-41.1 123.1-27 257.7 38.6 369.2 98.7 172 297.3 260.2 491.6 219.2 86.1 97 209.8 152.3 339.6 151.8 198 0 373.9-127.3 435.3-315.3 127.5-26.3 237.2-105.9 301-218.5 99.9-171.4 77.2-386.9-55.8-533.9v-.6c41.1-123.1 27-257.8-38.6-369.8-98.7-171.4-297.3-259.6-491-218.6-86.6-96.8-210.5-151.8-340.3-151.2zm0 117.5-.6.6c79.7 0 156.3 27.5 217.6 78.4-2.5 1.2-7.4 4.3-11 6.1L952.8 709.3c-18.4 10.4-29.4 30-29.4 51.4V1248l-155.1-89.4V755.8c-.1-187.1 151.6-338.9 339-339.2zm434.2 141.9c121.6-.2 234 64.5 294.7 169.8 39.2 68.6 53.9 148.8 40.4 226.5-2.5-1.8-7.3-4.3-10.4-6.1l-360.4-208.2c-18.4-10.4-41-10.4-59.4 0L1024 984.2V805.4L1372.7 604c51.3-29.7 109.5-45.4 168.8-45.5zM650 743.5v427.9c0 21.4 11 40.4 29.4 51.4l421.7 243-155.7 90L597.2 1355c-162-93.8-217.4-300.9-123.8-462.8C513.1 823.6 575.5 771 650 743.5zm807.9 106 348.8 200.8c162.5 93.7 217.6 300.6 123.8 462.8l.6.6c-39.8 68.6-102.4 121.2-176.5 148.2v-428c0-21.4-11-41-29.4-51.4l-422.3-243.7 155-89.3zM1201.7 997l177.8 102.8v205.1l-177.8 102.8-177.8-102.8v-205.1L1201.7 997zm279.5 161.6 155.1 89.4v402.2c0 187.3-152 339.2-339 339.2v-.6c-79.1 0-156.3-27.6-217-78.4 2.5-1.2 8-4.3 11-6.1l360.4-207.5c18.4-10.4 30-30 29.4-51.4l.1-486.8zM1380 1421.9v178.8l-348.8 200.8c-162.5 93.1-369.6 38-463.4-123.7h.6c-39.8-68-54-148.8-40.5-226.5 2.5 1.8 7.4 4.3 10.4 6.1l360.4 208.2c18.4 10.4 41 10.4 59.4 0l421.9-243.7z" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="importSetIcon">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m12 21l-8-4.5v-9L12 3l8 4.5V12m-8 0l8-4.5M12 12v9m0-9L4 7.5M22 18h-7m3-3l-3 3l3 3" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="exportSetIcon">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m12 21l-8-4.5v-9L12 3l8 4.5V12m-8 0l8-4.5M12 12v9m0-9L4 7.5M15 18h7m-3-3l3 3l-3 3" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="databaseIcon">
                <path fill="currentColor"
                    d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4m6 14c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V17m0-4.55c-1.3.95-3.58 1.55-6 1.55s-4.7-.6-6-1.55V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36v2.81M12 9C8.13 9 6 7.5 6 7s2.13-2 6-2s6 1.5 6 2s-2.13 2-6 2Z" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="stopIcon">
                <path fill="currentColor" d="M6 5h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="forceRefreshIcon">
                <path fill="currentColor"
                    d="M13.82 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .5-.04 1-.1 1.46c.6-.5 1.32-.89 2.1-1.14V12c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2v.18c.7.17 1.35.45 1.95.82c.05-.32.05-.66.05-1c0-5.5-4.5-10-10-10C6.47 2 2 6.5 2 12s4.5 10 10 10c.34 0 .68 0 1-.05c-.41-.66-.71-1.4-.87-2.2c-.04.07-.08.14-.13.21c-.83-1.2-1.5-2.53-1.91-3.96h2.41c.31-.75.76-1.42 1.32-2m5.1-6h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26m.82 2H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m12.83 7.67L22 14.5v4h-4l1.77-1.77A2.5 2.5 0 1 0 20 20h1.71A3.991 3.991 0 0 1 18 22.5c-2.21 0-4-1.79-4-4s1.79-4 4-4c1.11 0 2.11.45 2.83 1.17Z" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="hotkeyIcon">
                <g fill="none">
                    <path
                        d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                    <path fill="currentColor"
                        d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3h12Zm-2.707 13.708A2.99 2.99 0 0 1 14 17H5v1a1 1 0 0 0 1 1h11.586l-2.293-2.292ZM18 5h-1v9c0 .386-.073.755-.206 1.094l-.086.2L19 17.585V6a1 1 0 0 0-.883-.993L18 5Zm-3 0H6a1 1 0 0 0-.993.883L5 6v9h9a1 1 0 0 0 .993-.883L15 14V5ZM9 7a1 1 0 0 1 .993.883L10 8v.631l1.445-.963a1 1 0 0 1 1.203 1.594l-.093.07l-1.377.918l1.377.918a1 1 0 0 1-1.009 1.723l-.1-.059L10 11.868V12a1 1 0 0 1-1.993.117L8 12V8a1 1 0 0 1 1-1Z" />
                </g>
            </symbol>
            <symbol viewBox="0 0 24 24" id="zhIcon">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2">
                    <path stroke-linejoin="round" d="M5 8h14v7H5z" />
                    <path d="M12 4v17" />
                </g>
            </symbol>
            <symbol viewBox="0 0 24 24" id="enIcon">
                <path fill="currentColor"
                    d="M14 10h2v.757a4.5 4.5 0 0 1 7 3.743V20h-2v-5.5c0-1.43-1.174-2.5-2.5-2.5S16 13.07 16 14.5V20h-2V10Zm-2-6v2H4v5h8v2H4v5h8v2H2V4h10Z" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="caseIcon">
                <path fill="currentColor"
                    d="m3.975 17l3.75-10h1.8l3.75 10H11.55l-.9-2.55H6.6L5.7 17H3.975Zm3.15-4h3l-1.45-4.15h-.1L7.125 13Zm9.225 4.275q-1.225 0-1.925-.638t-.7-1.737q0-1.05.813-1.713t2.087-.662q.575 0 1.063.088t.837.287v-.35q0-.675-.462-1.075t-1.263-.4q-.525 0-.988.225t-.787.65l-1.075-.8q.475-.675 1.2-1.025t1.675-.35q1.55 0 2.375.738t.825 2.137v4.4H18.55v-.85h-.075q-.325.5-.875.788t-1.25.287Zm.25-1.25q.8 0 1.363-.563t.562-1.362q-.35-.2-.8-.3t-.825-.1q-.8 0-1.225.313t-.425.887q0 .5.375.813t.975.312Z" />
            </symbol>
        </svg>
    </div>
    <div id="loadMask">
        <div>
            <div>ChatGPT</div>
            <svg>
                <use xlink:href="#loadingIcon" />
            </svg>
        </div>
    </div>
    <div class="chat_window">
        <div class="overlay"></div>
        <nav class="nav">
            <div class="navHeader">
                <div id="newChat">
                    <svg width="24" height="24">
                        <use xlink:href="#addIcon" />
                    </svg>
                    <span data-i18n-key="newChat"></span>
                </div>
                <div id="newFolder" data-i18n-title="newFolder" title>
                    <svg width="24" height="24">
                        <use xlink:href="#newFolderIcon" />
                    </svg>
                </div>
            </div>
            <div class="extraChat">
                <input type="text" id="searchChat" autocomplete="off" data-i18n-place="search" placeholder />
                <div id="clearSearch">
                    <svg width="24" height="24">
                        <use xlink:href="#closeIcon" />
                    </svg>
                </div>
                <div id="matchCaseSearch" data-i18n-title="matchCaseTip" title>
                    <svg width="24" height="24">
                        <use xlink:href="#caseIcon" />
                    </svg>
                </div>
            </div>
            <div class="allList">
                <div id="folderList"></div>
                <div id="chatList"></div>
            </div>
            <div class="navFooter">
                <div class="navFunc">
                    <div id="refreshPage" data-i18n-title="forceRe" title>
                        <svg width="24" height="24">
                            <use xlink:href="#forceRefreshIcon" />
                        </svg>
                    </div>
                    <div id="clearChat" data-i18n-title="clearAll" title>
                        <svg width="24" height="24">
                            <use xlink:href="#clearAllIcon" />
                        </svg>
                    </div>
                    <div id="toggleLight" data-i18n-theme title>
                        <svg width="24" height="24">
                            <use xlink:href="#lightThemeIcon" />
                        </svg>
                    </div>
                    <div id="sysSetting" data-i18n-title="setting" title>
                        <svg width="24" height="24">
                            <use xlink:href="#settingIcon" />
                        </svg>
                    </div>
                </div>
                <div class="divider"></div>
1、内容。WS[搜索词1]WS[词2]</br>
2、鲁迅为什么要打周树人。WS[鲁迅打周树人]</br>
3、给我现在的时间。WS[现在时间]WS[时区]</br>
4、单独选择插件模型可精准触发插件功能，不适用于常规对话</br>
直接发送'/upload'命令可触发上传功能，后续基于文件对话</br>
自然语言触发画图、Python代码解释、图像描述功能</br>
                <div class="links">
<!--修改-->
                    <a href="https://ai.deembear.top/" target="_blank"
                        rel="noopener noreferrer">ai</a>
                    <a href="https://a.deembear.top/" target="_blank"
                        rel="noopener noreferrer">a</a>
                    <a href="https://e.deembear.top/" target="_blank"
                        rel="noopener noreferrer">e</a>
                    <a href="https://f.deembear.top/" target="_blank"
                        rel="noopener noreferrer">f</a>
                </div>
            </div>
        </nav>
        <div class="mainContent">
            <div class="top_menu">
                <div class="toggler" data-i18n-title="nav" title>
                    <div class="button close"></div>
                    <div class="button minimize"></div>
                    <div class="button maximize"></div>
                </div>
                <div class="title"><span>one2net，示例如左</span></div>
                <div class="settings">
                    <button class="setBtn" id="toggleFull" data-i18n-window title>
                        <svg width="30" height="30">
                            <use xlink:href="#expandFullIcon" />
                        </svg>
                    </button>
                    <button class="setBtn" id="setting">
                        <svg viewBox="0 0 100 100" width="30" height="30">
                            <title data-i18n-key="quickSet"></title>
                            <circle cx="50" cy="20" r="10" fill="#e15b64" />
                            <circle cx="50" cy="50" r="10" fill="#f8b26a" />
                            <circle cx="50" cy="80" r="10" fill="#99c959" />
                        </svg>
                    </button>
                </div>
                <div id="setDialog" style="display:none;">
                    <div class="setSwitch">
                        <div data-id="convOption" data-i18n-key="chat" class="activeSwitch"></div>
                        <div data-id="speechOption" data-i18n-key="tts"></div>
                        <div data-id="recOption" data-i18n-key="stt"></div>
                    </div>
                    <div id="convOption">
                        <div class="presetSelect presetModelCls">
                            <label for="preSetModel" data-i18n-key="gptModel"></label>
                            <select id="preSetModel">
<!--修改-->
                                <option value="gpt-4-32k">gpt-4-32k</option>
                                <option value="gpt-4">gpt-4</option>
                                <option value="Claude-2">Claude-2</option>
                                <option value="gpt-3.5-turbo-16k">gpt-3.5-turbo-16k</option>
                                <option value="插件16kgpt3.5">插件16kgpt3.5</option>
                                <option value="插件gpt3.5">插件gpt3.5</option>
                                <option value="gpt-3.5-turbo">gpt-3.5-turbo</option>
                                <option value="chatglm_lite">智谱lite</option>
<!--
                                <option value="oasst-sft-6-llama-30b">oasst-sft-6-llama-30b</option>
                                <option value="llama_2_70b_chat">llama_2_70b_chat</option>
                                <option value="assistant">sage</option>
                                <option value="google-palm">google-palm</option>
                                <option value="claude-2-100k">claude-2-100k</option>
                                <option value="claude-instant-100k">claude-instant-100k</option>
                                <option value="claude-instant">claude-instant</option>
                                <option value="gpt-4-browsing" data-i18n-key="gptBrowsing"></option>
-->
                            </select>
                        </div>
                        <div>
                            <div data-i18n-key="avatar"></div>
                            <div class="avatarDetail">
                                <img id="setAvatarPre" src="" />
                                <input class="inputTextClass" autocomplete="off" type="text" id="setAvatar" />
                            </div>
                        </div>
                        <div>
                            <div class="justSetLine presetSelect">
                                <div data-i18n-key="systemRole"></div>
                                <div>
                                    <label for="preSetSystem" data-i18n-key="presetRole"></label>
                                    <select id="preSetSystem">
                                        <option value="default" data-i18n-key="default"></option>
                                        <option value="normal" data-i18n-key="assistant"></option>
                                        <option value="cat" data-i18n-key="cat"></option>
                                        <option value="emoji" data-i18n-key="emoji"></option>
                                        <option value="image" data-i18n-key="withImg"></option>
                                    </select>
                                </div>
                            </div>
                            <textarea class="inputTextClass areaTextClass" autocomplete="off"
                                data-i18n-place="assistantText" placeholder id="systemInput"></textarea>
                        </div>
                        <div>
                            <span data-i18n-key="nature"></span>
                            <input type="range" id="top_p" min="0" max="1" value="0.7" step="0.05" />
                            <div class="selectDef">
                                <span data-i18n-key="natureNeg"></span>
                                <span data-i18n-key="naturePos"></span>
                            </div>
                        </div>
                        <div>
                            <span data-i18n-key="quality"></span>
                            <input type="range" id="temp" min="0" max="2" value="1" step="0.05" />
                            <div class="selectDef">
                                <span data-i18n-key="qualityNeg"></span>
                                <span data-i18n-key="qualityPos"></span>
                            </div>
                        </div>
                        <div>
                            <span data-i18n-key="chatsWidth"></span>
                            <input type="range" id="convWidth" min="30" max="100" value="100" step="1" />
                            <div class="selectDef">
                                <span>30%</span>
                                <span>100%</span>
                            </div>
                        </div>
                        <div>
                            <span data-i18n-key="typeSpeed"></span>
                            <input type="range" id="textSpeed" min="0" max="100" value="88" step="1" />
                            <div class="selectDef">
                                <span data-i18n-key="slow"></span>
                                <span data-i18n-key="fast"></span>
                            </div>
                        </div>
                        <div>
                            <span><span data-i18n-key="continuousLen"></span>: <span id="contLenWrap"></span><span
                                    data-i18n-key="msgAbbr"></span></span>
                            <input type="range" id="contLength" min="0" max="50" value="25" step="1" />
                            <div class="selectDef">
                                <span>0</span>
                                <span>50</span>
                            </div>
                        </div>
                        <div>
                            <span class="inlineTitle" data-i18n-key="longReply"></span>
                            <label class="switch-slide">
                                <input type="checkbox" id="enableLongReply" hidden />
                                <label for="enableLongReply" class="switch-slide-label"></label>
                            </label>
                        </div>
                    </div>
                    <div id="speechOption" style="display: none;">
                        <div class="presetSelect presetModelCls">
                            <label for="preSetService" data-i18n-key="ttsService"></label>
                            <select id="preSetService">
                                <option value="3" data-i18n-key="azureTTS"></option>
                                <option selected value="2" data-i18n-key="edgeTTS"></option>
                                <option value="1" data-i18n-key="systemTTS"></option>
                            </select>
                        </div>
                        <div class="presetSelect presetModelCls">
                            <label for="preSetAzureRegion" data-i18n-key="azureRegion"></label>
                            <select id="preSetAzureRegion">
                            </select>
                        </div>
                        <div>
                            <div>Azure Access Key</div>
                            <input class="inputTextClass" type="text" placeholder="Azure Key" id="azureKeyInput"
                                autocomplete="off" style="-webkit-text-security: disc;" />
                        </div>
                        <div id="checkVoiceLoad" style="display: none;">
                            <svg>
                                <use xlink:href="#loadingIcon" />
                            </svg>
                            <span data-i18n-key="loadVoice"></span>
                        </div>
                        <div id="speechDetail">
                            <div>
                                <div class="justSetLine">
                                    <div data-i18n-key="voiceName"></div>
                                    <div id="voiceTypes">
                                        <span data-type="0" data-i18n-key="userVoice"></span>
                                        <span data-type="1" class="selVoiceType" data-i18n-key="replyVoice"></span>
                                    </div>
                                </div>
                                <select id="preSetSpeech">
                                </select>
                            </div>
                            <div>
                                <div class="justSetLine">
                                    <input class="inputTextClass" id="testVoiceText" data-i18n-value="TTSTest" value />
                                </div>
                                <div class="justSetLine readyTestVoice" id="testVoiceBtn" style="margin-top: 6px;">
                                    <div class="justSetBtn" onclick="startTestVoice()">
                                        <svg width="18" height="18">
                                            <use xlink:href="#readyVoiceIcon" />
                                        </svg>
                                        <span data-i18n-key="play"></span>
                                    </div>
                                    <div class="justSetBtn" onclick="pauseTestVoice()">
                                        <svg width="18" height="18">
                                            <use xlink:href="#pauseVoiceIcon" />
                                        </svg>
                                        <span data-i18n-key="pause"></span>
                                    </div>
                                    <div class="justSetBtn" onclick="resumeTestVoice()">
                                        <svg width="18" height="18">
                                            <use xlink:href="#resumeVoiceIcon" />
                                        </svg>
                                        <span data-i18n-key="resume"></span>
                                    </div>
                                    <div class="justSetBtn" style="margin-right: 130px" onclick="stopTestVoice()">
                                        <svg width="18" height="18">
                                            <use xlink:href="#stopIcon" />
                                        </svg>
                                        <span data-i18n-key="stop"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="justSetLine presetSelect" id="azureExtra" style="display:none;">
                                <div class="presetModelCls">
                                    <label for="preSetVoiceStyle" data-i18n-key="style"></label>
                                    <select id="preSetVoiceStyle">
                                    </select>
                                </div>
                                <div class="presetModelCls">
                                    <label for="preSetVoiceRole" data-i18n-key="role"></label>
                                    <select id="preSetVoiceRole">
                                    </select>
                                </div>
                            </div>
                            <div>
                                <span data-i18n-key="volume"></span>
                                <input type="range" id="voiceVolume" min="0" max="1" value="1" step="0.1" />
                                <div class="selectDef">
                                    <span data-i18n-key="low"></span>
                                    <span data-i18n-key="high"></span>
                                </div>
                            </div>
                            <div>
                                <span data-i18n-key="rate"></span>
                                <input type="range" id="voiceRate" min="0.1" max="2" value="1" step="0.1" />
                                <div class="selectDef">
                                    <span data-i18n-key="slow"></span>
                                    <span data-i18n-key="fast"></span>
                                </div>
                            </div>
                            <div>
                                <span data-i18n-key="pitch"></span>
                                <input type="range" id="voicePitch" min="0" max="2" value="1" step="0.1" />
                                <div class="selectDef">
                                    <span data-i18n-key="neutral"></span>
                                    <span data-i18n-key="intense"></span>
                                </div>
                            </div>
                            <div>
                                <span class="inlineTitle" data-i18n-key="contSpeech"></span>
                                <label class="switch-slide">
                                    <input type="checkbox" id="enableContVoice" checked="true" hidden />
                                    <label for="enableContVoice" class="switch-slide-label"></label>
                                </label>
                            </div>
                            <div>
                                <span class="inlineTitle" data-i18n-key="autoSpeech"></span>
                                <label class="switch-slide">
                                    <input type="checkbox" id="enableAutoVoice" hidden />
                                    <label for="enableAutoVoice" class="switch-slide-label"></label>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div id="recOption" style="display: none;">
                        <div id="noRecTip" style="display: block;" data-i18n-key="unsupportRecTip"></div>
                        <div id="yesRec" style="display: none;">
                            <div class="presetSelect presetModelCls">
                                <label for="selectLangOption" data-i18n-key="lang"></label>
                                <select id="selectLangOption">
                                </select>
                            </div>
                            <div class="presetSelect presetModelCls">
                                <label for="selectDiaOption" data-i18n-key="dialect"></label>
                                <select id="selectDiaOption">
                                </select>
                            </div>
                            <div>
                                <div data-i18n-key="autoSendKey"></div>
                                <input class="inputTextClass" id="autoSendText" autocomplete="off"
                                    data-i18n-place="send" placeholder />
                            </div>
                            <div>
                                <div data-i18n-key="autoStopKey"></div>
                                <input class="inputTextClass" id="autoStopText" autocomplete="off"
                                    data-i18n-place="stop" placeholder />
                            </div>
                            <div>
                                <span data-i18n-key="autoSendDelay"></span>
                                <input type="range" id="autoSendTimeout" min="0" max="10" value="0" step="1" />
                                <div class="selectDef">
                                    <span>0<span data-i18n-key="second"></span></span>
                                    <span>10<span data-i18n-key="second"></span></span>
                                </div>
                            </div>
                            <div>
                                <span class="inlineTitle" data-i18n-key="keepListenMic"></span>
                                <label class="switch-slide">
                                    <input type="checkbox" id="keepListenMic" checked="false" hidden />
                                    <label for="keepListenMic" class="switch-slide-label"></label>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="messages">
                <div id="chatlog"></div>
                <div id="stopChat"><svg width="24" height="24">
                        <use xlink:href="#stopResIcon" />
                    </svg><span data-i18n-key="stop"></span></div>
            </div>
            <div class="bottom_wrapper clearfix">
                <div class="message_input_wrapper">
                    <textarea class="message_input_text" autocomplete="off" spellcheck="false" data-i18n-place="askTip"
                        placeholder id="chatinput"></textarea>
                    <div id="voiceRec" style="display:none;">
                        <div id="voiceRecIcon">
                            <svg viewBox="0 0 48 48" id="voiceInputIcon">
                                <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4">
                                    <rect fill="none" width="14" height="27" x="17" y="4" rx="7" />
                                    <rect class="animVoice" x="18" y="4" width="12" height="27" stroke="none"
                                        fill="currentColor"></rect>
                                    <path stroke-linecap="round"
                                        d="M9 23c0 8.284 6.716 15 15 15c8.284 0 15-6.716 15-15M24 38v6" />
                                </g>
                            </svg>
                        </div>
                        <div id="voiceRecSetting">
                            <select id="select_language" style="margin-bottom: 4px;"></select>
                            <select id="select_dialect"></select>
                        </div>
                    </div>
                </div>
                <button class="loaded" id="sendbutton">
                    <span data-i18n-key="send"></span>
                    <svg style="margin:0 auto;height:40px;width:100%;">
                        <use xlink:href="#loadingIcon" />
                    </svg>
                </button>
                <button class="clearConv" data-i18n-title="clearChat" title>
                    <svg style="color: #e15b64;" width="29" height="29">
                        <use xlink:href="#closeIcon" />
                    </svg>
                    <svg width="21" height="21">
                        <use xlink:href="#deleteIcon" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <div id="sysMask">
        <div id="sysDialog">
            <div id="closeSet">
                <svg width="24" height="24">
                    <use xlink:href="#closeIcon" />
                </svg>
            </div>
            <div class="sysTitle" data-i18n-key="setting"></div>
            <div class="sysContent">
                <div class="sysSwitch">
                    <div data-id="generalOption" class="activeSwitch">
                        <svg width="24" height="24">
                            <use xlink:href="#settingIcon" />
                        </svg><span data-i18n-key="general"></span>
                    </div>
                    <div data-id="hotkeyOption">
                        <svg width="24" height="24">
                            <use xlink:href="#hotkeyIcon" />
                        </svg><span data-i18n-key="hotkey"></span>
                    </div>
                    <div data-id="dataOption">
                        <svg width="24" height="24">
                            <use xlink:href="#databaseIcon" />
                        </svg><span data-i18n-key="data"></span>
                    </div>
                </div>
                <div class="sysDetail">
                    <div id="generalOption">
                        <div class="setContent">
                            <div class="setTitle" data-i18n-key="theme"></div>
                            <div class="setDetail themeDetail lightTheme" id="setLight">
                                <div data-i18n-title="darkTheme" title>
                                    <svg width="24" height="24">
                                        <use xlink:href="#darkThemeIcon"></use>
                                    </svg>
                                </div>
                                <div data-i18n-title="lightTheme" title>
                                    <svg width="24" height="24">
                                        <use xlink:href="#lightThemeIcon"></use>
                                    </svg>
                                </div>
                                <div data-i18n-title="autoTheme" title>
                                    <svg width="24" height="24">
                                        <use xlink:href="#autoThemeIcon"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="setContent" id="autoDetail" style="display: none;font-size: 15px;">
                            <div class="setDetail">
                                <div>
                                    <input type="radio" id="autoTheme1" name="autoLight" value="1" checked />
                                    <label for="autoTheme1" data-i18n-key="systemTheme"></label>
                                </div>
                                <div style="margin-top: 8px;">
                                    <input type="radio" id="autoTheme0" name="autoLight" value="0" />
                                    <label for="autoTheme0" data-i18n-key="customDarkTheme"></label>
                                </div>
                                <div id="customAutoSet" style="display: none; margin-top: 10px;">
                                    <div>
                                        <label for="customStart" data-i18n-key="startDark"></label>
                                        <input type="time" id="customStart" required>
                                    </div>
                                    <div style="margin-top: 10px;">
                                        <label for="customEnd" data-i18n-key="endDark"></label>
                                        <input type="time" id="customEnd" required>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="setContent">
                            <div class="setTitle" data-i18n-key="lang"></div>
                            <div class="setDetail themeDetail langDetail" id="setLang">
                                <div title="English">
                                    <svg width="24" height="24">
                                        <use xlink:href="#enIcon"></use>
                                    </svg>
                                </div>
                                <div title="中文">
                                    <svg width="24" height="24">
                                        <use xlink:href="#zhIcon"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="setContent setNotNormalFlow">
                            <div class="setTitle" data-i18n-key="aiEndpoint"></div>
                            <div class="setDetail inputDetail" style="position: relative;">
                                <input class="inputTextClass" placeholder="https://api.openai.com/" autocomplete="off"
                                    id="apiHostInput" />
                                <div id="apiSelect" tabindex="-1" style="display: none;"></div>
                            </div>
                        </div>
                        <div class="setContent" style="margin-top: 83px;">
                            <div class="setTitle" data-i18n-key="aiKey"></div>
                            <div class="setDetail inputDetail apiDetail">
                                <input class="inputTextClass" type="text" placeholder="sk-xxxxxx" id="keyInput"
                                    autocomplete="off" style="-webkit-text-security: disc;" />
                                <div id="checkBillBtn" class="loaded">
                                    <span data-i18n-key="checkBill"></span>
                                    <svg style="margin:0 auto;height:34px;width:100%;">
                                        <use xlink:href="#loadingIcon"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="setContent" id="quotaContent" style="display: none;">
                            <div class="setTitle" id="quotaTitle" data-i18n-quota></div>
                            <div class="setDetail">
                                <div class="progressBar">
                                    <div class="nowProgress" id="usedQuotaBar"></div>
                                </div>
                                <div class="progressDetail">
                                    <div><span data-i18n-key="used"></span><span id="usedQuota"></span></div>
                                    <div><span data-i18n-key="available"></span><span id="availableQuota"></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="hotkeyOption" style="display: none;">
                        <div class="setContent">
                            <div class="setTitle">UI</div>
                            <div class="setDetail hotKeyDetail">
                                <div>
                                    <label for="hotKeyNav" data-i18n-key="navKey"></label>
                                    <select id="hotKeyNav">
                                    </select>
                                </div>
                                <div>
                                    <label for="hotKeyWindow" data-i18n-key="fullKey"></label>
                                    <select id="hotKeyWindow">
                                    </select>
                                </div>
                                <div>
                                    <label for="hotKeyTheme" data-i18n-key="themeKey"></label>
                                    <select id="hotKeyTheme">
                                    </select>
                                </div>
                                <div>
                                    <label for="hotKeyLang" data-i18n-key="langKey"></label>
                                    <select id="hotKeyLang">
                                    </select>
                                </div>
                            </div>
                            <div class="setTitle" data-i18n-key="chat"></div>
                            <div class="setDetail hotKeyDetail">
                                <div>
                                    <label for="hotKeySearch" data-i18n-key="search"></label>
                                    <select id="hotKeySearch">
                                    </select>
                                </div>
                                <div>
                                    <label for="hotKeyInput" data-i18n-key="inputKey"></label>
                                    <select id="hotKeyInput">
                                    </select>
                                </div>
                                <div>
                                    <label for="hotKeyNewChat" data-i18n-key="newChat"></label>
                                    <select id="hotKeyNewChat">
                                    </select>
                                </div>
                                <div>
                                    <label for="hotKeyClearChat" data-i18n-key="clearChat"></label>
                                    <select id="hotKeyClearChat">
                                    </select>
                                </div>
                            </div>
                            <div class="setTitle" data-i18n-key="voiceKey"></div>
                            <div class="setDetail hotKeyDetail">
                                <div style="display: none;">
                                    <label for="hotKeyVoiceRec" data-i18n-key="recKey"></label>
                                    <select id="hotKeyVoiceRec">
                                    </select>
                                </div>
                                <div>
                                    <label for="hotKeyVoiceSpeak" data-i18n-key="speechKey"></label>
                                    <select id="hotKeyVoiceSpeak">
                                    </select>
                                </div>
                            </div>
                            <div class="setDetail keyOptionDetail">
                                <div id="resetHotKey">
                                    <svg width="22" height="22" style="transform: scaleX(-1)">
                                        <use xlink:href="#refreshIcon" />
                                    </svg>
                                    <span data-i18n-key="resetHotKeyTip"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="dataOption" style="display: none;">
                        <div class="setContent">
                            <div class="setTitle" data-i18n-key="chat"></div>
                            <div class="setDetail dataDetail">
                                <div id="exportChat">
                                    <svg width="24" height="24">
                                        <use xlink:href="#exportIcon" />
                                    </svg>
                                    <span data-i18n-key="export"></span>
                                </div>
                                <label id="importChat" for="importChatInput">
                                    <svg width="24" height="24">
                                        <use xlink:href="#importIcon" />
                                    </svg>
                                    <span data-i18n-key="import"></span>
                                </label>
                                <input type="file" style="display: none;" id="importChatInput"
                                    accept="application/json" />
                                <div id="clearChatSet">
                                    <svg width="24" height="24">
                                        <use xlink:href="#clearAllIcon" />
                                    </svg>
                                    <span data-i18n-key="clear"></span>
                                </div>
                            </div>
                        </div>
                        <div class="setContent">
                            <div class="setTitle" data-i18n-key="setting"></div>
                            <div class="setDetail dataDetail">
                                <div id="exportSet">
                                    <svg width="24" height="24">
                                        <use xlink:href="#exportSetIcon" />
                                    </svg>
                                    <span data-i18n-key="export"></span>
                                </div>
                                <label id="importSet" for="importSetInput">
                                    <svg width="24" height="24">
                                        <use xlink:href="#importSetIcon" />
                                    </svg>
                                    <span data-i18n-key="import"></span>
                                </label>
                                <input type="file" style="display: none;" id="importSetInput"
                                    accept="application/json" />
                                <div id="resetSet">
                                    <svg width="22" height="22" style="transform: scaleX(-1)">
                                        <use xlink:href="#refreshIcon" />
                                    </svg>
                                    <span data-i18n-key="reset"></span>
                                </div>
                            </div>
                        </div>
                        <div class="setContent">
                            <div class="setTitle" data-i18n-key="localStore"></div>
                            <div class="setDetail">
                                <div class="progressBar">
                                    <div class="nowProgress" id="usedStorageBar"></div>
                                </div>
                                <div class="progressDetail">
                                    <div><span data-i18n-key="used"></span><span id="usedStorage"></span></div>
                                    <div><span data-i18n-key="available"></span><span id="availableStorage"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <link crossorigin="anonymous" href="//cdn.staticfile.org/github-markdown-css/5.2.0/github-markdown-light.min.css"
        rel="stylesheet">
    <link crossorigin="anonymous" href="//cdn.staticfile.org/notyf/3.10.0/notyf.min.css" rel="stylesheet">
    <script crossorigin="anonymous" src="//cdn.staticfile.org/notyf/3.10.0/notyf.min.js"></script>

    <script type="text/javaScript" src="body1sw.js"></script>

    <script src="env.js"></script>

    <script type="text/javaScript" src="body2.js"></script>
    <script type="text/javaScript" src="body3.js"></script>
    <script type="text/javaScript" src="body4i18n.js"></script>
    <script type="text/javaScript" src="body5tts.js"></script>

    <script crossorigin="anonymous" src="//cdn.staticfile.org/markdown-it/13.0.1/markdown-it.min.js"></script>
    <script crossorigin="anonymous" src="//cdn.staticfile.org/highlight.js/11.8.0/highlight.min.js"></script>
    <script crossorigin="anonymous" src="//cdn.staticfile.org/KaTeX/0.16.7/katex.min.js"></script>
    <script crossorigin="anonymous" src="//npm.elemecdn.com/markdown-it-texmath@1.0.0/texmath.js"></script>
    <script crossorigin="anonymous"
        src="//npm.elemecdn.com/markdown-it-link-attributes@4.0.1/dist/markdown-it-link-attributes.min.js"></script>

    <script type="text/javaScript" src="body6main.js"></script>

    <link crossorigin="anonymous" href="//cdn.staticfile.org/highlight.js/11.8.0/styles/github.min.css"
        rel="stylesheet">
    <link crossorigin="anonymous" href="//cdn.staticfile.org/KaTeX/0.16.7/katex.min.css" rel="stylesheet">
    <link crossorigin="anonymous" href="//npm.elemecdn.com/markdown-it-texmath@1.0.0/css/texmath.css" rel="stylesheet">
    <script defer>
        let downRoleController = new AbortController();
        const loadPrompt = () => {
            downRoleController.abort();
            downRoleController = new AbortController();
            setTimeout(() => {
                downRoleController.abort();
            }, 10000);
            preEle.options.length = 5;
            if (locale === "zh") {
                fetch("https://cdn.jsdelivr.net/gh/PlexPt/awesome-chatgpt-prompts-zh/prompts-zh.json", {
                    signal: downRoleController.signal
                }).then(async (response) => {
                    let res = await response.json();
                    for (let i = 0; i < res.length; i++) {
                        let key = "act" + i;
                        presetRoleData[key] = res[i].prompt.trim();
                        let optionEle = document.createElement("option");
                        optionEle.text = res[i].act;
                        optionEle.value = key;
                        preEle.options.add(optionEle);
                    }
                }).catch(e => { })
            } else {
                fetch("https://cdn.jsdelivr.net/gh/f/awesome-chatgpt-prompts/prompts.csv", {
                    signal: downRoleController.signal
                }).then(async (response) => {
                    let res = await response.text();
                    let arr = res.split("\n");
                    for (let i = 1; i < arr.length - 1; i++) {
                        let key = "act" + i;
                        let index = arr[i].indexOf(",");
                        presetRoleData[key] = arr[i].slice(index + 2, -1);
                        let optionEle = document.createElement("option");
                        optionEle.text = arr[i].slice(1, index - 1);
                        optionEle.value = key;
                        preEle.options.add(optionEle);
                    }
                }).catch(e => { })
            }
        }
        loadPrompt();
    </script>
    <!-- 修改markdown中的hljs-string 字体颜色 -->
    <style>
        .hljs-string{
            color: darkgreen;
        }
    </style>