import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import BackDrop from '../components/BackDrop';
import Modal from '../components/Modal';
import Alert from '../components/Alert';
import Pagination from '../components/Pagination'
import Filter from '../components/Filter';
import {
    ListCardBox,
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
    const [openModal, setopenModal] = useState(false);
    const [alertShow, setAlertShow] = useState(false); 

    const closeOpenModal = () => {
        setopenModal(false)
        showAlert()
    }

    const showAlert = () => {
        setAlertShow(true);
        setTimeout(() => {
            setAlertShow(false);
        },2500)
    }

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
        <ListCardBox>
            <Link className="toAddLink" to="/addlist">
                <span> + </span>
                Add To Link
            </Link>
            <Filter></Filter>
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
                <ListCardClose onClick={() => setopenModal(true)}>&times;</ListCardClose>
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
                <ListCardClose onClick={() => setopenModal(true)}>&times;</ListCardClose>
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
                <ListCardClose onClick={() => setopenModal(true)}>&times;</ListCardClose>
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
                <ListCardClose onClick={() => setopenModal(true)}>&times;</ListCardClose>
            </ListCard>
            
            {openModal && <Modal onCancel={closeOpenModal} onConfirm={closeOpenModal} />}
            {openModal && <BackDrop onCancel={closeOpenModal}/>}
            {alertShow && <Alert success></Alert>}
            <Pagination></Pagination>
        </ListCardBox>
    )
}

export default Lists



