"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialState = void 0;
exports.appReducer = appReducer;
exports.initialState = {
    films: [],
    selectedFilm: null,
    schedule: [],
    selectedSession: null,
    basket: [],
    contacts: {
        email: '',
        phone: ''
    },
    modal: null,
    message: '',
    isError: false
};
const addTicket = (state, key) => {
    const [row, seat] = key.split(':').map(Number);
    const isExists = state.basket.some(ticket => ticket.row === row && ticket.seat === seat);
    const session = state.schedule.find(session => session.id === state.selectedSession);
    if (session) {
        if (!isExists) {
            const ticket = {
                film: state.selectedFilm,
                session: state.selectedSession,
                daytime: session.daytime,
                day: session.day,
                time: session.time,
                row,
                seat,
                price: session.price
            };
            return Object.assign(Object.assign({}, state), { basket: [...state.basket, ticket] });
        }
        else {
            return Object.assign(Object.assign({}, state), { basket: state.basket.filter(ticket => ticket.row !== row || ticket.seat !== seat) });
        }
    }
    return state;
};
const removeTicket = (state, key) => {
    const [row, seat] = key.split(':').map(Number);
    return Object.assign(Object.assign({}, state), { basket: state.basket.filter(ticket => ticket.row !== row || ticket.seat !== seat) });
};
const validateOrder = (state) => {
    const errors = [];
    //validate email with regexp
    if (state.contacts.email && !/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(state.contacts.email)) {
        errors.push('Некорректный email');
    }
    //validate phone with regexp
    if (state.contacts.phone && !/\+7\d{10}/.test(state.contacts.phone)) {
        errors.push('Некорректный телефон');
    }
    if (errors.length === 0) {
        return Object.assign(Object.assign({}, state), { message: '', isError: false });
    }
    else {
        return Object.assign(Object.assign({}, state), { message: errors.join('; '), isError: true });
    }
};
function appReducer(state, action) {
    switch (action.type) {
        case 'setFilms':
            return Object.assign(Object.assign({}, state), { films: action.payload, selectedFilm: action.payload[0].id });
        case 'selectFilm':
            return Object.assign(Object.assign({}, state), { selectedFilm: action.payload });
        case 'setSchedule':
            return Object.assign(Object.assign({}, state), { schedule: action.payload, modal: 'schedule' });
        case 'selectSession':
            return Object.assign(Object.assign({}, state), { selectedSession: action.payload });
        case 'addToBasket': return addTicket(state, action.payload);
        case 'removeFromBasket': return removeTicket(state, action.payload);
        case 'setContacts':
            return validateOrder(Object.assign(Object.assign({}, state), { contacts: action.payload }));
        case 'openModal':
            return Object.assign(Object.assign({}, state), { modal: action.payload });
        case 'closeModal':
            return Object.assign(Object.assign({}, state), { modal: null });
        case 'clearBasket':
            return Object.assign(Object.assign({}, state), { selectedSession: null, basket: [] });
    }
    return state;
}
