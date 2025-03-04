"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectSession = SelectSession;
const SelectSession_module_scss_1 = __importDefault(require("./SelectSession.module.scss"));
const clsx_1 = __importDefault(require("clsx"));
function groupSessions(data) {
    return data.reduce((a, c) => {
        if (!a[c.day])
            a[c.day] = {};
        a[c.day][c.time] = c;
        return a;
    }, {});
}
function dayTimeKey(day, time) {
    return [day, time].join(':');
}
function SelectSession({ sessions, selected = null, onSelect }) {
    const data = groupSessions(sessions);
    const handleSubmit = (e) => {
        e.preventDefault();
        const target = e.nativeEvent.submitter;
        const id = String(target.dataset.id);
        const day = String(target.dataset.day);
        const time = String(target.dataset.time);
        if (id && day && time) {
            onSelect(id);
        }
    };
    return (<form className={SelectSession_module_scss_1.default.schedule} name="schedule" onSubmit={handleSubmit}>
            {Object.keys(data).map((day) => <div key={day} className={SelectSession_module_scss_1.default.day}>
                <div className={SelectSession_module_scss_1.default.label}>{day}</div>
                {Object.keys(data[day]).map(time => <button key={dayTimeKey(day, time)} className={(0, clsx_1.default)(SelectSession_module_scss_1.default.time, {
                    [SelectSession_module_scss_1.default.place_active]: selected === data[day][time].id
                })} data-id={data[day][time].id} data-day={day} data-time={time}>
                    {time}
                </button>)}
            </div>)}
        </form>);
}
