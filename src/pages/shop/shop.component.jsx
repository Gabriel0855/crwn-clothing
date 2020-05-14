import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import {Route} from 'react-router-dom';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/withSpinner/withSpinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    constructor () {
        super();
        this.state = {
            isLoading: true
        }
    }
    unSubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({isLoading: false});
        })
    }

    render () {
        const {match} = this.props;
        const {isLoading} = this.state;
        return (

                <div className='shop-page'>
                        <Route exact path={`${match.path}/`} render={(otherProps) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...otherProps} />} />
                        <Route path={`${match.path}/:collectionId`} render={(otherProps) => <CollectionPageWithSpinner isLoading={isLoading} {...otherProps} />} />
                </div>
            
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);