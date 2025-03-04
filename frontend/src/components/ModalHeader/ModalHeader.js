"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalHeader = ModalHeader;
const ModalHeader_module_scss_1 = __importDefault(require("./ModalHeader.module.scss"));
function ModalHeader({ title, description, onClick }) {
    return (<div className={ModalHeader_module_scss_1.default.header}>
            <div className={ModalHeader_module_scss_1.default.actions}>
                <button className={ModalHeader_module_scss_1.default.back} onClick={onClick}>Назад</button>
            </div>
            <h2 className={ModalHeader_module_scss_1.default.title}>{title}</h2>
            <p className={ModalHeader_module_scss_1.default.description}>{description}</p>
        </div>);
}
