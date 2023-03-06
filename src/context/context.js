import React, { createContext, useEffect, useState } from 'react'
import { commerce } from '../lib/commerce'
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export const Context = createContext()

export const ContentProvider = ({children}) => {
     const [width, setWidth] = useState(window.innerWidth);
     const [height, setHeight] = useState(window.innerHeight);
     const [cart, setCart] = useState({})
     const [productList, setProductList] = useState([]);
     const [filtered, setFiltered] = useState([]);
     const [order, setOrder] = useState({});
     const [checkOrder, setCheckOrder] = useState(false)
     const [loading, setLoading] = useState(true);
     const [loadingCart, setLoadingCart] = useState(false);
     const [loadingQty, setLoadingQty] = useState({});
     const [removeItemLoading, setRemoveItemLoading] = useState({});
     const [clearCartLoading, setClearCartLoading] = useState(false)
     const [isActive, setIsActive] = useState('All');
     const [locatn, setLocatn] = useState('');
     const [focused, setFocused] = useState(false);
    //  const [errorMessage, setErrorMessage] = useState('');
     const [refresh, setRefresh] = useState(false);


    let location = useLocation();
     let navigate = useNavigate();
    let listCategories = ['All', ...new Set(productList.map(item => item.categories[0].name))]

 
     const fetchProducts = async () => {
        setLoading(true)
         try {
             const { data } = await commerce.products.list();
             setProductList(data);
             setFiltered(data);
             setLoading(false);
         } catch (e) {
             console.error('There was an error fetching the products', e);
         }
        
     }


     const fetchCart = async () => {
         try {
             setCart(await commerce.cart.retrieve());
         } catch (e) {
             console.error('There was an error fetching the Cart items', e);
         }  
     }
 
     const handleAddToCart = async (productId, quantity) => {
        setLoadingCart(true)

        try{
            const item = await commerce.cart.add(productId, quantity);
            setCart(item.cart)


            if(item.cart && locatn !== '/shop'){
                navigate("/cart")
                setLoadingCart(false)
            }else{
                setLoadingCart(false)
            }
        }catch (e) {
            console.error('There was an error adding to cart', e);
        }
         
     }

    //  const handleUpdateCartQty = (lineItemId, quantity) => {
    //     commerce.cart.update(lineItemId, { quantity }).then((resp) => {
    //       setCart(resp.cart);
    //     }).catch((error) => {
    //       console.log('There was an error updating the cart items', error);
    //     });
    //   }

    // const handleRemoveFromCart = (lineItemId) => {
    //     commerce.cart.remove(lineItemId).then((resp) => {
    //       setCart(resp.cart);
    //     }).catch((error) => {
    //       console.error('There was an error removing the item from the cart', error);
    //     });
    //   }

    // const handleEmptyCart = () => {
    //     commerce.cart.empty().then((resp) => {
    //       setCart(resp.cart);
    //     }).catch((error) => {
    //       console.error('There was an error emptying the cart', error);
    //     });
    //   }

     const handleUpdateCartQty = async (lineItemId, quantity) => {
       
        setLoadingQty(state => ({
            ...state, // <-- copy previous state
            [lineItemId]: !state[lineItemId] // <-- update value by index key
          }))
        try {
            const item = await commerce.cart.update(lineItemId, { quantity });
            setCart(item.cart);
            setLoadingQty(state => ({
                ...state, // <-- copy previous state
                [lineItemId]: !state[lineItemId] // <-- update value by index key
              }))
        } catch (e) {
            console.error('There was an error updating items', e);
        }
     }

     const handleRemoveFromCart = async (lineItemId) => {
        setRemoveItemLoading(state => ({
            ...state, // <-- copy previous state
            [lineItemId]: !state[lineItemId] // <-- update value by index key
          }))
        try {
            const item = await commerce.cart.remove(lineItemId);
            setCart(item.cart);
            setRemoveItemLoading(state => ({
                ...state, // <-- copy previous state
                [lineItemId]: !state[lineItemId] // <-- update value by index key
              }))
        } catch (e) {
            console.error('There was an error updating items', e);
        }
       

     }

     const handleEmptyCart = async () => {
        setClearCartLoading(true)
        try {
            const item = await commerce.cart.empty();
            setCart(item.cart);
            setClearCartLoading(false);
        } catch (e) {
            console.error('There was an error', e);
        }
     }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
        
        setRefresh(true)
        setCart(newCart);
    };
    
    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
     
        setCheckOrder(true)
        try {
          const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
    
          setOrder(incomingOrder);
          setCheckOrder(false)
          refreshCart();

        } catch (error) {
        //   setErrorMessage(error.data.error.message);
          console.log(error.data.error.message)
        }
    };
 
    useEffect(() => {
        fetchCart()
    }, [])

     useEffect(() => {
         fetchProducts()
     }, [refresh])

     useEffect(() => {
      const WindowWidthResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", WindowWidthResize);
      return () => window.removeEventListener("resize", WindowWidthResize);
    }, []);

    useEffect(() => {
        const WindowHeightResize = () => setHeight(window.innerHeight);
        window.addEventListener("resize", WindowHeightResize);
        return () => window.removeEventListener("resize", WindowHeightResize);
      }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
        let locatnPath = location.pathname
        setLocatn(locatnPath)
      }, [location])
     
     const filterItems = (category) => {
         if(category === 'All'){
             setFiltered(productList);
             setIsActive('All')

             return;
         }
         const filted = productList.filter(item => item.categories[0].name === category);
         setFiltered(filted);
         setIsActive(category)   
     }

    

    return(
        <Context.Provider value={{refresh, refreshCart, width, height, checkOrder, handleCaptureCheckout, order, cart, productList, filtered, loading, isActive, setIsActive, listCategories, filterItems, handleAddToCart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart, loadingCart, locatn, loadingQty, clearCartLoading, removeItemLoading, focused, setFocused}}>
            {children}
        </Context.Provider>
    )
  
  }


  // export  const ViewportComsumer = () => {
  //   const  {width}  = useContext(ViewportContext)
    
  //   return {width}
  // }