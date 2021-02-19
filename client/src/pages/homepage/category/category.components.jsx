import React from 'react';
import {connect} from 'react-redux';
import {selectCollection} from '../../../redux/shop/shop.selectors'
import CollectionItem from '../../../components/collection-item/collection-item.component';


import './category.styles.scss';

const CategoryPage =({collection}) =>{
    const {title,items,routeName} = collection;
return (
    <div className='collection-page'>
<h2 className='title'>{title.toUpperCase()}</h2>
<div className ='items'>
{items.map(item =>(
    <CollectionItem key={item.id} item={item} collectionName={routeName} />
))}
</div>
</div>
);
};

const mapStateToProps =(state,ownProps) =>({
    collection :selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CategoryPage);