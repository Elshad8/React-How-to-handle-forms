import {useContext} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import {useEffect} from 'react';
import BooksContext from './context/books';

function App(){
    const{fetchBooks}=useContext(BooksContext);
        
    //Don't do this
    //fetchBooks();

    useEffect(()=>{fetchBooks()},[]);

    return <div className='app'>
        <h1>Reading List</h1>
        <BookCreate />
        <BookList />
    </div>

    
}

export default App;