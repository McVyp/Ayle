/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import styled from 'styled-components';
import {HiMenu} from 'react-icons/hi';
import {HiX} from 'react-icons/hi';
import { selectArts } from '../art/artSlice';
import {useSelector} from 'react-redux';

function Header() {

    const [burgerState, setBurgerState] = useState(false);
    const arts =  useSelector(selectArts)
    return (
        <Container>

            <Menu>
                {
                    arts && arts.map((art, index)=>
                        <a key ={index} href="#">{art}</a>
                    )}
                     
            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href= "#">Ayle Account</a>
                <CustomMenu onClick ={() => setBurgerState(true)} />
            </RightMenu>

            <BurgerNav show ={burgerState}>
                <CloseWrapper>
                    <CustomClose onClick ={() => setBurgerState(false)}/>
                </CloseWrapper>
                {
                    arts && arts.map((art, index)=>
                    <li><a key={index} href="#">{art}</a></li>
                    )}
                <li><a href="#">View Inventory</a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Trade</a></li>
                <li><a href="#">Notifications</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">View Profile</a></li>
                <li><a href="#">Top Creators</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div `
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left:0;
    right:0;
    z-index: 1;

    img{
        cursor: pointer;
    }
`
const Menu = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
        
    }

    @media(max-width: 768px){
        display: none;
    }

`

const RightMenu = styled.div `
    display: flex;
    align-items: center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
        flex-wrap: nowrap;
        
    }
`
const CustomMenu =styled(HiMenu)`
    cursor: pointer;
`

const BurgerNav = styled.div `
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.2s;
    li{
        padding: 15px;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a {
            font-weight: 600;
        }
    }
`

const CustomClose = styled(HiX) `
    cursor: pointer;
`
const CloseWrapper = styled.div `
    display: flex;
    justify-content: flex-end;
`