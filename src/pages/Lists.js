import React, {useState} from 'react'
import {
    ListCard,
    ListPoint,
    ListPointBox,
    UpvoteButton,
    DownvoteButton,
    ListDescription,
    ListTitle,
    ListLink,
    ListCardClose
} from '../styled/ListStyled'


function Lists() {

    let [listPoint, setlistPoint] = useState(0);

    const upvote = () => {
        setlistPoint(listPoint + 1)
    }
    const downvote = () => {
        if(listPoint === 0){
            return;  
          }
        setlistPoint(listPoint - 1)
    }

    return (   
        <>
        <ListCard>
            <ListPointBox>
              <UpvoteButton onClick={() => upvote()}>  </UpvoteButton> 
              <ListPoint> {listPoint} <span>points</span></ListPoint>
              <DownvoteButton onClick={() => downvote()}>  </DownvoteButton> 
            </ListPointBox>
            <ListDescription>
                <ListTitle>Liste Başlığı Gelecek</ListTitle>
                <ListLink> Buraya Açıklama Gelecek </ListLink>
            </ListDescription>
            <ListCardClose>&times;</ListCardClose>
        </ListCard>
        <ListCard>
            <ListPointBox>
              <UpvoteButton onClick={() => upvote()}>  </UpvoteButton> 
              <ListPoint> {listPoint} <span>points</span></ListPoint>
              <DownvoteButton onClick={() => downvote()}>  </DownvoteButton> 
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



