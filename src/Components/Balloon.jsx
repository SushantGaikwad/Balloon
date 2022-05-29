import  "./Balloon.css";
import React, {useState, useEffect, useRef} from "react";

const Ball = () => {

    const [num, setNum] = useState(0);
    let colors = useRef([]);
    
 
    useEffect(()=>{
        colors= ["purple", "yellow", "red", "blue", "orange"];
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
            hideCircles[i].style.backgroundColor = colors[i];

        }
    }

    const handleInput = (e)=>{
        const circleNum = e.target.value;
        setNum(circleNum);
        console.log(num);
    }
    const handleShoot = ()=>{
        let circlecolors = document.querySelectorAll(".circle");
        let hideCircles = document.querySelectorAll(".hideCircle");

        if(num > 0 && num < 6){
            circlecolors[num-1].style.display = "none"
            hideCircles[num-1].style.visibility = "visible";
            console.log(num, "Shooted");
        }
        else{
            alert("Enter Number Between 1 to 5");
        }
        
    }

    const removeCircle = (e)=>{
        let num = e.target.id;
        let circlecolors = document.querySelectorAll(".circle");
        let hideCircles = document.querySelectorAll(".hideCircle");
        circlecolors[num-1].style.display = "block"
        hideCircles[num-1].style.visibility = "hidden";
    }

    return (
        <>
            <div className="main">
                        <div className= "container_div">
                                <div className="hideCircle" id="1" onClick={removeCircle}></div>
                                <div className="hideCircle" id="2" onClick={removeCircle}></div>
                                <div className="hideCircle" id="3"  onClick={removeCircle}></div>
                                <div className="hideCircle" id="4" onClick={removeCircle}></div>
                                <div className="hideCircle" id="5" onClick={removeCircle}></div>
                        </div>
                        <div className="circle_div">
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                        </div>
                        <div className="button_div">
                                <input type="number" min="1" max="5" placeholder="Enter Circle Number" onChange={handleInput} id="input"/>
                                <button id="shoot_button" onClick={handleShoot}>Shoot</button>
                        </div>
            </div>
        </>
    )
}


export default Ball;