import { useState } from 'react';

import styled from 'styled-components';

const SearchBarContainer = styled.div`
    border-radius: 16px;
    padding: 8px 16px;
    box-shadow: 0px 0px 4px #00000075;
`;

const SearchInput = styled.input`
    width: 100%;
    border: none;
    padding: 0;
    display: block;
    outline: none;
`;

function SearchBar(props) {

    const [query, setQuery] = useState('');

    function handleChange(e) {
        const query = e.target.value;
        setQuery(query);
        props.setQuery(query);
    }
    
    return (
        <SearchBarContainer className={props.className}>
            <SearchInput 
                type='search'
                value={query}
                onChange={handleChange}
            />
        </SearchBarContainer>
    );

}

export default SearchBar;