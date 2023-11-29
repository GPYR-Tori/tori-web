import React from 'react';
import styled from '@emotion/styled';

const CtgSelectB = () =>{
    

    //0. 체험
    const SelImg0=()=>(
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 38 38" fill="none">
            <g clip-path="url(#clip0_4_722)">
                <path d="M1.1875 32.6586H2.09C2.15175 32.8344 2.22359 33.006 2.30316 33.174L1.66487 33.8123C1.55325 33.9239 1.49091 34.0747 1.49091 34.2321C1.49091 34.3894 1.55325 34.5408 1.66487 34.6518L3.34756 36.3345C3.57022 36.5572 3.96447 36.5572 4.18712 36.3345L4.826 35.6957C4.99403 35.7758 5.16563 35.8465 5.34078 35.9082V36.8125C5.34078 37.1403 5.60678 37.4062 5.93453 37.4062H8.31428C8.64203 37.4062 8.90803 37.1403 8.90803 36.8125V35.907C9.08259 35.8453 9.25419 35.774 9.42103 35.6945L10.0617 36.3351C10.1733 36.4467 10.3241 36.5091 10.4815 36.5091C10.6388 36.5091 10.7902 36.4467 10.9013 36.3351L12.5839 34.6524C12.6956 34.5408 12.7579 34.39 12.7579 34.2327C12.7579 34.0753 12.6956 33.9239 12.5839 33.8129L11.9427 33.1716C12.0223 33.0048 12.0929 32.8338 12.1547 32.6592H13.0625C13.3903 32.6592 13.6562 32.3932 13.6562 32.0655V29.6857C13.6562 29.358 13.3903 29.092 13.0625 29.092H12.1553C12.0935 28.9174 12.0228 28.7464 11.9433 28.5796L12.5845 27.9383C12.6962 27.8267 12.7585 27.6759 12.7585 27.5185C12.7585 27.3612 12.6962 27.2098 12.5845 27.0987L10.9018 25.4161C10.6792 25.1934 10.2849 25.1934 10.0623 25.4161L9.42163 26.0567C9.25478 25.9772 9.08319 25.9065 8.90862 25.8442V24.9375C8.90862 24.6098 8.64262 24.3438 8.31487 24.3438H5.93513C5.60738 24.3438 5.34138 24.6098 5.34138 24.9375V25.8412C5.16622 25.9029 4.99462 25.9742 4.82659 26.0538L4.18772 25.4149C4.07609 25.3033 3.92528 25.2409 3.76794 25.2409C3.61059 25.2409 3.45919 25.3033 3.34816 25.4149L1.66547 27.0976C1.55384 27.2092 1.4915 27.36 1.4915 27.5173C1.4915 27.6747 1.55384 27.8261 1.66547 27.9371L2.30375 28.5754C2.22359 28.744 2.15234 28.9156 2.09 29.0914H1.1875C0.85975 29.0914 0.59375 29.3574 0.59375 29.6851V32.0649C0.59375 32.3926 0.85975 32.6586 1.1875 32.6586ZM1.78125 30.2789H2.52878C2.79953 30.2789 3.03584 30.0954 3.10353 29.8336C3.20031 29.4589 3.34875 29.1003 3.54469 28.7684C3.68244 28.535 3.64444 28.2382 3.45325 28.047L2.92422 27.5179L3.76734 26.6748L4.29638 27.2044C4.48697 27.3956 4.78325 27.4336 5.01778 27.2959C5.34969 27.1005 5.70772 26.9521 6.08238 26.8559C6.34481 26.7882 6.52769 26.5519 6.52769 26.2812V25.5312H7.71994V26.2817C7.71994 26.5525 7.90281 26.7888 8.16466 26.8565C8.53991 26.9539 8.89734 27.1023 9.22866 27.2977C9.46141 27.4348 9.75947 27.3974 9.95006 27.2062L10.4809 26.6748L11.324 27.5179L10.792 28.0499C10.6008 28.2411 10.5628 28.538 10.7006 28.7713C10.8953 29.1021 11.0432 29.4595 11.1399 29.8348C11.2076 30.0966 11.4439 30.2801 11.7147 30.2801H12.4688V31.4723H11.7165C11.4457 31.4723 11.2094 31.6552 11.1417 31.9176C11.0449 32.2923 10.8965 32.6503 10.7023 32.981C10.5646 33.2144 10.6026 33.5113 10.7938 33.7024L11.3252 34.2338L10.4821 35.077L9.95125 34.5444C9.76066 34.3532 9.46319 34.3152 9.22984 34.4529C8.89913 34.6483 8.54109 34.7967 8.16584 34.8941C7.904 34.9618 7.72112 35.1981 7.72112 35.4688V36.2188H6.52888V35.4694C6.52888 35.1987 6.34541 34.9624 6.08356 34.8947C5.70891 34.7979 5.35028 34.6501 5.01897 34.4547C4.78444 34.3176 4.48816 34.3556 4.29756 34.5462L3.76853 35.0752L2.92541 34.2321L3.45384 33.7036C3.64562 33.5124 3.68303 33.2156 3.54528 32.9822C3.34934 32.6497 3.20091 32.2917 3.10413 31.917C3.03644 31.6552 2.80013 31.4717 2.52938 31.4717H1.78125V30.2789Z" fill="currentColor"/>
                <path d="M7.125 33.8438C8.76197 33.8438 10.0938 32.512 10.0938 30.875C10.0938 29.238 8.76197 27.9062 7.125 27.9062C5.48803 27.9062 4.15625 29.238 4.15625 30.875C4.15625 32.512 5.48803 33.8438 7.125 33.8438ZM7.125 29.0938C8.10706 29.0938 8.90625 29.8929 8.90625 30.875C8.90625 31.8571 8.10706 32.6562 7.125 32.6562C6.14294 32.6562 5.34375 31.8571 5.34375 30.875C5.34375 29.8929 6.14294 29.0938 7.125 29.0938Z" fill="currentColor"/>
                <path d="M37.3754 3.72044C37.3047 3.50966 37.1218 3.35528 36.9021 3.32203L34.7539 2.99428L33.7879 0.93575C33.6899 0.72675 33.4804 0.59375 33.25 0.59375C33.0196 0.59375 32.81 0.72675 32.7126 0.935156L31.7466 2.99369L29.5984 3.32144C29.3781 3.35528 29.1959 3.50906 29.1252 3.71984C29.0545 3.93062 29.108 4.16397 29.2629 4.32309L30.8346 5.93394L30.4629 8.21631C30.4261 8.44075 30.5211 8.66638 30.7069 8.79759C30.8928 8.92822 31.1368 8.94128 31.3363 8.83203L33.25 7.77397L35.1642 8.83203C35.2539 8.88131 35.353 8.90625 35.4516 8.90625C35.5715 8.90625 35.6915 8.86944 35.7936 8.79759C35.9794 8.66697 36.0744 8.44075 36.0376 8.21631L35.6659 5.93394L37.2376 4.32309C37.3932 4.16456 37.446 3.93181 37.3754 3.72044ZM34.6061 5.32C34.4743 5.45478 34.4149 5.64419 34.4452 5.83003L34.6684 7.201L33.5368 6.57578C33.4477 6.5265 33.3485 6.50156 33.2494 6.50156C33.1502 6.50156 33.0517 6.5265 32.962 6.57578L31.8303 7.201L32.0536 5.83003C32.0839 5.64419 32.0245 5.45478 31.8927 5.32L30.9183 4.32131L32.2376 4.12003C32.4336 4.08975 32.6016 3.96447 32.6853 3.78516L33.25 2.58519L33.8134 3.78516C33.8978 3.96447 34.0658 4.08975 34.2611 4.12003L35.5804 4.32131L34.6061 5.32Z" fill="currentColor"/>
                <path d="M28.13 7.76388C27.807 7.71459 27.4733 7.80009 27.2156 8.00197L22.5571 11.6464C22.813 11.1542 22.9311 10.6014 22.8836 10.035C22.8171 9.24469 22.4466 8.52803 21.8404 8.01622C21.2342 7.50441 20.4665 7.26038 19.6756 7.32628C18.8853 7.39338 18.1687 7.76388 17.6569 8.3695C17.1456 8.97572 16.9004 9.74403 16.9669 10.5343C17.0239 11.2041 17.3089 11.8127 17.7602 12.2966C17.069 12.4676 16.4593 12.8767 16.0502 13.4615L11.372 19.8467C11.1048 20.2285 11.0835 20.7165 11.3162 21.1203C11.5484 21.5234 11.9782 21.7479 12.4455 21.7111L13.8681 21.5905C14.2137 21.5614 14.5284 21.3833 14.7225 21.1132L17.547 17.3975L17.7608 19.9328L16.3577 29.5563C15.8281 29.6649 15.2961 29.7623 14.7611 29.8371L14.9256 31.0127C16.7888 30.7521 18.6276 30.2943 20.3905 29.6513C23.8105 28.4044 26.5441 26.6095 28.6519 24.8075L28.7849 24.7677L28.7665 24.7059C30.8001 22.9473 32.2417 21.1915 33.1389 19.9393C33.2535 19.779 33.2814 19.573 33.2131 19.3889C33.1454 19.2043 32.9905 19.0653 32.7999 19.0178L31.8843 18.7886L35.2182 16.9367L36.0055 20.4802L35.2194 20.2184C34.9635 20.1329 34.6838 20.2308 34.536 20.4547L34.4374 20.6031C26.9734 31.9669 18.6763 34.7219 13.0298 35.0318L13.0945 36.2176C18.9744 35.8946 27.5784 33.0701 35.2752 21.4884L36.6236 21.9379C36.8261 22.0062 37.0499 21.9587 37.209 21.8156C37.3682 21.6725 37.437 21.4546 37.3907 21.2462L36.2032 15.9024C36.1629 15.7195 36.0382 15.5663 35.8672 15.4897C35.6962 15.4138 35.4996 15.4209 35.3352 15.5123L29.9914 18.4811C29.7783 18.5992 29.6595 18.8361 29.6916 19.0778C29.723 19.3194 29.9 19.5172 30.1363 19.5759L31.6474 19.9536C30.8642 20.9665 29.783 22.1997 28.3919 23.4519L27.3332 19.9007C27.2346 19.5955 27.0132 19.3396 26.7383 19.2048L24.2974 17.9336L23.9156 15.0314L29.352 10.8894C29.8549 10.507 29.97 9.79806 29.6138 9.27616L28.9274 8.26797C28.7445 7.99841 28.4536 7.81434 28.13 7.76388ZM19.7754 8.51022C19.8264 8.50606 19.8775 8.50369 19.9285 8.50369C20.3483 8.50369 20.7503 8.65034 21.0745 8.92406C21.4379 9.23103 21.6599 9.66091 21.7003 10.1353C21.7401 10.6097 21.5934 11.0711 21.2865 11.4344C20.9795 11.7978 20.5496 12.0205 20.0752 12.0603C19.6002 12.1012 19.1395 11.9534 18.7761 11.6464C18.4127 11.3394 18.19 10.9096 18.1503 10.4352C18.0677 9.45606 18.7969 8.59275 19.7754 8.51022ZM20.5823 28.3023L21.8179 21.1719L24.0005 22.2312L25.2907 25.8531C23.915 26.7627 22.3481 27.6064 20.5823 28.3023ZM22.9234 14.2957C22.7542 14.4246 22.6669 14.6342 22.6942 14.8455L23.1609 18.3956C23.1865 18.5873 23.3034 18.7554 23.4756 18.8444L26.1997 20.2528L27.4062 24.3004C27.0553 24.5866 26.6854 24.8704 26.3007 25.1518L25.112 21.815C25.0027 21.5383 24.7961 21.3144 24.5301 21.1844L21.6285 19.7606C21.461 19.6787 21.2645 19.6804 21.097 19.7647C20.9302 19.8497 20.8132 20.0082 20.7818 20.1923L19.2962 28.7672C18.7369 28.953 18.1716 29.124 17.5999 29.2713L18.9465 20.0379C18.953 19.9928 18.9542 19.9476 18.9506 19.9019L18.6009 15.7605C18.5801 15.5153 18.4109 15.3087 18.1752 15.2404C17.9389 15.1709 17.6854 15.2558 17.5369 15.4512L13.769 20.4084L12.3386 20.539L17.0168 14.1538C17.3208 13.7198 17.7982 13.4449 18.3266 13.3998L20.175 13.2436H20.1761L22.5428 13.0435C22.658 13.0334 22.7679 12.9907 22.8587 12.9194L27.9483 8.93772L28.6353 9.94591L22.9234 14.2957Z" fill="currentColor"/>
                <path d="M2.375 1.1875H3.5625V2.375H2.375V1.1875Z" fill="currentColor"/>
                <path d="M3.5625 2.375H4.75V3.5625H3.5625V2.375Z" fill="currentColor"/>
                <path d="M1.1875 2.375H2.375V3.5625H1.1875V2.375Z" fill="currentColor"/>
                <path d="M2.375 3.5625H3.5625V4.75H2.375V3.5625Z" fill="currentColor"/>
                <path d="M7.125 2.96875H8.3125V4.15625H7.125V2.96875Z" fill="currentColor"/>
                <path d="M8.3125 4.15625H9.5V5.34375H8.3125V4.15625Z" fill="currentColor"/>
                <path d="M5.9375 4.15625H7.125V5.34375H5.9375V4.15625Z" fill="currentColor"/>
                <path d="M7.125 5.34375H8.3125V6.53125H7.125V5.34375Z" fill="currentColor"/>
                <path d="M34.4375 33.25H35.625V34.4375H34.4375V33.25Z" fill="currentColor"/>
                <path d="M35.625 34.4375H36.8125V35.625H35.625V34.4375Z" fill="currentColor"/>
                <path d="M33.25 34.4375H34.4375V35.625H33.25V34.4375Z" fill="currentColor"/>
                <path d="M34.4375 35.625H35.625V36.8125H34.4375V35.625Z" fill="currentColor"/>
            </g>
            <defs>
                <clipPath id="clip0_4_722">
                    <rect width="100%" height="100%" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )

    //1. 전통문화
    const SelImg1=()=>(
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 40 38" fill="none">
            <path d="M20 0.625C14.8632 0.630491 9.93846 2.56818 6.3062 6.01297C2.67394 9.45775 0.63079 14.1283 0.625 19C0.62502 19.1305 0.670487 19.2574 0.754343 19.3609C0.838199 19.4645 0.955751 19.5389 1.08875 19.5725L3.53562 20.1914L3.54875 20.1949L18.8931 24.075L16.3931 26.9202C16.2932 27.0339 16.2418 27.1789 16.249 27.3268C16.2561 27.4747 16.3214 27.6146 16.4319 27.7192C17.2256 28.4659 18.2634 28.9345 19.375 29.0481V30.3711C19.0832 30.4669 18.8212 30.6302 18.6127 30.8461C18.4041 31.0621 18.2556 31.3239 18.1805 31.6079C18.1055 31.892 18.1062 32.1893 18.1827 32.473C18.2592 32.7567 18.4091 33.0179 18.6188 33.2329L16.355 36.4532C16.263 36.584 16.2296 36.7441 16.262 36.8983C16.2945 37.0525 16.3902 37.1881 16.5281 37.2753C16.666 37.3626 16.8348 37.3943 16.9974 37.3635C17.16 37.3327 17.303 37.242 17.395 37.1112L19.375 34.2927V36.7822C19.375 36.9394 19.4408 37.0902 19.5581 37.2013C19.6753 37.3125 19.8342 37.3749 20 37.3749C20.1658 37.3749 20.3247 37.3125 20.4419 37.2013C20.5592 37.0902 20.625 36.9394 20.625 36.7822V34.2927L22.605 37.1094C22.697 37.2402 22.84 37.3309 23.0026 37.3617C23.1652 37.3925 23.334 37.3608 23.4719 37.2736C23.6098 37.1863 23.7055 37.0507 23.738 36.8965C23.7704 36.7423 23.737 36.5822 23.645 36.4514L21.3812 33.2329C21.5909 33.0179 21.7408 32.7567 21.8173 32.473C21.8938 32.1893 21.8945 31.892 21.8195 31.6079C21.7444 31.3239 21.5959 31.0621 21.3873 30.8461C21.1788 30.6302 20.9168 30.4669 20.625 30.3711V29.0481C21.7364 28.9338 22.7737 28.4645 23.5669 27.7174C23.6774 27.6129 23.7426 27.4729 23.7498 27.325C23.7569 27.1772 23.7055 27.0321 23.6056 26.9184L21.1056 24.0732L38.91 19.5684C39.0425 19.5351 39.1598 19.4615 39.2438 19.3587C39.3279 19.256 39.3739 19.13 39.375 19C39.3692 14.1283 37.3261 9.45775 33.6938 6.01297C30.0615 2.56818 25.1368 0.630491 20 0.625ZM4.375 19C4.37277 16.4382 5.07551 13.9203 6.41375 11.695L14.3856 19.2554C13.5478 19.715 12.776 20.2752 12.0894 20.9222L11.9181 21.0846L4.37875 19.1778C4.37812 19.1185 4.375 19.0592 4.375 19ZM35.6213 19.1778L28.0819 21.0846L27.9106 20.9222C27.224 20.2752 26.4522 19.715 25.6144 19.2554L33.5863 11.695C34.9245 13.9203 35.6272 16.4382 35.625 19C35.625 19.0592 35.625 19.1185 35.6213 19.1778ZM13.3406 21.4444C15.162 19.8716 17.5367 18.9999 20 18.9999C22.4633 18.9999 24.838 19.8716 26.6594 21.4444L20 23.1284L13.3406 21.4444ZM24.4444 18.6888C23.6803 18.3745 22.8813 18.143 22.0625 17.9988L26.6162 5.57972C29.1538 6.71137 31.3263 8.46579 32.9087 10.6613L24.4444 18.6888ZM20.7925 17.8512C20.5294 17.8334 20.2663 17.8145 20 17.8145C19.7337 17.8145 19.4706 17.8334 19.2075 17.8512L14.5375 5.11797C18.0602 3.86925 21.9398 3.86925 25.4625 5.11797L20.7925 17.8512ZM13.3837 5.57972L17.9375 17.9988C17.1183 18.143 16.3188 18.3744 15.5544 18.6888L7.09125 10.6613C8.67367 8.46579 10.8462 6.71137 13.3837 5.57972ZM20 31.4475C20.1236 31.4475 20.2444 31.4823 20.3472 31.5474C20.45 31.6125 20.5301 31.7051 20.5774 31.8134C20.6247 31.9217 20.6371 32.0409 20.613 32.1559C20.5889 32.2709 20.5294 32.3765 20.4419 32.4594C20.3545 32.5423 20.2432 32.5987 20.1219 32.6216C20.0007 32.6445 19.875 32.6327 19.7608 32.5879C19.6466 32.543 19.549 32.467 19.4803 32.3696C19.4117 32.2721 19.375 32.1575 19.375 32.0403C19.375 31.8831 19.4408 31.7323 19.5581 31.6211C19.6753 31.51 19.8342 31.4475 20 31.4475ZM20.1075 27.8911H19.8925C19.1228 27.8889 18.3733 27.6573 17.75 27.229L20 24.6677L22.25 27.229C21.6267 27.6573 20.8772 27.8889 20.1075 27.8911ZM36.8713 18.8619C36.833 14.6421 35.0386 10.6076 31.8788 7.63655C28.7189 4.66551 24.4495 2.99854 20 2.99854C15.5505 2.99854 11.2811 4.66551 8.12124 7.63655C4.96142 10.6076 3.16705 14.6421 3.12875 18.8619L1.87875 18.5459C2.00281 14.0667 3.96618 9.81046 7.35058 6.68395C10.735 3.55744 15.2729 1.80782 19.9975 1.80782C24.7221 1.80782 29.26 3.55744 32.6444 6.68395C36.0288 9.81046 37.9922 14.0667 38.1162 18.5459L36.8713 18.8619Z"
                  fill="currentColor"/>
        </svg>
    )

    //2. 액티비티
    const SelImg2=()=>(
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 38 38" fill="none">
            <path d="M14.25 27.3125C14.25 27.5108 14.3492 27.6961 14.5142 27.8065L16.0312 28.8177V36.2188C16.0312 36.5465 16.2973 36.8125 16.625 36.8125H21.375C21.7028 36.8125 21.9688 36.5465 21.9688 36.2188V28.8177L23.4858 27.8065C23.6508 27.6961 23.75 27.5108 23.75 27.3125V23.1562C23.75 21.7022 22.6973 20.4945 21.315 20.2415C21.7182 19.7345 21.9688 19.1021 21.9688 18.4062C21.9688 16.7693 20.637 15.4375 19 15.4375C17.363 15.4375 16.0312 16.7693 16.0312 18.4062C16.0312 19.1021 16.2818 19.7345 16.685 20.2415C15.3027 20.4945 14.25 21.7022 14.25 23.1562V27.3125ZM19 16.625C19.9821 16.625 20.7812 17.4242 20.7812 18.4062C20.7812 19.3883 19.9821 20.1875 19 20.1875C18.0179 20.1875 17.2188 19.3883 17.2188 18.4062C17.2188 17.4242 18.0179 16.625 19 16.625ZM15.4375 23.1562C15.4375 22.1742 16.2367 21.375 17.2188 21.375H20.7812C21.7633 21.375 22.5625 22.1742 22.5625 23.1562V26.9948L21.0455 28.006C20.8804 28.1164 20.7812 28.3017 20.7812 28.5V35.625H17.2188V28.5C17.2188 28.3017 17.1196 28.1164 16.9545 28.006L15.4375 26.9948V23.1562Z"
                  fill="currentColor"/>
            <path d="M31.4688 1.1875C28.5226 1.1875 26.125 3.58506 26.125 6.53125C26.125 8.31903 27.0133 9.97916 28.4988 10.9719C29.3788 11.5627 30.4053 11.875 31.4688 11.875C32.5322 11.875 33.5588 11.5627 34.4375 10.9725C35.9242 9.97916 36.8125 8.31844 36.8125 6.53125C36.8125 3.58506 34.4149 1.1875 31.4688 1.1875ZM29.1597 9.98509C29.1418 9.97322 29.1264 9.95837 29.1086 9.94591C29.1852 9.03391 29.9434 8.3125 30.875 8.3125H32.0625C32.9941 8.3125 33.7523 9.03391 33.8289 9.9465C33.8105 9.95897 33.7951 9.97381 33.7767 9.98628C32.4098 10.9036 30.5288 10.9042 29.1597 9.98509ZM31.4688 7.125C30.8138 7.125 30.2812 6.59241 30.2812 5.9375C30.2812 5.28259 30.8138 4.75 31.4688 4.75C32.1237 4.75 32.6562 5.28259 32.6562 5.9375C32.6562 6.59241 32.1237 7.125 31.4688 7.125ZM34.8133 8.99056C34.5325 8.29291 33.9934 7.73063 33.3153 7.41237C33.6407 7.00566 33.8438 6.49741 33.8438 5.9375C33.8438 4.62769 32.7786 3.5625 31.4688 3.5625C30.1589 3.5625 29.0938 4.62769 29.0938 5.9375C29.0938 6.49741 29.2968 7.00566 29.6222 7.41237C28.9441 7.73063 28.405 8.29291 28.1242 8.99056C27.6058 8.28756 27.3125 7.43138 27.3125 6.53125C27.3125 4.23938 29.1769 2.375 31.4688 2.375C33.7606 2.375 35.625 4.23938 35.625 6.53125C35.625 7.43138 35.3317 8.28697 34.8133 8.99056Z"
                  fill="currentColor"/>
            <path d="M3.56131 22.2532C4.44125 22.8439 5.46784 23.1562 6.53125 23.1562C7.59466 23.1562 8.62125 22.8439 9.5 22.2537C10.9867 21.2604 11.875 19.5997 11.875 17.8125C11.875 14.8663 9.47744 12.4688 6.53125 12.4688C3.58506 12.4688 1.1875 14.8663 1.1875 17.8125C1.1875 19.6003 2.07575 21.2604 3.56131 22.2532ZM4.22216 21.2663C4.20434 21.2545 4.18891 21.2396 4.17109 21.2272C4.24769 20.3152 5.00591 19.5938 5.9375 19.5938H7.125C8.05659 19.5938 8.81481 20.3152 8.89141 21.2277C8.873 21.2402 8.85756 21.2551 8.83916 21.2675C7.47234 22.1849 5.59134 22.1855 4.22216 21.2663ZM6.53125 18.4062C5.87634 18.4062 5.34375 17.8737 5.34375 17.2188C5.34375 16.5638 5.87634 16.0312 6.53125 16.0312C7.18616 16.0312 7.71875 16.5638 7.71875 17.2188C7.71875 17.8737 7.18616 18.4062 6.53125 18.4062ZM6.53125 13.6562C8.82312 13.6562 10.6875 15.5206 10.6875 17.8125C10.6875 18.7126 10.3942 19.5682 9.87584 20.2718C9.595 19.5742 9.05587 19.0119 8.37781 18.6936C8.70319 18.2869 8.90625 17.7787 8.90625 17.2188C8.90625 15.9089 7.84106 14.8438 6.53125 14.8438C5.22144 14.8438 4.15625 15.9089 4.15625 17.2188C4.15625 17.7787 4.35931 18.2869 4.68469 18.6936C4.00662 19.0119 3.4675 19.5742 3.18666 20.2718C2.66831 19.5688 2.375 18.7126 2.375 17.8125C2.375 15.5206 4.23938 13.6562 6.53125 13.6562Z"
                  fill="currentColor"/>
            <path d="M16.3281 10.6875L17.9313 12.825C18.0447 12.9764 18.2216 13.0625 18.4062 13.0625C18.4448 13.0625 18.4846 13.0589 18.5238 13.0506C18.7483 13.0055 18.927 12.8351 18.9822 12.613L19.4637 10.6875H20.7812C21.109 10.6875 21.375 10.4215 21.375 10.0938V6.53125C21.375 6.2035 21.109 5.9375 20.7812 5.9375H14.8438C14.516 5.9375 14.25 6.2035 14.25 6.53125V10.0938C14.25 10.4215 14.516 10.6875 14.8438 10.6875H16.3281ZM15.4375 7.125H20.1875V9.5H19C18.7275 9.5 18.49 9.68525 18.4241 9.94947L18.1331 11.1144L17.1 9.7375C16.9878 9.58787 16.812 9.5 16.625 9.5H15.4375V7.125Z"
                  fill="currentColor"/>
            <path d="M32.5547 24.0979L32.1349 23.6782C31.4616 23.0048 30.2884 23.0054 29.6157 23.6782C29.279 24.0142 29.0938 24.4619 29.0938 24.9375C29.0938 25.4131 29.279 25.8608 29.6157 26.1968L32.1349 28.7161C32.2507 28.8319 32.4027 28.8901 32.5547 28.8901C32.7067 28.8901 32.8587 28.8319 32.9745 28.7161L35.4938 26.1968C35.8298 25.8608 36.0151 25.4131 36.0151 24.9375C36.0151 24.4619 35.8298 24.0142 35.4938 23.6782C34.7985 22.9835 33.6686 22.9835 32.9745 23.6782L32.5547 24.0979ZM34.6536 24.5177C34.7652 24.6299 34.827 24.779 34.827 24.9375C34.827 25.096 34.7652 25.2451 34.6536 25.3573L32.5541 27.4568L30.4546 25.3573C30.343 25.2451 30.2812 25.096 30.2812 24.9375C30.2812 24.779 30.343 24.6299 30.4552 24.5177C30.5674 24.4055 30.7165 24.3438 30.875 24.3438C31.0335 24.3438 31.1826 24.4055 31.2948 24.5177L32.1349 25.3573C32.3671 25.5894 32.7423 25.5894 32.9745 25.3573L33.8141 24.5177C34.045 24.2868 34.4227 24.2862 34.6536 24.5177Z"
                  fill="currentColor"/>
            <path d="M22.7852 8.45263L22.3398 9.55344C25.7213 10.9226 27.9062 14.1639 27.9062 17.8125C27.9062 20.5295 26.6891 23.0642 24.5664 24.7653L25.3092 25.6922C27.7145 23.7637 29.0938 20.8923 29.0938 17.8125C29.0938 13.6782 26.6178 10.0041 22.7852 8.45263Z"
                  fill="currentColor"/>
            <path d="M10.2571 12.7656L11.2849 13.36C11.8418 12.3975 12.5644 11.5568 13.4336 10.8597L12.6909 9.93285C11.7064 10.7219 10.8876 11.6749 10.2571 12.7656Z"
                  fill="currentColor"/>
            <path d="M13.4336 24.7653C12.5644 24.0682 11.8412 23.2275 11.2849 22.265L10.2571 22.8594C10.8876 23.9495 11.7064 24.9025 12.6915 25.6922L13.4336 24.7653Z"
                  fill="currentColor"/>
            <path d="M5.82762 24.0694L4.7749 24.6187C6.80315 28.5095 10.3781 31.4313 14.5825 32.6337L14.909 31.4919C11.0164 30.3786 7.70625 27.6729 5.82762 24.0694Z"
                  fill="currentColor"/>
            <path d="M29.1324 28.0666C27.3957 29.6899 25.2736 30.8833 22.9966 31.5186L23.3154 32.6628C25.7759 31.9764 28.0672 30.6874 29.9429 28.934L29.1324 28.0666Z"
                  fill="currentColor"/>
            <path d="M34.2582 22.151C34.7712 20.5628 35.0312 18.9032 35.0312 17.2188C35.0312 15.7534 34.8335 14.3011 34.4434 12.9028L33.2993 13.2216C33.6609 14.5166 33.8437 15.8614 33.8437 17.2188C33.8437 18.7791 33.6027 20.3158 33.1277 21.7865L34.2582 22.151Z"
                  fill="currentColor"/>
            <path d="M19 2.375C21.1945 2.375 23.3077 2.84288 25.2801 3.76438L25.783 2.6885C23.6521 1.69278 21.3697 1.1875 19 1.1875C16.8596 1.1875 14.7814 1.60253 12.8232 2.42072L13.281 3.51678C15.0931 2.75916 17.0175 2.375 19 2.375Z"
                  fill="currentColor"/>
            <path d="M6.43915 9.30525L5.43512 8.67172C4.95953 9.42519 4.5445 10.2232 4.2019 11.0426L5.29797 11.5003C5.61444 10.7415 5.99859 10.0029 6.43915 9.30525Z"
                  fill="currentColor"/>
            <path d="M6.7877 5.77066L6.48548 7.62316C6.44867 7.84759 6.54367 8.07322 6.72951 8.20444C6.91535 8.33506 7.15998 8.34872 7.35889 8.23888L8.9062 7.38328L10.4535 8.23828C10.5438 8.28756 10.6423 8.3125 10.7409 8.3125C10.8608 8.3125 10.9808 8.27569 11.0829 8.20384C11.2687 8.07263 11.3637 7.847 11.3269 7.62256L11.0247 5.77006L12.2995 4.46322C12.455 4.30409 12.5085 4.07134 12.4372 3.85997C12.366 3.64859 12.1837 3.49481 11.964 3.46156L10.2261 3.19616L9.44354 1.52831C9.34617 1.3205 9.13657 1.1875 8.9062 1.1875C8.67582 1.1875 8.46623 1.3205 8.36885 1.52891L7.58629 3.19675L5.84779 3.46216C5.6281 3.496 5.44523 3.64978 5.37457 3.86056C5.30392 4.07134 5.35676 4.30469 5.51232 4.46381L6.7877 5.77066ZM8.07851 4.32309C8.27445 4.29281 8.44248 4.16753 8.5262 3.98822L8.9062 3.17894L9.2862 3.98822C9.37051 4.16753 9.53854 4.29281 9.73388 4.32309L10.6429 4.46203L9.96545 5.15613C9.83363 5.29091 9.77426 5.48031 9.80454 5.66616L9.95832 6.60784L9.19357 6.18509C9.10392 6.13581 9.00535 6.11088 8.9062 6.11088C8.80704 6.11088 8.70848 6.13581 8.61882 6.18509L7.85407 6.60784L8.00785 5.66616C8.03814 5.48031 7.97876 5.29091 7.84695 5.15613L7.16948 4.46203L8.07851 4.32309Z"
                  fill="currentColor"/>
        </svg>
    )

    //3. 지역축제
    const SelImg3=()=>(
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 39 39" fill="none">
            <path d="M23.4673 16.4128C22.6206 16.4128 22.1515 15.3166 22.7608 14.7072L29.9983 7.46972C30.9018 6.56611 32.3347 7.95912 31.4112 8.88262L24.1737 16.1201C23.9787 16.3153 23.723 16.4128 23.4673 16.4128Z" stroke="currentColor" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.0782 17.8746C16.1778 17.8746 15.6987 16.727 16.3513 16.0899C18.068 14.4136 17.4916 12.6765 16.409 9.98106C15.347 7.33695 14.0253 4.04623 17.3797 1.24477C18.4023 0.390813 19.7473 1.97843 18.7135 2.84181C16.6257 4.58536 17.2113 6.39585 18.3398 9.20548C18.8624 10.5065 19.4028 11.8519 19.5029 13.2312C19.6257 14.9211 19.0702 16.3432 17.805 17.5786C17.6026 17.7761 17.3403 17.8746 17.0782 17.8746Z" stroke="currentColor" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M33.3892 23.6499C31.8259 23.6499 30.2781 23.0282 28.9045 22.4765C27.4355 21.8865 26.2508 21.4467 25.2059 21.4467C24.3334 21.4467 23.5584 21.7531 22.7957 22.5341C21.8571 23.4953 20.37 22.0401 21.307 21.0805C22.4308 19.9296 23.7092 19.366 25.2031 19.366C26.7682 19.366 28.2516 19.9719 29.6801 20.5457C31.1307 21.1283 32.315 21.5662 33.3612 21.5662C34.3414 21.5662 35.2003 21.1819 36.0438 20.172C36.9112 19.1333 38.4973 20.4802 37.6408 21.5058C36.9451 22.3389 36.2191 22.8835 35.4804 23.2153" stroke="currentColor" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.50177 24.1452L5.16872 27.2588L3.58252 30.9635L12.1914 33.4767L22.8439 28.9159L6.50177 24.1452Z" stroke="currentColor" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.06216 36.8502C0.798539 37.4658 1.42086 38.0881 2.03658 37.8246L11.6279 33.7181L12.1915 33.4768L3.58256 30.9635L1.06216 36.8502Z" stroke="currentColor" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.06053 20.5045L6.50171 24.1452L22.8439 28.9159L22.9232 28.8819L16.464 22.4226L10.0048 15.9635L8.88272 18.5841" stroke="currentColor" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M25.0463 5.71356C26.0497 5.71356 26.8631 4.90015 26.8631 3.89676C26.8631 2.89337 26.0497 2.07996 25.0463 2.07996C24.0429 2.07996 23.2295 2.89337 23.2295 3.89676C23.2295 4.90015 24.0429 5.71356 25.0463 5.71356Z" stroke="currentColor" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M35.0534 15.7207C36.0568 15.7207 36.8702 14.9073 36.8702 13.9039C36.8702 12.9005 36.0568 12.0871 35.0534 12.0871C34.05 12.0871 33.2366 12.9005 33.2366 13.9039C33.2366 14.9073 34.05 15.7207 35.0534 15.7207Z" stroke="currentColor" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.54935 3.34784L8.77076 4.7125L10.5873 4.4799L9.66696 6.06321L10.4495 7.71903L8.65929 7.33302L7.32632 8.58895L7.14025 6.76695L5.53394 5.88738L7.2092 5.14742L7.54935 3.34784Z" stroke="currentColor" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.69351 16.098C4.6969 16.098 5.51031 15.2846 5.51031 14.2812C5.51031 13.2778 4.6969 12.4644 3.69351 12.4644C2.69012 12.4644 1.87671 13.2778 1.87671 14.2812C1.87671 15.2846 2.69012 16.098 3.69351 16.098Z" stroke="currentColor" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M35.6021 31.4007L34.2375 30.1793L34.4701 28.3627L32.8867 29.2831L31.2309 28.5006L31.6169 30.2908L30.3611 31.6238L32.183 31.8098L33.0626 33.4162L33.8026 31.741L35.6021 31.4007Z" stroke="currentColor" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M24.6689 37.0734C25.6722 37.0734 26.4857 36.26 26.4857 35.2566C26.4857 34.2532 25.6722 33.4398 24.6689 33.4398C23.6655 33.4398 22.8521 34.2532 22.8521 35.2566C22.8521 36.26 23.6655 37.0734 24.6689 37.0734Z" stroke="currentColor" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M37.3369 1.46439L36.772 3.20645L37.8868 4.65943L36.0554 4.66054L35.018 6.16978L34.4511 4.42831L32.6951 3.90811L34.1761 2.83075L34.1282 1L35.6105 2.07565L37.3369 1.46439Z" stroke="currentColor" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )

    //4. 쇼핑
    const SelImg4=()=>(
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 40" fill="none">
            <path d="M16 0C12.0791 0 8.88889 3.19022 8.88889 7.11111V8.88889H0.888889C0.397333 8.88889 0 9.28711 0 9.77778V34.6667C0 37.1173 1.99378 39.1111 4.44444 39.1111H27.5556C30.0062 39.1111 32 37.1173 32 34.6667V9.77778C32 9.28711 31.6027 8.88889 31.1111 8.88889H23.1111V7.11111C23.1111 3.19022 19.9209 0 16 0ZM10.6667 7.11111C10.8907 0.0622224 21.1102 0.0648888 21.3333 7.11111V8.88889H10.6667V7.11111ZM30.2222 10.6667V34.6667C30.2222 36.1369 29.0258 37.3333 27.5556 37.3333H4.44444C2.97422 37.3333 1.77778 36.1369 1.77778 34.6667V10.6667H8.88889V11.5556C8.88889 12.0462 9.28622 12.4444 9.77778 12.4444C10.2693 12.4444 10.6667 12.0462 10.6667 11.5556V10.6667H21.3333V11.5556C21.3333 12.0462 21.7307 12.4444 22.2222 12.4444C22.7138 12.4444 23.1111 12.0462 23.1111 11.5556V10.6667H30.2222Z"
                  fill="currentColor"/>
            <path d="M19.3004 17.9049C18.0178 17.8906 16.8471 18.4933 16.0009 19.4417C15.1555 18.4942 13.984 17.8915 12.7013 17.9049C7.87021 18.0435 7.23199 24.0364 10.5387 26.7102L15.4231 30.8969C15.5884 31.04 15.7955 31.1111 16.0009 31.1111C16.2062 31.1111 16.4133 31.04 16.5787 30.8969L21.4631 26.7102C24.768 24.0373 24.1333 18.0426 19.3004 17.9049ZM20.3075 25.3609L16.0009 29.0515L11.6942 25.3609C9.68265 23.7849 9.55465 19.8044 12.7013 19.6826C13.8133 19.6035 14.6711 20.6071 15.3724 21.3271C15.72 21.6746 16.2818 21.6746 16.6293 21.3271L17.5475 20.4089C19.0169 18.848 21.8444 20.0106 21.7787 22.1609C21.7787 23.3929 21.2418 24.5591 20.3075 25.3609Z"
                  fill="currentColor"/>
        </svg>
    )

    return(
        <>
            <Container>
                <div className={'smallDiv'}>
                    <div className={'iconBgDiv'}>
                        <div className={'iconDiv'}>{SelImg0()}</div>
                    </div>
                    <p>체험</p>
                </div>
                <div className={'smallDiv'}>
                    <div className={'iconBgDiv'}>
                        <div className={'iconDiv'}>{SelImg1()}</div>
                    </div>
                    <p>전통문화</p>
                </div>
                <div className={'smallDiv'}>
                    <div className={'iconBgDiv'}>
                        <div className={'iconDiv'}>{SelImg2()}</div>
                    </div>
                    <p>액티비티</p>
                </div>
                <div className={'smallDiv'}>
                    <div className={'iconBgDiv'}>
                        <div className={'iconDiv'}>{SelImg3()}</div>
                    </div>
                    <p>지역축제</p>
                </div>
                <div className={'smallDiv'}>
                    <div className={'iconBgDiv'}>
                        <div className={'iconDiv'}>{SelImg4()}</div>
                    </div>
                    <p>쇼핑</p>
                </div>
            </Container>
        </>
    )
}

const Container=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-shrink: 0;

  .smallDiv{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-shrink: 0;
    flex: 1;
    // flex 정렬값 추가

    margin: 0 0 1.25rem 0;

    color: #808080;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &:hover{
      color:#009A78;
    }

    .iconBgDiv{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;

      width: 5.625rem;
      height: 5.625rem;

      border-radius: 50%;
      background-color: #fafafa;

      margin-bottom: 1.25rem;

      &:hover{
        background-color: #009a78;
        color: white;
      }

      .iconDiv{
        display: flex;
        flex-shrink: 0;
        width: 2.5rem;
        height: 2.5rem;
        border: none;
      }
    }
  } 
`;

export default CtgSelectB;