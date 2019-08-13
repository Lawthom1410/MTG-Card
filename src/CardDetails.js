import React, {Component} from 'react';
import {Card} from './Card';

export class CardDetails extends Component{
    render(){
        let samwiseGamgee = {
            name: "Samwise Gamgee",
            typeLine: "Legendary Creature - Hobbit Fighter",
            ability1: "Nip - When a creature over 4ft enters the battle field, you can sneak up and bite their ankles to Sugar Honey Iced Tea.",
            ability2: "When a teammate is injured, you can carry them up Mount Doom.",
            artistInfo: "J.R.R Tolkien",
            collectorNum: "00001",
            powTough: "20/20"
        }
        return(
            <div>
                <Card cardDetails = {samwiseGamgee}/>
            </div>
        )
    }
}
