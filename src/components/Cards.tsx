import React from 'react'
import {Card, Image} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Cards = () => {
    const data = [
        {image: "https://raw.githubusercontent.com/GDSCCarleton/GDSCCarleton.github.io/main/images/saurabh.jpeg", name: "Saurabh Kishore", title: "President", color: '#EA4335', linkedin: 'https://www.linkedin.com/in/saurabh-gummaraj-kishore/'},
        {image: "https://raw.githubusercontent.com/GDSCCarleton/GDSCCarleton.github.io/main/images/sanaa.jpg", name: "Sanaa Syed", title: "Vice President", color: '#4285F4', linkedin: 'https://www.linkedin.com/in/sanaasy/'},
        {image: "https://raw.githubusercontent.com/GDSCCarleton/GDSCCarleton.github.io/main/images/nishtha.jpg", name: "Nishtha M.", title: "Project Coordinator", color: '#FBBC04', linkedin: 'https://www.linkedin.com/in/nishthamavai/'},
        {image: "https://raw.githubusercontent.com/GDSCCarleton/GDSCCarleton.github.io/main/images/yasmine.jpg", name: "Yasmine Jacob-Siddiqui", title: "Marketing Lead", color: '#34A853', linkedin: 'https://www.linkedin.com/in/yasmine-jacob-siddiqui-95344020b/'},
        {image: "https://raw.githubusercontent.com/GDSCCarleton/GDSCCarleton.github.io/main/images/kyuri.png", name: "Kyuri Jung", title: "Designer", color: '#F44336', linkedin: 'https://www.linkedin.com/in/kyurijung/'},
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
        <div style={{ display: 'flex',  paddingLeft: '30px', paddingBottom: '30px' }}>
            <Card style={{width: '16rem', height: '24rem', display:'flex', alignItems: 'center',  justifyContent: 'center', border: `2px solid ${props.color}`, fontFamily:"Poppins"}}>
                <Card.Img variant="top" style={{padding: '30px'}} />
                    <Image src={props.image} roundedCircle style={{width: '9rem', height: '9rem', border: `2px solid ${props.color}`}} />
                <Card.Body>
                    <Card.Title style={{display:'flex', alignItems: 'center',  justifyContent: 'center', textAlign: 'center'}}><b>{props.name}</b></Card.Title>
                        <Card.Text style={{display:'flex', alignItems: 'center',  justifyContent: 'center', textAlign: 'center'}}>{props.title}</Card.Text>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <a href={props.linkedin}>
                                    <FontAwesomeIcon icon={faLinkedinIn} style={{color: `${props.color}`}}/> 
                                </a>
                            </div>
                </Card.Body>
            </Card>
        </div>
        )
    }

return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Poppins', fontSize: 32, paddingBottom: '20px'}}><b>MEET THE TEAM</b></div>
        <div style={{display:'flex', overflowX: 'scroll', overflowY: 'hidden', width: '800px' }}>
          {data.map(cardDetails)}
        </div>
    </div>
)
}

export default Cards;



