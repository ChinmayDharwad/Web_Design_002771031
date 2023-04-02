import React from "react";
import "./contact.css"

function Contact(){
    return(
        <div className="contact-from">
           <form>
            <label>
                    First Name:
                    <input type="text" className="login-input" />
                </label>
                <br/>
                <label>
                    Last Name:
                    <input type="text" className="login-input"  />
                </label>
                <br/>
                <label>
                    Email:
                    <input type="text" className="login-input" />
                </label>
                <br/>
                <label>
                    Username:
                    <input type="text" className="login-input"  />
                </label>
                <br/>
                <button className="login-button" >Submit</button>
            </form>
        </div>
    )
}

export default Contact