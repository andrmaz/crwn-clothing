import React from 'react';
import {useSelector} from 'react-redux';
// import {createStructuredSelector} from 'reselect';

import  CollectionPreview  from '../collection-preview/collection-preview.component';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

const CollectionsOverview = () => {

    const getCollections = useSelector(selectCollectionsForPreview);
    
    return (
        <div className='collections-overview'>
            {getCollections.map(({ id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
)};

/* const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
}) */


export default CollectionsOverview;