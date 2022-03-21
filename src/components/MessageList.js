import { Message } from "@mui/icons-material";
import { List } from "@mui/material";
import propTypes from "prop-types";

export const MessageList = (props) => {
    return (
        <List>
            {props.massageList.map((item) => (
                <Message key={item.id}{...item} />

            
            ))}
        </List>
    );
};

MessageList.propTypes = {
    messageList: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string,
            text: propTypes.string,
            author: propTypes.string
        })
    )
};

messageList.defaultProps = {
    messageList: []
};