import React from 'react'
 class Two extends React.Component {
    render() {
        return (
            <div>
                <h1>vinay reddy</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                <h2>{this.props.name}</h2>
                <h2>{this.props.price}</h2>
                <h2>{this.props.color[2]}</h2>
                <h2>{this.props.details.usage}</h2>
                <h2>{this.props.details.desc}</h2>
            </div>
        )
    }
}

export default Two
