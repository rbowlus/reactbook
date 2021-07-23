import React, { useEffect, useState, createContext, useCallback } from 'react';
import firebase from '../firebase';
import { useAuth } from './AuthContext';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [posts, setPosts] = useState([]);
    const db = firebase.firestore();
    const { currentUser } = useAuth();

    const getPosts = useCallback(() => {
        let newPosts = [];

        db.collection('posts').orderBy('dateCreated', 'desc').get().then(ourPosts => {
            ourPosts.forEach(post => {
                newPosts.push({ ...post.data(), postId: post.id, })
            })
            setPosts(newPosts);
        })
    }, [db])

    useEffect(() => {
        if (currentUser.loggedIn) {
            getPosts();
        }
    },[ currentUser.loggedIn, getPosts])

    return (
        <DataContext.Provider value={ { postList: [ posts, setPosts], getPosts } }>
            { props.children }
        </DataContext.Provider> 
    )
}