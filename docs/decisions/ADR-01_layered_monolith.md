# ADR-01 Layered monolith

| Status                                        | Date         | Author       |
| --------------------------------------------- | ------------ | ------------ |
| Accepted  | 06.11.26 | Adolfo |

## Context

Mostly due C-02. We are four/three members with very limited time. Using a style we already known will save us learning time. Additionally, because of C-03 we wan't to spend money. A monolith is perfectly compatible with any hosting platforms, if we even need it.

## Considered options
1. A layered monolith: top-level directories technical ordered
2. A modular monolith: top-level directories are modules

## Decision

We will use option 1, because as we already said, we used it in a previous project and known how it works.

## Consequences
- Good: easier to implement, as we can apply our obtained experience. 
- Bad: we will possibly miss the chance to learn a new architecture style.