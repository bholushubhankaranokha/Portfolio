import React from 'react';

export function TechIcon({ name, size = 64 }) {
    switch (name) {
        case 'Python':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <path d="M63.3 2C32.1 2 34 15.5 34 15.5l.1 14h29.8v4.2H22.6C7.2 33.7 2 49 2 49s-1.8 19.3 11.2 30.2c12 10 24.6 9.8 24.6 9.8v-14s-.7-16.7 16.4-16.7h29.2s15.7.3 15.7-15.3V15.5S100.9 2 63.3 2zm-12.8 9.3c3.1 0 5.6 2.5 5.6 5.6s-2.5 5.6-5.6 5.6-5.6-2.5-5.6-5.6 2.5-5.6 5.6-5.6z" fill="url(#python-blue)" />
                    <path d="M64.7 126c31.2 0 29.3-13.5 29.3-13.5l-.1-14H64.1v-4.2h41.3c15.4 0 20.6-15.3 20.6-15.3s1.8-19.3-11.2-30.2c-12-10-24.6-9.8-24.6-9.8v14s.7 16.7-16.4 16.7H44.6s-15.7-.3-15.7 15.3v27.2S27.1 126 64.7 126zm12.8-9.3c-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6 5.6 2.5 5.6 5.6-2.5 5.6-5.6 5.6z" fill="url(#python-yellow)" />
                    <defs>
                        <linearGradient id="python-blue" x1="10.8" y1="10.8" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#387EB8" />
                            <stop offset="1" stopColor="#366994" />
                        </linearGradient>
                        <linearGradient id="python-yellow" x1="55" y1="55" x2="117.2" y2="117.2" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFE873" />
                            <stop offset="1" stopColor="#FFD43B" />
                        </linearGradient>
                    </defs>
                </svg>
            );

        case 'C':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <path d="M64 12l45 26v52l-45 26-45-26V38l45-26z" fill="#00599C" />
                    <path d="M64 18l39.8 23v46L64 110l-39.8-23V41L64 18z" fill="#004482" />
                    <path d="M64 36c-15.5 0-28 12.5-28 28s12.5 28 28 28c11.2 0 20.9-6.6 25.3-16.1h-12.7c-3.1 4.5-8.3 7.5-14.2 7.5-9.6 0-17.4-7.8-17.4-17.4S54.4 45.6 64 45.6c5.9 0 11.1 3 14.2 7.5h12.7C86.5 43.6 76.8 36 64 36z" fill="#ffffff" />
                </svg>
            );

        case 'C++':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <path d="M116.5 76.8l-10-5.8v-11.5l10-5.8c1.1-.6 1.5-2 .9-3.1l-2.9-5c-.6-1.1-2-1.5-3.1-.9l-10 5.8-10-5.8v-11.6c0-1.2-1-2.3-2.3-2.3H73.3c-1.2 0-2.3 1-2.3 2.3v11.6l-10 5.8-10-5.8c-1.1-.6-2.5-.3-3.1.9l-2.9 5c-.6 1.1-.3 2.5.9 3.1l10 5.8v11.5l-10 5.8c-1.1.6-1.5 2-.9 3.1l2.9 5c.6 1.1 2 1.5 3.1.9l10-5.8 10 5.8v11.6c0 1.2 1 2.3 2.3 2.3h5.8c1.2 0 2.3-1 2.3-2.3V88.4l10-5.8 10 5.8c1.1.6 2.5.3 3.1-.9l2.9-5c.7-1.1.3-2.5-.8-3.1z" fill="#00599C" />
                    <circle cx="64" cy="64" r="54" fill="#00599C" />
                    <circle cx="64" cy="64" r="42" fill="#004482" />
                    <path d="M64 36c-15.5 0-28 12.5-28 28s12.5 28 28 28c11.2 0 20.9-6.6 25.3-16.1h-12.7c-3.1 4.5-8.3 7.5-14.2 7.5-9.6 0-17.4-7.8-17.4-17.4S54.4 45.6 64 45.6c5.9 0 11.1 3 14.2 7.5h12.7C86.5 43.6 76.8 36 64 36z" fill="#ffffff" />
                    <path d="M86 61h-5v-5h-4v5h-5v4h5v5h4v-5h5v-4zm20 0h-5v-5h-4v5h-5v4h5v5h4v-5h5v-4z" fill="#ffffff" />
                </svg>
            );

        case 'JavaScript':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128">
                    <rect width="128" height="128" rx="22" fill="#F7DF1E" />
                    <path d="M38.5 106.8c5.4 3.3 12.6 5.5 20 5.5 18.2 0 26.6-9.1 26.6-25.2V32h-18v55.1c0 6.6-3.2 9.7-9.4 9.7-5.1 0-9.2-2.1-11.9-4.3l-7.3 14.3zm55.4-2.8c6.6 3.9 15.6 6.7 24.3 6.7 13.9 0 22.8-6.9 22.8-17.7 0-9.8-6.4-14.7-17.7-19.7l-4.7-2.1c-6.8-3-9.9-5.9-9.9-10.4 0-4.6 3.8-7.9 10.4-7.9 5.8 0 10.8 1.9 14.4 4.3l5.8-13.8c-4.9-3.1-12.2-5.1-20.2-5.1-15.5 0-24.9 8.6-24.9 18.9 0 10.4 7.3 15.6 18.7 20.6l4.7 2.1c7 3.1 9.4 6.4 9.4 10.5 0 5-4.4 8.7-11.8 8.7-7.3 0-13.7-2.7-18.4-6.1l-5.6 14z" fill="#000000" transform="translate(-18, 0)" />
                </svg>
            );

        case 'Java':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#1B1F24" />
                    <path d="M48.2 92.5s-6.2 3.8 4.4 5.1c12.8 1.5 19.4 1.4 33.6-.8 0 0 3.9 2.5 9.3 4.7-32.9 14.5-68.9-1.2-47.3-9z" fill="#EA2D2E" />
                    <path d="M42.4 78.4s-7 4.9 3.7 6.2c13.1 1.6 24 1.8 42.1-.9 0 0 2.8 2.8 7.3 4.4-38.3 13.6-75.1-.3-53.1-9.7z" fill="#EA2D2E" />
                    <path d="M68.5 45.4c4.6 5.3-3.5 10.1-3.5 10.1s11.5-5.9 6.2-13.6c-5-7.3-9.5-10.9 12.8-23.9-19 6.1-22.3 20.3-15.5 27.4z" fill="#5382A1" />
                    <path d="M88.7 68.3c7.5-14.8-3.9-20.7-3.9-20.7s2.5 3.3.4 6.3c-2.7 3.8-9.8 5.7-14.1 8.8 8.4-1.9 14.6-2.1 17.6 5.6z" fill="#5382A1" />
                </svg>
            );

        case 'React':
        case 'React.js':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <ellipse cx="64" cy="64" rx="14" ry="14" fill="#61DAFB" />
                    <ellipse cx="64" cy="64" rx="54" ry="21" stroke="#61DAFB" strokeWidth="6" transform="rotate(30 64 64)" />
                    <ellipse cx="64" cy="64" rx="54" ry="21" stroke="#61DAFB" strokeWidth="6" transform="rotate(90 64 64)" />
                    <ellipse cx="64" cy="64" rx="54" ry="21" stroke="#61DAFB" strokeWidth="6" transform="rotate(150 64 64)" />
                </svg>
            );

        case 'Tailwind CSS':
        case 'Tailwind':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#0B1120" />
                    <path d="M64 42.5c-12.8 0-20.8 6.4-24 19.2 4.8-6.4 10.4-8.8 16.8-7.2 3.7.9 6.3 3.6 9.2 6.6 4.7 4.9 10.2 10.6 22 10.6 12.8 0 20.8-6.4 24-19.2-4.8 6.4-10.4 8.8-16.8 7.2-3.7-.9-6.3-3.6-9.2-6.6-4.7-4.9-10.2-10.6-22-10.6zM40 71.7c-12.8 0-20.8 6.4-24 19.2 4.8-6.4 10.4-8.8 16.8-7.2 3.7.9 6.3 3.6 9.2 6.6 4.7 4.9 10.2 10.6 22 10.6 12.8 0 20.8-6.4 24-19.2-4.8 6.4-10.4 8.8-16.8 7.2-3.7-.9-6.3-3.6-9.2-6.6-4.7-4.9-10.2-10.6-22-10.6z" fill="#38BDF8" />
                </svg>
            );

        case 'Redux':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#764ABC" />
                    <path d="M85.3 46.5c-3.1-6.1-9.2-10.3-16.2-11.2-1.7-.2-3.4-.1-5.1.3-4.5 1-8.5 3.6-11.3 7.3-3.9 5.2-5.4 11.9-4.1 18.3 1.1 5.3 4.1 10.1 8.5 13.3 4.4 3.3 9.8 4.9 15.3 4.7 3.3-.1 6.5-.9 9.5-2.4 5.9-3 10-8.3 11.3-14.8.8-4.2.3-8.6-1.5-12.4l-7.7 3.6c1.1 2.4 1.4 5.2.9 7.8-.8 4.2-3.5 7.6-7.3 9.5-1.9 1-4 1.5-6.1 1.6-3.5.1-7-1-9.8-3.1-2.8-2.1-4.8-5.1-5.5-8.5-.8-4.1.1-8.4 2.6-11.8 1.8-2.4 4.3-4.1 7.2-4.7 1.1-.2 2.2-.3 3.3-.2 4.5.6 8.4 3.3 10.4 7.2l8.3-4.7z" fill="#ffffff" />
                    <circle cx="48" cy="84" r="9" fill="#ffffff" />
                    <circle cx="88" cy="80" r="7" fill="#ffffff" />
                </svg>
            );

        case 'Node.js':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <path d="M64 12l48 27.7v55.4L64 122.9l-48-27.7V39.7L64 12z" fill="#339933" />
                    <path d="M64 16.6l44 25.4v50.8L64 118.2 20 92.8V42l44-25.4z" fill="#5FA04E" />
                    <path d="M64 36c13.2 0 19.8 6.5 19.8 19.4v31.2c0 2.4-.9 4.3-2.6 5.8-1.7 1.5-4 2.2-6.8 2.2-2.7 0-4.9-.7-6.5-2.2-1.7-1.5-2.5-3.4-2.5-5.8V59.4c0-3.3-1.6-4.9-4.8-4.9-3.2 0-4.8 1.6-4.8 4.9v27.2c0 2.4-.8 4.3-2.5 5.8-1.7 1.5-3.9 2.2-6.6 2.2-2.7 0-4.9-.7-6.6-2.2-1.7-1.5-2.5-3.4-2.5-5.8V55.4C37.6 42.5 44.2 36 57.4 36H64z" fill="#ffffff" />
                </svg>
            );

        case 'Express.js':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128">
                    <rect width="128" height="128" rx="22" fill="#141414" />
                    <text x="60" y="78" fill="#ffffff" fontSize="44" fontFamily="sans-serif" fontWeight="900" textAnchor="middle" letterSpacing="1">ex</text>
                    <circle cx="94" cy="74" r="5" fill="#ff2a2a" />
                </svg>
            );

        case 'MongoDB':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <path d="M64 4c-3.2 12-28 39-28 66 0 24 16 44 27 54l1-120z" fill="#47A248" />
                    <path d="M64 4c3.2 12 28 39 28 66 0 24-16 44-27 54l-1-120z" fill="#499D4A" />
                    <path d="M64 124c-1.2-3.8-2-8.4-2-13.6 0-14.8 7.4-28.7 7.4-28.7s-1.8 13.9-1.8 23.3c0 8.2 2.4 14.8 2.4 14.8l-6 4.2z" fill="#3F9142" />
                </svg>
            );

        case 'PostgreSQL':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <path d="M64 14c-27.6 0-50 22.4-50 50s22.4 50 50 50 50-22.4 50-50-22.4-50-50-50z" fill="#336791" />
                    <path d="M88.5 61.2c-1.2-8.4-7.2-14.8-15.8-16.7-3.2-.7-6.5-.8-9.7-.3-4.2.6-8.2 2.3-11.7 4.9-6.8 5-11.3 12.5-12.7 21-.8 4.7-.6 9.5.7 14.1 2 7 6.4 13.1 12.5 17.2 4.4 2.9 9.5 4.7 14.8 5.1 7.8.6 15.5-2 21.4-7.3 6.2-5.5 9.8-13.3 9.8-21.5 0-5.8-1.8-11.4-5.1-16.1l-4.2 9.6z" fill="#ffffff" />
                </svg>
            );

        case 'REST APIs':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#0284C7" />
                    <circle cx="34" cy="48" r="8" fill="#ffffff" />
                    <circle cx="34" cy="80" r="8" fill="#ffffff" />
                    <rect x="74" y="38" width="34" height="52" rx="8" fill="#0369A1" />
                    <path d="M42 48h22M42 80h22" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
                    <path d="M64 38v52" stroke="#38BDF8" strokeWidth="4" strokeDasharray="4 4" />
                    <path d="M84 56h14M84 72h14" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
                </svg>
            );

        case 'TensorFlow':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <path d="M64 12l48 27.7v28.8L88 54.4V116L64 102V12z" fill="#FF6F00" />
                    <path d="M64 12L16 39.7v28.8L40 54.4V116l24-14V12z" fill="#FFA800" />
                    <path d="M40 54.4l24-13.8 24 13.8-24 14-24-14z" fill="#FF8F00" />
                </svg>
            );

        case 'PyTorch':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#1C1B20" />
                    <path d="M69.8 18.5a3 3 0 0 0-3.6 1.4L44.8 57.7a35 35 0 0 0 4.4 39.8 35 35 0 0 0 49.3 0 35 35 0 0 0 4.4-39.8L81.5 19.9a3 3 0 0 0-3.6-1.4l-8.1 4z" fill="#EE4C2C" />
                    <circle cx="88" cy="42" r="7" fill="#EE4C2C" />
                </svg>
            );

        case 'HTML':
        case 'HTML5':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <path d="M19 114.7L8.6 13.3h110.8L109 114.7 63.8 126.7 19 114.7z" fill="#E34F26" />
                    <path d="M64 116.8l35.8-9.9 8.7-83.6H64v93.5z" fill="#EF652A" />
                    <path d="M64 51.5h-18l-1.3-14.2H64V23.5H30.8l3.7 41.8H64V51.5zm0 35.8l-.2.1-15.1-4.1-1-11.2H33.8l1.9 21.8L64 100.8v-13.5z" fill="#ECECEC" />
                    <path d="M63.9 51.5v13.8h16.8l-1.6 17.9-15.2 4.1v13.5l28.3-7.8 3.3-37.1.4-4.4H63.9zm0-28v13.8h30.8l1.3-13.8H63.9z" fill="#ffffff" />
                </svg>
            );

        case 'CSS':
        case 'CSS3':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <path d="M19 114.7L8.6 13.3h110.8L109 114.7 63.8 126.7 19 114.7z" fill="#1572B6" />
                    <path d="M64 116.8l35.8-9.9 8.7-83.6H64v93.5z" fill="#33A9DC" />
                    <path d="M64 51.5h-18l-1.3-14.2H64V23.5H30.8l3.7 41.8H64V51.5zm0 35.8l-.2.1-15.1-4.1-1-11.2H33.8l1.9 21.8L64 100.8v-13.5z" fill="#ECECEC" />
                    <path d="M63.9 51.5v13.8h16.8l-1.6 17.9-15.2 4.1v13.5l28.3-7.8 3.3-37.1.4-4.4H63.9zm0-28v13.8h30.8l1.3-13.8H63.9z" fill="#ffffff" />
                </svg>
            );

        case 'NumPy':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#013243" />
                    <path d="M26 38l38-22 38 22v46l-38 22-38-22V38z" stroke="#4DABCF" strokeWidth="6" fill="#013243" />
                    <path d="M64 16v48l38 20V38L64 16z" fill="#4B90B5" opacity="0.8" />
                    <path d="M64 64L26 42l38-22 38 22-38 22z" fill="#4DABCF" opacity="0.6" />
                    <path d="M26 42v42l38 22V58L26 42z" fill="#013243" />
                    <text x="64" y="80" fill="#ffffff" fontSize="28" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">NUM</text>
                </svg>
            );

        case 'Pandas':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#150458" />
                    <rect x="36" y="28" width="12" height="72" rx="6" fill="#FFD43B" />
                    <rect x="58" y="44" width="12" height="56" rx="6" fill="#E70488" />
                    <rect x="80" y="32" width="12" height="68" rx="6" fill="#00D2FF" />
                    <circle cx="42" cy="22" r="6" fill="#FFD43B" />
                    <circle cx="64" cy="36" r="6" fill="#E70488" />
                    <circle cx="86" cy="24" r="6" fill="#00D2FF" />
                </svg>
            );

        case 'Matplotlib':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#11557C" />
                    <circle cx="64" cy="64" r="44" stroke="#ffffff" strokeWidth="3" fill="none" opacity="0.4" />
                    <circle cx="64" cy="64" r="26" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.3" />
                    <path d="M26 84c16-8 24-46 38-46s20 48 38 18" stroke="#FFD43B" strokeWidth="7" strokeLinecap="round" fill="none" />
                    <circle cx="26" cy="84" r="6" fill="#FF6B6B" />
                    <circle cx="64" cy="38" r="6" fill="#FF6B6B" />
                    <circle cx="102" cy="56" r="6" fill="#FF6B6B" />
                </svg>
            );

        case 'scikit-learn':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#ffffff" />
                    <circle cx="46" cy="64" r="28" fill="#F89939" opacity="0.95" />
                    <circle cx="82" cy="64" r="28" fill="#3499CD" opacity="0.95" />
                    <path d="M46 64h36" stroke="#ffffff" strokeWidth="4" strokeDasharray="3 3" />
                    <text x="64" y="112" fill="#000000" fontSize="16" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">SKLEARN</text>
                </svg>
            );

        case 'Keras':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#D00000" />
                    <path d="M40 28v72h15V70l26 30h19L69 64l29-36H79L55 58V28H40z" fill="#ffffff" />
                </svg>
            );

        case 'Arduino':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#00979D" />
                    <ellipse cx="46" cy="64" rx="24" ry="20" stroke="#ffffff" strokeWidth="6" fill="none" />
                    <ellipse cx="82" cy="64" rx="24" ry="20" stroke="#ffffff" strokeWidth="6" fill="none" />
                    <path d="M38 64h16M46 56v16M74 64h16" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
                </svg>
            );

        case 'ESP32':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#18181B" />
                    <rect x="28" y="28" width="72" height="72" rx="10" fill="#27272A" stroke="#E11D48" strokeWidth="3" />
                    <path d="M40 38h48v14H40z" fill="#EAB308" opacity="0.9" />
                    <path d="M44 42h40v6H44z" fill="#18181B" />
                    <circle cx="64" cy="72" r="16" fill="#E11D48" />
                    <text x="64" y="77" fill="#ffffff" fontSize="12" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">ESP</text>
                    <path d="M18 48h10M18 64h10M18 80h10M100 48h10M100 64h10M100 80h10M48 18v10M64 18v10M80 18v10M48 100v10M64 100v10M80 100v10" stroke="#A1A1AA" strokeWidth="3" strokeLinecap="round" />
                </svg>
            );

        case 'Sensors Integration':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#0D9488" />
                    {/* Dual Ultrasonic Transducers */}
                    <circle cx="44" cy="70" r="18" fill="#134E4A" stroke="#ffffff" strokeWidth="4" />
                    <circle cx="44" cy="70" r="9" fill="#2DD4BF" />
                    <circle cx="84" cy="70" r="18" fill="#134E4A" stroke="#ffffff" strokeWidth="4" />
                    <circle cx="84" cy="70" r="9" fill="#2DD4BF" />
                    {/* Radiating sound/infrared sensor waves */}
                    <path d="M44 44a22 22 0 0 1 40 0" stroke="#FDE047" strokeWidth="4" strokeLinecap="round" fill="none" />
                    <path d="M34 32a36 36 0 0 1 60 0" stroke="#FDE047" strokeWidth="4" strokeLinecap="round" strokeDasharray="5 5" fill="none" />
                    <path d="M26 22a48 48 0 0 1 76 0" stroke="#FDE047" strokeWidth="4" strokeLinecap="round" fill="none" />
                    <rect x="36" y="94" width="56" height="12" rx="4" fill="#042F2E" />
                </svg>
            );

        case 'Git':
        case 'Git/GitHub':
        case 'Git & GitHub':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#181717" />
                    <path d="M106.8 56.4L71.6 21.2a7.6 7.6 0 0 0-10.8 0l-9.8 9.8 13.5 13.5a9.1 9.1 0 0 1 11.5 11.5l13.1 13.1a9.1 9.1 0 1 1-5.4 5.3L70.9 61.6v23a9.1 9.1 0 1 1-7.6-.2V60.2a9.1 9.1 0 0 1-4.2-12L45.8 34.9 21.2 59.5a7.6 7.6 0 0 0 0 10.8l35.2 35.2a7.6 7.6 0 0 0 10.8 0l39.6-39.6a7.6 7.6 0 0 0 0-9.5z" fill="#F05032" />
                </svg>
            );

        case 'Google Colab':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#1E1E1E" />
                    <path d="M46 44c-11 0-20 9-20 20s9 20 20 20c7.8 0 14.6-4.5 17.9-11L55 67c-1.8 4.2-6 7.1-10.9 7.1-6.6 0-12-5.4-12-12s5.4-12 12-12c5 0 9.2 3.1 11 7.4l8.9-6c-3.4-6.8-10.3-11.5-18-11.5z" fill="#F9AB00" />
                    <path d="M82 44c-7.7 0-14.6 4.7-18 11.5l8.9 6c1.8-4.3 6-7.5 11.1-7.5 6.6 0 12 5.4 12 12s-5.4 12-12 12c-4.9 0-9.1-2.9-10.9-7.1l-8.9 6c3.3 6.5 10.1 11 17.9 11 11 0 20-9 20-20s-9-20-20-20z" fill="#E37400" />
                </svg>
            );

        case 'VS Code':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#18181B" />
                    <path d="M96 22l-42 38-16-12L20 57l18 11-18 11 18 9 16-12 42 38c3 2 7 1 8-2V24c-1-3-5-4-8-2z" fill="#007ACC" />
                    <path d="M96 22L54 60l42 44V22z" fill="#1F9CF0" />
                    <path d="M20 57l18 11-18 11V57z" fill="#0065A9" />
                </svg>
            );

        case 'Postman':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#FF6C37" />
                    <circle cx="64" cy="64" r="40" fill="#ffffff" />
                    <path d="M64 34c16.5 0 30 13.5 30 30S80.5 94 64 94c-9 0-17.1-4-22.5-10.4l8.3-6.5C53.6 81.3 58.5 84 64 84c11 0 20-9 20-20s-9-20-20-20c-5.8 0-11 2.5-14.5 6.5l-8-6.8C57.2 38 65 34 64 34z" fill="#FF6C37" />
                </svg>
            );

        case 'Tinkercad':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#008FD5" />
                    <path d="M32 36h28v28H32z" fill="#00D26A" />
                    <path d="M68 36h28v28H68z" fill="#FF5252" />
                    <path d="M32 72h28v28H32z" fill="#FFC107" />
                    <path d="M68 72h28v28H68z" fill="#00E5FF" />
                </svg>
            );

        /* 100% UNIQUE AI / ML SUITE ICONS */

        case 'Machine Learning':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#1E1B4B" />
                    {/* Brain Silhouette + Decision Branch */}
                    <path d="M64 24c-18 0-32 14-32 32 0 10 5 19 12 25v15c0 4 3 8 8 8h24c5 0 8-4 8-8V81c7-6 12-15 12-25 0-18-14-32-32-32z" fill="#312E81" />
                    <circle cx="64" cy="42" r="8" fill="#06B6D4" />
                    <circle cx="46" cy="62" r="6" fill="#10B981" />
                    <circle cx="82" cy="62" r="6" fill="#10B981" />
                    <circle cx="40" cy="80" r="5" fill="#38BDF8" />
                    <circle cx="56" cy="82" r="5" fill="#38BDF8" />
                    <circle cx="72" cy="82" r="5" fill="#38BDF8" />
                    <circle cx="88" cy="80" r="5" fill="#38BDF8" />
                    <path d="M64 42L46 62M64 42L82 62M46 62l-6 18M46 62l10 20M82 62l-10 20M82 62l6 18" stroke="#ffffff" strokeWidth="2.5" opacity="0.8" />
                </svg>
            );

        case 'Deep Learning':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#2E1065" />
                    {/* 4 Layers Multi-Layer Perceptron Network */}
                    {/* Input Layer */}
                    <circle cx="30" cy="40" r="7" fill="#C084FC" />
                    <circle cx="30" cy="64" r="7" fill="#C084FC" />
                    <circle cx="30" cy="88" r="7" fill="#C084FC" />
                    {/* Hidden 1 */}
                    <circle cx="54" cy="32" r="7" fill="#A855F7" />
                    <circle cx="54" cy="54" r="7" fill="#A855F7" />
                    <circle cx="54" cy="74" r="7" fill="#A855F7" />
                    <circle cx="54" cy="96" r="7" fill="#A855F7" />
                    {/* Hidden 2 */}
                    <circle cx="78" cy="32" r="7" fill="#EC4899" />
                    <circle cx="78" cy="54" r="7" fill="#EC4899" />
                    <circle cx="78" cy="74" r="7" fill="#EC4899" />
                    <circle cx="78" cy="96" r="7" fill="#EC4899" />
                    {/* Output Layer */}
                    <circle cx="102" cy="50" r="8" fill="#F43F5E" />
                    <circle cx="102" cy="78" r="8" fill="#F43F5E" />
                    {/* Interconnecting Synapses */}
                    <path d="M30 40l24-8M30 40l24 14M30 40l24 34M30 64l24-32M30 64l24-10M30 64l24 10M30 64l24 32M30 88l24-34M30 88l24-14M30 88l24 8" stroke="#E9D5FF" strokeWidth="1.5" opacity="0.4" />
                    <path d="M54 32h24M54 54h24M54 74h24M54 96h24M54 32l24 22M54 54l24-22M54 54l24 20M54 74l24-20M54 74l24 22M54 96l24-22" stroke="#F472B6" strokeWidth="1.5" opacity="0.4" />
                    <path d="M78 32l24 18M78 54l24-4M78 54l24 24M78 74l24-24M78 74l24 4M78 96l24-18" stroke="#FDA4AF" strokeWidth="1.5" opacity="0.5" />
                </svg>
            );

        case 'CNN':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#7C2D12" />
                    {/* 3D Convolution Grid Matrix */}
                    <rect x="24" y="32" width="44" height="44" rx="4" fill="#EA580C" stroke="#FED7AA" strokeWidth="2" />
                    <path d="M24 46h44M24 60h44M38 32v44M52 32v44" stroke="#FED7AA" strokeWidth="1.5" opacity="0.6" />
                    {/* Highlighted Kernel 2x2 */}
                    <rect x="24" y="32" width="28" height="28" rx="2" fill="#FBBF24" opacity="0.8" />
                    {/* Projection Rays into Feature Map */}
                    <path d="M52 60L82 72M52 32L82 52" stroke="#FDE047" strokeWidth="2" strokeDasharray="3 3" />
                    {/* Condensed Feature Map Layer */}
                    <rect x="76" y="52" width="32" height="32" rx="4" fill="#F97316" stroke="#ffffff" strokeWidth="2.5" />
                    <rect x="84" y="60" width="16" height="16" fill="#FDE047" />
                </svg>
            );

        case 'RNN':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#064E3B" />
                    {/* Recurrent Unfolded Loop with feedback loop */}
                    <rect x="44" y="44" width="40" height="40" rx="10" fill="#059669" stroke="#A7F3D0" strokeWidth="3" />
                    <text x="64" y="70" fill="#ffffff" fontSize="24" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">h</text>
                    {/* Recurrent circular arrow */}
                    <path d="M64 44c0-16 26-16 26 0s-10 16-16 16" stroke="#FDE047" strokeWidth="4" strokeLinecap="round" fill="none" />
                    <path d="M72 62l4-6-6-2" fill="#FDE047" />
                    {/* Sequence input and output arrows */}
                    <path d="M20 64h24M84 64h24" stroke="#34D399" strokeWidth="5" strokeLinecap="round" />
                    <path d="M40 60l4 4-4 4M104 60l4 4-4 4" stroke="#34D399" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );

        case 'LSTM':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#31135E" />
                    {/* LSTM Memory Cell Box */}
                    <rect x="22" y="26" width="84" height="76" rx="14" fill="#4C1D95" stroke="#C4B5FD" strokeWidth="3" />
                    {/* Cell state top rail */}
                    <path d="M22 44h84" stroke="#FBBF24" strokeWidth="4" />
                    {/* Forget Gate & Input Gate circles */}
                    <circle cx="44" cy="44" r="8" fill="#F59E0B" />
                    <text x="44" y="48" fill="#000000" fontSize="11" fontWeight="900" textAnchor="middle">✕</text>
                    <circle cx="70" cy="44" r="8" fill="#10B981" />
                    <text x="70" y="48" fill="#000000" fontSize="12" fontWeight="900" textAnchor="middle">+</text>
                    {/* Gates sigmoid & tanh */}
                    <rect x="38" y="70" width="12" height="16" rx="3" fill="#8B5CF6" />
                    <text x="44" y="82" fill="#ffffff" fontSize="10" fontWeight="800" textAnchor="middle">σ</text>
                    <rect x="64" y="70" width="12" height="16" rx="3" fill="#8B5CF6" />
                    <text x="70" y="82" fill="#ffffff" fontSize="9" fontWeight="800" textAnchor="middle">th</text>
                    <path d="M44 70v-18M70 70v-18" stroke="#C4B5FD" strokeWidth="2.5" />
                </svg>
            );

        case 'Bi-LSTM':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#1E1E2E" />
                    {/* Forward Pass (Cyan Arrow Right) */}
                    <rect x="26" y="34" width="22" height="22" rx="6" fill="#0284C7" />
                    <rect x="53" y="34" width="22" height="22" rx="6" fill="#0284C7" />
                    <rect x="80" y="34" width="22" height="22" rx="6" fill="#0284C7" />
                    <path d="M20 45h88M102 39l6 6-6 6" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Backward Pass (Rose Arrow Left) */}
                    <rect x="26" y="72" width="22" height="22" rx="6" fill="#BE123C" />
                    <rect x="53" y="72" width="22" height="22" rx="6" fill="#BE123C" />
                    <rect x="80" y="72" width="22" height="22" rx="6" fill="#BE123C" />
                    <path d="M108 83H20M26 77l-6 6 6 6" stroke="#FB7185" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Inter-layer communication links */}
                    <path d="M37 56v16M64 56v16M91 56v16" stroke="#ffffff" strokeWidth="2" opacity="0.5" strokeDasharray="2 2" />
                </svg>
            );

        case 'LLM':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#180F33" />
                    {/* Transformer Attention Decoder Stack */}
                    <rect x="30" y="26" width="68" height="20" rx="6" fill="#6366F1" stroke="#A5B4FC" strokeWidth="2" />
                    <text x="64" y="41" fill="#ffffff" fontSize="11" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">ATTENTION</text>
                    <rect x="30" y="54" width="68" height="20" rx="6" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
                    <text x="64" y="69" fill="#ffffff" fontSize="11" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">FEED FWD</text>
                    <rect x="30" y="82" width="68" height="20" rx="6" fill="#EC4899" stroke="#FBCFE8" strokeWidth="2" />
                    <text x="64" y="97" fill="#ffffff" fontSize="11" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">EMBEDDING</text>
                    {/* Sparkle Token Indicator */}
                    <circle cx="104" cy="36" r="6" fill="#FDE047" />
                    <circle cx="24" cy="92" r="5" fill="#38BDF8" />
                </svg>
            );

        case 'NLP':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#0C4A6E" />
                    {/* Speech bubble with natural language waveform */}
                    <path d="M28 34h72c6 0 10 4 10 10v40c0 6-4 10-10 10H56l-18 14v-14H28c-6 0-10-4-10-10V44c0-6 4-10 10-10z" fill="#0369A1" stroke="#7DD3FC" strokeWidth="3" />
                    {/* Speech Audio Waveform bars */}
                    <rect x="34" y="58" width="6" height="12" rx="3" fill="#F0F9FF" />
                    <rect x="46" y="50" width="6" height="28" rx="3" fill="#38BDF8" />
                    <rect x="58" y="44" width="6" height="40" rx="3" fill="#FDE047" />
                    <rect x="70" y="52" width="6" height="24" rx="3" fill="#38BDF8" />
                    <rect x="82" y="60" width="6" height="8" rx="3" fill="#F0F9FF" />
                </svg>
            );

        case 'RAG':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#31103F" />
                    {/* Vector DB Cylinder */}
                    <ellipse cx="46" cy="40" rx="22" ry="9" fill="#A855F7" stroke="#F0ABFC" strokeWidth="2.5" />
                    <path d="M24 40v22c0 5 10 9 22 9s22-4 22-9V40" fill="#7E22CE" stroke="#F0ABFC" strokeWidth="2.5" />
                    <path d="M24 62v22c0 5 10 9 22 9s22-4 22-9V62" fill="#581C87" stroke="#F0ABFC" strokeWidth="2.5" />
                    {/* Vector Search Loupe & Prompt Arrow */}
                    <circle cx="86" cy="68" r="16" fill="#BE185D" stroke="#FDA4AF" strokeWidth="3" />
                    <path d="M98 80l12 12" stroke="#FDA4AF" strokeWidth="4" strokeLinecap="round" />
                    <path d="M80 68h12M86 62v12" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                    {/* Connecting query ray */}
                    <path d="M68 54L76 60" stroke="#FDE047" strokeWidth="3" strokeDasharray="2 2" />
                </svg>
            );

        case 'Gen AI':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#110E26" />
                    {/* 8-point Celestial Generative Star */}
                    <path d="M64 20l7 26 26 7-26 7-7 26-7-26-26-7 26-7 7-26z" fill="url(#genai-grad)" />
                    {/* Secondary Accent Stars */}
                    <path d="M96 66l4 14 14 4-14 4-4 14-4-14-14-4 14-4 4-14z" fill="#FDE047" />
                    <path d="M34 76l3 10 10 3-10 3-3 10-3-10-10-3 10-3 3-10z" fill="#38BDF8" />
                    <circle cx="94" cy="30" r="4" fill="#F472B6" />
                    <circle cx="30" cy="36" r="4" fill="#A7F3D0" />
                    <defs>
                        <linearGradient id="genai-grad" x1="38" y1="20" x2="90" y2="92" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FDE047" />
                            <stop offset="0.5" stopColor="#EC4899" />
                            <stop offset="1" stopColor="#8B5CF6" />
                        </linearGradient>
                    </defs>
                </svg>
            );

        case 'Model Evaluation':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#042F2E" />
                    {/* ROC Curve Graph Axes */}
                    <path d="M32 32v64h64" stroke="#5EEAD4" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Baseline diagonal */}
                    <path d="M32 96l64-64" stroke="#134E4A" strokeWidth="2" strokeDasharray="3 3" />
                    {/* True Positive Convex Curve */}
                    <path d="M32 96c14-42 34-60 64-64" stroke="#2DD4BF" strokeWidth="5" strokeLinecap="round" fill="none" />
                    {/* Target Accuracy Badge */}
                    <circle cx="82" cy="74" r="18" fill="#F59E0B" />
                    <circle cx="82" cy="74" r="14" fill="#042F2E" />
                    <path d="M76 74l4 4 8-8" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );

        case 'Data Preprocessing':
            return (
                <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="22" fill="#082F49" />
                    {/* ETL Data Funnel Cleaning Pipeline */}
                    <path d="M30 30h68L76 64v32l-24 10V64L30 30z" fill="#0284C7" stroke="#7DD3FC" strokeWidth="3" strokeLinejoin="round" />
                    {/* Unstructured dirty data dots entering */}
                    <circle cx="44" cy="40" r="4" fill="#F87171" />
                    <circle cx="64" cy="42" r="4" fill="#FBBF24" />
                    <circle cx="84" cy="40" r="4" fill="#A78BFA" />
                    {/* Structured cleaned data rows emerging */}
                    <rect x="42" y="86" width="44" height="6" rx="2" fill="#38BDF8" />
                    <rect x="42" y="96" width="44" height="6" rx="2" fill="#4ADE80" />
                </svg>
            );

        default:
            return (
                <svg width={size} height={size} viewBox="0 0 128 128">
                    <rect width="128" height="128" rx="22" fill="#ff2a2a" opacity="0.15" />
                    <rect x="2" y="2" width="124" height="124" rx="20" stroke="#ff2a2a" strokeWidth="3" fill="none" opacity="0.4" />
                    <text x="64" y="76" fill="#ff2a2a" fontSize="32" fontFamily="sans-serif" fontWeight="800" textAnchor="middle">
                        {name.slice(0, 3).toUpperCase()}
                    </text>
                </svg>
            );
    }
}
