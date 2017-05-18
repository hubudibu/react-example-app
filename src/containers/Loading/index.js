import React from 'react';
import { connect } from 'react-redux';

export const Loading = ({ loading }) => (<p>{loading ? <span>loading</span> : ''}</p>);

export const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.loading
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading);
