import React, {Component} from 'react';
import mana from './mana.png';
import manaNum from './manaNum.png';

export class Card extends Component{
    cardStyle = {
        width: "500px",
        margin: "auto",
        marginTop: "15vh"
    }

    headerFooterStyle = {
        width: "500px",
        margin: "auto"
    }

    imgStyle = {
        width: "300px",
        height: "400px",
        margin: "auto"
    }

    manaStyle = {
        height: "30px"
    }

    bodyStyle = {
        border: "solid lightgrey"
    }

    render(){
        return(
            <div className="col">
                <div className="card fly-x" style={this.cardStyle}>
                    <header className="row card-header App-logo-re" style={this.headerFooterStyle}>
                        <h3 className="col">{this.props.cardDetails.name}</h3>
                        <div className="col">
                            <div className="row">
                                <img src={manaNum} style={this.manaStyle} />
                                <img src={mana} style={this.manaStyle} />
                            </div>
                        </div>
                    </header>
                    <div>
                        <img className="App-logo-rev" src={this.props.cardDetails.imageUrl} style={this.imgStyle} />
                        <div className="card-body App-logo-re" style={this.bodyStyle}>
                            <h4>{this.props.cardDetails.typeLine}</h4>
                            <div>
                                <p>{this.props.cardDetails.ability}</p>  
                            </div>
                        </div>
                    </div>
                    <footer className="row card-footer App-logo-re" style={this.headerFooterStyle}>
                        <p className="col">{this.props.cardDetails.artistInfo}</p>
                        <p className="col">{this.props.cardDetails.cardId}</p>
                        <p className="col">{this.props.cardDetails.powTough}</p>
                    </footer>
                </div>
            </div>
        )
    }
}