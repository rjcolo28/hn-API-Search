import React, { Component } from 'react'

class HNRow extends Component {
    render() {
        return(
            <div key={this.props.article.id}>
                <h3>{this.props.article.title}</h3>
                {this.props.article.author}<br></br>{this.props.article.url}
            </div>
        )
    }
}

export default HNRow