export type Question = {
  text: string;
  options: string[];
  founderScore: number;
}

const questionSet1: Question[] = [
    {
        text: "You find a magic lamp. Do you:",
        options: ["Wish for a stable 401(k) plan", "Wish for a unicorn that poops glitter"],
        founderScore: 1,
      },
      {
        text: "Your computer crashes. Your first reaction is to:",
        options: ["Call IT support", "Invent a new operating system"],
        founderScore: 1,
      },
      {
        text: "You're stranded on a desert island. You build:",
        options: ["A well-organized shelter", "A coconut-powered rocket ship"],
        founderScore: 1,
      },
      {
        text: "Your favorite sandwich is:",
        options: ["Ham and cheese, no crust", "Peanut butter and pickles on a waffle"],
        founderScore: 1,
      },
      {
        text: "You see a 'Keep Off the Grass' sign. You:",
        options: ["Respect the rules and use the sidewalk", "Start a floating grass-walking shoe company"],
        founderScore: 1,
      },
      {
        text: "Your spirit animal is:",
        options: ["A well-organized ant", "A platypus wearing a top hat"],
        founderScore: 1,
      },
      {
        text: "You find $100. You:",
        options: ["Deposit it in your savings account", "Invest in a time machine made of cheese"],
        founderScore: 1,
      },
      {
        text: "Your ideal vacation is:",
        options: ["An all-inclusive resort with scheduled activities", "Bungee jumping into a pool of Jell-O"],
        founderScore: 1,
      },
      {
        text: "You're late for work because:",
        options: ["Traffic was terrible", "You were teaching your cat to speak French"],
        founderScore: 1,
      },
      {
        text: "Your favorite book genre is:",
        options: ["Self-help and personal finance", "Sci-fi cookbooks for intergalactic foodies"],
        founderScore: 1,
      },
      {
        text: "You see a red button labeled 'Do Not Push'. You:",
        options: ["Leave it alone, obviously", "Push it while wearing a banana costume"],
        founderScore: 1,
      },
      {
        text: "Your ideal pet would be:",
        options: ["A well-trained dog", "A domesticated Loch Ness Monster"],
        founderScore: 1,
      },
      {
        text: "You're given a box. Inside is:",
        options: ["Office supplies, neatly organized", "A portal to a dimension made of spaghetti"],
        founderScore: 1,
      },
      {
        text: "Your superpower of choice would be:",
        options: ["The ability to always be on time", "The power to turn anything into a taco"],
        founderScore: 1,
      },
      {
        text: "You describe your fashion sense as:",
        options: ["Professional and understated", "Inspired by a disco ball fighting a rainbow"],
        founderScore: 1,
      },
      {
        text: "Your approach to cooking is:",
        options: ["Following recipes to the letter", "Inventing new flavors like 'surprised elephant'"],
        founderScore: 1,
      },
      {
        text: "You win the lottery. Your first purchase is:",
        options: ["A sensible investment portfolio", "A life-size chocolate statue of yourself"],
        founderScore: 1,
      },
      {
        text: "Your ideal mode of transportation is:",
        options: ["A reliable, fuel-efficient car", "A hovercraft shaped like a giant rubber duck"],
        founderScore: 1,
      },
      {
        text: "You're given a empty room. You fill it with:",
        options: ["Practical furniture and storage solutions", "A ball pit filled with marshmallows"],
        founderScore: 1,
      },
      {
        text: "Your life motto is:",
        options: ["Slow and steady wins the race", "When life gives you lemons, make anti-gravity boots"],
        founderScore: 1,
      },
];

const questionSet2: Question[] = [
  {
    text: "When faced with a problem, you prefer to:",
    options: ["Follow established procedures", "Invent a creative solution involving rubber ducks"],
    founderScore: 1,
  },
  {
    text: "Your idea of a perfect weekend is:",
    options: ["Relaxing at home with a good book", "Building a time machine out of cardboard boxes"],
    founderScore: 1,
  },
  {
    text: "When you see a new gadget, you think:",
    options: ["I wonder how much it costs", "I could make it dispense tacos"],
    founderScore: 1,
  },
  {
    text: "Your approach to deadlines is:",
    options: ["Meticulously planning to meet them", "Inventing a clock that slows down time"],
    founderScore: 1,
  },
  {
    text: "When given a task, you:",
    options: ["Follow instructions precisely", "Rewrite the instructions in interpretive dance"],
    founderScore: 1,
  },
  {
    text: "Your ideal workspace is:",
    options: ["A quiet, organized office", "A treehouse with a built-in cotton candy machine"],
    founderScore: 1,
  },
  {
    text: "When faced with a difficult decision, you:",
    options: ["Make a pros and cons list", "Consult your pet rock for advice"],
    founderScore: 1,
  },
  {
    text: "Your approach to team building is:",
    options: ["Organizing structured activities", "Hosting a unicorn rodeo"],
    founderScore: 1,
  },
  {
    text: "When you encounter a setback, you:",
    options: ["Analyze what went wrong", "Invent a 'setback reversal' dance"],
    founderScore: 1,
  },
  {
    text: "Your preferred method of communication is:",
    options: ["Clear, concise emails", "Telepathic messages via cheese sculptures"],
    founderScore: 1,
  },
  {
    text: "When brainstorming, you prefer:",
    options: ["Structured mind maps", "Freestyle rapping your ideas"],
    founderScore: 1,
  },
  {
    text: "Your approach to networking is:",
    options: ["Attending industry conferences", "Starting a flash mob at a business meeting"],
    founderScore: 1,
  },
  {
    text: "When learning a new skill, you:",
    options: ["Take a structured course", "Try to learn it while sleeping"],
    founderScore: 1,
  },
  {
    text: "Your ideal mentor would be:",
    options: ["An experienced industry professional", "A talking cactus named Steve"],
    founderScore: 1,
  },
  {
    text: "When pitching an idea, you focus on:",
    options: ["Detailed market analysis", "How it could save the world from an alien invasion"],
    founderScore: 1,
  },
  {
    text: "Your approach to customer feedback is:",
    options: ["Carefully analyzing trends", "Interpreting it through interprative dance"],
    founderScore: 1,
  },
  {
    text: "When faced with a tight budget, you:",
    options: ["Cut costs systematically", "Try to pay in compliments and high-fives"],
    founderScore: 1,
  },
  {
    text: "Your strategy for market research is:",
    options: ["Conducting thorough surveys", "Asking a magic 8-ball"],
    founderScore: 1,
  },
  {
    text: "When setting goals, you prefer them to be:",
    options: ["Realistic and achievable", "So outrageous they make people laugh"],
    founderScore: 1,
  },
  {
    text: "Your approach to work-life balance is:",
    options: ["Strictly separating work and personal time", "Trying to clone yourself"],
    founderScore: 1,
  },
];

const questionSet3: Question[] = [
  {
    text: "Your approach to risk is:",
    options: ["Carefully calculated and minimized", "Skydiving without a parachute (metaphorically)"],
    founderScore: 1,
  },
  {
    text: "When you hear 'that's impossible', you think:",
    options: ["They're probably right, better play it safe", "Challenge accepted! Where's my cape?"],
    founderScore: 1,
  },
  {
    text: "Your favorite childhood game was:",
    options: ["Following the rules in board games", "Inventing a sport involving trampolines and jello"],
    founderScore: 1,
  },
  {
    text: "When starting a new project, you first:",
    options: ["Create a detailed project plan", "Draw inspiration from your dreams about talking squirrels"],
    founderScore: 1,
  },
  {
    text: "Your ideal team consists of:",
    options: ["Experienced professionals in their fields", "A group of eccentric geniuses and one therapy llama"],
    founderScore: 1,
  },
  {
    text: "When faced with a competitor, you:",
    options: ["Analyze their strengths and weaknesses", "Challenge them to a dance-off"],
    founderScore: 1,
  },
  {
    text: "Your approach to failure is:",
    options: ["Carefully analyzing what went wrong", "Celebrating it with a 'failure fiesta'"],
    founderScore: 1,
  },
  {
    text: "When pitching to investors, you focus on:",
    options: ["Solid financials and market potential", "How your product could survive a zombie apocalypse"],
    founderScore: 1,
  },
  {
    text: "Your strategy for personal growth is:",
    options: ["Setting achievable goals and working towards them", "Trying to absorb knowledge through osmosis"],
    founderScore: 1,
  },
  {
    text: "When faced with a mundane task, you:",
    options: ["Complete it efficiently to move on", "Turn it into a musical and perform it for your team"],
    founderScore: 1,
  },
  {
    text: "Your approach to team conflicts is:",
    options: ["Mediation and finding common ground", "Settling disputes with a rubber chicken fight"],
    founderScore: 1,
  },
  {
    text: "When brainstorming product names, you prefer:",
    options: ["Names that clearly describe the product", "Naming it after your imaginary childhood friend"],
    founderScore: 1,
  },
  {
    text: "Your ideal office pet would be:",
    options: ["A calm, well-behaved dog", "A miniature giraffe that delivers coffee"],
    founderScore: 1,
  },
  {
    text: "When designing a product, you prioritize:",
    options: ["User-friendly features and practicality", "The ability to turn it into a Halloween costume"],
    founderScore: 1,
  },
  {
    text: "Your approach to company culture is:",
    options: ["Professional and results-oriented", "Mandatory daily conga lines"],
    founderScore: 1,
  },
  {
    text: "When faced with a tight deadline, you:",
    options: ["Work overtime to meet it", "Attempt to bend the space-time continuum"],
    founderScore: 1,
  },
  {
    text: "Your strategy for customer acquisition is:",
    options: ["Targeted marketing campaigns", "Training carrier pigeons to deliver product samples"],
    founderScore: 1,
  },
  {
    text: "When giving a presentation, you prefer to:",
    options: ["Use clear, informative slides", "Communicate entirely through interpretive mime"],
    founderScore: 1,
  },
  {
    text: "Your approach to employee motivation is:",
    options: ["Performance-based bonuses", "Installing a office slide that dispenses candy"],
    founderScore: 1,
  },
  {
    text: "When faced with a creative block, you:",
    options: ["Take a break and come back fresh", "Wear your clothes backwards for a new perspective"],
    founderScore: 1,
  },
];

export const questionSets = [questionSet1, questionSet2, questionSet3];