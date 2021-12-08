import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
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

    function addingfunc(e) {
        e.preventDefault();
        if (!listTitle || !listLink) {
          alert("Kindly fill both Inputs");
        } else {
            setlistTitle("");
            setlistLink("");
        }
      }

      console.log(listTitle, listLink)

    return (
        <ListFormBox>
            <ListFormHead> <span class="previouspage" title="lists" onClick={() => navigate(-1)}> &lt; </span> <span> Add New Link </span> </ListFormHead>
            <ListForm onSubmit={addingfunc}>
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
    )
}

export default AddList
