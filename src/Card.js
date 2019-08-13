import React, {Component} from 'react';
import image from './SamGamgee.jpg';
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
            <div style={this.cardStyle}>
                <div className="card">
                    <header className="row card-header" style={this.headerFooterStyle}>
                        <h3 className="col">{this.props.cardDetails.name}</h3>
                        <div className="col">
                            <div className="row">
                                <img src={manaNum} style={this.manaStyle} />
                                <img src={mana} style={this.manaStyle} />
                            </div>
                        </div>
                    </header>
                    <div>
                        <img src={image} style={this.imgStyle} />
                        <div className="card-body" style={this.bodyStyle}>
                            <h4>{this.props.cardDetails.typeLine}</h4>
                            <div>
                                <p>{this.props.cardDetails.ability1}</p>
                                <p>{this.props.cardDetails.ability2}</p> 
                            </div>
                        </div>
                    </div>
                    <footer className="row card-footer" style={this.headerFooterStyle}>
                        <p className="col">{this.props.cardDetails.artistInfo}</p>
                        <p className="col">{this.props.cardDetails.collectorNum}</p>
                        <p className="col">{this.props.cardDetails.powTough}</p>
                    </footer>
                </div>
            </div>
        )
    }
}