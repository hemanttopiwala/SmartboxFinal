import React from 'react';
import styled from 'styled-components';

import {categories} from '../Data';
import Categoryitem from './Categoryitem';
import {mobile} from '../responsive'
const Container=styled.div`
    display:flex;
    padding 20px;
    justify-content:space-between;
    ${mobile({ padding:"0px", flexDirection:"column"})};
`

const Categories = () => {
  return (
    <Container>
        {
            categories.map((obj)=>(
                <Categoryitem item={obj} key={obj.id} />
            ))
        }

    </Container>
  )
}

export default Categories