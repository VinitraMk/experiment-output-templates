import React from 'react';

interface GridViewProps {
    files_list: any[]
}

const GridView = (props: GridViewProps) => {
    return (
        <div>
            {props.files_list.map(x => (<>{x}</>))}
        </div>
    )
}

export default GridView;