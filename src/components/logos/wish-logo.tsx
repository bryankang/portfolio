import { colors } from "@/utils/colors";
import { FC } from "react";

export const WishLogo: FC<{
  active?: boolean;
  size?: number;
  wholesale?: boolean;
}> = ({ active, size = 34, wholesale = true }) => {
  return (
    <svg
      width="100"
      height={size}
      viewBox="0 0 100 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMid"
    >
      <g clipPath="url(#clip0_149_3437)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M84.679 0.545422C83.7244 0.546522 82.7691 0.542922 81.8151 0.547822C80.7721 0.613562 79.8296 1.45881 79.6649 2.49243C78.2557 12.1027 76.8491 21.713 75.4415 31.3233C75.2498 32.485 76.2139 32.9481 77.2453 32.9531C78.0983 32.9525 78.9503 32.9531 79.8033 32.9531C81.0021 32.9873 82.0158 32.0431 82.176 30.8757C82.5959 28.0113 83.0153 25.146 83.4352 22.2816C83.6672 20.6138 84.1452 19.0807 85.4567 17.9206C86.7356 16.8003 88.298 16.2123 90.0078 16.4195C91.9044 16.6559 92.6662 17.9703 92.7601 19.7641C92.8114 20.7938 92.6463 21.7362 92.5043 22.7461C92.0823 25.6625 91.6616 28.5782 91.2395 31.494C91.0318 32.4978 92.296 32.9386 93.0943 32.9231H95.7518C96.6943 32.8922 97.5637 32.2209 97.8737 31.337C97.9643 31.0923 97.9822 30.8299 98.0258 30.5747C98.5495 27.1816 99.0723 23.7886 99.5965 20.3961C100.068 17.2278 99.4673 14.2499 96.8322 12.2462C95.3649 11.1325 93.6335 10.734 91.8149 10.7556C89.0797 10.7827 86.8678 11.5045 84.7575 13.3071C85.3038 9.51793 85.852 5.72866 86.3994 1.93891C86.4674 1.49806 86.2418 1.13832 85.8783 0.895794C85.5253 0.661559 85.0988 0.558129 84.679 0.545422ZM53.7377 1.53513C53.5928 1.53283 53.4438 1.53793 53.2918 1.55132C51.2245 1.73749 49.5658 3.52712 49.4471 5.59105C49.3476 7.30472 50.528 8.69669 52.2406 8.84419C54.3161 9.02263 56.2967 7.56952 56.7497 5.53764C57.2458 3.31733 55.9111 1.56884 53.7377 1.53513ZM2.82264 1.89847C1.96451 1.85249 1.3192 2.90709 1.12971 3.66262C0.877249 4.65646 0.623628 5.65002 0.372267 6.64386C0.107648 7.76587 0.664973 9.01238 1.6533 9.59354C1.86599 9.72116 2.1017 9.80004 2.3282 9.89782C4.96722 10.985 7.60625 12.0732 10.2458 13.1599C9.84474 16.0519 9.44197 18.9437 9.03924 21.8357C8.97846 22.2484 8.92807 22.6633 8.90652 23.0804C8.59439 28.8683 12.9758 33.094 18.725 32.9183C21.4182 32.836 23.8186 31.8484 25.9062 30.1475C28.3497 32.6368 31.7006 33.3596 35.0401 32.7038C39.8381 31.763 44.0034 27.6182 44.9679 22.8352C45.0779 22.2932 45.1463 21.7434 45.222 21.1964C45.6203 18.3055 46.0181 15.415 46.4165 12.5246C46.4618 12.244 46.3804 11.951 46.2052 11.7283C45.8086 11.219 45.0879 11.0174 44.4686 11.013C43.4764 11.0135 42.4842 11.0121 41.4914 11.0138C40.413 11.0469 39.4174 11.8465 39.1252 12.8807C39.0688 13.0719 39.0506 13.2715 39.0224 13.4682C38.6573 16.1194 38.2924 18.7703 37.9267 21.4214C37.6256 23.4572 36.6798 25.2249 34.4292 25.6044C32.2155 25.9839 30.4281 24.4068 30.6905 22.1716C30.9242 20.4607 31.1584 18.7503 31.3921 17.0394C31.4125 16.861 31.4567 16.684 31.4374 16.5045C31.4087 15.9852 31.1555 15.4794 30.7423 15.1611C30.3975 14.8899 29.9551 14.755 29.5187 14.7606C28.626 14.7611 27.732 14.76 26.8393 14.7606C26.6664 14.7617 26.4924 14.7541 26.3206 14.7784C25.3201 14.906 24.435 15.6765 24.1704 16.6493C24.1395 16.8013 24.1254 16.956 24.1016 17.109C23.8796 18.6763 23.6601 20.2431 23.4381 21.8099C23.2337 23.4479 22.2902 24.7962 20.7279 25.4061C20.0103 25.6851 19.2019 25.7456 18.4556 25.5461C16.8756 25.1174 16.032 23.555 16.2811 21.9612C16.8181 18.1029 17.3551 14.2457 17.8915 10.3874C18.0981 9.12565 17.396 7.83073 16.1873 7.3722C11.8589 5.57787 7.53193 3.7807 3.20299 1.98913C3.07241 1.93354 2.94524 1.90504 2.82264 1.89847ZM67.8702 10.2733C66.529 10.2743 65.1851 10.4834 63.9098 10.8835C60.7012 11.8757 57.9341 14.3127 57.5451 17.7904C57.3474 19.5582 57.7508 21.1585 59.1838 22.2938C60.3385 23.2202 61.9804 23.8593 63.3692 24.2869C64.5172 24.6422 67.2036 25.2186 67.7367 26.3715C67.8759 26.6721 67.8275 27.0247 67.6938 27.3175C67.1508 28.4937 65.3562 28.5591 64.2529 28.5071C62.8895 28.4419 61.5417 28.0877 60.3225 27.4745C59.6711 27.158 59.0009 26.7471 58.3584 26.3974C57.8159 26.1201 57.0938 26.2778 56.7165 26.7551C56.1414 27.5125 55.5681 28.2709 54.9936 29.0283C54.8925 29.162 54.782 29.2933 54.7201 29.4507C54.5742 29.7943 54.6354 30.2138 54.8746 30.5011C55.3061 31.0602 57.2454 32.1086 57.9044 32.4052C58.6779 32.7538 59.4853 33.0214 60.3079 33.2258C63.0668 33.9142 66.1196 33.9271 68.7653 32.7896C71.9435 31.4234 74.0588 28.7644 74.1742 25.2459C74.2173 23.9283 73.9427 22.6126 72.9814 21.6464C72.2549 20.9045 70.6602 20.1735 69.6619 19.8547C68.7703 19.5663 67.8671 19.3176 66.9655 19.0657C66.2523 18.8602 63.9979 18.3499 63.8095 17.4351C63.7327 17.0567 63.8418 16.6417 64.1081 16.3588C65.371 14.9959 68.8835 15.6694 70.3409 16.3345C70.9298 16.5925 71.7204 17.2131 72.2806 17.3064C72.8888 17.4125 73.3051 17.0074 73.6498 16.566C74.031 16.0809 74.4119 15.5963 74.7925 15.1118C75.3228 14.477 75.3697 13.5084 74.9471 12.8062C74.7233 12.4554 74.56 12.314 74.2147 12.082C72.3326 10.8476 70.1056 10.2716 67.8702 10.2733ZM51.1473 11.0073C51.0288 11.0078 50.9108 11.0111 50.7928 11.0227C49.9012 11.1249 49.106 11.7954 48.8474 12.6533C48.7811 12.8649 48.7643 13.0879 48.7301 13.3055C47.8732 19.4023 47.0157 25.4993 46.1583 31.596C46.0959 32.0512 46.3979 32.4283 46.7774 32.6432C47.1486 32.852 47.5818 32.9331 48.005 32.9232H50.6027C51.5556 32.8873 52.4325 32.1851 52.7043 31.2764C52.7501 31.1272 52.7709 30.9725 52.7925 30.8183C53.6565 24.6719 54.5213 18.5254 55.3853 12.379C55.4118 12.216 55.3962 12.0464 55.3343 11.8934C55.1299 11.3846 54.5515 11.1277 54.0444 11.0437C53.8123 11.0056 53.5762 11.0081 53.3419 11.0081H51.5025C51.384 11.0092 51.2658 11.0067 51.1473 11.0073Z"
          fill={`${
            active ? (wholesale ? "#FFBF22" : "#29AEE9") : colors.gray500
          }`}
          className={`transition-colors duration-300`}
        />
      </g>
      <defs>
        <clipPath id="clip0_149_3437">
          <rect width="100" height={size} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
