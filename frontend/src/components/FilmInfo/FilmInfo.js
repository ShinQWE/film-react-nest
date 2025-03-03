"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmInfo = FilmInfo;
const clsx_1 = __importDefault(require("clsx"));
const FilmInfo_module_scss_1 = __importDefault(require("./FilmInfo.module.scss"));
function FilmInfo({ id, rating, director, tags, title, description, isCompact = false }) {
    return (<article data-id={id} className={(0, clsx_1.default)(FilmInfo_module_scss_1.default.film, {
            [FilmInfo_module_scss_1.default.compact]: isCompact,
        })}>
            <div className={FilmInfo_module_scss_1.default.about}>
                <span className={FilmInfo_module_scss_1.default.rating}>{rating}</span>
                <span className={FilmInfo_module_scss_1.default.director}>{director}</span>
                <span className={FilmInfo_module_scss_1.default.tags}>{tags}</span>
            </div>
            <h1 className={FilmInfo_module_scss_1.default.title}>{title}</h1>
            <p className={FilmInfo_module_scss_1.default.description}>{description}</p>
        </article>);
}
