import React, {Component} from 'react'
import { Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getTickets } from "../actions/bookTickets.js";
import { getMasters } from '../actions/getMasters.js';

import TicketsListPage from './TicketsListPage.js'
import '../styles/Dashboard.css'
class DashboardPage extends Component {
    componentDidMount = () => {
        const { getTickets } = this.props;
        const { getMasters } = this.props;
        getMasters();
        getTickets();
    }
    render() {
        return (
            <div className = "dashboard"> 
               <p className = "dashboard__info">Для того, чтобы начать работать запишитесь к нам заполним простую форму внизу.
                Нужно просто указать удобное для вас дату и время, чтобы мы могли созвониться.<br/>
                <b>Время работы: 10:00 до 20:00</b></p>
                <Link className = "dashboard__link"to='/bookTicket'>
                    Кликнете, чтобы выбрать дату и время для консультации
                </Link>
                <div className = "dashboard__tickets">
                    <TicketsListPage/>
                </div>
            </div>
        );
    };
}
 
DashboardPage.propTypes = {
    getTickets: PropTypes.func.isRequired,
    getMasters: PropTypes.func.isRequired,
    tickets: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    tickets: state.ticket,
});

const mapDispatchToProps = dispatch => ({
    getTickets: () => dispatch(getTickets()),
    getMasters: () => dispatch(getMasters())
})
export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);