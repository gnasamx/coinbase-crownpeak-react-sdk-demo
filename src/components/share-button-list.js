import { CmsComponent } from "crownpeak-dxm-react-sdk";
import "../styles/share-button-list.css";

export default class ShareButtonList extends CmsComponent {
  render() {
    return (
      <ul className="share-button-list">
        <li class="share-button-list__item">
          <svg fill="none" height="24" viewBox="0 0 33 32" width="24">
            <path
              d="M11.026 28.188c11.321 0 17.513-9.379 17.513-17.512 0-.267 0-.532-.018-.796a12.522 12.522 0 003.071-3.186 12.285 12.285 0 01-3.535.968 6.176 6.176 0 002.706-3.404 12.334 12.334 0 01-3.909 1.494 6.16 6.16 0 00-10.489 5.614A17.474 17.474 0 013.68 4.935a6.16 6.16 0 001.906 8.216 6.11 6.11 0 01-2.794-.77v.078a6.157 6.157 0 004.938 6.033 6.146 6.146 0 01-2.78.106 6.162 6.162 0 005.751 4.274 12.35 12.35 0 01-9.109 2.552 17.425 17.425 0 009.434 2.76"
              fill="#5b616e"
            ></path>
          </svg>
        </li>
        <li class="share-button-list__item">
          <svg fill="none" height="24" viewBox="0 0 33 32" width="24">
            <path
              d="M30.296 16.086c0-7.78-6.268-14.086-14-14.086s-14 6.306-14 14.086c0 7.03 5.12 12.857 11.813 13.914v-9.843h-3.555v-4.071h3.554v-3.104c0-3.53 2.09-5.48 5.288-5.48 1.532 0 3.134.275 3.134.275v3.467h-1.765c-1.739 0-2.282 1.085-2.282 2.2v2.642h3.883l-.62 4.071h-3.262V30c6.692-1.057 11.812-6.884 11.812-13.914z"
              fill="#5b616e"
            ></path>
          </svg>
        </li>
        <li class="share-button-list__item">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"
              fill="#5b616e"
            ></path>
          </svg>
        </li>
        <li class="share-button-list__item">
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              d="M13.723 18.654l-3.61 3.609a5.921 5.921 0 01-8.378 0A5.878 5.878 0 010 18.075c0-1.582.615-3.07 1.734-4.189L6.6 9.021c2.355-2.355 6.114-2.262 8.377 0 .453.453.81.973 1.089 1.527l-1.593 1.592a3.86 3.86 0 00-.964-1.652c-1.448-1.448-3.93-1.51-5.439-.001l-.001.002-4.867 4.865a3.85 3.85 0 000 5.44 3.849 3.849 0 005.442 0l2.425-2.424a7.482 7.482 0 002.654.284zm.161-16.918L10.31 5.312a7.57 7.57 0 012.653.283l2.393-2.389a3.85 3.85 0 015.44-.001 3.85 3.85 0 010 5.442l-4.831 4.831-.003.002c-1.438 1.437-3.886 1.552-5.439-.002a3.767 3.767 0 01-.956-1.643l-.084.068-1.517 1.515c.28.556.635 1.075 1.088 1.528 2.245 2.245 6.004 2.374 8.378 0l4.832-4.831a5.92 5.92 0 00-.001-8.377 5.92 5.92 0 00-8.379-.002z"
              fill="#5b616e"
            ></path>
          </svg>
        </li>
      </ul>
    );
  }
}