import React from 'react'

import Modal from 'react-modal'
Modal.setAppElement('#app');

import CountryCarousel from './CountryCarousel.jsx'

class LeagueSelectModal extends React.Component {
  render() {
    return (
      <Modal
        className="Modal__Bootstrap modal-dialog"
        closeTimeoutMS={150}
        isOpen={this.props.modalIsOpen}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Pick your league</h4>
          </div>
          <div className="modal-body">
            <CountryCarousel onSelect={this.props.onSelectCountry} />
          </div>
        </div>
      </Modal>
    );
  }
}

LeagueSelectModal.propTypes = {
  onSelectCountry: React.PropTypes.func.isRequired
}

export default LeagueSelectModal;
