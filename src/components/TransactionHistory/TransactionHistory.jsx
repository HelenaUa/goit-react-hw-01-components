import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';


export const TransactionItem = ({id, type, amount, currency}) => {
    return (
    <tr key={id}>
        <td className={css.type}>{type}</td>
        <td className={css.amount}>{amount}</td>
        <td className={css.currency}>{currency}</td>
    </tr>
    )
}

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transaction_history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

   <tbody>      
        {items.map(item => (
            <TransactionItem
               key={item.id}
               type={item.type}
               amount={item.amount}
               currency={item.currency}
            />))}             
   </tbody>
        </table>
    )
}


// TransactionItem.propTypes = {
//     id: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     amount: PropTypes.string.isRequired,
//     currency: PropTypes.string.isRequired,
// }

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
         id: PropTypes.string.isRequired,
         type: PropTypes.string.isRequired,
         amount: PropTypes.string.isRequired,
         currency: PropTypes.string.isRequired,
    })),
}