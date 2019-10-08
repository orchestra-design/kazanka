import * as React from 'react'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'

export function Pattern({ color = '#29B2C0', styles }) {
  return (
    <div css={css`
      ${tw`
        overflow-hidden
      `};
      padding-bottom: 20%;
      ${styles};
      & > svg {
        ${tw`
          absolute
        `};
        height: 120%;
        width: 120%;
      }
    `}>
      <svg viewBox="0 0 508 505" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g fill={color}>
          <path d="M286.63 471.346L259.642 498.333L259.245 498.73C266.786 506.271 278.692 506.271 286.233 498.73C289.011 495.952 290.598 492.38 291.392 488.809C292.979 482.855 291.392 476.109 286.63 471.346Z" />
          <path d="M425.137 193.536C420.374 193.536 415.215 195.52 411.643 199.092C404.103 206.632 404.103 218.539 411.643 226.079L431.487 206.236C434.265 209.014 437.837 210.998 441.805 211.395C447.759 212.585 454.505 210.998 458.871 206.236C466.412 198.695 466.412 186.789 458.871 179.248V179.645C458.871 179.645 458.871 179.248 458.474 179.248L451.33 186.392C451.33 186.392 451.33 186.392 450.934 185.995L438.63 198.298C438.63 198.298 438.63 198.298 439.027 198.695L438.63 199.092C435.059 195.52 430.296 193.536 425.137 193.536Z" />
          <path d="M466.412 153.055C456.49 152.262 448.156 159.008 446.568 168.533C446.568 168.93 446.568 169.327 446.568 169.724C446.568 170.121 446.568 170.518 446.568 170.915C446.568 171.311 446.568 171.708 446.568 172.105C446.171 177.265 448.156 182.424 452.124 186.393L478.715 159.008C475.143 155.437 470.777 153.849 466.412 153.452V153.055Z" />
          <path d="M458.475 387.207C466.016 379.666 466.016 367.76 458.475 360.22L431.488 387.207C439.029 394.747 450.935 394.747 458.475 387.207Z" />
          <path d="M438.233 380.463C430.692 372.922 418.786 372.922 411.246 380.463C403.705 388.003 403.705 399.91 411.246 407.45L418.786 399.91L431.089 387.607L431.883 386.813L438.233 380.463Z" />
          <path d="M423.946 454.679L417.993 460.632L417.199 461.425C416.405 460.632 415.215 459.838 414.024 459.044C406.484 454.282 396.562 455.075 389.815 461.425C383.465 467.775 382.275 478.094 387.434 485.635C388.228 486.825 389.021 487.619 389.815 488.81L410.056 468.569C417.596 476.11 429.502 476.11 437.043 468.569C444.583 461.029 444.583 449.122 437.043 441.582L423.946 454.679Z" />
          <path d="M360.049 458.248L353.302 464.995L347.349 470.948C341.793 465.392 333.459 464.201 326.712 466.979C324.331 467.773 322.346 469.36 320.362 471.345C312.821 478.885 312.821 490.791 320.362 498.332L340.602 478.092C348.143 485.632 360.049 485.632 367.59 478.092C375.13 470.551 375.13 458.645 367.59 451.104L360.049 458.248Z" />
          <path d="M407.673 438.01C415.213 430.469 415.213 418.563 407.673 411.022L394.179 424.516L388.226 430.469L380.685 438.01C387.829 445.55 400.132 445.55 407.673 438.01Z" />
          <path d="M441.407 410.624C433.866 418.165 433.866 430.071 441.407 437.611L468.394 410.624C460.853 403.083 448.947 403.083 441.407 410.624Z" />
          <path d="M367.59 451.105L379.1 439.596L380.29 438.405L387.434 431.262C379.894 423.721 367.987 423.721 360.447 431.262C352.906 438.802 352.906 450.708 360.447 458.249L367.59 451.105Z" />
          <path d="M309.647 448.725L310.441 447.931C317.981 455.075 329.887 455.075 337.031 447.535C344.571 439.994 344.571 428.088 337.031 420.547L356.875 400.704C349.334 393.163 337.428 393.163 329.887 400.704C322.347 408.244 322.347 420.15 329.887 427.691L316.79 440.788C309.25 433.644 297.344 433.644 290.2 441.185C282.659 448.725 282.659 460.631 290.2 468.172L303.694 454.678L309.647 448.725Z" />
          <path d="M377.512 407.845C385.052 400.304 385.052 388.398 377.512 380.857L369.971 388.398L357.668 400.701L350.127 408.242C357.668 415.385 369.971 415.385 377.512 407.845Z" />
          <path d="M108.833 468.169C109.23 468.169 109.23 468.566 108.833 468.169L129.47 448.723C137.011 456.263 148.917 456.263 156.457 448.723C163.998 441.182 163.998 429.276 156.457 421.735L142.964 435.229L137.011 441.182L136.614 441.579C136.614 441.579 136.217 441.579 136.217 441.182C128.676 433.641 116.77 433.641 109.23 441.182C101.292 448.723 101.292 460.629 108.833 468.169Z" />
          <path d="M162.408 414.59L168.361 408.637L175.902 401.097C168.361 393.556 156.455 393.556 148.915 401.097C141.374 408.637 141.374 420.543 148.915 428.084L162.408 414.59Z" />
          <path d="M169.157 408.639C176.698 416.18 188.604 416.18 196.144 408.639C203.685 401.099 203.685 389.193 196.144 381.652L188.604 389.193L176.301 401.496L169.157 408.639Z" />
          <path d="M206.063 431.262C198.522 423.721 186.616 423.721 179.076 431.262C171.535 438.802 171.535 450.708 179.076 458.249L206.063 431.262Z" />
          <path d="M226.305 438.803C233.846 431.263 233.846 419.357 226.305 411.816L199.318 438.803C206.858 445.947 218.764 445.947 226.305 438.803Z" />
          <path d="M138.993 471.345C131.452 478.885 131.452 490.791 138.993 498.332L165.98 471.345C158.836 463.804 146.533 463.804 138.993 471.345Z" />
          <path d="M186.615 451.899C186.218 451.502 186.218 451.502 186.615 451.899L179.075 459.042L166.772 471.345L159.231 478.886C161.215 480.87 163.2 482.061 165.581 483.251C172.328 486.03 180.662 484.839 186.218 479.283C193.759 471.345 193.759 459.042 186.615 451.899Z" />
          <path d="M229.879 380.859C222.338 388.4 222.338 400.306 229.879 407.847L250.119 387.606C257.66 395.147 269.566 395.147 277.107 387.606C284.647 380.066 284.647 368.159 277.107 360.619L290.203 347.522C297.744 355.063 309.65 355.063 317.191 347.522C324.731 339.982 324.731 328.075 317.191 320.535L303.697 334.029L297.744 339.982C290.203 332.441 278.297 332.441 270.757 339.982C263.216 347.522 263.216 359.428 270.757 366.969L257.263 380.463C249.326 373.319 237.42 373.319 229.879 380.859Z" />
          <path d="M199.713 377.685L207.254 370.144L213.207 364.191L226.701 350.697C219.16 343.157 207.254 343.157 199.713 350.697C192.173 358.238 192.57 370.541 199.713 377.685Z" />
          <path d="M247.339 330.06L259.642 317.757L267.183 310.217C259.642 302.676 247.736 302.676 240.195 310.217C232.655 317.757 232.655 329.664 240.195 337.204L247.339 330.06Z" />
          <path d="M287.026 317.755C294.566 310.214 294.566 298.308 287.026 290.767L260.038 317.755C267.579 325.295 279.485 325.295 287.026 317.755Z" />
          <path d="M239.798 337.996L233.051 344.742L220.351 357.442C227.892 364.983 239.798 364.983 247.339 357.442C254.879 349.902 254.879 337.996 247.339 330.455L239.798 337.996Z" />
          <path d="M290.599 286.8L298.139 279.259L310.442 266.956H310.839C318.38 274.1 330.286 274.1 337.43 266.559C344.97 259.019 344.97 247.113 337.43 239.572L317.586 259.416C310.045 252.272 298.139 252.272 290.996 259.813C283.455 267.353 283.455 279.656 290.599 286.8Z" />
          <path d="M344.175 232.826L350.128 226.873L357.669 219.332C350.128 211.791 338.222 211.791 330.682 219.332C323.141 226.873 323.141 238.779 330.682 246.319L344.175 232.826Z" />
          <path d="M358.46 219.332L350.92 226.873C358.46 234.413 370.367 234.413 377.907 226.873C385.448 219.332 385.448 207.426 377.907 199.886L364.413 213.379L358.46 219.332Z" />
          <path d="M381.478 195.914L395.369 182.42L401.322 176.467L401.719 176.07C409.259 183.214 421.166 183.214 428.309 175.674C435.85 168.133 435.85 156.227 428.309 148.686L424.737 152.258L448.55 128.446C441.009 120.905 429.103 120.905 421.563 128.446C414.022 135.986 414.022 147.893 421.563 155.433L420.769 156.227L408.466 168.53L408.069 168.927C400.528 161.783 388.622 161.783 381.478 169.324C374.335 176.467 374.335 188.77 381.478 195.914Z" />
          <path d="M454.902 122.891L441.805 135.988C449.346 143.529 461.252 143.529 468.792 135.988C476.333 128.448 476.333 116.541 468.792 109.001L461.649 116.145L454.902 122.891Z" />
          <path d="M360.845 249.495C353.304 257.036 353.304 268.942 360.845 276.482L368.385 268.942L380.688 256.639L388.229 249.098C380.292 241.955 368.385 241.955 360.845 249.495Z" />
          <path d="M408.072 257.033C415.612 249.492 415.612 237.586 408.072 230.046L394.578 243.539L388.625 249.492L381.084 257.033C388.625 264.177 400.531 264.177 408.072 257.033Z" />
          <path d="M347.746 289.976C340.206 282.832 328.299 282.833 321.156 290.373C313.615 297.914 313.615 309.82 321.156 317.36L328.696 309.82L334.649 303.867L340.999 297.517C348.54 304.66 360.446 304.66 367.59 297.12C375.13 289.579 375.13 277.673 367.59 270.133L360.049 277.673L347.746 289.976Z" />
          <path d="M421.167 310.216C413.627 317.756 413.627 329.266 420.771 336.806L407.674 349.903C400.133 342.759 388.227 342.759 381.083 350.3C373.543 357.84 373.543 369.747 381.083 377.287L394.577 363.793L400.53 357.84L400.927 357.444C408.468 364.587 420.374 364.587 427.517 357.047C435.058 349.506 435.058 337.997 427.914 330.456L428.311 330.059L440.614 317.756L448.155 310.216C440.614 302.675 428.311 302.675 421.167 310.216Z" />
          <path d="M460.856 297.517L454.903 303.47L441.409 316.964C448.95 324.504 460.856 324.504 468.396 316.964C475.937 309.423 475.937 297.517 468.396 289.976L460.856 297.517Z" />
          <path d="M371.162 328.074C379.1 334.821 391.006 334.821 398.15 327.28C405.69 319.739 405.69 307.833 398.15 300.293L418.39 280.052C410.85 272.512 398.943 272.512 391.403 280.052C383.862 287.593 383.862 299.499 391.403 307.04L384.656 313.786L378.703 319.739L378.306 320.136C370.766 312.993 358.859 312.993 351.716 320.533C344.175 328.074 344.175 339.98 351.716 347.521L365.209 334.424L371.162 328.074Z" />
          <path d="M442.6 229.253C435.06 236.794 435.06 248.7 442.6 256.24L469.587 229.253C462.047 221.712 450.141 221.712 442.6 229.253Z" />
          <path d="M300.122 370.542C292.582 378.083 292.582 389.989 300.122 397.529L327.109 370.542C319.569 363.001 307.663 363.001 300.122 370.542Z" />
          <path d="M235.829 461.425C228.685 453.488 216.382 453.488 208.841 461.029C204.873 464.997 203.285 469.76 203.285 474.919C203.285 480.078 204.873 484.841 208.841 488.81L235.829 461.425Z" />
          <path d="M347.352 377.685C354.892 370.145 354.892 358.239 347.352 350.698L339.811 358.239L333.858 364.192L320.365 377.685C327.905 385.226 339.811 385.226 347.352 377.685Z" />
          <path d="M260.435 410.624C252.895 418.165 252.895 430.071 260.435 437.611L267.579 430.468L279.882 418.165L287.422 410.624C279.882 403.48 267.579 403.48 260.435 410.624Z" />
          <path d="M256.071 441.578L229.084 468.565C236.624 476.106 248.531 476.106 256.071 468.565C263.612 461.025 263.612 448.722 256.071 441.578Z" />
          <path d="M105.26 472.139L78.2724 499.126C85.8129 506.666 97.7191 506.666 105.26 499.126C110.022 494.363 111.61 488.013 110.419 481.663C109.625 478.488 108.038 474.917 105.26 472.139Z" />
          <path d="M307.663 418.164C315.204 410.624 315.204 398.717 307.663 391.177C307.663 391.177 307.663 390.78 307.267 390.78L280.279 417.767C281.073 418.561 282.264 419.752 283.454 420.149C290.995 425.308 300.917 424.514 307.663 418.164Z" />
          <path d="M412.437 287.197L412.04 287.594C419.58 295.134 431.486 295.134 439.027 287.594C441.805 284.815 443.79 281.244 444.186 277.672C445.774 271.322 443.79 264.575 439.027 259.813L412.437 287.197C412.04 286.8 412.04 286.8 412.437 287.197Z" />
          <path d="M136.002 255.186C140.628 255.186 144.637 251.486 144.637 246.551C144.637 241.925 140.936 237.916 136.002 237.916C131.068 237.916 127.367 241.617 127.367 246.551C127.367 251.177 131.376 255.186 136.002 255.186Z" />
          <path d="M154.812 236.063C159.438 236.063 163.447 232.362 163.447 227.428C163.447 222.802 159.746 218.793 154.812 218.793C150.186 218.793 146.177 222.493 146.177 227.428C146.486 232.362 150.186 236.063 154.812 236.063Z" />
          <path d="M173.933 217.869C178.559 217.869 182.568 214.168 182.568 209.234C182.568 204.608 178.867 200.599 173.933 200.599C169.307 200.599 165.298 204.3 165.298 209.234C165.298 213.86 168.999 217.869 173.933 217.869Z" />
          <path d="M203.847 186.72C208.473 186.72 212.482 183.019 212.482 178.085C212.482 173.459 208.782 169.45 203.847 169.45C198.913 169.45 195.212 173.15 195.212 178.085C195.521 182.711 199.222 186.72 203.847 186.72Z" />
          <path d="M223.893 168.216C228.519 168.216 232.528 164.516 232.528 159.581C232.528 154.955 228.828 150.946 223.893 150.946C219.267 150.946 215.258 154.647 215.258 159.581C215.258 164.516 218.959 168.216 223.893 168.216Z" />
          <path d="M0 370.215L12.3357 382.859L123.974 271.221L111.638 258.577L0 370.215Z" />
          <path d="M296.065 225.437C300.691 225.437 304.7 221.736 304.7 216.802C304.7 212.176 300.999 208.167 296.065 208.167C291.439 208.167 287.43 211.867 287.43 216.802C287.43 221.736 291.13 225.437 296.065 225.437Z" />
          <path d="M314.875 206.933C319.501 206.933 323.51 203.232 323.51 198.298C323.51 193.672 319.81 189.663 314.875 189.663C310.249 189.663 306.24 193.363 306.24 198.298C306.24 203.232 310.249 206.933 314.875 206.933Z" />
          <path d="M333.379 188.736C338.005 188.736 342.014 185.036 342.014 180.101C342.014 175.167 338.313 171.466 333.379 171.466C328.753 171.466 324.744 175.167 324.744 180.101C324.744 185.036 328.444 188.736 333.379 188.736Z" />
          <path d="M352.19 170.232C356.816 170.232 360.825 166.532 360.825 161.597C360.825 156.972 357.124 152.962 352.19 152.962C347.564 152.962 343.555 156.663 343.555 161.597C343.555 166.223 347.564 170.232 352.19 170.232Z" />
          <path d="M370.079 150.805C374.705 150.805 378.714 147.104 378.714 142.17C378.714 137.544 375.013 133.535 370.079 133.535C365.453 133.535 361.444 137.235 361.444 142.17C361.752 147.104 365.453 150.805 370.079 150.805Z" />
          <path d="M309.325 114.415C313.951 114.415 317.96 110.714 317.96 105.78C317.96 101.154 314.259 97.1451 309.325 97.1451C304.391 97.1451 300.69 100.846 300.69 105.78C300.69 110.406 304.699 114.415 309.325 114.415Z" />
          <path d="M332.762 89.127C337.387 89.127 341.396 85.4262 341.396 80.492C341.396 75.8661 337.696 71.857 332.762 71.857C328.136 71.857 324.127 75.5577 324.127 80.492C324.127 85.4262 328.136 89.127 332.762 89.127Z" />
          <path d="M439.156 33.3057C443.782 33.3057 447.791 29.6049 447.791 24.6707C447.791 19.7364 444.09 16.0357 439.156 16.0357C434.53 16.0357 430.521 19.7364 430.521 24.6707C430.521 29.6049 434.222 33.3057 439.156 33.3057Z" />
          <path d="M413.87 37.3144L426.514 49.6501L314.876 161.288L302.232 148.952L413.87 37.3144Z" />
          <path d="M494.36 6.47726L507.004 18.5046L395.366 130.143L382.722 117.807L494.36 6.47726Z" />
          <path d="M401.533 0.000787862L413.869 12.6449L358.05 68.4639L345.714 55.8198L401.533 0.000787862Z" />
          <path d="M290.203 161.289L302.23 173.624L274.783 201.071L262.139 189.044L290.203 161.289Z" />
        </g>
      </svg>
    </div>
  )
}
