// Methode Function component

import React,{useState} from 'react'

const App1 =()=>{
    const [products, setProducts] = useState([])
    const [mot, setMot] = useState('')
    
    const save =(e) =>{
        setMot(e.target.value)
    }
    const rech =()=>{
        fetch(`https://dummyjson.com/products/search?q=${mot}`)
            .then((response)=>response.json())
            .then((data)=>{
                setProducts(data.products)
            })
    }
    return(
        <div style={{backgroundColor:'purple'}}>
            <h1 style={{color:'pink'}}>API search products</h1>
            <input
            type='text'
            value={mot}
            onChange={save}
            placeholder='search product'
            />
            <button onClick={rech}>Rechercher</button>
            <div>
                    {products.length > 0 ?(
                        <ul>
                        {products.map((p)=>(
                            <li key={p.id} style={{backgroundColor:'pink'}}>{p.title}</li>
                        ))}
                        </ul>
                    ):(
                        <h5 style={{backgroundColor:'pink'}}><p>aucun produit trouvee</p></h5>
                    )}    
            </div>
        </div>
    )
}
export default App1

//////////////////////////////////////////////////////////////

// Methode Class component

// import React,{Component} from 'react'
// export default class App1 extends Component{
//     constructor(){
//         super()
//         this.state = {
//             products : [],
//             mot : ''
//         }
//     }
// affiche=(e)=>{
//     this.setState({mot :e.target.value })
// }
// rech=()=>{
//     const {mot} =this.state
//     fetch(`https://dummyjson.com/products/search?q=${mot}`)
//         .then((response)=>response.json())
//         .then((data)=>{
//             this.setState({products:data.products})
//         })
//         .catch((error)=>{
//             console.error('error:',error)
//         })
// }
//     render(){
//         const {mot,products} = this.state
//         return(
//             <div style={{textAlign:'center'}}>
//                 <input
//                 type='text'
//                 value={mot}
//                 onChange={this.affiche}
//                 placehorder='rechercher un produit'
//                 />
//                 <button onClick={this.rech}>search</button>
//                 <div>
//                     {products.length > 0 ? (
//                             <ul>
//                                {products.map( (prod) => (
//                                     <li key={prod.id}>{prod.title}</li>
//                                 ))}
//                             </ul>
//                         ):(
//                             <p>nothing found</p>
//                         )}
//                 </div>
//             </div>
//         )
//     }
// }