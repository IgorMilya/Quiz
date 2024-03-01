import { QuestionsTypes } from 'types/index'
import { Icon } from 'assets/index'

export const questions: QuestionsTypes[] = [
  {
    type: 'single-select',
    title: `questionFirst.title`,
    subtitle: 'questionFirst.subtitle',
    answers: [
      'questionFirst.firstAnswers',
      'questionFirst.secondAnswers',
      'questionFirst.thirdAnswers',
      'questionFirst.fourthAnswers',
    ],
  },
  {
    type: 'single-select',
    title: 'questionSecond.title',
    subtitle: 'questionSecond.subtitle',
    answers: [
      {
        icon: Icon.Female,
        text: 'questionSecond.firstAnswers',
      },
      {
        icon: Icon.Male,
        text: 'questionSecond.secondAnswers',
      },
      {
        icon: Icon.Other,
        text: 'questionSecond.thirdAnswers',
      },
    ],
  },
  {
    type: 'single-select',
    title: 'questionThird.title',
    answers: [
      'questionThird.firstAnswers',
      'questionThird.secondAnswers',
      'questionThird.thirdAnswers',
      'questionThird.fourthAnswers',
    ],
  },
  {
    type: 'multiple-select',
    title: 'questionFourth.title',
    answers: [
      'questionFourth.firstAnswers',
      'questionFourth.secondAnswers',
      'questionFourth.thirdAnswers',
      'questionFourth.fourthAnswers',
    ],
  },
  {
    type: 'bubble',
    title: 'questionFifth.title',
    subtitle: 'questionFifth.subtitle',
    answers: [
      {
        type: 'questionThird.firstAnswers',
        icon: Icon.Werewolf,
        text: 'questionFifth.firstAnswers',
      },
      {
        type: 'questionThird.firstAnswers',
        icon: Icon.Werewolf,
        text: 'questionFifth.twentySixthAnswers',
      },
      {
        type: 'questionThird.firstAnswers',
        icon: Icon.Werewolf,
        text: 'questionFifth.twentySeventhAnswers',
      },
      {
        type: 'questionThird.firstAnswers',
        icon: Icon.Werewolf,
        text: 'questionFifth.twentyFifthAnswers',
      },
      {
        type: 'questionThird.firstAnswers',
        icon: Icon.Action,
        text: 'questionFifth.secondAnswers',

      },
      {
        type: 'questionThird.firstAnswers',
        icon: Icon.RoyalObsession,
        text: 'questionFifth.thirdAnswers',

      },
      {
        type: 'questionThird.firstAnswers',
        icon: Icon.Billionaire,
        text: 'questionFifth.fourthAnswers',

      },
      {
        type: 'questionThird.secondAnswers',
        icon: Icon.Romance,
        text: 'questionFifth.fifthAnswers',

      },
      {
        type: 'questionThird.secondAnswers',
        icon: Icon.YoungAdult,
        text: 'questionFifth.sixthAnswers',

      },
      {
        type: 'questionThird.secondAnswers',
        icon: Icon.YoungAdult,
        text: 'questionFifth.twentiethAnswers',

      },
      {
        type: 'questionThird.secondAnswers',
        icon: Icon.YoungAdult,
        text: 'questionFifth.twentyFirstAnswers',

      },
      {
        type: 'questionThird.secondAnswers',
        icon: Icon.YoungAdult,
        text: 'questionFifth.twentySecondAnswers',

      },
      {
        type: 'questionThird.secondAnswers',
        icon: Icon.YoungAdult,
        text: 'questionFifth.twentyThirdAnswers',

      },
      {
        type: 'questionThird.secondAnswers',
        icon: Icon.YoungAdult,
        text: 'questionFifth.twentyFourthAnswers',

      },
      {
        type: 'questionThird.thirdAnswers',
        icon: Icon.BadBoy,
        text: 'questionFifth.seventhAnswers',
      },
      {
        type: 'questionThird.thirdAnswers',
        icon: Icon.BadBoy,
        text: 'questionFifth.fifteenthAnswers',
      },
      {
        type: 'questionThird.thirdAnswers',
        icon: Icon.BadBoy,
        text: 'questionFifth.sixteenthAnswers',
      },
      {
        type: 'questionThird.thirdAnswers',
        icon: Icon.BadBoy,
        text: 'questionFifth.seventeenthAnswers',
      },
      {
        type: 'questionThird.thirdAnswers',
        icon: Icon.BadBoy,
        text: 'questionFifth.eighteenthAnswers',
      },
      {
        type: 'questionThird.thirdAnswers',
        icon: Icon.BadBoy,
        text: 'questionFifth.nineteenthAnswers',
      },
      {
        type: 'questionThird.fourthAnswers',
        icon: Icon.BadBoy,
        text: 'questionFifth.eighthAnswers',
      },
      {
        type: 'questionThird.fourthAnswers',
        icon: Icon.BadBoy,
        text: 'questionFifth.ninthAnswers',
      },
      {
        type: 'questionThird.fourthAnswers',
        icon: Icon.BadBoy,
        text: 'questionFifth.tenthAnswers',
      },
      {
        type: 'questionThird.fourthAnswers',
        icon: Icon.BadBoy,
        text: 'questionFifth.eleventhAnswers',
      },
      {
        type: 'questionThird.fourthAnswers',
        icon: Icon.BadBoy,
        text: 'questionFifth.twelfthAnswers',
      },
      {
        type: 'questionThird.fourthAnswers',
        icon: Icon.BadBoy,
        text: 'questionFifth.thirteenthAnswers',
      },
      {
        type: 'questionThird.fourthAnswers',
        icon: Icon.BadBoy,
        text: 'questionFifth.fourteenthAnswers',
      },
    ],
  },
]
