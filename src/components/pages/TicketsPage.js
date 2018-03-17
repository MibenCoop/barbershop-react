import React, {Component} from 'react'
import { connect } from 'react-redux'
// import { login } from '../../actions/auth'
import PropTypes from 'prop-types'

class TicketsPage extends Component {
    render() {
        return (
            <div> 
                <TicketPage />
            </div>
        );
    };
}
 
TicketsPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
}

export default TicketsPage;