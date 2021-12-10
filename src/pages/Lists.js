import React, {useEffect, useState} from 'react'
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

    const [list, setlist] = useState([])
    const [openModal, setopenModal] = useState(false);
    const [alertShow, setAlertShow] = useState(false); 
    const [currentPage, setcurrentPage] = useState(1);
    const [listPerPage] = useState(4);
    
  
    useEffect(() => {
        const localList = JSON.parse(localStorage.getItem('links'));
        setlist(localList);
    }, [])
    
    const closeOpenModal = () => {
        setopenModal(false)
        showAlert();
    }

    const showAlert = () => {
        setAlertShow(true);
        setTimeout(() => {
            setAlertShow(false);
        },2500)
    }



    /*Current Lists*/
    const indexOfLastList = currentPage * listPerPage;
    const indexOfFirstList = indexOfLastList - listPerPage;
    const currentList = list.slice(indexOfFirstList, indexOfLastList);
    const totalList = Math.ceil(list.length / listPerPage);
    const paginate = (pageNumber) => setcurrentPage(pageNumber);


    return (   
        <ListCardBox>
            <Link className="toAddLink" to="/addlist">
                <span> + </span>
                Add To Link
            </Link>
            <Filter></Filter>
            {currentList.map((linklist) => (
                <ListCard key={linklist.listId} id={linklist.listId}>
                    <ListPointBox>
                    <UpvoteButton>  </UpvoteButton> 
                    <ListPoint> {linklist.listPoint} <span>point</span></ListPoint>
                    <DownvoteButton>  </DownvoteButton> 
                    </ListPointBox>
                    <ListDescription>
                        <ListTitle>{linklist.listTitle}</ListTitle>
                        <ListLink> {linklist.listLink} </ListLink>
                    </ListDescription>
                    <ListCardClose onClick={() => setopenModal(true)}>&times;</ListCardClose>
                </ListCard> 
            ))}           
            {openModal && <Modal onCancel={closeOpenModal} onConfirm={closeOpenModal} />}
            {openModal && <BackDrop onCancel={closeOpenModal}/>}
            {alertShow && <Alert success></Alert>}
            <Pagination 
            listPerPage={listPerPage} 
            totalList={list.length} 
            >
            </Pagination>
        </ListCardBox>
    )
}

export default Lists



