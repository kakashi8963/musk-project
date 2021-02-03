import React from 'react';
import {Route, Switch,Redirect} from 'react-router-dom';
import Header from './components/header/header.component';
import './App.css';
 import {connect} from 'react-redux';
import Signinandsignuppage from './pages/homepage/sign/sign.components';
import ShopPage from './pages/homepage/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';
import CheckoutPage from './pages/homepage/checkout/checkout.components';
import Contact from './pages/contactpage/contact.comonents';
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.actions';  
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selector';

class App extends React.Component {

unsubscribeFromAuth =null;

componentDidMount(){
const{setCurrentUser} =this.props;

  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
   if(userAuth){
     const userRef = await createUserProfileDocument(userAuth);

     userRef.onSnapshot(snapshot => {
       setCurrentUser({
         id: snapshot.id,
      ...snapshot.data()
       });

     });
   }
   else{
setCurrentUser(userAuth);
   }  
});
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
    return (
      <div>
        <Header />
        <Switch> 
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/contact' component={Contact}/>
        <Route  path='/checkout' component={CheckoutPage}/>
        <Route  path='/signin' render={()=> this.props.currentUser?(<Redirect to='/' />) : (
          <Signinandsignuppage/>
        )}/>
        </Switch>
      </div>
    );
  }
 
}

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
  })

const mapDispatchToProps =dispatch =>({
  setCurrentUser:user=> dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
