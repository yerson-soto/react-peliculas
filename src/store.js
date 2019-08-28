import { createStore, combineReducers,  compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firestore';
import { firestore, firestoreReducer } from 'redux-firestore';
import firebase from 'firebase/app';