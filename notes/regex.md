## Single Use of Square Brackets

- Even if any one character matches, it is enough.
- Example: [abc] → Any one of a, b, or c can be present.
- A range of characters can also be specified, such as [a-z], [A-Z], [a-e], or [aeiou] (vowels only).
- Any number of character ranges can be specified, such as [a-zA-Z0-9], but matching any one character is enough.

## Multiple Ranges using Square Brackets

- [a-z][0-9] → Any one letter followed immediately by any one digit.
- Refer - `square-brackets-example.png`

## Characters Repetitions

| Symbol | Explanation              |
| ------ | ------------------------ |
| `+`    | One or more occurrences  |
| `*`    | Zero or more occurrences |
| `?`    | Zero or one occurrence   |

- Example: [a-z]?[0-9] A letter is optional, but if present then it must appear immediately before the digit.
- Suppose if input is 93 then it is "false" because the pattern expects exactly one digit because of square brackets.
- However [a-z]?[0-9]+ → Now 93 is "true" because plus means that digit can appear more than once.

## Curly Braces

- {N} represents exactly N occurrences where N is a positive integer → 1 to N.
- {min, max} where minimum and maximum number of occurrences.
- {N,} where matches atleast N occurrences, with no upper limit.

## Anchors in Regular Expression - Caret vs Dollar

- Caret (^) – Placed at the beginning of a pattern to represent the start of a string.
- Dollar Sign ($) – Placed at the end of a pattern to represent the end of a string.

- /^[a-z][0-9]/
  - The first character must be a lowercase letter, followed immediately by a digit as the second character. The first character must not be a whitespace also. Since there is no $ (end anchor), additional characters are allowed after the second character.
- Refer - `caret-symbol-example.png`

## Shorthand Notation

- [0-9] → \d → \d{N} For multiple digits
- \s → Whitespace
- \b → Boundary - This will be very useful to check exact word match like "\btest\b".
- \w → Word characters such as alphabets, digits and underscore.

## Negative Scenario - Uppercase Letters

- \S → \D → \W → \B

## Parantheses vs Pipe Symbol

## Escape Sequences