/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    color: {
      black: '#000000',
      semiGray: '#000312',
    },
    fontSize: {
      xxs: '0.625',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      twentyTwoThemeSize: '1.375rem',
      eightThemeSize: '0.5575rem',
      fortyThemeSize: '2.5rem',
      thirtyTwoThemeSize: '2rem',
    },
    extend: {
      backgroundColor: {
        primary: '#006DFF',
        bluishPurple: '#161B2D',
        lightWhite: '#EDF0FF',
        red: '#c63a2e',
        midPink: '##FF7AAA',
        midGreen: '#4E8C8F',
        midBlue: '#0268C6',
        midBrown: '#6A343D',
        midOrange: '#F9693B',
        darkBrown: '#9D520C',
        darkPurple: '#080F24',
      },
      boxShadow: {
        custom:
          '0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 8px 18px 0px rgba(0, 0, 0, 0.10), 0px 33px 33px 0px rgba(0, 0, 0, 0.09), 0px 74px 45px 0px rgba(0, 0, 0, 0.05), 0px 132px 53px 0px rgba(0, 0, 0, 0.01), 0px 206px 58px 0px rgba(0, 0, 0, 0.00)',
      },
      fontFamily: {
        NunitoLight: ['NunitoLight', 'sans-serif'],
        NunitoRegular: ['NunitoRegular', 'sans-serif'],
        NunitoMedium: ['NunitoMedium', 'sans-serif'],
        NunitoSemiBold: ['NunitoSemiBold', 'sans-serif'],
        NunitoBold: ['NunitoBold', 'sans-serif'],
        OutfitLight: ['OutfitLight', 'sans-serif'],
        OutfitMedium: ['OutfitMedium', 'sans-serif'],
        OutfitRegular: ['OutfitRegular', 'sans-serif'],
        OutfitSemiBold: ['OutfitSemiBold', 'sans-serif'],
        InterRegular: ['InterRegular', 'sans-serif'],
        Arial: ['Arial', 'sans-serif'],
      },
      colors: {
        primary: '#006DFF',
        semiGray: '#000312',
        lightWhite: '#E5E5E5',
        lightBlack: '#000F31',
        blackGrey: '#40455D',
        midGrey: '#D1D4E3',
        yellowGreen: '#DDFF0D',
        lightGray: '#7D829D',
        darkBlue: '#000821',
        lightBlue: '#161B2D',
        blackNormal: '#202438',
        darkGray: '#A6AAC1',
        GrayBlack: '#DFE1EE',
        darkBluish: '#005CD9',
        cGreen: '#009897',
        dGreen: '#119F00',
        lightGreen: '#C6FFC5',
        purple: '#A737FF',
      },
      maxWidth: {
        twelveFiftyTwo: '78.25rem',
        fourteenForty: '90rem',
        twoEighty: '17.5rem',
        sixHundredSeven: '37.9rem',
        fourHundred: '25rem',
        twentyTwo: '1.375rem',
        hundred: '6.25rem',
        seventyNine: '4.938rem',
        oneFourtyTwo: '8.875rem',
        twoTwentyTwo: '13.875rem',
        oneFourtyThree: '8.938rem',
        twoHunderNine: '13.0625rem',
        threeHundredNine: '19.3341rem',
        oneSeventySeven: '11.063rem',
        oneSixtyTwo: '10.125rem',
        ninety: '5.625rem',
        oneHundredTwo: '6.375rem',
        threeTwentyThree: '20.188rem',
        oneHundredFourtyFour: '65.25rem',
        fiveHundredTwentyNine: '33.063rem',
        fiveFiftyOne: '34.438rem',
        twentyFour: '1.5rem',
        eighteen: '1.125rem',
        fourtyFive: '2.813rem',
        twoHundredFourteen: '13.563rem',
        twentyEight: '1.75rem',
        nineteen: '1.188rem',
        twoTwentySeven: '14.188rem',
        twoTwentyFive: '14.0625rem',
        fiftySeven: '3.563rem',
        threeHundredThirteen: '19.563rem',
        fourteen: '0.875rem',
        oneNinety: '11.875rem',
        oneSixtySeven: '10.438rem',
        oneNintySeven: '12.3125rem',
        oneTwenty: '7.5rem',
      },
      width: {
        fourtyNine: '49%',
        fourtyEightPercent: '48%',
        oneThirtySix: '8.509rem',
        thirteenFourteen: '19.625rem',
      },
      height: {
        fifty: '3.125rem',
      },
      borderRadius: {
        thirteen: '0.813rem',
        thirteenTopLeftRight: '0.813rem 0.813rem 0 0',
        ten: '0.625rem',
        tenTopLeftRight: '0.625rem 0.625rem 0 0',
        nineteen: '1.188rem',
        nineteenTopLeftRight: '1.188rem 1.188rem 0 0',
        twentyNine: '1.813rem',
        twentyNineTopLeftRight: '1.813rem 1.813rem 0 0',
        twentyThree: '1.438rem',
        twentyThreeTopLeftRight: '1.438rem 1.438rem 0 0',
        twentyOne: '1.313rem',
        twentyOneTopLeftRight: '1.313rem 1.313rem 0 0',
      },
      fontSize: {
        themeThirtyTwoSize: '2.05rem',
        themeTwentySevenSize: '1.74rem',
        themeTwentyEightSize: '1.75rem',
        themeFortySize: '2.5rem',
        themeThirtyTwo: '2rem',
        themeSixtyFour: '4rem',
        themetwentyEight: '1.75rem',
        themetenSize: '0.625rem',
        themeEight: '0.5rem',
        themeNineteen: '1.188rem',
        themeEleven: '0.688rem',
      },
      padding: {
        twentyTwo: '22px',
      },
      margin: {
        thirty: '1.875rem',
      },
      lineHeight: {
        twentyTwo: '22px',
      },
    },
  },
  plugins: [],
};
