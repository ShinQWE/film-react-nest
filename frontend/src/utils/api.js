"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmAPI = exports.Api = exports.EnumApiMethods = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
require("dayjs/locale/ru");
dayjs_1.default.locale('ru-ru');
var EnumApiMethods;
(function (EnumApiMethods) {
    EnumApiMethods["POST"] = "POST";
    EnumApiMethods["PUT"] = "PUT";
    EnumApiMethods["DELETE"] = "DELETE";
    EnumApiMethods["GET"] = "GET";
})(EnumApiMethods || (exports.EnumApiMethods = EnumApiMethods = {}));
class Api {
    constructor(baseUrl, options = {}) {
        var _a;
        this.baseUrl = baseUrl;
        this._options = {
            headers: Object.assign({ 'Content-Type': 'application/json' }, ((_a = options.headers) !== null && _a !== void 0 ? _a : {})),
        };
    }
    _handleResponse(response) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (response.ok)
                return response.json();
            const data = (yield response.json());
            return Promise.reject((_a = data.error) !== null && _a !== void 0 ? _a : response.statusText);
        });
    }
    _get(uri_1) {
        return __awaiter(this, arguments, void 0, function* (uri, method = EnumApiMethods.GET) {
            const response = yield fetch(this.baseUrl + uri, Object.assign(Object.assign({}, this._options), { method }));
            return this._handleResponse(response);
        });
    }
    _post(uri_1, data_1) {
        return __awaiter(this, arguments, void 0, function* (uri, data, method = EnumApiMethods.POST) {
            const response = yield fetch(this.baseUrl + uri, Object.assign(Object.assign({}, this._options), { method, body: JSON.stringify(data) }));
            return this._handleResponse(response);
        });
    }
}
exports.Api = Api;
/**
 * Класс для работы с API фильмов
 */
class FilmAPI extends Api {
    constructor(cdn, baseUrl, options) {
        super(baseUrl, options);
        this.cdn = cdn;
    }
    /**
     * Получить список сеансов фильма
     * @param id
     */
    getFilmSchedule(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this._get(`/films/${id}/schedule`);
            return data.items.map((schedule) => {
                const daytime = (0, dayjs_1.default)(schedule.daytime);
                return Object.assign(Object.assign({}, schedule), { film: id, day: daytime.format('D MMMM'), time: daytime.format('HH:mm') });
            });
        });
    }
    /**
     * Получить список фильмов
     */
    getFilms() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this._get('/films');
            return data.items.map((item) => (Object.assign(Object.assign({}, item), { image: this.cdn + item.image, cover: this.cdn + item.cover })));
        });
    }
    /**
     * Забронировать билеты
     * @param order - данные для бронирования
     * @param order.tickets - список билетов, для каждого требуются как минимум поля film, session, row, seat
     * @param order.email - email пользователя
     * @param order.phone - телефон пользователя
     */
    orderTickets(order) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this._post('/order', order);
            return data.items.map((ticket) => {
                const daytime = (0, dayjs_1.default)(ticket.daytime);
                return Object.assign(Object.assign({}, ticket), { day: daytime.format('D MMMM'), time: daytime.format('HH:mm') });
            });
        });
    }
}
exports.FilmAPI = FilmAPI;
