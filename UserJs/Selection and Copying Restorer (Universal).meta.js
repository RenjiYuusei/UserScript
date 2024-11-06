// ==UserScript==
// @name                Selection and Copying Restorer (Universal)
// @version             1.21.0.2
// @description         Unlock right-click, remove restrictions on copy, cut, select text, right-click menu, text copying, text selection, image right-click, and enhance functionality: Alt key hyperlink text selection.
// @namespace           https://greasyfork.org/users/371179
// @author              CY Fung
// @supportURL https://github.com/RenjiYuusei/UserScript/issues
// @run-at              document-start
// @match               http://*/*
// @match               https://*/*
// @exclude             /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @exclude             https://github.dev/*
// @exclude             https://vscode.dev/*
// @exclude             https://www.photopea.com/*
// @exclude             https://www.google.com/maps/*
// @exclude             https://docs.google.com/*
// @exclude             https://drive.google.com/*
// @exclude             https://mail.google.com/*
// @exclude             https://www.dropbox.com/*
// @exclude             https://outlook.live.com/mail/*
// @exclude             https://www.terabox.com/*
// @exclude             https://leetcode.cn/*
// @icon                https://raw.githubusercontent.com/cyfung1031/userscript-supports/main/icons/selection-copier.png
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @grant               GM.setValue
// @grant               GM.getValue
// @grant               GM_addValueChangeListener
// @grant               unsafeWindow
// @inject-into         page

// @compatible          firefox Violentmonkey
// @compatible          firefox Tampermonkey
// @compatible          chrome Violentmonkey
// @compatible          chrome Tampermonkey
// @compatible          opera Violentmonkey
// @compatible          opera Tampermonkey
// @compatible          safari Stay
// @compatible          edge Violentmonkey
// @compatible          edge Tampermonkey
// @compatible          brave Violentmonkey
// @compatible          brave Tampermonkey


// @description:ko    우클릭 잠금 해제, 복사, 잘라내기, 텍스트 선택, 컨텍스트 메뉴, 텍스트 복사, 텍스트 선택, 이미지 우클릭 등의 제한을 해제합니다. 기능 강화: Alt 키로 하이퍼링크 텍스트 선택.
// @downloadURL https://github.com/RenjiYuusei/UserScript/raw/main/UserJs/Selection and Copying Restorer (Universal).user.js
// @updateURL https://github.com/RenjiYuusei/UserScript/raw/main/UserJs/Selection and Copying Restorer (Universal).meta.js
// ==/UserScript==
