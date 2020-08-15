import React from 'react';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<tr>{
                    this.props.contentVal.map((item) => {
                        return (<td>
                            <div style={{
                                    paddingInline: "20px",
                                    paddingTop: "10px",
                                    paddingBottom: "10px"
                                }}>
                                {item}
                            </div>
                        </td>)
                    })
                }
        </tr>);

    }
}
export default ListItem;
