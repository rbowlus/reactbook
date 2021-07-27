import React, { useEffect, useState, createContext, useCallback } from 'react';
import firebase from '../firebase';
import { useAuth } from './AuthContext';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const db = firebase.firestore();
    const [posts, setPosts] = useState([]);
    const [ products, setProducts ] = useState([])
    const [cart, setCart] = useState({ items: {}, quantity: 0, subtotal: 0, grandtotal: 0 })
    const { currentUser } = useAuth();
    
    function getCart() {
        let data = {};
        let quantity = 0;
        let subtotal = 0;
        let grandtotal = 0;
        let taxes = 0;
        db.collection('users').doc(currentUser.id).collection('cart').get()
            .then(snapshot => {
                snapshot.forEach(ref => {
                    let product = ref.data();
                    data[ref.id] = product

                    // update cart values
                    quantity += product.quantity;
                    subtotal += parseFloat(product.price) * product.quantity;
                    taxes += parseFloat(product.tax) * product.quantity;
                    grandtotal = subtotal + taxes;

                })
                console.log(quantity);
                console.log(subtotal);
                console.log(taxes);
                console.log(grandtotal);

                setCart({ items: data, 
                    quantity, 
                    subtotal: (subtotal/100).toFixed(2), 
                    taxes: (taxes/100).toFixed(2), 
                    grandtotal: (grandtotal/100).toFixed(2) });
            })
    }
    
    useEffect(() => {
        if (currentUser.loggedIn) 
        {
            console.log(currentUser);
            if (cart.hasOwnProperty('items')) 
            {
                
                getCart()
            }
        }
    }, [db, currentUser.loggedIn])

    // useEffect(() => {
    //     getCartItems() 
    // }, [ getCartItems ])
    

    useEffect(() => {
        var newProducts = []
        fetch('/api/shop/products')
            .then(res => res.json())
            .then(products => {
                newProducts = [...products.data]
              
                let productList = []
                for (const p of newProducts) {
                    let newP = {
                        ...p, 
                        price: parseInt(parseFloat(p.metadata.price)*100), 
                        tax: parseInt(parseFloat(p.metadata.tax) * 100)
                    }
                    productList.push(newP)
                }
                setProducts(productList)
            })    
    }, [])
  

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
        <DataContext.Provider value={ { postList: [ posts, setPosts], getPosts, products, getCart, cart } }>
            { props.children }
        </DataContext.Provider> 
    )
}