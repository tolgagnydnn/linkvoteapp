import React from 'react'
import {FilterBox, FilterSelect} from '../styled/FilterStyled'


function Filter() {
    return (
        <FilterBox>
                <FilterSelect>
                    <option> Most Voted </option>
                    <option> Less Voted </option>
                </FilterSelect>
        </FilterBox>
    )
}

export default Filter
