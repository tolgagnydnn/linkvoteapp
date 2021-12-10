import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';
import { v4 as uuidv4 } from 'uuid';
import {
    ListFormBox,
    ListFormHead,
    ListForm,
    ListFormGroup,
    ListFormInput,
    ListFormLabel,
    ListButtonBox,
    ListFormButton
    } from '../styled/AddListStyled'


function AddList() {

    let navigate = useNavigate();
    const [listTitle, setlistTitle] = useState("");
    const [listLink, setlistLink] = useState("");
    const [alert, setAlert] = useState({show:false, message:"", type:""});

    const linkAdd = (e) => {
        e.preventDefault();
        const linkItems = JSON.parse(localStorage.getItem("links")) || [];
        linkItems.push({ listId: uuidv4(), listTitle: listTitle, listLink: listLink, listPoint: 0 });
        localStorage.setItem("links", JSON.stringify(linkItems));
        setlistTitle("");
        setlistLink("");
    };
    
    const showAlert = (show = false, type= "", message="") => {
        setAlert({show, type, message})
    }

    return (
        <>
        <ListFormBox>
            <ListFormHead> <span className="previouspage" title="return to lists" onClick={() => navigate(-1)}> &lt; </span> <span> Add New Link </span> </ListFormHead>
            <ListForm onSubmit={linkAdd}>
                <ListFormGroup>
                    <ListFormLabel> Link Name: </ListFormLabel>
                    <ListFormInput value={listTitle} type="text" onChange={(e) => setlistTitle(e.target.value)} placeholder="e.g Alphabet"/>
                </ListFormGroup>
                <ListFormGroup>
                    <ListFormLabel> Link URL: </ListFormLabel>
                    <ListFormInput value={listLink} type="text" onChange={(e) => setlistLink(e.target.value)} placeholder="e.g https://abc.xyz"/>
                </ListFormGroup>
                <ListButtonBox>
                    <ListFormButton>Link Add</ListFormButton>
                </ListButtonBox>
            </ListForm>
        </ListFormBox>
        {alert.show && <Alert {...alert} removeAlert={showAlert}></Alert>}
        </>
    )
}

export default AddList
