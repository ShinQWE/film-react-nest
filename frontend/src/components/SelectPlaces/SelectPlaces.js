"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectPlaces = SelectPlaces;
const SelectPlaces_module_scss_1 = __importDefault(require("./SelectPlaces.module.scss"));
const clsx_1 = __importDefault(require("clsx"));
const getSeatKey = (row, seat) => {
    return [row, seat].join(':');
};
const createArray = (length, shift = 0) => {
    return Array.from({ length }, (_, i) => i + shift);
};
function SelectPlaces({ hall, taken, selected, onSelect }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const target = e.nativeEvent.submitter;
        const row = Number(target.dataset.row);
        const seat = Number(target.dataset.seat);
        if (row && seat) {
            onSelect(getSeatKey(row, seat));
        }
    };
    const selectedSeats = new Set(selected.map((place) => getSeatKey(place.row, place.seat)));
    return (<form className={SelectPlaces_module_scss_1.default.places} name="places" onSubmit={handleSubmit}>
            <div className={SelectPlaces_module_scss_1.default.screen}>ЭКРАН</div>
            {createArray(hall.rows, 1).map(row => <div key={row} className={SelectPlaces_module_scss_1.default.row}>
                <div className={SelectPlaces_module_scss_1.default.label}>Ряд {row}</div>
                <div className={SelectPlaces_module_scss_1.default.seats}>
                    {createArray(hall.seats, 1).map(seat => {
                const seatKey = getSeatKey(row, seat);
                return (<button key={seatKey} className={(0, clsx_1.default)(SelectPlaces_module_scss_1.default.seat, {
                        [SelectPlaces_module_scss_1.default.seat_active]: selectedSeats.has(seatKey),
                    })} data-row={row} data-seat={seat} disabled={taken.includes(seatKey)}>
                            {seat}
                        </button>);
            })}
                </div>
            </div>)}
        </form>);
}
