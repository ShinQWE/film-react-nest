"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppState = useAppState;
const react_1 = require("react");
const state_ts_1 = require("../utils/state.ts");
const api_ts_1 = require("../utils/api.ts");
const constants_ts_1 = require("../utils/constants.ts");
const Button_tsx_1 = require("../components/Button/Button.tsx");
const flow = {
    'schedule': { next: 'places', prev: null },
    'places': { next: 'basket', prev: 'schedule' },
    'basket': { next: 'contacts', prev: 'places' },
    'contacts': { next: 'success', prev: 'basket' },
    'success': { next: null, prev: 'contacts' }
};
function useAppState() {
    const [state, dispatch] = (0, react_1.useReducer)(state_ts_1.appReducer, state_ts_1.initialState);
    const api = (0, react_1.useRef)(new api_ts_1.FilmAPI(constants_ts_1.CDN_URL, constants_ts_1.API_URL));
    const preview = state.films.find(film => film.id === state.selectedFilm);
    const session = state.schedule.find(session => session.id === state.selectedSession);
    const basket = state.basket.map(ticket => ({
        id: `${ticket.row}:${ticket.seat}`,
        place: `${ticket.row} ряд, ${ticket.seat} место`,
        price: `${ticket.price}₽`,
        session: `${ticket.day} ${ticket.time}`
    }));
    const setFilms = (items) => dispatch({ type: 'setFilms', payload: items });
    const setSelectedFilm = (id) => dispatch({ type: 'selectFilm', payload: id });
    const setCurrentSchedule = (items) => dispatch({ type: 'setSchedule', payload: items });
    const selectSession = (id) => dispatch({ type: 'selectSession', payload: id });
    const selectPlace = (place) => dispatch({ type: 'addToBasket', payload: place });
    const removeTicket = (place) => dispatch({ type: 'removeFromBasket', payload: place });
    const closeModal = () => dispatch({ type: 'closeModal' });
    const setContacts = (contacts) => dispatch({ type: 'setContacts', payload: contacts });
    const orderTickets = () => {
        api.current.orderTickets({
            email: state.contacts.email,
            phone: state.contacts.phone,
            tickets: state.basket
        }).then(() => {
            dispatch({ type: 'clearBasket' });
            dispatch({ type: 'openModal', payload: 'success' });
        });
    };
    const go = (direction) => () => {
        if (state.modal) {
            const next = flow[state.modal][direction];
            if (next)
                dispatch({ type: 'openModal', payload: next });
            else
                dispatch({ type: 'closeModal' });
        }
    };
    const getAction = () => {
        const actions = {
            'schedule': <Button_tsx_1.Button label={"Выбрать места"} onClick={go('next')} disabled={!state.selectedSession}/>,
            'places': <Button_tsx_1.Button label={"В корзину"} onClick={go('next')} disabled={state.basket.length === 0}/>,
            'basket': <Button_tsx_1.Button label={"Оформить заказ"} onClick={go('next')} disabled={state.basket.length === 0}/>,
            'contacts': <Button_tsx_1.Button label={"Оплатить"} onClick={orderTickets} disabled={!state.contacts.email || !state.contacts.phone}/>,
            'success': null
        };
        return actions[state.modal];
    };
    const handleOpenBasket = () => {
        dispatch({ type: 'openModal', payload: 'basket' });
    };
    const handleOpenFilm = () => {
        if (state.selectedFilm) {
            api.current.getFilmSchedule(state.selectedFilm).then(setCurrentSchedule);
        }
    };
    (0, react_1.useEffect)(() => {
        api.current.getFilms().then(setFilms);
    }, []);
    return {
        state,
        data: {
            preview,
            session,
            basket
        },
        handlers: {
            setSelectedFilm,
            selectSession,
            selectPlace,
            removeTicket,
            closeModal,
            setContacts,
            handleOpenBasket,
            handleOpenFilm,
            getAction,
            go
        }
    };
}
