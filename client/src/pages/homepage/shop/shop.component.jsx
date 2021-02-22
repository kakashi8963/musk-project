import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionOverview from '../../../components/collection-overview/collection-overview.components';
import CategoryPage from '../category/category.components';
import OpenItem from '../../../components/open-item/open-item.component';




class ShopPage extends React.Component {


  render() {
    const { match } = this.props;
   
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props)=><CollectionOverview {...props}/>} />
        <Route exact
          path={`${match.path}/:collectionId`}
          render={(props)=> <CategoryPage {...props} />}
        />
         <Route
          path={`${match.path}/:collectionId/:id`}
          render={(props)=> <OpenItem  {...props} />}
        />

      </div>
    );
  }
}



export default ShopPage;
