"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = Modal;
const react_1 = __importDefault(require("react"));
const react_dom_1 = require("react-dom");
const clsx_1 = __importDefault(require("clsx"));
const Modal_module_scss_1 = __importDefault(require("./Modal.module.scss"));
function Modal({ onClose, header, actions, children, message = '', isError = false, isPortal = true, rootElement = document.body }) {
    const handleClose = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };
    const modal = <div className={(0, clsx_1.default)(Modal_module_scss_1.default.modal, {
            [Modal_module_scss_1.default.active]: true
        })} onClick={handleClose}>
        <div className={Modal_module_scss_1.default.container}>
            <button className={Modal_module_scss_1.default.close} aria-label="закрыть" onClick={handleClose}></button>
            <div className={Modal_module_scss_1.default.header}>{header}</div>
            <div className={Modal_module_scss_1.default.content}>{children}</div>
            <div className={Modal_module_scss_1.default.footer}>
                {actions}
                <span className={(0, clsx_1.default)(Modal_module_scss_1.default.message, {
            [Modal_module_scss_1.default.error]: isError
        })}>{message}</span>
            </div>
        </div>
    </div>;
    return isPortal ? (0, react_dom_1.createPortal)(modal, rootElement) : modal;
}
