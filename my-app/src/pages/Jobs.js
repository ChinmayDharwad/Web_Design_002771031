import React from "react";
import CardComponent from "../Card/CardComponent"
import job_img1 from "../Assests/fidelity.jpg"
import job_img2 from "../Assests/cargurus.jpg"
import job_img3 from "../Assests/nok-nok.jpg"
import job_img4 from "../Assests/meta.png"
import job_img5 from "../Assests/nokia.jpg"
import job_img6 from "../Assests/wayfair.jpg"
import './Jobs.css'

function Jobs(){

    let data=[{
        title:"Software developer Intern",
        imageUrl:job_img1,
        body:"Posted 2 weeks ago"
    },

    {
        title:"Business Analyst",
        imageUrl:job_img2,
        body:"Posted 4 weeks ago"
    },
    {
        title:"Data Analyst",
        imageUrl:job_img3,
        body:"Posted 3 days ago"
    },
    {
        title:"Data Scientist",
        imageUrl:job_img4,
        body:"Posted 30+ days ago"
    },
    {
        title:"Technical Support",
        imageUrl:job_img5,
        body:"Posted 14 weeks ago"
    },
    {
        title:"Content Creator",
        imageUrl:job_img6,
        body:"Posted 8 weeks ago"
    }
]
    return(
        <div className='home_card'>
        {data.map(elem=>(
            <CardComponent
            title={elem.title}
            imageUrl={elem.imageUrl}
            body={elem.body}
        />
        ))}
        
    </div>
    )
}

export default Jobs