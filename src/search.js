import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from "@mui/icons-material/Mic";
import './search.css'
import { Button } from "@mui/material";
import {useNavigate} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
function Search({hideButtons = false}){
    const [{}, dispatch] =useStateValue();

    const [input, setInput]= useState('');
    const navigate=useNavigate();

    const search= (e)=>{
        e.preventDefault();
        console.log(input);

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        // we have another work with input we will back to it
        navigate('/search');
    }
    return(
        <form>
            <div className="search">
            <div className="search_input">
                <SearchIcon className="search_inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon/>
            </div>

            {!hideButtons ?(
                <div className="search_buttons">
                <Button type="submit" variant="outlined" onClick={search}>Google Search</Button>
                <Button variant="outlined">I'm feeling Lucky</Button>
            </div>
            ):(
                <div className="search_buttons">
                <Button className="search_buttonsHidden" type="submit" variant="outlined" onClick={search}>Google Search</Button>
                <Button className="search_buttonsHidden" variant="outlined">I'm feeling Lucky</Button>
            </div>
            )}

            
        </div>
        </form>
    )
}
export default Search