import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
    AboutMe,
    Skills,
    Experience,
    Education,
    Projects
} from "../../data.jsx";

export default function Portfolio() {
    const [selected, setSelected] = useState("about");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "about",
            title: "About Me",
        },
        {
            id: "skills",
            title: "Skills",
        },

        {
            id: "experience",
            title: "Experience",
        },

        {
            id: "education",
            title: "Education",
        },

        {id: "projects",
            title: "Projects",
        },
    ];

    useEffect(()=>{
        switch(selected){
            case "about":
                setData(AboutMe);
                break;

            case "skills":
                setData(Skills);
                break;

            case "experience":
                setData(Experience);
                break;

            case "education":
                setData(Education);
                break;

                case "projects":
                    setData(Projects);
                    break;

                    default: 
                        setData(AboutMe);
                        break;
        }
        
    },[selected])


    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
              {list.map((item) => (
                  <PortfolioList 
                  title={item.title} 
                  active={selected === item.id} 
                  setSelected={setSelected}
                  id={item.id}
                  />
              ))} 
            </ul>
                <div className="container">
                    {data.map((d) => (
                    <div className="item">
                        <img 
                        src={d.img} 
                        alt="" 
                        />
                        <h3>{d.title}</h3>         
                    </div>
                    ))}
                </div>
        </div>
    );
}
