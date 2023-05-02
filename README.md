# Verify-Code-Simulator

## Verification Code Simulator with Resend Timer

### Notes:-

- I am still learning JS, didn't know if there is any easier ways. But this is the best I can do with my knowledge. I haven't dealt with any framework / library yet.
- I have little experience with CSS, I didn't care much about it.
- (Link to live page here) [https://abrahman-ra.github.io/Verify-Code-Simulator]

## CONCEPT

## oninput

- if value length = 1, focus on next (work from 1 to length-1)
- if value is a number, accept it (all fields)
- if user clicked a backspace, delete value and focus on previous (work from 2nd field till the end)

## Problems & Debugging

### All Events Are Located & Labeled in "verification.js" File

- If we pressed backspace, the event deletes previous cell (Solved by preventDefault() in Event 4).
- If we pressed on a non number key, the event deletes the whole current cell (Solved in Event 2 by adding an if statement).
- The current page cannot deal with pasted text (Solved in 1st event by filtering numbers only, and in 3rd event by eliminating all the exceeding characters).
- Space is counted as a character (Solved in Event 1).

## Improvements (As much as I can)

- (New), improved JS code to create number of cells based on input in line 2
- Added a visual style for filled and unfilled cells
- Added a counting timer for resending (Only for aesthetic purpose, not working so far)
