"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Layout_tsx_1 = require("../Layout/Layout.tsx");
const Header_tsx_1 = require("../Header/Header.tsx");
const FilmsGallery_tsx_1 = require("../FilmsGallery/FilmsGallery.tsx");
const FilmPreview_tsx_1 = require("../FilmPreview/FilmPreview.tsx");
const Modal_tsx_1 = require("../Modal/Modal.tsx");
const SelectSession_tsx_1 = require("../SelectSession/SelectSession.tsx");
const FilmInfo_tsx_1 = require("../FilmInfo/FilmInfo.tsx");
const ModalHeader_tsx_1 = require("../ModalHeader/ModalHeader.tsx");
const SelectPlaces_tsx_1 = require("../SelectPlaces/SelectPlaces.tsx");
const Basket_tsx_1 = require("../Basket/Basket.tsx");
const ContactsForm_tsx_1 = require("../ContactsForm/ContactsForm.tsx");
const Message_tsx_1 = require("../Message/Message.tsx");
const useAppState_tsx_1 = require("../../hooks/useAppState.tsx");
function App() {
    const { state, data, handlers } = (0, useAppState_tsx_1.useAppState)();
    return (<>
        <Layout_tsx_1.Layout isLocked={!!state.modal}>
           <Header_tsx_1.Header counter={state.basket.length} onClick={handlers.handleOpenBasket}/>
            {data.preview && <FilmPreview_tsx_1.FilmPreview {...data.preview} onClick={handlers.handleOpenFilm}/>}
            <FilmsGallery_tsx_1.FilmsGallery items={state.films} selected={state.selectedFilm} onClick={handlers.setSelectedFilm}/>
        </Layout_tsx_1.Layout>

        {(state.modal && data.preview) && <Modal_tsx_1.Modal onClose={handlers.closeModal} message={state.message} isError={state.isError} header={(state.modal === 'schedule')
                ? <FilmInfo_tsx_1.FilmInfo {...data.preview} description={data.preview.about} isCompact={true}/>
                : <ModalHeader_tsx_1.ModalHeader title={data.preview.title} description={data.preview.about} onClick={handlers.go('prev')}/>} actions={handlers.getAction()}>
            {(state.modal === 'schedule') && <SelectSession_tsx_1.SelectSession sessions={state.schedule} selected={state.selectedSession} onSelect={handlers.selectSession}/>}

            {(state.modal === 'places' && data.session) && <SelectPlaces_tsx_1.SelectPlaces hall={{ rows: data.session.rows, seats: data.session.seats }} taken={data.session.taken} selected={state.basket} onSelect={handlers.selectPlace}/>}

            {(state.modal === 'basket') && <Basket_tsx_1.Basket items={data.basket} onDelete={handlers.removeTicket}/>}

            {(state.modal === 'contacts') && <ContactsForm_tsx_1.ContactsForm value={state.contacts} onChange={handlers.setContacts}/>}

            {(state.modal === 'success') && <Message_tsx_1.Message title={'Заказ оформлен'} description={'Билеты уже у вас на почте'} action={'На главную'} onClick={handlers.closeModal}/>}
        </Modal_tsx_1.Modal>}
    </>);
}
exports.default = App;
