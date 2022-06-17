import {createContext, useReducer} from 'react';
import AppReducer from './Reducer';

import {db} from '../firebaseConfig';
import {collection, getDocs,addDoc, onSnapshot} from 'firebase/firestore';



const initialState ={
    categories:[],
    locations:[],
    prodcutDetails:[]
}

// create context
export const GlobalContext = createContext(initialState)

// Provider

export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initialState)

    // const getCategories = onSnapshot(collection(db, "categories"), (data) => {
    //     data.docs.map((doc) => (
    //     //   {...doc.data(), id: doc.id}
        
    //       dispatch({
    //         type:'getCat',
    //         payload: {...doc.data(), id: doc.id}
    //     })

    //     ))
    //   });


   const  getCategories= async ()=>{
        const catColRef = collection(db, 'categories')
            const data = await getDocs(catColRef)
          
                data.docs.map((doc) => (
                    // {...doc.data(), id: doc.id}

                    dispatch({
                        type:'getCat',
                        payload: {...doc.data(), id: doc.id}
                    })
                ))                  
    }

    const getLocation = async () => {
        const locColRef = collection(db,'locations')
        const locData = await getDocs(locColRef)
        locData.docs.map((doc)=>{

            dispatch({
                type:'getLoc',
                payload: {...doc.data(), id: doc.id}
            })  
        })
    }

    const getProductDetails = async () => {
        const productDetailsRef = collection(db,'productDetails')
        const prodductDetailsData = await getDocs(productDetailsRef)
        prodductDetailsData.docs.map((doc)=>{
            dispatch({
                type:'getProdDetails',
                payload: {...doc.data(), id: doc.id}
            })  
        })
    }

    // const addProduct = async () =>  addDoc(collection(db, "productDetails"), {
    //     productTitle: 'Samsaung1',
    //     price: '1000', location:'Karachi',
    //     postedTime:'18 hours ago'
    //   });

    return(
        <GlobalContext.Provider
        value={{
            categories : state.categories,
            locations: state.locations,
            prodcutDetails:state.prodcutDetails,
            getCategories,
            getLocation,
            getProductDetails,
            // addProduct
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}