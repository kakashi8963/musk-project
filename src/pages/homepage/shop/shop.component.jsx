import React from 'react';
import {Route} from 'react-router-dom';
import CollectionOverview from '../../../components/collection-overview/collection-overview.components';
import CategoryPage from '../category/category.components';


const ShopPage =({match}) =>(
<div className='shop-page'>
<Route exact path ={`${match.path}`} component={CollectionOverview}/>
   <Route path ={`${match.path}/:collectionId`} component={CategoryPage}/>
    </div>
    );



export default ShopPage;