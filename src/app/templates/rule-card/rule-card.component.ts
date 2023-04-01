import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rule-card',
  templateUrl: './rule-card.component.html',
  styleUrls: ['./rule-card.component.scss']
})
export class RuleCardComponent implements OnChanges {
  title: string = '';
  description: string = '';
  @Input() ruleCard;
  @Input() notEnoughPlayers: boolean = false;

  ngOnChanges(): void{
    if(this.ruleCard){
      let cardnumber = +this.ruleCard.split('_')[1];
      this.title = this.cardAction[cardnumber - 1].title;
      this.description = this.cardAction[cardnumber - 1].description;
    }
  }

  cardAction = [
    {
      card: 'Ace',
      title: 'Waterfall',
      description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.'
    },
    {
      card: '2',
      title: 'You',
      description: 'You decide who drinks'
    },
    {
      card: '3',
      title: 'Me',
      description: 'Congrats! Drink a shot!'
    },
    {
      card: '4',
      title: 'Female',
      description: 'All those who identify as female drink.'
    },
    {
      card: '5',
      title: 'Thumbmaster',
      description: 'The player who drew the card must put their thumb on the table at a chosen time (before the next five gets picked though, or they lose the right). The last person to put their thumb on the table must drink.'
    },
    {
      card: '6',
      title: 'Male',
      description: 'All those who identify as male drink.'
    },
    {
      card: '7',
      title: 'Heaven',
      description: 'The player who drew the card must point to the sky (at any chosen time before the next 7 is drawn). The last person who points to the sky must drink.'
    },
    {
      card: '8',
      title: 'Mate',
      description: 'The player who drew the card picks a drinking mate, who must drink every time they drink. As a secondary rule, you can decide whether that means you always have to drink when they drink, too.'
    },
    {
      card: '9',
      title: 'Rhyme',
      description: 'The player who drew the card says a word, and you go around the circle rhyming with that word until someone messes up, and has to drink.'
    },
    {
      card: '10',
      title: 'Categories',
      description: 'The player who drew the card thinks of a category (e.g. dogs, cars, types of alcohol), and you go around the circle naming words in that category until someone messes up, and has to drink.'
    },
    {
      card: 'Jack',
      title: 'Rule',
      description: `Make a rule. The player who drew the card makes a new rule (e.g. you can't say the word 'yes' or you can't put your drink down) and anyone who breaks the rule at any time throughout the rest of the game has to drink.`
    },
    {
      card: 'Queen ',
      title: 'Never have i ever...',
      description: 'Say something you never did. Everyone who did it has to drink.'
    },
    {
      card: 'King',
      title: 'Red cup',
      description: 'The player who drew the card must pour some of their drink into the cup in the middle. The person to draw the last King has to drink whatever is in the cup in the middle.'
    },
  ];
}
