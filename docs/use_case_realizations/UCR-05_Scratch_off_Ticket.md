# UCR-03 Play Scratch-Off Ticket — Use-Case Realization

| Author | Realizes |
| ------ | -------- |
| [Adam] | [UC-05 Play Scratch-Off Ticket](../use_cases/UC-05_play_Scratch_off_Ticket.md) |

## 1 Introduction

This use-case realization describes how the player purchases and plays a scratch-off ticket. It covers the basic flow, including checking the player's balance, generating a ticket result, and awarding any prize. It also covers the alternative flow in which the player does not have enough virtual money to purchase the ticket.

## 2 Flow of events — design

### 2.1 Participating objects

| Object | Stereotype | Responsibility |
| ------ | ---------- | -------------- |
| `:ScratchOffForm` | boundary | Receives the player's ticket request and displays the ticket result. |
| `:PlayScratchOff` | control | Coordinates the ticket purchase, checks the balance, determines the result, and processes any prize. |
| `:PlayerAccount` | entity | Stores the player's virtual money balance. |
| `:ScratchOffTicket` | entity | Stores the ticket's price, result, and prize information. |

### 2.2 Sequence diagrams

![Sequence diagram UCR-05](../diagrams/UCR-05_%20Refined-sequence-diagram.drawio.png)

The sequence diagram source file should be saved next to the image.

### 2.3 Walkthrough

1. The player requests a scratch-off ticket through `:ScratchOffForm`.
2. `:ScratchOffForm` sends the request to `:PlayScratchOff`.
3. `:PlayScratchOff` retrieves the player's balance from `:PlayerAccount` and the ticket price from `:ScratchOffTicket`.
4. If the player has enough virtual money, `:PlayScratchOff` deducts the ticket price and generates the ticket result.
5. If the ticket wins, the prize is added to the player's balance. The result is then displayed through `:ScratchOffForm`.
6. If the player does not have enough virtual money, the purchase is rejected and the player is informed.

### 2.4 State machine

Not applicable.

## 3 Derived requirements

- DR-03-01 — A ticket can only be purchased if the player has enough virtual money.
- DR-03-02 — The ticket price must be deducted before the result is processed.
- DR-03-03 — The ticket result must determine whether a prize is awarded.
- DR-03-04 — Any prize must be added to the player's balance and reflected in the displayed result.