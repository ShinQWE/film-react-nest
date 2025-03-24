"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleSchema = exports.FilmSchema = exports.Schedule = exports.Film = void 0;
exports.SchemaFactory = SchemaFactory;
/* eslint-disable prettier/prettier */
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
/**
 * фабрика для создания схемы TypeORM на основе класса
 * Мне пришлось менять контролеры и сервисы т.к. они все имели mongoose
 */
function SchemaFactory(classRef) {
    return new typeorm_2.EntitySchema({
        name: classRef.name,
        target: classRef,
        columns: Reflect.getMetadata('columns', classRef) || {},
        relations: Reflect.getMetadata('relations', classRef) || {},
    });
}
let Film = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)('films')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _title_decorators;
    let _title_initializers = [];
    let _title_extraInitializers = [];
    let _director_decorators;
    let _director_initializers = [];
    let _director_extraInitializers = [];
    let _rating_decorators;
    let _rating_initializers = [];
    let _rating_extraInitializers = [];
    let _tags_decorators;
    let _tags_initializers = [];
    let _tags_extraInitializers = [];
    let _image_decorators;
    let _image_initializers = [];
    let _image_extraInitializers = [];
    let _cover_decorators;
    let _cover_initializers = [];
    let _cover_extraInitializers = [];
    let _about_decorators;
    let _about_initializers = [];
    let _about_extraInitializers = [];
    let _description_decorators;
    let _description_initializers = [];
    let _description_extraInitializers = [];
    let _schedules_decorators;
    let _schedules_initializers = [];
    let _schedules_extraInitializers = [];
    var Film = _classThis = class {
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.title = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _title_initializers, void 0));
            this.director = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _director_initializers, void 0));
            this.rating = (__runInitializers(this, _director_extraInitializers), __runInitializers(this, _rating_initializers, void 0));
            this.tags = (__runInitializers(this, _rating_extraInitializers), __runInitializers(this, _tags_initializers, void 0));
            this.image = (__runInitializers(this, _tags_extraInitializers), __runInitializers(this, _image_initializers, void 0));
            this.cover = (__runInitializers(this, _image_extraInitializers), __runInitializers(this, _cover_initializers, void 0));
            this.about = (__runInitializers(this, _cover_extraInitializers), __runInitializers(this, _about_initializers, void 0));
            this.description = (__runInitializers(this, _about_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.schedules = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _schedules_initializers, void 0));
            __runInitializers(this, _schedules_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Film");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _title_decorators = [(0, typeorm_1.Column)()];
        _director_decorators = [(0, typeorm_1.Column)()];
        _rating_decorators = [(0, typeorm_1.Column)('float')];
        _tags_decorators = [(0, typeorm_1.Column)('text')];
        _image_decorators = [(0, typeorm_1.Column)()];
        _cover_decorators = [(0, typeorm_1.Column)()];
        _about_decorators = [(0, typeorm_1.Column)()];
        _description_decorators = [(0, typeorm_1.Column)()];
        _schedules_decorators = [(0, typeorm_1.OneToMany)(() => Schedule, (schedule) => schedule.film)];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: obj => "title" in obj, get: obj => obj.title, set: (obj, value) => { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _director_decorators, { kind: "field", name: "director", static: false, private: false, access: { has: obj => "director" in obj, get: obj => obj.director, set: (obj, value) => { obj.director = value; } }, metadata: _metadata }, _director_initializers, _director_extraInitializers);
        __esDecorate(null, null, _rating_decorators, { kind: "field", name: "rating", static: false, private: false, access: { has: obj => "rating" in obj, get: obj => obj.rating, set: (obj, value) => { obj.rating = value; } }, metadata: _metadata }, _rating_initializers, _rating_extraInitializers);
        __esDecorate(null, null, _tags_decorators, { kind: "field", name: "tags", static: false, private: false, access: { has: obj => "tags" in obj, get: obj => obj.tags, set: (obj, value) => { obj.tags = value; } }, metadata: _metadata }, _tags_initializers, _tags_extraInitializers);
        __esDecorate(null, null, _image_decorators, { kind: "field", name: "image", static: false, private: false, access: { has: obj => "image" in obj, get: obj => obj.image, set: (obj, value) => { obj.image = value; } }, metadata: _metadata }, _image_initializers, _image_extraInitializers);
        __esDecorate(null, null, _cover_decorators, { kind: "field", name: "cover", static: false, private: false, access: { has: obj => "cover" in obj, get: obj => obj.cover, set: (obj, value) => { obj.cover = value; } }, metadata: _metadata }, _cover_initializers, _cover_extraInitializers);
        __esDecorate(null, null, _about_decorators, { kind: "field", name: "about", static: false, private: false, access: { has: obj => "about" in obj, get: obj => obj.about, set: (obj, value) => { obj.about = value; } }, metadata: _metadata }, _about_initializers, _about_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: obj => "description" in obj, get: obj => obj.description, set: (obj, value) => { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _schedules_decorators, { kind: "field", name: "schedules", static: false, private: false, access: { has: obj => "schedules" in obj, get: obj => obj.schedules, set: (obj, value) => { obj.schedules = value; } }, metadata: _metadata }, _schedules_initializers, _schedules_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Film = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Film = _classThis;
})();
exports.Film = Film;
let Schedule = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)('schedules')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _daytime_decorators;
    let _daytime_initializers = [];
    let _daytime_extraInitializers = [];
    let _hall_decorators;
    let _hall_initializers = [];
    let _hall_extraInitializers = [];
    let _rows_decorators;
    let _rows_initializers = [];
    let _rows_extraInitializers = [];
    let _seats_decorators;
    let _seats_initializers = [];
    let _seats_extraInitializers = [];
    let _price_decorators;
    let _price_initializers = [];
    let _price_extraInitializers = [];
    let _taken_decorators;
    let _taken_initializers = [];
    let _taken_extraInitializers = [];
    let _film_decorators;
    let _film_initializers = [];
    let _film_extraInitializers = [];
    var Schedule = _classThis = class {
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.daytime = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _daytime_initializers, void 0));
            this.hall = (__runInitializers(this, _daytime_extraInitializers), __runInitializers(this, _hall_initializers, void 0));
            this.rows = (__runInitializers(this, _hall_extraInitializers), __runInitializers(this, _rows_initializers, void 0));
            this.seats = (__runInitializers(this, _rows_extraInitializers), __runInitializers(this, _seats_initializers, void 0));
            this.price = (__runInitializers(this, _seats_extraInitializers), __runInitializers(this, _price_initializers, void 0));
            this.taken = (__runInitializers(this, _price_extraInitializers), __runInitializers(this, _taken_initializers, void 0));
            this.film = (__runInitializers(this, _taken_extraInitializers), __runInitializers(this, _film_initializers, void 0));
            __runInitializers(this, _film_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Schedule");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _daytime_decorators = [(0, typeorm_1.Column)()];
        _hall_decorators = [(0, typeorm_1.Column)()];
        _rows_decorators = [(0, typeorm_1.Column)()];
        _seats_decorators = [(0, typeorm_1.Column)()];
        _price_decorators = [(0, typeorm_1.Column)()];
        _taken_decorators = [(0, typeorm_1.Column)('simple-array', { default: '' })];
        _film_decorators = [(0, typeorm_1.ManyToOne)(() => Film, (film) => film.schedules, { onDelete: 'CASCADE' })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _daytime_decorators, { kind: "field", name: "daytime", static: false, private: false, access: { has: obj => "daytime" in obj, get: obj => obj.daytime, set: (obj, value) => { obj.daytime = value; } }, metadata: _metadata }, _daytime_initializers, _daytime_extraInitializers);
        __esDecorate(null, null, _hall_decorators, { kind: "field", name: "hall", static: false, private: false, access: { has: obj => "hall" in obj, get: obj => obj.hall, set: (obj, value) => { obj.hall = value; } }, metadata: _metadata }, _hall_initializers, _hall_extraInitializers);
        __esDecorate(null, null, _rows_decorators, { kind: "field", name: "rows", static: false, private: false, access: { has: obj => "rows" in obj, get: obj => obj.rows, set: (obj, value) => { obj.rows = value; } }, metadata: _metadata }, _rows_initializers, _rows_extraInitializers);
        __esDecorate(null, null, _seats_decorators, { kind: "field", name: "seats", static: false, private: false, access: { has: obj => "seats" in obj, get: obj => obj.seats, set: (obj, value) => { obj.seats = value; } }, metadata: _metadata }, _seats_initializers, _seats_extraInitializers);
        __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: obj => "price" in obj, get: obj => obj.price, set: (obj, value) => { obj.price = value; } }, metadata: _metadata }, _price_initializers, _price_extraInitializers);
        __esDecorate(null, null, _taken_decorators, { kind: "field", name: "taken", static: false, private: false, access: { has: obj => "taken" in obj, get: obj => obj.taken, set: (obj, value) => { obj.taken = value; } }, metadata: _metadata }, _taken_initializers, _taken_extraInitializers);
        __esDecorate(null, null, _film_decorators, { kind: "field", name: "film", static: false, private: false, access: { has: obj => "film" in obj, get: obj => obj.film, set: (obj, value) => { obj.film = value; } }, metadata: _metadata }, _film_initializers, _film_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Schedule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Schedule = _classThis;
})();
exports.Schedule = Schedule;
exports.FilmSchema = SchemaFactory(Film);
exports.ScheduleSchema = SchemaFactory(Schedule);
