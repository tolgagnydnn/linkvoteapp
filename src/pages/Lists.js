import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import BackDrop from '../components/BackDrop';
import Modal from '../components/Modal';
import Alert from '../components/Alert';
import Pagination from '../components/Pagination'
import Filter from '../components/Filter';
import list from '../lists.json'
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
    const [currentPage, setcurrentPage] = useState(1);
    const [listPerPage] = useState(4);
   
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

    /*Current Lists*/

    const indexOfLastList = currentPage * listPerPage;
    const indexOfFirstList = indexOfLastList - listPerPage;
    const currentList = list.slice(indexOfFirstList, indexOfLastList);

    
    /*Change List*/
    const paginate = (pageNumber) => setcurrentPage(pageNumber);


    return (   
        <ListCardBox>
            <Link className="toAddLink" to="/addlist">
                <span> + </span>
                Add To Link
            </Link>
            <Filter></Filter>
            {currentList.map((linklist) => (
                <ListCard key={linklist.id} id={linklist.id}>
                    <ListPointBox>
                    <UpvoteButton onClick={() => upvote()}>  </UpvoteButton> 
                    <ListPoint> {linklist.point} <span>point</span></ListPoint>
                    <DownvoteButton onClick={() => downvote()}>  </DownvoteButton> 
                    </ListPointBox>
                    <ListDescription>
                        <ListTitle>{linklist.linkTitle}</ListTitle>
                        <ListLink> {linklist.linkUrl} </ListLink>
                    </ListDescription>
                    <ListCardClose onClick={() => setopenModal(true)}>&times;</ListCardClose>
                </ListCard> 
            ))}           
            {openModal && <Modal onCancel={closeOpenModal} onConfirm={closeOpenModal} />}
            {openModal && <BackDrop onCancel={closeOpenModal}/>}
            {alertShow && <Alert success></Alert>}
            <Pagination listPerPage={listPerPage} totalList={list.length} paginate={paginate} prevpaginate={prevpaginate}></Pagination>
        </ListCardBox>
    )
}

export default Lists



