import React from 'react';
import { closeModal, openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';


class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        // this.props.logout().then(() => this.props.closeModal());
        this.props.openModal();
    }
    

    render() {
        if (!this.props.modal) {
            return null;
        }

        // let component;
        // switch (this.props.modal) {
        //     case 'profile':
        //         component = <GreetingContainer />;
        //         break;
        //     default:
        //         return null;
        // }
        
        return (
            <div className="modal-background" onClick={this.props.closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <button className="" onClick={onClick = () => this.props.openModal()}>Rate and Save Your Workout!</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        logout: () => dispatch(logout()),
        openModal: () => dispatch(openModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);