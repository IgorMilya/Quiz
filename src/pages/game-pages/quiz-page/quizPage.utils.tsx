import { QuestionsTypes } from 'types'
import { Icon } from 'assets'

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
        icon: Icon.Female ,
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
        icon: Icon.Werewolf,
        text: 'questionFifth.firstAnswers',

      },
      {
        icon: Icon.Action,
        text: 'questionFifth.secondAnswers',

      },
      {
        icon: Icon.RoyalObsession,
        text: 'questionFifth.thirdAnswers',

      }, {
        icon: Icon.Billionaire,
        text: 'questionFifth.fourthAnswers',

      }, {
        icon: Icon.Romance,
        text: 'questionFifth.fifthAnswers',

      }, {
        icon: Icon.YoungAdult,
        text: 'questionFifth.sixthAnswers',

      }, {
        icon: Icon.BadBoy,
        text: 'questionFifth.seventhAnswers',

      },
    ],
  },
]
