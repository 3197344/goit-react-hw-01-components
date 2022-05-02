import PropTypes from 'prop-types';
import s from './transactions.module.css';
import TransactionHistoryHeader from './transactionHeader';

export default function TransactionHistory({ items }) {
        return (
        <table className={s.transactionHistory}>
        <thead>
            <tr className={s.header}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        {items.map(({ id, type, amount, currency }) => (
            <tbody key={id}>
            <TransactionHistoryHeader type={type} amount={amount} currency={currency} />
            </tbody>
        ))}
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        }),
    ).isRequired,
    };