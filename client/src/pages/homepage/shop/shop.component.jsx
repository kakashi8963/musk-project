import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import WithSpinner from '../../../components/with-spinner/with-spinner';
import CollectionOverview from '../../../components/collection-overview/collection-overview.components';
import CategoryPage from '../category/category.components';
import OpenItem from '../../../components/open-item/open-item.component';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../../firebase/firebase.utils';

import { updateCollections } from '../../../redux/shop/shop.actions';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CategoryPage);
const OpenItemPage =WithSpinner(OpenItem);

class ShopPage extends React.Component {
state ={
    loading :true
};


  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

   this.unsubscribeFromSnapshot= collectionRef.onSnapshot(async snapshot  => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({loading:false});
    });
  }

  render() {
    const { match } = this.props;
    const {loading} =this.state;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props)=><CollectionsOverviewWithSpinner isLoading={loading} {...props}/>} />
        <Route exact
          path={`${match.path}/:collectionId`}
          render={(props)=> <CollectionPageWithSpinner isLoading={loading} {...props} />}
        />
         <Route
          path={`${match.path}/:collectionId/:id`}
          render={(props)=> <OpenItemPage isLoading={loading} {...props} />}
        />

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);