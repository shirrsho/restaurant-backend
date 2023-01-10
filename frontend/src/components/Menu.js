import { useEffect, useState } from 'react';
import './Menu.css';

function Menu() {
    const [menu, setMenu] = useState();
    useEffect(()=>{
        getMenu();
    },[]);

    let getMenu = async () => {
        let response = await fetch('http://127.0.0.1:8000/', {
          method:'GET',
          headers:{
            'Content-Type':'multipart/form-data',
            // 'Authorization':'Bearer ' + String(authTokens.access) 
          }
        })
        let data = await response.json()
        console.log(data[0]);
        // data.map(data=>{
        //   data.storyimage = "/home/shirsho/Desktop/Mini-Facebook-nginx/story"+data.storyimage;
        // })
        if (response.status===200){
            console.log("correctly fetched");
            setMenu(data);
        }
        else console.log(response.status);
      }

  return (
    <div>
        <div className="heading_container heading_center">
                <h1>Our Menu</h1>
            </div>

            <div className="Menu">
                { menu? menu.map(item =>
                    <div className="card">
                        <div className="card__header">
                            <img src={"http://127.0.0.1:8000"+item.image} alt="card__image" className="card__image" width="600"/>
                        </div>

                        <div className="card__body">
                            <span className="tag tag-brown">{item.price} Euro</span>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ):<></>}
            </div>
        </div>
  );
}

export default Menu;
