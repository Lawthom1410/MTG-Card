import React, {Component} from 'react';
import image from './SamGamgee.jpg';
import mana from './mana.png';
import manaNum from './manaNum.png';

export class Card extends Component{
    cardStyle = {
        width: "500px",
        margin: "auto",
        marginTop: "15vh"
        // border: "solid black"
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
                        <h3 className="col">Samwise Gamgee</h3>
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
                            <h4>Legendary Creature - Hobbit Fighter  \/</h4>
                            <div>
                                <p>Nip - When a creature over 4ft enters the battle field, you can sneak up and bite their ankles to Sugar Honey Iced Tea.</p>
                                <p>When a teammate is injured, you can carry them up Mount Doom.</p> 
                            </div>
                        </div>
                    </div>
                    <footer className="row card-footer" style={this.headerFooterStyle}>
                        <p className="col">J.R.R Tolkien</p>
                        <p className="col">00001</p>
                        <p className="col">20/20</p>
                    </footer>
                </div>
            </div>
        )
    }
}