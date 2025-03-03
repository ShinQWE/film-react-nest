"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmPreview = FilmPreview;
const FilmPreview_module_scss_1 = __importDefault(require("./FilmPreview.module.scss"));
const FilmInfo_tsx_1 = require("../FilmInfo/FilmInfo.tsx");
const Button_tsx_1 = require("../Button/Button.tsx");
function FilmPreview(_a) {
    var { onClick, cover } = _a, props = __rest(_a, ["onClick", "cover"]);
    return (<main className={FilmPreview_module_scss_1.default.hero}>
            <img src={cover} alt={props.title} className={FilmPreview_module_scss_1.default.background}/>
            <div className={FilmPreview_module_scss_1.default.content}>
                <FilmInfo_tsx_1.FilmInfo {...props}/>
                <Button_tsx_1.Button label="Купить билет" className={FilmPreview_module_scss_1.default.action} onClick={onClick}/>
            </div>
        </main>);
}
