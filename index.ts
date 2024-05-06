#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.bgBlueBright('\n \t Text Analyzer \n'));

let answer = await inquirer.prompt([
    {
        type: 'input',
        name: "sentence",
        message: "Enter a sentence:",
    }
]);

const sentence = answer.sentence.trim();

const choices = [
    "Count Words",
    "Count Characters",
    "Count Vowels",
    "Count Consonants",
    "Convert to Uppercase",
    "Convert to Lowercase",
    "Reverse Sentence"
];

let selectedOption = await inquirer.prompt([
    {
        type: 'list',
        name: 'option',
        message: 'Select the operation you want to perform:',
        choices: choices
    }
]);

switch (selectedOption.option) {
    case "Count Words":
        const wordCount = sentence.split(/\s+/).length;
        console.log(chalk.green(`Word Count: ${wordCount}`));
        break;
    case "Count Characters":
        const characterCount = sentence.replace(/\s/g, "").length;
        console.log(chalk.green(`Character Count: ${characterCount}`));
        break;
    case "Count Vowels":
        const vowels = sentence.match(/[aeiou]/gi); 
        console.log(chalk.green(`Vowel Count: ${vowels ? vowels.length : 0}`));
        break;
    case "Count Consonants":
        const consonants = sentence.match(/[^aeiou\s]/gi) || [];
        console.log(chalk.green(`Consonant Count: ${consonants.length}`));
        break;
    case "Convert to Uppercase":
        console.log(chalk.green(`Uppercase Sentence: ${sentence.toUpperCase()}`));
        break;
    case "Convert to Lowercase":
        console.log(chalk.green(`Lowercase Sentence: ${sentence.toLowerCase()}`));
        break;
    case "Reverse Sentence":
        console.log(chalk.green(`Reversed Sentence: ${sentence.split("").reverse().join("")}`));
        break;
    default:
        console.log(chalk.red("Invalid option selected."));
}
