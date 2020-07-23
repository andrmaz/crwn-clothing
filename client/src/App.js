import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
//import ShopPage from './pages/shop/shop.component';
//import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
//import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from '../src/components/error-boundary/error-boundary.component';

import { GlobalStyle } from './global.styles';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
//import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = user => {

  const dispatch = useDispatch()

  const getCurrentUser = useSelector(selectCurrentUser)
  
  useEffect(() => {

    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          dispatch(setCurrentUser(
            {
              id: snapShot.id,
              ...snapShot.data()
            }, 
            () => {
              console.log('Current User : ', setCurrentUser)
            }
          ));
        })
      } else {
        dispatch(setCurrentUser(userAuth));
        console.log('Current User : ', setCurrentUser)
        //addCollectionAndDocuments('collections', collectionsArray)
      }
    })

    return () => unsubscribeFromAuth()

  }, [dispatch])
  
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage}/>
            <Route exact path='/signin' render={() => 
              getCurrentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

/* const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  //collectionsArray: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
 */

export default App;
