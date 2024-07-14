import { connect } from "react-redux";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

// eslint-disable-next-line react-refresh/only-export-components
function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps)(BalanceDisplay);
