"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = Message;
const Message_module_scss_1 = __importDefault(require("./Message.module.scss"));
const Button_tsx_1 = require("../Button/Button.tsx");
const check_circle_svg_1 = __importDefault(require("../../assets/check-circle.svg"));
function Message({ title, description, action, icon, onClick }) {
    return (<div className={Message_module_scss_1.default.success}>
            <div className={Message_module_scss_1.default.message}>
                <img src={icon !== null && icon !== void 0 ? icon : check_circle_svg_1.default} alt={title}/>
                <h2 className={Message_module_scss_1.default.title}>{title}</h2>
                <p className={Message_module_scss_1.default.description}>{description}</p>
                <Button_tsx_1.Button label={action} className={Message_module_scss_1.default.close} onClick={onClick}/>
            </div>
        </div>);
}
