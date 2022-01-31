import React from 'react'
import {Card, Image} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import './Cards.css'

const Cards = () => {
    const data = [
        {image: "https://raw.githubusercontent.com/GDSCCarleton/GDSCCarleton.github.io/main/images/saurabh.jpeg", name: "Saurabh Kishore", title: "President", color: '#EA4335', linkedin: 'https://www.linkedin.com/in/saurabh-gummaraj-kishore/'},
        {image: "https://raw.githubusercontent.com/GDSCCarleton/GDSCCarleton.github.io/main/images/sanaa.jpg", name: "Sanaa Syed", title: "Vice President", color: '#4285F4', linkedin: 'https://www.linkedin.com/in/sanaasy/'},
        {image: "https://raw.githubusercontent.com/GDSCCarleton/GDSCCarleton.github.io/main/images/nishtha.jpg", name: "Nishtha M.", title: "Project Coordinator", color: '#FBBC04', linkedin: 'https://www.linkedin.com/in/nishthamavai/'},
        {image: "https://raw.githubusercontent.com/GDSCCarleton/GDSCCarleton.github.io/main/images/yasmine.jpg", name: "Yasmine Jacob-Siddiqui", title: "Marketing Lead", color: '#34A853', linkedin: 'https://www.linkedin.com/in/yasmine-jacob-siddiqui-95344020b/'},
        {image: "https://raw.githubusercontent.com/GDSCCarleton/GDSCCarleton.github.io/main/images/kyuri.png", name: "Kyuri Jung",  title: "Designer", color: '#F44336', linkedin: 'https://www.linkedin.com/in/kyurijung/'},
        {image: "https://raw.githubusercontent.com/GDSCCarleton/GDSCCarleton.github.io/main/images/amina.jpg", name: "Amina Loum", title: "Content Creator", color: '#4285F4', linkedin: 'https://www.linkedin.com/in/amina-loum-0a844221a/'},
        {image: "https://raw.githubusercontent.com/GDSCCarleton/GDSCCarleton.github.io/main/images/hamza.jpg", name: "Hamza Sohail", title: "Tech Lead", color: '#FBBC04', linkedin: 'https://www.linkedin.com/in/hamza-sohail/'},
        {image: "https://raw.githubusercontent.com/GDSCCarleton/GDSCCarleton.github.io/main/images/marko.jpg", name: "Marko Majkic", title: "Tech Lead", color: '#34A853', linkedin: 'https://www.linkedin.com/in/marko-majkic/'},
    ]
    interface CardDetailsProps {
        image: string;
        name: string;
        title: string;
        color: string;
        linkedin: string;
     } 


    const cardDetails = (props: CardDetailsProps) => {
        return(
        <div className='card-container'>
            <Card className='card' style={{border: `3px solid ${props.color}`}}>
                <Card.Img variant="top" className='image-container'/>
                    <Image src={props.image} roundedCircle className='card-image' style={{border: `3px solid ${props.color}`}} />  
                <Card.Body>  
                    <Card.Title><b>{props.name}</b></Card.Title>
                </Card.Body>
                <Card.Text className='card-title' style={{paddingTop: 190, position: 'absolute'}}>{props.title}</Card.Text>
                <div className="linkedin-container">
                    <a href={props.linkedin}>
                        <FontAwesomeIcon icon={faLinkedinIn} style={{color: `${props.color}`}}/> 
                    </a>
                </div>
            </Card> 
        </div>
        )
    }


return (
        <div className='display'>
            <div className='title'>MEET THE TEAM</div>
            <div className='card-parent'>
            {data.map(cardDetails)}
            </div>
        </div>
)
}

export default Cards;



