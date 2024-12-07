// ==UserScript==
// @name         Pixiv Downloader
// @namespace    http://tampermonkey.net/
// @version      2.3.0
// @description  Tải xuống hình ảnh và truyện tranh từ Pixiv
// @match        https://www.pixiv.net/en/artworks/*
// @match        https://www.pixiv.net/users/*
// @author       RenjiYuusei
// @license      GPL-3.0-only
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pixiv.net
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_notification
// @require      https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js
// @run-at       document-end
// @connect      pixiv.net
// @connect      pximg.net
// @noframes
// @downloadURL https://github.com/RenjiYuusei/UserScript/raw/main/UserJs/Pixiv Downloader.user.js
// @updateURL https://github.com/RenjiYuusei/UserScript/raw/main/UserJs/Pixiv Downloader.meta.js
// ==/UserScript==
