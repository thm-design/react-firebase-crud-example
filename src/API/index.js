import fire from '../fire';
import firebase from 'firebase';

const database = fire.database();
const portfolioItemsRef = database.ref('portfolioItems').orderByKey().limitToLast(100);

/**
 * Posts data to the database
 * @param  {event} event [the click event]
 * @param  {react.Dom} inputEl [refrence to input element]
 */
const _postData = (event, state) => {
  database.ref('portfolioItems').push(state);
};

/**
 * Deleted data from the database
 * @param  {event} event [the click event]
 * @param  {react.Dom} inputEl [refrence to input element]
 */
const _deleteItem = (event, key) => {
  database.ref('portfolioItems').child(key).remove();
};

/**
 * Listens to POST, or the 'add node' event in firebase and sets the components state
 * @param  {object} executionContext [the value of this in the other component, needed to call this.setState()]
 */
const _listenToPostEvents = executionContext => {
  // listen to portfolio box added event
  portfolioItemsRef.on('child_added', item => {
    const state = executionContext.state.portfolioItems;
    const portfolioItem = {
      href: item.val().href,
      imgSrc: item.val().imgSrc,
      text: item.val().text,
      key: item.key
    };

    // Add and save the new portfolio item
    executionContext.setState({ portfolioItems: [portfolioItem].concat(state) });
  });

  // listen to portfolio box removed event
  portfolioItemsRef.on('child_removed', snapshot => {
    const state = executionContext.state.portfolioItems;
    const portfolioItem = {
      href: snapshot.val().href,
      imgSrc: snapshot.val().imgSrc,
      text: snapshot.val().text,
      key: snapshot.key
    };

    // Remove portfolio item from state
    const newState = state.filter(item => item.key !== portfolioItem.key);

    // Save the new set of portfolio items
    executionContext.setState({ portfolioItems: newState });
  });
};

const _listenToAuthEvents = executionContext => {
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log('User is logged in: user object', firebaseUser);
      executionContext.setState({ isLoggedIn: true, userObject: firebaseUser });
    } else {
      console.log('User is not loggedin');
      executionContext.setState({ isLoggedIn: null, userObject: null });
    }
  });
};

/**
 * Gets data from the database
 */
const _getData = executionContext => {
  return portfolioItemsRef.once('value').then(snapshot => {
    // const message = { text: snapshot.val(), id: snapshot.key };
    const messagesArray = snapshot.val();
    executionContext.setState({ messages: messagesArray });
  });
};

export { _getData, _postData, _listenToPostEvents, _deleteItem, _listenToAuthEvents };
