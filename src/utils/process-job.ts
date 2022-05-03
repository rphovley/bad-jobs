const badJobResponses = [
  "That's a bad job. You should quit",
  "That's a nope",
  "Thou dost have poopy job",
  "As a friend, I need to tell you that you should quit.",
  "Your job is bad. B. A. D.",
  "You're better than that. That job stinky.",
  "If I could have 5 cents for every bad job...",
  "That job: bad job.",
  "Common! What do you think? That's a terrible job.",
  "I guess that's better than a stick in the eye",
  "Someone's gotta do it.",
  "This is why slavery would have been a good idea",
  "At least pants are optional",
  "I mean, I'd rather scoop dog poop",
  "I heard that job gives you a rash",
  "Why dost thou torture thyself with such employment?",
  "That job is the wurst",
  "At least you're not an underwater welder",
  "Your job's cafeteria serves only saltine crackers and hotdogs",
]

/** 
 * Takes user input and returns responsed based on the users input
 */
const processJob = (userInput: string): string => {
  const cleanedInput = cleanInput(userInput)

  if(isNoJob(cleanedInput)) return "No job at all? Good work! That's a good job!"

  return chooseRandomResponse(badJobResponses)
}

const cleanInput = (input: string): string => input.trim().toLowerCase()

const isNoJob = (job) =>  job === "" || job === "none" || job === "unemployed"

const chooseRandomResponse = (items: string[]) => {
  return items[Math.floor(Math.random()*items.length)];
}
export default processJob