import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';
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
    const [linkList, setlinkList] = useState({
        id:Math.random().toString(36).substr(2, 9),
        listTitle:listTitle,
        listLink:listLink,
        listPoint: 0
    })



    const addingList = (e) => {
        e.preventDefault();

    }
    

    // const addingList = (e) => {
    //     e.preventDefault();
    //     if (!listTitle || !listLink) {
    //         showAlert(true, "error", "Please fill in the blanks");
    //     } else if (listTitle && listLink) {
    //         setlistTitle("");
    //         setlistLink("");
    //         showAlert(true, "success", "Add Link Thanks");
    //     }
    //   }
    
    const showAlert = (show = false, type= "", message="") => {
        setAlert({show, type, message})
    }

    return (
        <>
        <ListFormBox>
            <ListFormHead> <span className="previouspage" title="return to lists" onClick={() => navigate(-1)}> &lt; </span> <span> Add New Link </span> </ListFormHead>
            <ListForm onSubmit={addingList}>
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
