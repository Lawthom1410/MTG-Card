import React, {Component} from 'react';
import {Card} from './Card';
import axios from 'axios';
import CardRequests from './CardRequests';

export class CardDetails extends Component{
    constructor(){
        super();
        this.state = {
            cardList: []
        }
    }


    componentDidMount(){
        CardRequests.getAll().then((res) => {
            // console.log(res.data);
            this.setState({
                cardList: res.data
            })
        })

    }

    render(){
        // let samwiseGamgee = {
        //     name: "Samwise Gamgee",
        //     typeLine: "Legendary Creature - Hobbit Fighter",
        //     ability1: "Nip - When a creature over 4ft enters the battle field, you can sneak up and bite their ankles to Sugar Honey Iced Tea.",
        //     ability2: "When a teammate is injured, you can carry them up Mount Doom.",
        //     artistInfo: "J.R.R Tolkien",
        //     collectorNum: "00001",
        //     powTough: "20/20"
        // }
        if (this.state.cardList.length > 0) {
            return(
                <div className="row">
                    {this.state.cardList.map(card => <Card cardDetails = {card}/> )}                    
                </div>
            )
        } else {
            return false;
        }
    }
}
