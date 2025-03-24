"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsForm = ContactsForm;
const react_1 = __importDefault(require("react"));
const ContactsForm_module_scss_1 = __importDefault(require("./ContactsForm.module.scss"));
function ContactsForm({ value, onChange }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        onChange(value);
    };
    return (<form className={ContactsForm_module_scss_1.default.form} name="order" onSubmit={handleSubmit}>
            <label className={ContactsForm_module_scss_1.default.label}>
                <input value={value.email} onChange={(event) => onChange(Object.assign(Object.assign({}, value), { email: event.target.value }))} className={ContactsForm_module_scss_1.default.input} name="email" type="email" placeholder="Почта"/>
            </label>
            <label className={ContactsForm_module_scss_1.default.label}>
                <input value={value.phone} onChange={(event) => onChange(Object.assign(Object.assign({}, value), { phone: event.target.value }))} className={ContactsForm_module_scss_1.default.input} name="phone" type="tel" placeholder="Телефон" pattern="^[0-9\+\-\(\)\s]{11,25}$" data-validation-message="Введите номер в формате '+7 (000) 000-00-00'."/>
            </label>
        </form>);
}
