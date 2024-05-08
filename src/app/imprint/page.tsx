import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Imprint() {
  return (
    <div className="flex w-full h-full justify-center">
      <div className="container mt-28 z-20 px-5">
        <Link
          href={"/"}
          className="flex flex-row font-extralight align-middle items-center"
        >
          <IoIosArrowRoundBack size={28} className="my-auto" />
          <span className="my-auto">Home</span>
        </Link>
        <h1 className="text-5xl font-semibold">Imprint</h1>
        <div className="flex flex-col gap-8 mt-10">
          <p className="font-extralight">
            Legal Notice for compliance with the German laws under § 5 TMG and §
            55 RStV.
          </p>
          <div className="flex flex-col gap-2">
            <p>
              Emma Böcker <br /> c/o Linksjugend [&apos;solid] <br /> Kleine
              Alexanderstraße 28 <br /> 10178 Berlin
            </p>
            <h2 className="font-medium">Contact:</h2>
            <PhoneEmailSvg />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Responsible for Content:</h2>
            <p>Emma Böcker</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneEmailSvg() {
  return (
    <svg
      width="154"
      height="35"
      viewBox="0 0 154 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.63636 9.95455V2.45455H5.90909V9.95455H4.63636ZM1.52273 6.84091V5.56818H9.02273V6.84091H1.52273ZM11.4787 9.61364V8.45455L16.5923 0.363636H17.4332V2.15909H16.8651L13.0014 8.27273V8.36364H19.8878V9.61364H11.4787ZM16.956 12V9.26136V8.72159V0.363636H18.2969V12H16.956ZM25.7216 0.204545C26.1989 0.208333 26.6761 0.299242 27.1534 0.477272C27.6307 0.655303 28.0663 0.950757 28.4602 1.36364C28.8542 1.77273 29.1705 2.33144 29.4091 3.03977C29.6477 3.74811 29.767 4.63636 29.767 5.70455C29.767 6.73864 29.6686 7.6572 29.4716 8.46023C29.2784 9.25947 28.9981 9.93371 28.6307 10.483C28.267 11.0322 27.8239 11.4489 27.3011 11.733C26.7822 12.017 26.1951 12.1591 25.5398 12.1591C24.8883 12.1591 24.3068 12.0303 23.7955 11.7727C23.2879 11.5114 22.8712 11.1496 22.5455 10.6875C22.2235 10.2216 22.017 9.68182 21.9261 9.06818H23.3125C23.4375 9.60227 23.6856 10.0436 24.0568 10.392C24.4318 10.7367 24.9261 10.9091 25.5398 10.9091C26.4375 10.9091 27.1458 10.517 27.6648 9.73295C28.1875 8.94886 28.4489 7.84091 28.4489 6.40909H28.358C28.1458 6.72727 27.8939 7.00189 27.6023 7.23295C27.3106 7.46402 26.9867 7.64205 26.6307 7.76705C26.2746 7.89205 25.8958 7.95455 25.4943 7.95455C24.8277 7.95455 24.2159 7.78977 23.6591 7.46023C23.1061 7.12689 22.6629 6.67045 22.3295 6.09091C22 5.50758 21.8352 4.84091 21.8352 4.09091C21.8352 3.37879 21.9943 2.72727 22.3125 2.13636C22.6345 1.54167 23.0852 1.06818 23.6648 0.715909C24.2481 0.363636 24.9337 0.193182 25.7216 0.204545ZM25.7216 1.45455C25.2443 1.45455 24.8144 1.57386 24.4318 1.8125C24.053 2.04735 23.7519 2.36553 23.5284 2.76705C23.3087 3.16477 23.1989 3.60606 23.1989 4.09091C23.1989 4.57576 23.3049 5.01705 23.517 5.41477C23.733 5.80871 24.0265 6.12311 24.3977 6.35795C24.7727 6.58902 25.1989 6.70455 25.6761 6.70455C26.036 6.70455 26.3712 6.63447 26.6818 6.49432C26.9924 6.35038 27.2633 6.1553 27.4943 5.90909C27.7292 5.65909 27.9129 5.37689 28.0455 5.0625C28.178 4.74432 28.2443 4.41288 28.2443 4.06818C28.2443 3.61364 28.1345 3.1875 27.9148 2.78977C27.6989 2.39205 27.3996 2.07008 27.017 1.82386C26.6383 1.57765 26.2064 1.45455 25.7216 1.45455ZM40.5923 0.363636V12H39.1832V1.84091H39.1151L36.2741 3.72727V2.29545L39.1832 0.363636H40.5923ZM44.3026 12L49.5071 1.70455V1.61364H43.5071V0.363636H50.9616V1.68182L45.7798 12H44.3026ZM56.5724 12.1591C55.7921 12.1591 55.1027 12.0208 54.5043 11.7443C53.9096 11.464 53.4455 11.0795 53.1122 10.5909C52.7789 10.0985 52.6141 9.53788 52.6179 8.90909C52.6141 8.41667 52.7107 7.96212 52.9077 7.54545C53.1046 7.125 53.3736 6.77462 53.7145 6.49432C54.0592 6.21023 54.4437 6.0303 54.8679 5.95455V5.88636C54.3111 5.74242 53.8679 5.42992 53.5384 4.94886C53.2088 4.46401 53.0459 3.91288 53.0497 3.29545C53.0459 2.70455 53.1955 2.17614 53.4986 1.71023C53.8016 1.24432 54.2183 0.876893 54.7486 0.607954C55.2827 0.339015 55.8906 0.204545 56.5724 0.204545C57.2467 0.204545 57.849 0.339015 58.3793 0.607954C58.9096 0.876893 59.3262 1.24432 59.6293 1.71023C59.9361 2.17614 60.0914 2.70455 60.0952 3.29545C60.0914 3.91288 59.9228 4.46401 59.5895 4.94886C59.2599 5.42992 58.8224 5.74242 58.277 5.88636V5.95455C58.6974 6.0303 59.0762 6.21023 59.4134 6.49432C59.7505 6.77462 60.0194 7.125 60.2202 7.54545C60.4209 7.96212 60.5232 8.41667 60.527 8.90909C60.5232 9.53788 60.3527 10.0985 60.0156 10.5909C59.6823 11.0795 59.2183 11.464 58.6236 11.7443C58.0327 12.0208 57.349 12.1591 56.5724 12.1591ZM56.5724 10.9091C57.099 10.9091 57.5535 10.8239 57.9361 10.6534C58.3187 10.483 58.6141 10.2424 58.8224 9.93182C59.0308 9.62121 59.1368 9.25758 59.1406 8.84091C59.1368 8.40152 59.0232 8.01326 58.7997 7.67614C58.5762 7.33902 58.2713 7.07386 57.8849 6.88068C57.5024 6.6875 57.0649 6.59091 56.5724 6.59091C56.0762 6.59091 55.633 6.6875 55.2429 6.88068C54.8565 7.07386 54.5516 7.33902 54.3281 7.67614C54.1084 8.01326 54.0005 8.40152 54.0043 8.84091C54.0005 9.25758 54.1009 9.62121 54.3054 9.93182C54.5137 10.2424 54.8111 10.483 55.1974 10.6534C55.5838 10.8239 56.0421 10.9091 56.5724 10.9091ZM56.5724 5.38636C56.9891 5.38636 57.3584 5.30303 57.6804 5.13636C58.0062 4.9697 58.2618 4.73674 58.4474 4.4375C58.633 4.13826 58.7277 3.78788 58.7315 3.38636C58.7277 2.99242 58.6349 2.64962 58.4531 2.35795C58.2713 2.0625 58.0194 1.83523 57.6974 1.67614C57.3755 1.51326 57.0005 1.43182 56.5724 1.43182C56.1368 1.43182 55.7562 1.51326 55.4304 1.67614C55.1046 1.83523 54.8527 2.0625 54.6747 2.35795C54.4967 2.64962 54.4096 2.99242 54.4134 3.38636C54.4096 3.78788 54.4986 4.13826 54.6804 4.4375C54.866 4.73674 55.1217 4.9697 55.4474 5.13636C55.7732 5.30303 56.1482 5.38636 56.5724 5.38636ZM70.9318 12.1591C70.1515 12.1591 69.4621 12.0208 68.8636 11.7443C68.2689 11.464 67.8049 11.0795 67.4716 10.5909C67.1383 10.0985 66.9735 9.53788 66.9773 8.90909C66.9735 8.41667 67.0701 7.96212 67.267 7.54545C67.464 7.125 67.733 6.77462 68.0739 6.49432C68.4186 6.21023 68.803 6.0303 69.2273 5.95455V5.88636C68.6705 5.74242 68.2273 5.42992 67.8977 4.94886C67.5682 4.46401 67.4053 3.91288 67.4091 3.29545C67.4053 2.70455 67.5549 2.17614 67.858 1.71023C68.161 1.24432 68.5777 0.876893 69.108 0.607954C69.642 0.339015 70.25 0.204545 70.9318 0.204545C71.6061 0.204545 72.2083 0.339015 72.7386 0.607954C73.2689 0.876893 73.6856 1.24432 73.9886 1.71023C74.2955 2.17614 74.4508 2.70455 74.4545 3.29545C74.4508 3.91288 74.2822 4.46401 73.9489 4.94886C73.6193 5.42992 73.1818 5.74242 72.6364 5.88636V5.95455C73.0568 6.0303 73.4356 6.21023 73.7727 6.49432C74.1098 6.77462 74.3788 7.125 74.5795 7.54545C74.7803 7.96212 74.8826 8.41667 74.8864 8.90909C74.8826 9.53788 74.7121 10.0985 74.375 10.5909C74.0417 11.0795 73.5777 11.464 72.983 11.7443C72.392 12.0208 71.7083 12.1591 70.9318 12.1591ZM70.9318 10.9091C71.4583 10.9091 71.9129 10.8239 72.2955 10.6534C72.678 10.483 72.9735 10.2424 73.1818 9.93182C73.3902 9.62121 73.4962 9.25758 73.5 8.84091C73.4962 8.40152 73.3826 8.01326 73.1591 7.67614C72.9356 7.33902 72.6307 7.07386 72.2443 6.88068C71.8617 6.6875 71.4242 6.59091 70.9318 6.59091C70.4356 6.59091 69.9924 6.6875 69.6023 6.88068C69.2159 7.07386 68.911 7.33902 68.6875 7.67614C68.4678 8.01326 68.3598 8.40152 68.3636 8.84091C68.3598 9.25758 68.4602 9.62121 68.6648 9.93182C68.8731 10.2424 69.1705 10.483 69.5568 10.6534C69.9432 10.8239 70.4015 10.9091 70.9318 10.9091ZM70.9318 5.38636C71.3485 5.38636 71.7178 5.30303 72.0398 5.13636C72.3655 4.9697 72.6212 4.73674 72.8068 4.4375C72.9924 4.13826 73.0871 3.78788 73.0909 3.38636C73.0871 2.99242 72.9943 2.64962 72.8125 2.35795C72.6307 2.0625 72.3788 1.83523 72.0568 1.67614C71.7348 1.51326 71.3598 1.43182 70.9318 1.43182C70.4962 1.43182 70.1155 1.51326 69.7898 1.67614C69.464 1.83523 69.2121 2.0625 69.0341 2.35795C68.8561 2.64962 68.7689 2.99242 68.7727 3.38636C68.7689 3.78788 68.858 4.13826 69.0398 4.4375C69.2254 4.73674 69.4811 4.9697 69.8068 5.13636C70.1326 5.30303 70.5076 5.38636 70.9318 5.38636ZM80.7685 0.204545C81.2457 0.208333 81.723 0.299242 82.2003 0.477272C82.6776 0.655303 83.1132 0.950757 83.5071 1.36364C83.901 1.77273 84.2173 2.33144 84.456 3.03977C84.6946 3.74811 84.8139 4.63636 84.8139 5.70455C84.8139 6.73864 84.7154 7.6572 84.5185 8.46023C84.3253 9.25947 84.045 9.93371 83.6776 10.483C83.3139 11.0322 82.8707 11.4489 82.348 11.733C81.8291 12.017 81.242 12.1591 80.5866 12.1591C79.9351 12.1591 79.3537 12.0303 78.8423 11.7727C78.3348 11.5114 77.9181 11.1496 77.5923 10.6875C77.2704 10.2216 77.0639 9.68182 76.973 9.06818H78.3594C78.4844 9.60227 78.7325 10.0436 79.1037 10.392C79.4787 10.7367 79.973 10.9091 80.5866 10.9091C81.4844 10.9091 82.1927 10.517 82.7116 9.73295C83.2344 8.94886 83.4957 7.84091 83.4957 6.40909H83.4048C83.1927 6.72727 82.9408 7.00189 82.6491 7.23295C82.3575 7.46402 82.0336 7.64205 81.6776 7.76705C81.3215 7.89205 80.9427 7.95455 80.5412 7.95455C79.8745 7.95455 79.2628 7.78977 78.706 7.46023C78.1529 7.12689 77.7098 6.67045 77.3764 6.09091C77.0469 5.50758 76.8821 4.84091 76.8821 4.09091C76.8821 3.37879 77.0412 2.72727 77.3594 2.13636C77.6813 1.54167 78.1321 1.06818 78.7116 0.715909C79.295 0.363636 79.9806 0.193182 80.7685 0.204545ZM80.7685 1.45455C80.2912 1.45455 79.8613 1.57386 79.4787 1.8125C79.0999 2.04735 78.7988 2.36553 78.5753 2.76705C78.3556 3.16477 78.2457 3.60606 78.2457 4.09091C78.2457 4.57576 78.3518 5.01705 78.5639 5.41477C78.7798 5.80871 79.0734 6.12311 79.4446 6.35795C79.8196 6.58902 80.2457 6.70455 80.723 6.70455C81.0829 6.70455 81.4181 6.63447 81.7287 6.49432C82.0393 6.35038 82.3101 6.1553 82.5412 5.90909C82.776 5.65909 82.9598 5.37689 83.0923 5.0625C83.2249 4.74432 83.2912 4.41288 83.2912 4.06818C83.2912 3.61364 83.1813 3.1875 82.9616 2.78977C82.7457 2.39205 82.4465 2.07008 82.0639 1.82386C81.6851 1.57765 81.2533 1.45455 80.7685 1.45455ZM90.6847 12.1591C90.018 12.1591 89.4176 12.0265 88.8835 11.7614C88.3494 11.4962 87.9214 11.1326 87.5994 10.6705C87.2775 10.2083 87.1013 9.68182 87.071 9.09091H88.4347C88.4877 9.61742 88.7263 10.053 89.1506 10.3977C89.5786 10.7386 90.09 10.9091 90.6847 10.9091C91.1619 10.9091 91.5862 10.7973 91.9574 10.5739C92.3324 10.3504 92.6259 10.0436 92.8381 9.65341C93.054 9.25947 93.1619 8.81439 93.1619 8.31818C93.1619 7.81061 93.0502 7.35795 92.8267 6.96023C92.607 6.55871 92.304 6.24242 91.9176 6.01136C91.5313 5.7803 91.09 5.66288 90.5938 5.65909C90.2377 5.6553 89.8722 5.71023 89.4972 5.82386C89.1222 5.93371 88.8134 6.07576 88.571 6.25L87.2528 6.09091L87.9574 0.363636H94.0028V1.61364H89.1392L88.7301 5.04545H88.7983C89.0369 4.85606 89.3362 4.69886 89.696 4.57386C90.0559 4.44886 90.4309 4.38636 90.821 4.38636C91.5331 4.38636 92.1676 4.55682 92.7244 4.89773C93.285 5.23485 93.7244 5.69697 94.0426 6.28409C94.3646 6.87121 94.5256 7.54167 94.5256 8.29545C94.5256 9.03788 94.3589 9.70076 94.0256 10.2841C93.696 10.8636 93.2415 11.322 92.6619 11.6591C92.0824 11.9924 91.4233 12.1591 90.6847 12.1591ZM100.646 12.1591C100.169 12.1515 99.6918 12.0606 99.2145 11.8864C98.7372 11.7121 98.3016 11.4186 97.9077 11.0057C97.5137 10.589 97.1974 10.0265 96.9588 9.31818C96.7202 8.60606 96.6009 7.71212 96.6009 6.63636C96.6009 5.60606 96.6974 4.69318 96.8906 3.89773C97.0838 3.09848 97.3641 2.42614 97.7315 1.88068C98.099 1.33144 98.5421 0.914772 99.0611 0.630681C99.5838 0.34659 100.173 0.204545 100.828 0.204545C101.48 0.204545 102.059 0.335227 102.567 0.596591C103.078 0.854166 103.495 1.21401 103.817 1.67614C104.139 2.13826 104.347 2.67045 104.442 3.27273H103.055C102.927 2.75 102.677 2.31629 102.305 1.97159C101.934 1.62689 101.442 1.45455 100.828 1.45455C99.9266 1.45455 99.2164 1.84659 98.6974 2.63068C98.1823 3.41477 97.9228 4.51515 97.919 5.93182H98.0099C98.2221 5.60985 98.474 5.33523 98.7656 5.10795C99.0611 4.87689 99.3868 4.69886 99.7429 4.57386C100.099 4.44886 100.476 4.38636 100.874 4.38636C101.54 4.38636 102.15 4.55303 102.703 4.88636C103.256 5.21591 103.699 5.67235 104.033 6.25568C104.366 6.83523 104.533 7.5 104.533 8.25C104.533 8.9697 104.372 9.62879 104.05 10.2273C103.728 10.822 103.275 11.2955 102.692 11.6477C102.112 11.9962 101.43 12.1667 100.646 12.1591ZM100.646 10.9091C101.124 10.9091 101.552 10.7898 101.93 10.5511C102.313 10.3125 102.614 9.99242 102.834 9.59091C103.057 9.18939 103.169 8.74242 103.169 8.25C103.169 7.76894 103.061 7.33144 102.845 6.9375C102.633 6.53977 102.339 6.22348 101.964 5.98864C101.593 5.75379 101.169 5.63636 100.692 5.63636C100.332 5.63636 99.9967 5.70833 99.6861 5.85227C99.3755 5.99242 99.1027 6.18561 98.8679 6.43182C98.6368 6.67803 98.455 6.96023 98.3224 7.27841C98.1899 7.5928 98.1236 7.92424 98.1236 8.27273C98.1236 8.73485 98.2315 9.16667 98.4474 9.56818C98.6671 9.9697 98.9664 10.2936 99.3452 10.5398C99.7277 10.786 100.161 10.9091 100.646 10.9091ZM107.131 12L112.335 1.70455V1.61364H106.335V0.363636H113.79V1.68182L108.608 12H107.131ZM119.521 12.1591C119.044 12.1515 118.567 12.0606 118.089 11.8864C117.612 11.7121 117.177 11.4186 116.783 11.0057C116.389 10.589 116.072 10.0265 115.834 9.31818C115.595 8.60606 115.476 7.71212 115.476 6.63636C115.476 5.60606 115.572 4.69318 115.766 3.89773C115.959 3.09848 116.239 2.42614 116.607 1.88068C116.974 1.33144 117.417 0.914772 117.936 0.630681C118.459 0.34659 119.048 0.204545 119.703 0.204545C120.355 0.204545 120.934 0.335227 121.442 0.596591C121.953 0.854166 122.37 1.21401 122.692 1.67614C123.014 2.13826 123.222 2.67045 123.317 3.27273H121.93C121.802 2.75 121.552 2.31629 121.18 1.97159C120.809 1.62689 120.317 1.45455 119.703 1.45455C118.802 1.45455 118.091 1.84659 117.572 2.63068C117.057 3.41477 116.798 4.51515 116.794 5.93182H116.885C117.097 5.60985 117.349 5.33523 117.641 5.10795C117.936 4.87689 118.262 4.69886 118.618 4.57386C118.974 4.44886 119.351 4.38636 119.749 4.38636C120.415 4.38636 121.025 4.55303 121.578 4.88636C122.131 5.21591 122.574 5.67235 122.908 6.25568C123.241 6.83523 123.408 7.5 123.408 8.25C123.408 8.9697 123.247 9.62879 122.925 10.2273C122.603 10.822 122.15 11.2955 121.567 11.6477C120.987 11.9962 120.305 12.1667 119.521 12.1591ZM119.521 10.9091C119.999 10.9091 120.427 10.7898 120.805 10.5511C121.188 10.3125 121.489 9.99242 121.709 9.59091C121.932 9.18939 122.044 8.74242 122.044 8.25C122.044 7.76894 121.936 7.33144 121.72 6.9375C121.508 6.53977 121.214 6.22348 120.839 5.98864C120.468 5.75379 120.044 5.63636 119.567 5.63636C119.207 5.63636 118.872 5.70833 118.561 5.85227C118.25 5.99242 117.978 6.18561 117.743 6.43182C117.512 6.67803 117.33 6.96023 117.197 7.27841C117.065 7.5928 116.999 7.92424 116.999 8.27273C116.999 8.73485 117.107 9.16667 117.322 9.56818C117.542 9.9697 117.841 10.2936 118.22 10.5398C118.603 10.786 119.036 10.9091 119.521 10.9091ZM129.369 12.1591C128.589 12.1591 127.9 12.0208 127.301 11.7443C126.706 11.464 126.242 11.0795 125.909 10.5909C125.576 10.0985 125.411 9.53788 125.415 8.90909C125.411 8.41667 125.508 7.96212 125.705 7.54545C125.902 7.125 126.17 6.77462 126.511 6.49432C126.856 6.21023 127.241 6.0303 127.665 5.95455V5.88636C127.108 5.74242 126.665 5.42992 126.335 4.94886C126.006 4.46401 125.843 3.91288 125.847 3.29545C125.843 2.70455 125.992 2.17614 126.295 1.71023C126.598 1.24432 127.015 0.876893 127.545 0.607954C128.08 0.339015 128.688 0.204545 129.369 0.204545C130.044 0.204545 130.646 0.339015 131.176 0.607954C131.706 0.876893 132.123 1.24432 132.426 1.71023C132.733 2.17614 132.888 2.70455 132.892 3.29545C132.888 3.91288 132.72 4.46401 132.386 4.94886C132.057 5.42992 131.619 5.74242 131.074 5.88636V5.95455C131.494 6.0303 131.873 6.21023 132.21 6.49432C132.547 6.77462 132.816 7.125 133.017 7.54545C133.218 7.96212 133.32 8.41667 133.324 8.90909C133.32 9.53788 133.15 10.0985 132.812 10.5909C132.479 11.0795 132.015 11.464 131.42 11.7443C130.83 12.0208 130.146 12.1591 129.369 12.1591ZM129.369 10.9091C129.896 10.9091 130.35 10.8239 130.733 10.6534C131.116 10.483 131.411 10.2424 131.619 9.93182C131.828 9.62121 131.934 9.25758 131.938 8.84091C131.934 8.40152 131.82 8.01326 131.597 7.67614C131.373 7.33902 131.068 7.07386 130.682 6.88068C130.299 6.6875 129.862 6.59091 129.369 6.59091C128.873 6.59091 128.43 6.6875 128.04 6.88068C127.653 7.07386 127.348 7.33902 127.125 7.67614C126.905 8.01326 126.797 8.40152 126.801 8.84091C126.797 9.25758 126.898 9.62121 127.102 9.93182C127.311 10.2424 127.608 10.483 127.994 10.6534C128.381 10.8239 128.839 10.9091 129.369 10.9091ZM129.369 5.38636C129.786 5.38636 130.155 5.30303 130.477 5.13636C130.803 4.9697 131.059 4.73674 131.244 4.4375C131.43 4.13826 131.525 3.78788 131.528 3.38636C131.525 2.99242 131.432 2.64962 131.25 2.35795C131.068 2.0625 130.816 1.83523 130.494 1.67614C130.172 1.51326 129.797 1.43182 129.369 1.43182C128.934 1.43182 128.553 1.51326 128.227 1.67614C127.902 1.83523 127.65 2.0625 127.472 2.35795C127.294 2.64962 127.206 2.99242 127.21 3.38636C127.206 3.78788 127.295 4.13826 127.477 4.4375C127.663 4.73674 127.919 4.9697 128.244 5.13636C128.57 5.30303 128.945 5.38636 129.369 5.38636ZM4.88636 31.1818C4.04545 31.1818 3.32008 30.9962 2.71023 30.625C2.10417 30.25 1.63636 29.7273 1.30682 29.0568C0.981061 28.3826 0.818182 27.5985 0.818182 26.7045C0.818182 25.8106 0.981061 25.0227 1.30682 24.3409C1.63636 23.6553 2.0947 23.1212 2.68182 22.7386C3.27273 22.3523 3.96212 22.1591 4.75 22.1591C5.20455 22.1591 5.65341 22.2348 6.09659 22.3864C6.53977 22.5379 6.94318 22.7841 7.30682 23.125C7.67045 23.4621 7.96023 23.9091 8.17614 24.4659C8.39205 25.0227 8.5 25.7083 8.5 26.5227V27.0909H1.77273V25.9318H7.13636C7.13636 25.4394 7.03788 25 6.84091 24.6136C6.64773 24.2273 6.37121 23.9223 6.01136 23.6989C5.6553 23.4754 5.23485 23.3636 4.75 23.3636C4.21591 23.3636 3.75379 23.4962 3.36364 23.7614C2.97727 24.0227 2.67992 24.3636 2.47159 24.7841C2.26326 25.2045 2.15909 25.6553 2.15909 26.1364V26.9091C2.15909 27.5682 2.27273 28.1269 2.5 28.5852C2.73106 29.0398 3.05114 29.3864 3.46023 29.625C3.86932 29.8598 4.3447 29.9773 4.88636 29.9773C5.23864 29.9773 5.55682 29.928 5.84091 29.8295C6.12879 29.7273 6.37689 29.5758 6.58523 29.375C6.79356 29.1705 6.95455 28.9167 7.06818 28.6136L8.36364 28.9773C8.22727 29.4167 7.99811 29.803 7.67614 30.1364C7.35417 30.4659 6.95644 30.7235 6.48295 30.9091C6.00947 31.0909 5.47727 31.1818 4.88636 31.1818ZM10.5398 31V22.2727H11.8352V23.6364H11.9489C12.1307 23.1705 12.4242 22.8087 12.8295 22.5511C13.2348 22.2898 13.7216 22.1591 14.2898 22.1591C14.8655 22.1591 15.3447 22.2898 15.7273 22.5511C16.1136 22.8087 16.4148 23.1705 16.6307 23.6364H16.7216C16.9451 23.1856 17.2803 22.8277 17.7273 22.5625C18.1742 22.2936 18.7102 22.1591 19.3352 22.1591C20.1155 22.1591 20.7538 22.4034 21.25 22.892C21.7462 23.3769 21.9943 24.1326 21.9943 25.1591V31H20.6534V25.1591C20.6534 24.5152 20.4773 24.0549 20.125 23.7784C19.7727 23.5019 19.358 23.3636 18.8807 23.3636C18.267 23.3636 17.7917 23.5492 17.4545 23.9205C17.1174 24.2879 16.9489 24.7538 16.9489 25.3182V31H15.5852V25.0227C15.5852 24.5265 15.4242 24.1269 15.1023 23.8239C14.7803 23.517 14.3655 23.3636 13.858 23.3636C13.5095 23.3636 13.1837 23.4564 12.8807 23.642C12.5814 23.8277 12.339 24.0852 12.1534 24.4148C11.9716 24.7405 11.8807 25.1174 11.8807 25.5455V31H10.5398ZM24.446 31V22.2727H25.7415V23.6364H25.8551C26.0369 23.1705 26.3305 22.8087 26.7358 22.5511C27.1411 22.2898 27.6278 22.1591 28.196 22.1591C28.7718 22.1591 29.2509 22.2898 29.6335 22.5511C30.0199 22.8087 30.321 23.1705 30.5369 23.6364H30.6278C30.8513 23.1856 31.1866 22.8277 31.6335 22.5625C32.0805 22.2936 32.6165 22.1591 33.2415 22.1591C34.0218 22.1591 34.66 22.4034 35.1562 22.892C35.6525 23.3769 35.9006 24.1326 35.9006 25.1591V31H34.5597V25.1591C34.5597 24.5152 34.3835 24.0549 34.0312 23.7784C33.679 23.5019 33.2642 23.3636 32.7869 23.3636C32.1733 23.3636 31.6979 23.5492 31.3608 23.9205C31.0237 24.2879 30.8551 24.7538 30.8551 25.3182V31H29.4915V25.0227C29.4915 24.5265 29.3305 24.1269 29.0085 23.8239C28.6866 23.517 28.2718 23.3636 27.7642 23.3636C27.4157 23.3636 27.09 23.4564 26.7869 23.642C26.4877 23.8277 26.2453 24.0852 26.0597 24.4148C25.8778 24.7405 25.7869 25.1174 25.7869 25.5455V31H24.446ZM40.9205 31.2045C40.3674 31.2045 39.8655 31.1004 39.4148 30.892C38.964 30.6799 38.6061 30.375 38.3409 29.9773C38.0758 29.5758 37.9432 29.0909 37.9432 28.5227C37.9432 28.0227 38.0417 27.6174 38.2386 27.3068C38.4356 26.9924 38.6989 26.7462 39.0284 26.5682C39.358 26.3902 39.7216 26.2576 40.1193 26.1705C40.5208 26.0795 40.9242 26.0076 41.3295 25.9545C41.8598 25.8864 42.2898 25.8352 42.6193 25.8011C42.9527 25.7633 43.1951 25.7008 43.3466 25.6136C43.5019 25.5265 43.5795 25.375 43.5795 25.1591V25.1136C43.5795 24.553 43.4261 24.1174 43.1193 23.8068C42.8163 23.4962 42.3561 23.3409 41.7386 23.3409C41.0985 23.3409 40.5966 23.4811 40.233 23.7614C39.8693 24.0417 39.6136 24.3409 39.4659 24.6591L38.1932 24.2045C38.4205 23.6742 38.7235 23.2614 39.1023 22.9659C39.4848 22.6667 39.9015 22.4583 40.3523 22.3409C40.8068 22.2197 41.2538 22.1591 41.6932 22.1591C41.9735 22.1591 42.2955 22.1932 42.6591 22.2614C43.0265 22.3258 43.3807 22.4602 43.7216 22.6648C44.0663 22.8693 44.3523 23.178 44.5795 23.5909C44.8068 24.0038 44.9205 24.5568 44.9205 25.25V31H43.5795V29.8182H43.5114C43.4205 30.0076 43.2689 30.2102 43.0568 30.4261C42.8447 30.642 42.5625 30.8258 42.2102 30.9773C41.858 31.1288 41.428 31.2045 40.9205 31.2045ZM41.125 30C41.6553 30 42.1023 29.8958 42.4659 29.6875C42.8333 29.4792 43.1098 29.2102 43.2955 28.8807C43.4848 28.5511 43.5795 28.2045 43.5795 27.8409V26.6136C43.5227 26.6818 43.3977 26.7443 43.2045 26.8011C43.0152 26.8542 42.7955 26.9015 42.5455 26.9432C42.2992 26.9811 42.0587 27.0152 41.8239 27.0455C41.5928 27.072 41.4053 27.0947 41.2614 27.1136C40.9129 27.1591 40.5871 27.233 40.2841 27.3352C39.9848 27.4337 39.7424 27.5833 39.5568 27.7841C39.375 27.9811 39.2841 28.25 39.2841 28.5909C39.2841 29.0568 39.4564 29.4091 39.8011 29.6477C40.1496 29.8826 40.5909 30 41.125 30ZM54.0724 34.0682C52.9134 34.0682 51.8887 33.9091 50.9986 33.5909C50.1084 33.2765 49.3603 32.8125 48.7543 32.1989C48.1482 31.5852 47.6899 30.8333 47.3793 29.9432C47.0687 29.053 46.9134 28.0341 46.9134 26.8864C46.9134 25.7765 47.0705 24.7841 47.3849 23.9091C47.7031 23.0341 48.1634 22.2917 48.7656 21.6818C49.3717 21.0682 50.1065 20.6004 50.9702 20.2784C51.8376 19.9564 52.8187 19.7955 53.9134 19.7955C54.9777 19.7955 55.9096 19.9697 56.7088 20.3182C57.5118 20.6629 58.1823 21.1307 58.7202 21.7216C59.2618 22.3087 59.6671 22.9697 59.9361 23.7045C60.2088 24.4394 60.3452 25.197 60.3452 25.9773C60.3452 26.5265 60.3187 27.0833 60.2656 27.6477C60.2126 28.2121 60.1009 28.7311 59.9304 29.2045C59.7599 29.6742 59.4967 30.053 59.1406 30.3409C58.7884 30.6288 58.3111 30.7727 57.7088 30.7727C57.4437 30.7727 57.152 30.7311 56.8338 30.6477C56.5156 30.5644 56.2334 30.4261 55.9872 30.233C55.741 30.0398 55.5952 29.7803 55.5497 29.4545H55.4815C55.3906 29.6742 55.2505 29.8826 55.0611 30.0795C54.8755 30.2765 54.6312 30.4337 54.3281 30.5511C54.0289 30.6686 53.6634 30.7197 53.2315 30.7045C52.7391 30.6856 52.3054 30.5758 51.9304 30.375C51.5554 30.1705 51.241 29.8939 50.9872 29.5455C50.7372 29.1932 50.5478 28.786 50.419 28.3239C50.294 27.858 50.2315 27.3561 50.2315 26.8182C50.2315 26.3068 50.3073 25.839 50.4588 25.4148C50.6103 24.9905 50.8205 24.6193 51.0895 24.3011C51.3622 23.983 51.6804 23.7292 52.044 23.5398C52.4115 23.3466 52.8073 23.2273 53.2315 23.1818C53.6103 23.1439 53.955 23.161 54.2656 23.233C54.5762 23.3011 54.8319 23.4053 55.0327 23.5455C55.2334 23.6818 55.3603 23.8333 55.4134 24H55.4815V23.3636H56.6861V28.5C56.6861 28.8182 56.7751 29.0985 56.9531 29.3409C57.1312 29.5833 57.3906 29.7045 57.7315 29.7045C58.1179 29.7045 58.4134 29.572 58.6179 29.3068C58.8262 29.0417 58.9683 28.6326 59.044 28.0795C59.1236 27.5265 59.1634 26.8182 59.1634 25.9545C59.1634 25.447 59.0933 24.947 58.9531 24.4545C58.8168 23.9583 58.6084 23.4943 58.3281 23.0625C58.0516 22.6307 57.7012 22.25 57.277 21.9205C56.8527 21.5909 56.3546 21.3333 55.7827 21.1477C55.2145 20.9583 54.5687 20.8636 53.8452 20.8636C52.955 20.8636 52.1577 21.0019 51.4531 21.2784C50.7524 21.5511 50.1558 21.9508 49.6634 22.4773C49.1747 23 48.8016 23.6364 48.544 24.3864C48.2902 25.1326 48.1634 25.9811 48.1634 26.9318C48.1634 27.8977 48.2902 28.7557 48.544 29.5057C48.8016 30.2557 49.1804 30.8883 49.6804 31.4034C50.1842 31.9186 50.8073 32.3087 51.5497 32.5739C52.2921 32.8428 53.1482 32.9773 54.1179 32.9773C54.5346 32.9773 54.9455 32.9375 55.3509 32.858C55.7562 32.7784 56.1141 32.6913 56.4247 32.5966C56.7353 32.5019 56.9588 32.4318 57.0952 32.3864L57.4134 33.4318C57.1785 33.5303 56.8717 33.6288 56.4929 33.7273C56.1179 33.8258 55.7164 33.9072 55.2884 33.9716C54.8641 34.036 54.4588 34.0682 54.0724 34.0682ZM53.4134 29.5455C53.9209 29.5455 54.3319 29.4432 54.6463 29.2386C54.9607 29.0341 55.1899 28.7254 55.3338 28.3125C55.4777 27.8996 55.5497 27.3788 55.5497 26.75C55.5497 26.1136 55.4702 25.6174 55.3111 25.2614C55.152 24.9053 54.9171 24.6553 54.6065 24.5114C54.2959 24.3674 53.9134 24.2955 53.4588 24.2955C53.027 24.2955 52.6577 24.4091 52.3509 24.6364C52.0478 24.8598 51.8149 25.1591 51.652 25.5341C51.4929 25.9053 51.4134 26.3106 51.4134 26.75C51.4134 27.2348 51.4777 27.6913 51.6065 28.1193C51.7353 28.5436 51.9455 28.8883 52.2372 29.1534C52.5289 29.4148 52.9209 29.5455 53.4134 29.5455ZM62.5341 31V19.3636H63.875V23.6591H63.9886C64.0871 23.5076 64.2235 23.3144 64.3977 23.0795C64.5758 22.8409 64.8295 22.6288 65.1591 22.4432C65.4924 22.2538 65.9432 22.1591 66.5114 22.1591C67.2462 22.1591 67.8939 22.3428 68.4545 22.7102C69.0152 23.0777 69.4527 23.5985 69.767 24.2727C70.0814 24.947 70.2386 25.7424 70.2386 26.6591C70.2386 27.5833 70.0814 28.3845 69.767 29.0625C69.4527 29.7367 69.017 30.2595 68.4602 30.6307C67.9034 30.9981 67.2614 31.1818 66.5341 31.1818C65.9735 31.1818 65.5246 31.089 65.1875 30.9034C64.8504 30.714 64.5909 30.5 64.4091 30.2614C64.2273 30.0189 64.0871 29.8182 63.9886 29.6591H63.8295V31H62.5341ZM63.8523 26.6364C63.8523 27.2955 63.9489 27.8769 64.142 28.3807C64.3352 28.8807 64.6174 29.2727 64.9886 29.5568C65.3598 29.8371 65.8144 29.9773 66.3523 29.9773C66.9129 29.9773 67.3807 29.8295 67.7557 29.5341C68.1345 29.2348 68.4186 28.8333 68.608 28.3295C68.8011 27.822 68.8977 27.2576 68.8977 26.6364C68.8977 26.0227 68.803 25.4697 68.6136 24.9773C68.428 24.4811 68.1458 24.089 67.767 23.8011C67.392 23.5095 66.9205 23.3636 66.3523 23.3636C65.8068 23.3636 65.3485 23.5019 64.9773 23.7784C64.6061 24.0511 64.3258 24.4337 64.1364 24.9261C63.947 25.4148 63.8523 25.9848 63.8523 26.6364ZM75.8352 31.1818C75.0473 31.1818 74.3561 30.9943 73.7614 30.6193C73.1705 30.2443 72.7083 29.7197 72.375 29.0455C72.0455 28.3712 71.8807 27.5833 71.8807 26.6818C71.8807 25.7727 72.0455 24.9792 72.375 24.3011C72.7083 23.6231 73.1705 23.0966 73.7614 22.7216C74.3561 22.3466 75.0473 22.1591 75.8352 22.1591C76.6231 22.1591 77.3125 22.3466 77.9034 22.7216C78.4981 23.0966 78.9602 23.6231 79.2898 24.3011C79.6231 24.9792 79.7898 25.7727 79.7898 26.6818C79.7898 27.5833 79.6231 28.3712 79.2898 29.0455C78.9602 29.7197 78.4981 30.2443 77.9034 30.6193C77.3125 30.9943 76.6231 31.1818 75.8352 31.1818ZM75.8352 29.9773C76.4337 29.9773 76.9261 29.8239 77.3125 29.517C77.6989 29.2102 77.9848 28.8068 78.1705 28.3068C78.3561 27.8068 78.4489 27.2652 78.4489 26.6818C78.4489 26.0985 78.3561 25.5549 78.1705 25.0511C77.9848 24.5473 77.6989 24.1402 77.3125 23.8295C76.9261 23.5189 76.4337 23.3636 75.8352 23.3636C75.2367 23.3636 74.7443 23.5189 74.358 23.8295C73.9716 24.1402 73.6856 24.5473 73.5 25.0511C73.3144 25.5549 73.2216 26.0985 73.2216 26.6818C73.2216 27.2652 73.3144 27.8068 73.5 28.3068C73.6856 28.8068 73.9716 29.2102 74.358 29.517C74.7443 29.8239 75.2367 29.9773 75.8352 29.9773ZM85.4957 31.1818C84.6548 31.1818 83.9295 30.9962 83.3196 30.625C82.7135 30.25 82.2457 29.7273 81.9162 29.0568C81.5904 28.3826 81.4276 27.5985 81.4276 26.7045C81.4276 25.8106 81.5904 25.0227 81.9162 24.3409C82.2457 23.6553 82.7041 23.1212 83.2912 22.7386C83.8821 22.3523 84.5715 22.1591 85.3594 22.1591C85.8139 22.1591 86.2628 22.2348 86.706 22.3864C87.1491 22.5379 87.5526 22.7841 87.9162 23.125C88.2798 23.4621 88.5696 23.9091 88.7855 24.4659C89.0014 25.0227 89.1094 25.7083 89.1094 26.5227V27.0909H82.3821V25.9318H87.7457C87.7457 25.4394 87.6473 25 87.4503 24.6136C87.2571 24.2273 86.9806 23.9223 86.6207 23.6989C86.2647 23.4754 85.8442 23.3636 85.3594 23.3636C84.8253 23.3636 84.3632 23.4962 83.973 23.7614C83.5866 24.0227 83.2893 24.3636 83.081 24.7841C82.8726 25.2045 82.7685 25.6553 82.7685 26.1364V26.9091C82.7685 27.5682 82.8821 28.1269 83.1094 28.5852C83.3404 29.0398 83.6605 29.3864 84.0696 29.625C84.4787 29.8598 84.9541 29.9773 85.4957 29.9773C85.848 29.9773 86.1662 29.928 86.4503 29.8295C86.7382 29.7273 86.9863 29.5758 87.1946 29.375C87.4029 29.1705 87.5639 28.9167 87.6776 28.6136L88.973 28.9773C88.8366 29.4167 88.6075 29.803 88.2855 30.1364C87.9635 30.4659 87.5658 30.7235 87.0923 30.9091C86.6188 31.0909 86.0866 31.1818 85.4957 31.1818ZM94.6946 31.1818C93.8764 31.1818 93.1719 30.9886 92.581 30.6023C91.9901 30.2159 91.5355 29.6837 91.2173 29.0057C90.8991 28.3277 90.7401 27.553 90.7401 26.6818C90.7401 25.7955 90.9029 25.0133 91.2287 24.3352C91.5582 23.6534 92.0166 23.1212 92.6037 22.7386C93.1946 22.3523 93.884 22.1591 94.6719 22.1591C95.2855 22.1591 95.8385 22.2727 96.331 22.5C96.8234 22.7273 97.2268 23.0455 97.5412 23.4545C97.8556 23.8636 98.0507 24.3409 98.1264 24.8864H96.7855C96.6832 24.4886 96.456 24.1364 96.1037 23.8295C95.7552 23.5189 95.2855 23.3636 94.6946 23.3636C94.1719 23.3636 93.7135 23.5 93.3196 23.7727C92.9295 24.0417 92.6245 24.4223 92.4048 24.9148C92.1889 25.4034 92.081 25.9773 92.081 26.6364C92.081 27.3106 92.187 27.8977 92.3991 28.3977C92.6151 28.8977 92.9181 29.286 93.3082 29.5625C93.7022 29.839 94.1643 29.9773 94.6946 29.9773C95.0431 29.9773 95.3594 29.9167 95.6435 29.7955C95.9276 29.6742 96.1681 29.5 96.3651 29.2727C96.562 29.0455 96.7022 28.7727 96.7855 28.4545H98.1264C98.0507 28.9697 97.8632 29.4337 97.5639 29.8466C97.2685 30.2557 96.8764 30.5814 96.3878 30.8239C95.9029 31.0625 95.3385 31.1818 94.6946 31.1818ZM101.337 27.8182L101.314 26.1591H101.587L105.405 22.2727H107.064L102.996 26.3864H102.882L101.337 27.8182ZM100.087 31V19.3636H101.428V31H100.087ZM105.632 31L102.223 26.6818L103.178 25.75L107.337 31H105.632ZM112.089 31.1818C111.249 31.1818 110.523 30.9962 109.913 30.625C109.307 30.25 108.839 29.7273 108.51 29.0568C108.184 28.3826 108.021 27.5985 108.021 26.7045C108.021 25.8106 108.184 25.0227 108.51 24.3409C108.839 23.6553 109.298 23.1212 109.885 22.7386C110.476 22.3523 111.165 22.1591 111.953 22.1591C112.408 22.1591 112.857 22.2348 113.3 22.3864C113.743 22.5379 114.146 22.7841 114.51 23.125C114.874 23.4621 115.163 23.9091 115.379 24.4659C115.595 25.0227 115.703 25.7083 115.703 26.5227V27.0909H108.976V25.9318H114.339C114.339 25.4394 114.241 25 114.044 24.6136C113.851 24.2273 113.574 23.9223 113.214 23.6989C112.858 23.4754 112.438 23.3636 111.953 23.3636C111.419 23.3636 110.957 23.4962 110.567 23.7614C110.18 24.0227 109.883 24.3636 109.675 24.7841C109.466 25.2045 109.362 25.6553 109.362 26.1364V26.9091C109.362 27.5682 109.476 28.1269 109.703 28.5852C109.934 29.0398 110.254 29.3864 110.663 29.625C111.072 29.8598 111.548 29.9773 112.089 29.9773C112.442 29.9773 112.76 29.928 113.044 29.8295C113.332 29.7273 113.58 29.5758 113.788 29.375C113.997 29.1705 114.158 28.9167 114.271 28.6136L115.567 28.9773C115.43 29.4167 115.201 29.803 114.879 30.1364C114.557 30.4659 114.16 30.7235 113.686 30.9091C113.213 31.0909 112.68 31.1818 112.089 31.1818ZM117.743 31V22.2727H119.038V23.5909H119.129C119.288 23.1591 119.576 22.8087 119.993 22.5398C120.41 22.2708 120.879 22.1364 121.402 22.1364C121.5 22.1364 121.624 22.1383 121.771 22.142C121.919 22.1458 122.031 22.1515 122.107 22.1591V23.5227C122.061 23.5114 121.957 23.4943 121.794 23.4716C121.635 23.4451 121.466 23.4318 121.288 23.4318C120.864 23.4318 120.485 23.5208 120.152 23.6989C119.822 23.8731 119.561 24.1155 119.368 24.4261C119.179 24.733 119.084 25.0833 119.084 25.4773V31H117.743ZM123.673 31.0909C123.393 31.0909 123.152 30.9905 122.952 30.7898C122.751 30.589 122.651 30.3485 122.651 30.0682C122.651 29.7879 122.751 29.5473 122.952 29.3466C123.152 29.1458 123.393 29.0455 123.673 29.0455C123.954 29.0455 124.194 29.1458 124.395 29.3466C124.596 29.5473 124.696 29.7879 124.696 30.0682C124.696 30.2538 124.649 30.4242 124.554 30.5795C124.463 30.7348 124.34 30.8598 124.185 30.9545C124.033 31.0455 123.863 31.0909 123.673 31.0909ZM130.398 31.1818C129.67 31.1818 129.028 30.9981 128.472 30.6307C127.915 30.2595 127.479 29.7367 127.165 29.0625C126.85 28.3845 126.693 27.5833 126.693 26.6591C126.693 25.7424 126.85 24.947 127.165 24.2727C127.479 23.5985 127.917 23.0777 128.477 22.7102C129.038 22.3428 129.686 22.1591 130.42 22.1591C130.989 22.1591 131.438 22.2538 131.767 22.4432C132.1 22.6288 132.354 22.8409 132.528 23.0795C132.706 23.3144 132.845 23.5076 132.943 23.6591H133.057V19.3636H134.398V31H133.102V29.6591H132.943C132.845 29.8182 132.705 30.0189 132.523 30.2614C132.341 30.5 132.081 30.714 131.744 30.9034C131.407 31.089 130.958 31.1818 130.398 31.1818ZM130.58 29.9773C131.117 29.9773 131.572 29.8371 131.943 29.5568C132.314 29.2727 132.597 28.8807 132.79 28.3807C132.983 27.8769 133.08 27.2955 133.08 26.6364C133.08 25.9848 132.985 25.4148 132.795 24.9261C132.606 24.4337 132.326 24.0511 131.955 23.7784C131.583 23.5019 131.125 23.3636 130.58 23.3636C130.011 23.3636 129.538 23.5095 129.159 23.8011C128.784 24.089 128.502 24.4811 128.312 24.9773C128.127 25.4697 128.034 26.0227 128.034 26.6364C128.034 27.2576 128.129 27.822 128.318 28.3295C128.511 28.8333 128.795 29.2348 129.17 29.5341C129.549 29.8295 130.019 29.9773 130.58 29.9773ZM140.699 31.1818C139.858 31.1818 139.133 30.9962 138.523 30.625C137.917 30.25 137.449 29.7273 137.119 29.0568C136.794 28.3826 136.631 27.5985 136.631 26.7045C136.631 25.8106 136.794 25.0227 137.119 24.3409C137.449 23.6553 137.907 23.1212 138.494 22.7386C139.085 22.3523 139.775 22.1591 140.562 22.1591C141.017 22.1591 141.466 22.2348 141.909 22.3864C142.352 22.5379 142.756 22.7841 143.119 23.125C143.483 23.4621 143.773 23.9091 143.989 24.4659C144.205 25.0227 144.312 25.7083 144.312 26.5227V27.0909H137.585V25.9318H142.949C142.949 25.4394 142.85 25 142.653 24.6136C142.46 24.2273 142.184 23.9223 141.824 23.6989C141.468 23.4754 141.047 23.3636 140.562 23.3636C140.028 23.3636 139.566 23.4962 139.176 23.7614C138.79 24.0227 138.492 24.3636 138.284 24.7841C138.076 25.2045 137.972 25.6553 137.972 26.1364V26.9091C137.972 27.5682 138.085 28.1269 138.312 28.5852C138.544 29.0398 138.864 29.3864 139.273 29.625C139.682 29.8598 140.157 29.9773 140.699 29.9773C141.051 29.9773 141.369 29.928 141.653 29.8295C141.941 29.7273 142.189 29.5758 142.398 29.375C142.606 29.1705 142.767 28.9167 142.881 28.6136L144.176 28.9773C144.04 29.4167 143.811 29.803 143.489 30.1364C143.167 30.4659 142.769 30.7235 142.295 30.9091C141.822 31.0909 141.29 31.1818 140.699 31.1818ZM153.223 22.2727L149.996 31H148.632L145.405 22.2727H146.859L149.268 29.2273H149.359L151.768 22.2727H153.223Z"
        fill="white"
      />
    </svg>
  );
}