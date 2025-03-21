"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmsGallery = FilmsGallery;
const FilmsGallery_module_scss_1 = __importDefault(require("./FilmsGallery.module.scss"));
const Card_tsx_1 = require("../Card/Card.tsx");
const clsx_1 = __importDefault(require("clsx"));
function FilmsGallery({ items, selected = null, onClick }) {
    return (<footer className={FilmsGallery_module_scss_1.default.gallery}>
            {items.map((item) => (<Card_tsx_1.Card key={item.id} {...item} className={(0, clsx_1.default)(FilmsGallery_module_scss_1.default.item, {
                [FilmsGallery_module_scss_1.default.item_active]: item.id === selected
            })} onClick={() => {
                onClick === null || onClick === void 0 ? void 0 : onClick(item.id);
            }}/>))}
        </footer>);
}
