
<div align="center">
  <a href="https://ton.org">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://ton.org/download/ton_logo_dark_background.svg">
      <img alt="TON logo" src="https://ton.org/download/ton_logo_light_background.svg">
    </picture>
  </a>
  <h3>Reference implementation of TON Node and tools</h3>
  <hr/>
</div>

## 

<p align="center">
  <a href="https://tonresear.ch">
    <img src="https://img.shields.io/badge/TON%20Research-0098EA?style=flat&logo=discourse&label=Forum&labelColor=gray" alt="Ton Research">
  </a>
  <a href="https://t.me/toncoin">
    <img src="https://img.shields.io/badge/TON%20Community-0098EA?logo=telegram&logoColor=white&style=flat" alt="Telegram Community Group">
  </a>
  <a href="https://t.me/tonblockchain">
    <img src="https://img.shields.io/badge/TON%20Foundation-0098EA?logo=telegram&logoColor=white&style=flat" alt="Telegram Foundation Group">
  </a>
  <a href="https://t.me/tondev_eng">
    <img src="https://img.shields.io/badge/chat-TONDev-0098EA?logo=telegram&logoColor=white&style=flat" alt="Telegram Community Chat">
  </a>
</p>

<p align="center">
  <a href="https://twitter.com/ton_blockchain">
    <img src="https://img.shields.io/twitter/follow/ton_blockchain" alt="Twitter Group">
  </a>
  <a href="https://answers.ton.org">
    <img src="https://img.shields.io/badge/-TON%20Overflow-FE7A16?style=flat&logo=stack-overflow&logoColor=white" alt="TON Overflow Group">
  </a>
  <a href="https://stackoverflow.com/questions/tagged/ton">
    <img src="https://img.shields.io/badge/-Stack%20Overflow-FE7A16?style=flat&logo=stack-overflow&logoColor=white" alt="Stack Overflow Group">
  </a>
</p>



Main TON monorepo, which includes the code of the node/validator, lite-client, tonlib, FunC compiler, etc.

## The Open Network

__The Open Network (TON)__ is a fast, secure, scalable blockchain focused on handling _millions of transactions per second_ (TPS) with the goal of reaching hundreds of millions of blockchain users.
- To learn more about different aspects of TON blockchain and its underlying ecosystem check [documentation](https://ton.org/docs)
- To run node, validator or lite-server check [Participate section](https://ton.org/docs/participate/nodes/run-node)
- To develop decentralised apps check [Tutorials](https://ton.org/docs/develop/smart-contracts/), [FunC docs](https://ton.org/docs/develop/func/overview) and [DApp tutorials](https://ton.org/docs/develop/dapps/)
- To work on TON check [wallets](https://ton.app/wallets), [explorers](https://ton.app/explorers), [DEXes](https://ton.app/dex) and [utilities](https://ton.app/utilities)
- To interact with TON check [APIs](https://ton.org/docs/develop/dapps/apis/)

## Updates flow
* **testnet branch** - testnet is running on this branch. The branch contains a set of new updates. After testing, the testnet branch is merged into the master branch and then a new set of updates is added to testnet branch.

## "Soft" Pull Request rules

* Thou shall not merge your own PRs, at least one person should review the PR and merge it (4-eyes rule)
* Thou shall make sure that workflows are cleanly completed for your PR before considering merge

## Build TON blockchain
TON smart contract
=======
# Counter

## Project structure

-   `contracts` - source code of all the smart contracts of the project and their dependencies.
-   `wrappers` - wrapper classes (implementing `Contract` from ton-core) for the contracts, including any [de]serialization primitives and compilation functions.
-   `tests` - tests for the contracts.
-   `scripts` - scripts used by the project, mainly the deployment scripts.

## How to use

### Build

`npx blueprint build` or `yarn blueprint build`

### Test

`npx blueprint test` or `yarn blueprint test`

### Deploy or run another script

`npx blueprint run` or `yarn blueprint run`

### Add a new contract

`npx blueprint create ContractName` or `yarn blueprint create ContractName`
>>>>>>> 17bdc82 (first commit)
