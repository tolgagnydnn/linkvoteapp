import React from 'react'
import {
    ListCard,
    ListPoint,
    ListPointBox,
    ListPointButton,
    ListDescription,
    ListTitle,
    ListLink,
    ListCardClose
} from '../styled/ListStyled'


function Lists() {
    return (   
        <>
        <ListCard>
            <ListPointBox>
              <ListPointButton upvote> ^ </ListPointButton> 
              <ListPoint>20 <span>points</span></ListPoint>
              <ListPointButton> ^ </ListPointButton> 
            </ListPointBox>
            <ListDescription>
                <ListTitle>Liste Başlığı Gelecek</ListTitle>
                <ListLink> Buraya Açıklama Gelecek </ListLink>
            </ListDescription>
            <ListCardClose>&times;</ListCardClose>
        </ListCard>
        </>
    )
}

export default Lists
