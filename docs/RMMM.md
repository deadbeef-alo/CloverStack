# Risk List (RMMM)

*Project: CloverStack · Team: Adam, Adolfo, Maksym, Miriam*

RMMM stands for Risk Mitigation, Monitoring and Management. This list is a living document: we
look at it at every sprint change and change the date of every row we touch.

## Our Scale
| Value | Probability | Impact  |
| :---: | ----------- | ------- |
|   1   | almost never   | an hour lost                 |
|   2   | unlikely       | a day lost                   |
|   3   | possible       | a weekend lost               |
|   4   | likely         | a sprint goal missed         |
|   5   | almost certain | shorten our initial scope   |

Score = probability × impact.

**Our thresholds:** from 20: act now · from 15: plan · below that: watch

## Risks
| ID   | Risk, short                     | Kind      | P | I | Score | Owner  | Status | Updated    |
| ---- | ------------------------------- | --------- | - | - | ----- | ------ | ------ | ---------- |
| R-01 | Exam weeks paralyze development | project   | 5 | 4 |  20   | Adolfo | open   | 16.11.26   |
| R-02 | Scope was too ambitious         | project   | 3 | 5 |  15   | Adolfo | open   | 16.11.26   |
| R-03 | [a few words]                   |           |   |   |       | [name] | open   | [DD.MM.YY] |

### R-01 Exam weeks paralyze development

*Owner: Adolfo*

**Risk:** Because we need time to learn for our exams, we would sacrifice one or two sprints, so the sprint goal will be missed.

**Rating:** Probability 5 × impact 4 = 20. There will be an exam weeks for sure and we would cut the last sprint.

**Mitigation:** We set a earlier deadline and see if we can finish our project in that period of time.

**Indicator:** See if the project is cooked enough regarding our earlier deadline.

**Contingency:** We can blame R-02 and say the scope was too ambitious.

### R-02 Scope was too ambitious

*Owner: Adolfo*

**Risk:** Because our initial scope was abundant enough, we could need to change our plans, so we would reduce our initial scope.

**Rating:** Probability 3 × impact 5 = 15. We can't say for sure if our scope was feasible and we could kill a use case to reduce our scope.

**Mitigation:** Follow our constraint C-02.

**Indicator:** We had to delay three or more sprint goals because the time wasn't enough.

**Contingency:** Just kill a use case, like one of the three game modes or the settings menu.

### R-03 [Risk, short]

*Owner: [name]*

**Risk.** Because [cause — what is already true today], [event — what may happen], so [effect —
what it would cost us].

**Rating.** Probability [value] × impact [value] = [score]. [One sentence: why these numbers.]

**Mitigation.** [What we do before it happens, so that it becomes less likely or less harmful.
Or: accepted, because …]

**Indicator.** [The warning sign we watch for.]

**Contingency.** [Our plan B: what we do when it has happened anyway.]