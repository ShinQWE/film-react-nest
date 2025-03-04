"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const test_1 = require("@storybook/test");
const FilmsGallery_1 = require("./FilmsGallery");
const constants_ts_1 = require("../../utils/constants.ts");
const meta = {
    title: 'UI/FilmsGallery',
    component: FilmsGallery_1.FilmsGallery,
    parameters: {
        layout: 'centered',
    },
    args: {
        onClick: (0, test_1.fn)()
    },
};
exports.default = meta;
exports.Default = {
    args: {
        items: [
            {
                "id": "1",
                "title": "Архитекторы общества",
                "image": `${constants_ts_1.CDN_URL}/bg1s.jpg`
            },
            {
                "id": "2",
                "title": "Недостижимая утопия",
                "image": `${constants_ts_1.CDN_URL}/bg3s.jpg`
            },
            {
                "id": "3",
                "title": "Звёздное путешествие",
                "image": `${constants_ts_1.CDN_URL}/bg5s.jpg`
            },
            {
                "id": "4",
                "title": "Стражи Гримуара",
                "image": `${constants_ts_1.CDN_URL}/bg2s.jpg`
            },
            {
                "id": "5",
                "title": "Парадокс Нексуса",
                "image": `${constants_ts_1.CDN_URL}/bg4s.jpg`
            },
            {
                "id": "6",
                "title": "Сон в летний день",
                "image": `${constants_ts_1.CDN_URL}/bg6s.jpg`
            }
        ],
        selected: "2"
    },
};
