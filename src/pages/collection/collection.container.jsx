import React from 'react';
import {createStructuredSelector} from 'reselect';
import {isCollectionsLoaded} from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/withSpinner/withSpinner.component';
import {connect} from 'react-redux';
import {compose} from 'redux';
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !isCollectionsLoaded(state)
});

const CollectionPageContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionPage)

export default CollectionPageContainer;