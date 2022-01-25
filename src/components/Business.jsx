import React from "react";
import './Business.css';
import Button from "./Button";
const Business = () => {
    return ( 
        <div className="top flex justify-between">
            <div className="left">
                <p className="texto">TOP BUSINESS APP</p>
                <h1>The plaform for better cooperation</h1>
                <p className="texto-1">Crafted with care & creativity. Brings together everthing in one place.</p>
                <div className="but">
                    <Button className="butao-1 flex justify-between">
                        DOWNLOAD
                    </Button>
                    <Button className="butao-2 flex justify-between">
                        CHECK DEMO
                    </Button>
                </div>
            </div>
        </div>
        
     );
   
}
 
export default Business;