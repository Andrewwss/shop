import React from "react";
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsOverview from "../../componetns/collections-overview/collections-overwiew.component";
import CollectionPage from '../collection/collection.component'
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../componetns/with-spinner/with-spinner.component";
const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
  state = {
    isLoading: true
  };

  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ isLoading: false})
    });
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;

    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={props =>
          <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
        }
        />
        <Route path={`${match.path}/:collectionId`} render={props =>
          <CollectionPageWithSpinner isLoading={isLoading} {...props} />
        }
        />
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
