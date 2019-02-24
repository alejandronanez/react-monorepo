import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '@reactweek/redux';
import Counter from './Counter';

const mapStateToProps = state => ({
  counter: state,
});

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(incrementCounter()),
  decrementCounter: () => dispatch(decrementCounter()),
});

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default Container;
