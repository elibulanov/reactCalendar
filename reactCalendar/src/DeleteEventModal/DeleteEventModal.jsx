import React from 'react';

export const DeleteEventModal = ({ onDelete, eventText, onClose }) => {
    return(
        <>
            <div id='deleteEventModal'>
                <h2>Event</h2>

                <p id='eventText'>{eventText}</p>
                <p id='eventText'>{eventText}</p>

                <button onClick={onDelete}>Delete</button>
                
            </div>

            <div 
                onClick={onClose}
            id='modalBackDrop'></div>

        </>
    )
}