import React from 'react';

import {connect} from 'react-redux';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors'
import {createStructuredSelector} from 'reselect';
import './collection-overview.styles.scss';
import CollectionPreview from '../preview-collection/preview-collection.component';

const CollectionsOverview =({collections}) =>(
    <div className ='collections-overview'>
        {
    collections.map(({id,...otherCollectionProps}) =>(
        <CollectionPreview key={id} {...otherCollectionProps}/>
    ))
    } 
    </div>
);

const mapStateToProps =createStructuredSelector({
    collections:selectCollectionsForPreview
    });

export default connect(mapStateToProps)( CollectionsOverview);
