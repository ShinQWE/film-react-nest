"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const test_1 = require("@storybook/test");
const FilmPreview_1 = require("./FilmPreview");
const constants_ts_1 = require("../../utils/constants.ts");
const meta = {
    title: 'UI/FilmPreview',
    component: FilmPreview_1.FilmPreview,
    parameters: {
        layout: 'centered',
    },
    args: {
        onClick: (0, test_1.fn)(),
    },
};
exports.default = meta;
exports.Default = {
    args: {
        id: "821802ac-332d-4e65-acd4-5f6ef14f5880",
        rating: '2.9',
        director: 'Итан Райт',
        tags: ['Документальный'],
        title: 'Архитекторы общества',
        description: 'Документальный фильм Итана Райта исследует влияние технологий на современное общество, уделяя особое внимание роли искусственного интеллекта в формировании нашего будущего. Фильм исследует этические, философские и социальные последствия гонки технологий ИИ и поднимает вопрос: какой мир мы создаём для будущих поколений.',
        cover: `${constants_ts_1.CDN_URL}/bg1c.jpg`
    },
};
