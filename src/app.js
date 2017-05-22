import React from 'react'
import ReactDom from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers/index'
import Test from './components/Test'

let store = createStore(todoApp);

ReactDom.render(
    <Provider store= {store}>
        <Test/>
    </Provider>
    , 
    document.getElementById('app')
);


// import React from 'react'
// import ReactDom from 'react-dom'

// import Test from './components/Test'


// ReactDom.render(
//         <Test/>
//     , 
//     document.getElementById('app')
// );