"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const test_1 = require("@storybook/test");
const ContactsForm_1 = require("./ContactsForm");
const react_1 = require("react");
const meta = {
    title: 'UI/ContactsForm',
    component: ContactsForm_1.ContactsForm,
    parameters: {
        layout: 'centered',
    },
    args: {
        onChange: (0, test_1.fn)(),
    },
};
exports.default = meta;
exports.Default = {
    args: {
        value: {
            email: 'test@test.ru',
            phone: '79999999999',
        }
    },
    render: (props) => {
        const [state, setState] = (0, react_1.useState)(props.value);
        return (<ContactsForm_1.ContactsForm value={state} onChange={value => {
                props.onChange(value);
                setState(value);
            }}/>);
    }
};
