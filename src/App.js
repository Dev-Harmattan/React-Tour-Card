import { useState, useEffect } from "react";
import { Header } from "./components/header/Header";
import { UiCard } from "./components/card/UiCard";
import { data } from "./json/file.json";
import {ReloadButton} from './components/reload/ReloadButton'
import "./App.css";

const datas = data;

function App() {
  const [data, setData] = useState([...datas]);
  const [view, setView] = useState(false);

  const handleDelete = (id) => {
    const newData =  data.filter( data => data.id !== id )
    setData(newData);
  };

  const handleViewMore = (id) => {
    datas.forEach(data => {
      if(data.id === id){
        setView(!view);
        data.viewMore = view;
      }
    });

    setData(datas);
  };

  const handleReload = () => {
    datas.forEach(data => data.viewMore = false);
    setData(datas);
  }

  useEffect(() => {
    setData(datas)
  }, [datas])

  

  const element = data.length === 0 ? <ReloadButton handleReload={handleReload}/>  : 
    data.map((data, index) => (
      <UiCard
        index={index}
        key={data.id}
        id={data.id}
        title={data.title}
        price={data.price}
        content={data.content}
        handleDeleteClick={handleDelete}
        handleViewMore={handleViewMore}
        isTrue={data.viewMore}
      />
    ))

  return (
    <div className="container">
      <Header />
      {element}
    </div>
  );
}

export default App;
