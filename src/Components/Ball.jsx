import Style from "./Ball.module.css";
import React, {useState, useEffect, useRef} from "react";

const Ball = () => {

    // const [colors, setColors] = useState([]);
    let colors = useRef([]);

 
    useEffect(()=>{
        colors= ["purple", "yellow", "red", "blue", "orange"]
        for(let i = colors.length - 1; i > 0; i--){
            let rand = Math.floor(Math.random() * (i + 1));
            [colors[i], colors[rand]] = [colors[rand], colors[i]];
        }
         CircleColor();
    },[])


    const CircleColor = ()=>{
        let circlecolors = document.querySelectorAll(".circle");
        let hideCircles = document.querySelectorAll(".hideCircle");
        console.log(hideCircles);
        console.log(circlecolors);
        for(let i = 0; i < circlecolors.length; i++){
            circlecolors[i].style.backgroundColor = colors[i];
        }
    }

    const handleShoot = ()=>{
        let circleNum = document.querySelector("input").value;
        console.log(circleNum);
    }

    return (
        <>
            <div className={Style.main}>
                        <div className={Style.container_div}>
                                <div className="hideCircle"></div>
                                <div className="hideCircle"></div>
                                <div className="hideCircle"></div>
                                <div className="hideCircle"></div>
                                <div className="hideCircle"></div>
                        </div>
                        <div className={Style.circle_div}>
                               <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                        </div>
                        <div className={Style.button_div}>
                                <input type="number" min="1" max="5" placeholder="Enter Circle Number" id={Style.input}/>
                                <button id={Style.shoot_button} onClick={handleShoot}>Shoot</button>
                        </div>
            </div>
        </>
    )
}


export default Ball;