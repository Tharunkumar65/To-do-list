import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddList from "./AddList";
import SearchItem from "./SearchItem";
import { useEffect, useState } from "react";
import apirequest from "./apirequest";
function App() {
  const API_url = `http://localhost:3500/items`;

  const [lists, setLists] = useState([]);
  const [newList, setNewList] = useState("");
  const [search, setSearch] = useState("");
  const[fetchError ,setfetchError]=useState(null);
  const[isLoading,setIsLoading]= useState(true);
  useEffect(() => {
    const fetchItems = async() => {
      try {
        const response = await fetch(API_url);
        if(!response.ok) throw Error("Data is not received")
        const listItems = await response.json();
        setLists(listItems);
        setfetchError(null);
      }catch (err) {
          setfetchError(err.message)
      }finally{
        setIsLoading(false);
      }
    };
    setTimeout(()=>{
      fetchItems();
    },2000)
    
  }, []);

  const addItem =async (list) => {
    const id = lists.length ? lists[lists.length - 1].id + 1 : 1;
    const myNewList = { id, checked: false, list };
    const listItems = [...lists, myNewList];
    setLists(listItems);
    const postOpt ={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(myNewList)
    }
    const result = await apirequest(API_url,postOpt);
    if(result) setfetchError(result)
  };

  const handleCheck = async(id) => {
    const listItems = lists.map((list) =>
      list.id === id ? { ...list, checked: !list.checked } : list
    );
    setLists(listItems);
     
   const myList  = listItems.filter((list)=>list.id===id) ;
   const updateOpt = {
    method:'PATCH',
    headers:{
      'content-Type':'application/json'
    },
    body:JSON.stringify({checked:myList[0].checked})
   };
   const requrl= `${API_url}/${id}`;
   const result = await apirequest(requrl,updateOpt);
   if(result) setfetchError(result)

  };
  const handleDelete =async (id) => {
    const listItems = lists.filter((list) => list.id !== id);
    setLists(listItems);
    const deleteOpt={
      method:'DELETE'
    }
    const requrl = `${API_url}/${id}`;
    const result = await apirequest(requrl,deleteOpt)
    if(result) setfetchError(result)  
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newList) return;
    console.log(newList);
    addItem(newList);
    setNewList("");
  };
  return (
    <div className="App">
      <Header title="Todo Lists" />
      <AddList
        newList={newList}
        setNewList={setNewList}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
     <main>

      {isLoading && <p>Loading items...</p>}
      {fetchError && <p style={{color:"red"}}>{`Error : ${fetchError}`}</p>}
      {!fetchError &&!isLoading && <Content
        lists={lists.filter((list) =>
          list.list.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />}
      </main>
      <Footer length={lists.length} />
    </div>
  );
}

export default App;
