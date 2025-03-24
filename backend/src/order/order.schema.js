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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderDto = exports.TicketDto = void 0;
/* eslint-disable prettier/prettier */
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
let TicketDto = (() => {
    var _a;
    let _film_decorators;
    let _film_initializers = [];
    let _film_extraInitializers = [];
    let _session_decorators;
    let _session_initializers = [];
    let _session_extraInitializers = [];
    let _row_decorators;
    let _row_initializers = [];
    let _row_extraInitializers = [];
    let _seat_decorators;
    let _seat_initializers = [];
    let _seat_extraInitializers = [];
    let _price_decorators;
    let _price_initializers = [];
    let _price_extraInitializers = [];
    return _a = class TicketDto {
            constructor() {
                this.film = __runInitializers(this, _film_initializers, void 0);
                this.session = (__runInitializers(this, _film_extraInitializers), __runInitializers(this, _session_initializers, void 0));
                this.row = (__runInitializers(this, _session_extraInitializers), __runInitializers(this, _row_initializers, void 0));
                this.seat = (__runInitializers(this, _row_extraInitializers), __runInitializers(this, _seat_initializers, void 0));
                this.price = (__runInitializers(this, _seat_extraInitializers), __runInitializers(this, _price_initializers, void 0));
                __runInitializers(this, _price_extraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _film_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _session_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _row_decorators = [(0, class_validator_1.IsInt)(), (0, class_validator_1.IsNotEmpty)()];
            _seat_decorators = [(0, class_validator_1.IsInt)(), (0, class_validator_1.IsNotEmpty)()];
            _price_decorators = [(0, class_validator_1.IsInt)(), (0, class_validator_1.IsNotEmpty)()];
            __esDecorate(null, null, _film_decorators, { kind: "field", name: "film", static: false, private: false, access: { has: obj => "film" in obj, get: obj => obj.film, set: (obj, value) => { obj.film = value; } }, metadata: _metadata }, _film_initializers, _film_extraInitializers);
            __esDecorate(null, null, _session_decorators, { kind: "field", name: "session", static: false, private: false, access: { has: obj => "session" in obj, get: obj => obj.session, set: (obj, value) => { obj.session = value; } }, metadata: _metadata }, _session_initializers, _session_extraInitializers);
            __esDecorate(null, null, _row_decorators, { kind: "field", name: "row", static: false, private: false, access: { has: obj => "row" in obj, get: obj => obj.row, set: (obj, value) => { obj.row = value; } }, metadata: _metadata }, _row_initializers, _row_extraInitializers);
            __esDecorate(null, null, _seat_decorators, { kind: "field", name: "seat", static: false, private: false, access: { has: obj => "seat" in obj, get: obj => obj.seat, set: (obj, value) => { obj.seat = value; } }, metadata: _metadata }, _seat_initializers, _seat_extraInitializers);
            __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: obj => "price" in obj, get: obj => obj.price, set: (obj, value) => { obj.price = value; } }, metadata: _metadata }, _price_initializers, _price_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
exports.TicketDto = TicketDto;
let CreateOrderDto = (() => {
    var _a;
    let _email_decorators;
    let _email_initializers = [];
    let _email_extraInitializers = [];
    let _phone_decorators;
    let _phone_initializers = [];
    let _phone_extraInitializers = [];
    let _tickets_decorators;
    let _tickets_initializers = [];
    let _tickets_extraInitializers = [];
    return _a = class CreateOrderDto {
            constructor() {
                this.email = __runInitializers(this, _email_initializers, void 0);
                this.phone = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _phone_initializers, void 0));
                this.tickets = (__runInitializers(this, _phone_extraInitializers), __runInitializers(this, _tickets_initializers, void 0));
                __runInitializers(this, _tickets_extraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _email_decorators = [(0, class_validator_1.IsEmail)(), (0, class_validator_1.IsNotEmpty)()];
            _phone_decorators = [(0, class_validator_1.IsPhoneNumber)(), (0, class_validator_1.IsNotEmpty)()];
            _tickets_decorators = [(0, class_validator_1.IsArray)(), (0, class_validator_1.ValidateNested)({ each: true }), (0, class_transformer_1.Type)(() => TicketDto)];
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: obj => "email" in obj, get: obj => obj.email, set: (obj, value) => { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
            __esDecorate(null, null, _phone_decorators, { kind: "field", name: "phone", static: false, private: false, access: { has: obj => "phone" in obj, get: obj => obj.phone, set: (obj, value) => { obj.phone = value; } }, metadata: _metadata }, _phone_initializers, _phone_extraInitializers);
            __esDecorate(null, null, _tickets_decorators, { kind: "field", name: "tickets", static: false, private: false, access: { has: obj => "tickets" in obj, get: obj => obj.tickets, set: (obj, value) => { obj.tickets = value; } }, metadata: _metadata }, _tickets_initializers, _tickets_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
exports.CreateOrderDto = CreateOrderDto;
