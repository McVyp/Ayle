import React from 'react';
import styled from "styled-components";
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section 
                title="Edge"
                description= "Delivery Avialable"
                backgroundImg = "came.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "View"
            />
            <Section 
                title="Wobble"
                description= "Delivery Avialable"
                backgroundImg = "waper.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "View"
            />
            <Section 
                 title="Infi"
                 description= "Delivery Avialable"
                 backgroundImg = "dsal.jpg"
                 leftBtnText = "Custom Order"
                 rightBtnText = "View"
            />
            <Section 
                 title="Nien"
                 description= "Delivery Avialable"
                 backgroundImg = "night.jpg"
                 leftBtnText = "Custom Order"
                 rightBtnText = "View"
            />
           
           <Section 
                 title="Horisen"
                 description= "Delivery Avialable"
                 backgroundImg = "boat.jpg"
                 leftBtnText = "Order now"
                 rightBtnText = "View"
           />

            <Section 
                 title= "家"
                 description= "Delivery Avialable"
                 backgroundImg = "room.jpg"
                 leftBtnText = "Order now"
                 rightBtnText = "View"
           />

            <Section 
                 title="Creators"
                 description= "Help Creators"
                 backgroundImg = "art.jpg"
                 leftBtnText = "View"
           />

        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`