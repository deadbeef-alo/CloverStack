# UC-03 play slot machine

<!--
HOW TO USE THIS TEMPLATE
- Copy this file per use case and name it UC-01_[name].md, UC-02_[name].md, …
- Replace every  in square brackets.
- Name: verb plus object, one goal reached in one sitting ("Book a room", not "Click Save").
- Describe what the actor and the system exchange, not which button is clicked —
  the mockup shows the screen.
- Delete these comments once the use case is done.
- Structure after the RUP template "Use-Case Specification":
  https://cin.ufpe.br/~if682/RUP/webtmpl/templates/req/rup_ucspec.htm
-->

| Author | Estimate | User stories                                                                                                                        |
| ------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Miriam | 13       | [#25](https://github.com/deadbeef-alo/CloverStack/issues/25)<br>[#12, #13 — and write "Implements UC-NN" into each of these issues] |
## 1 Brief description
The player plays a round on the slot machine. They choose a bet, spin, and see the result. Winnings are paid out in chips to their account balance. The use case lets the player try their luck with chips from their balance and gives them a clear result for every round.
## 2 Actors
- **Primary:** Player
- **Secondary:** none
## 3 Mockup
	
<!-- A wireframe is enough. Show the key step of this use case. -->

![Mockup UC-[NN]](../mockups/UC-[NN]_[name].png)

## 4 Flow of events
### 4.1 Basic flow
1. The player opens the slot machine.
2. The system shows the machine together with the player's current balance **(link zu UC-01 einfügen)** and a display showing the winning combinations. 
3. The player chooses a bet amount and starts the spin.
4. The system checks whether the balance covers the bet and withdraws the bet amount from the balance.
5. The system determines the result of the spin and shows it to the player.
6. The system credits any winnings to the balance and stores the round in the game history.
7. The player sees the updated balance.
8. The player can decide whether to play another round or leave the machine.
### 4.2 Alternative flows
- 3a - Player cancels: After step 3, the player leaves the machine without spinning. No chips are withdrawn. The use case ends.
- 4a - Players Balance is to low: The system determined that the balance doesn't cover the bet. The spin is canceled. The player can choose a different bet and start a new spin. The flow continues at step 3.
- 4b - Bet outside the allowed range: The system determined that the players bet ist to low or to high. The system rejects the bet and shows the allowed range. The flow continues at step 3.
- 5a - Server error: The connection is lost or the server fails before the result is stored. The system does not keep the bet as lost: the bet is refunded. The use case ends.
### 4.3 Sequence diagram

<!-- The flow above over time: the actor, your frontend, your backend, your database.
     Show an alternative flow as an alt fragment where it matters.
     Commit the source file (PlantUML, draw.io, …) next to the image. -->

![Sequence diagram UC-[NN]](../diagrams/UC-[NN]_sequence.png)

## 5 Special requirements
- NFR-R-01 - The bet, result, and payout for each round are stored together, ensuring that a system failure never results in an inconsistent account balance.
- 
<!-- Quality requirements for this use case only, each with an ID that is unique in the
     whole SRS, e.g.,
     NFR-P-02 — The confirmation shall appear within 1 s for 95 % of the bookings.
     System-wide ones go into SRS sections 3.2 to 3.5. Write "None" if there are none. -->

[…]

## 6 Preconditions
- The player is logged in.
- The slot machine is available.
<!-- The state of the system before the use case can start, e.g., "The user is logged in." -->

- […]
## 7 Postconditions
- The player's balance includes the bet and any winnings.