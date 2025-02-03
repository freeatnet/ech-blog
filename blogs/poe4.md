---
title: "Purr-suit of Ethereum 🐾 #4"
date: 2025-02-03
author: Pooja Ranjan
image: https://hackmd.io/_uploads/rk0rVraOkx.png
---

#### Your Weekly Dose of Blockchain Updates and Meows!

The Ethereum ecosystem continues to push forward with major protocol upgrades, client testing, and ecosystem-wide discussions. This week's update covers the latest **Pectra (Prague + Electra) upgrade developments**, including security updates, testnet timelines, and system contract audits. Additionally, we dive into the latest discussions from **All Core Devs, EVMMAX Implementers, and EIP Editing Office Hours**, alongside new insights on validator hardware requirements, pre-confirmation mechanisms, and public goods funding initiatives and more updates since the last [newsletter](https://hackmd.io/@poojaranjan/PoE3). If you’re tracking Ethereum’s Protocol meetings, this edition is packed with critical updates! 

### **TL;DR**
- **Urgent Geth Update** – Users must update to [v1.14.13](https://github.com/ethereum/go-ethereum/releases/tag/v1.14.13) to patch security vulnerabilities.  
- **Pectra Upgrade** – Devnet-6 is progressing; testnet forks for **Holesky** and **Sepolia** could happen by **Feb 6**, with client releases expected by **Feb 10**.  
- **System Contract Audits** – Security reviews of EIPs **2935, 7002, and 7251** reveal concerns around fee updates.  
- **EVMMAX Testing** – Poseidon hash tests show a **10x efficiency gain** using EVM Max over Solidity, with more benchmarking on the way.  
- **Validator Hardware Debates** – No final agreement yet on **bandwidth requirements** for Ethereum validators; discussions continue in the [Ethereum R&D Discord](https://discord.gg/ethereum).  
- **New ACD Bot Coming** – A bot for **recordings, calendar events, and notes** will be presented in the next All Core Devs call.  
- **EIP Editing Milestone** – The **50th** EIP Editing Office Hour marked a shift to dedicated **EIP-only** sessions to speed up proposal reviews.  
- **Public Goods Funding** – **Octant Epoch 7** is open for climate-focused projects, and **Gitcoin Grants 23** is set for March with a revamped funding strategy.  

## [Pectra](https://www.ethcatherders.com/upgrades/pectra) (Prague+Electra) Upgrade


### [All Core Devs - Execution (ACDE) #204](https://github.com/ethereum/pm/issues/1253) (January 30, 2025)

- **Urgent Security Update:** Geth users should [update their nodes immediately](https://github.com/ethereum/go-ethereum/releases/tag/v1.14.13) to apply the latest security release.
- **Pectra Devnet-6 & Timelines:** Client teams should share [devnet-6](https://notes.ethereum.org/@ethpandaops/pectra-devnet-6) ready branches. If stable by **Feb 6**, testnet fork slots for **Holesky** and **Sepolia** will be selected, with client releases expected by **Feb 10**.
- **Mainnet Fork Slot Consideration:** The mainnet fork slot will be chosen only after Holesky forks successfully, likely around **Feb 20**, to avoid misleading expectations.
- **System Contract Audits Completed:** [Audits](https://github.com/ethereum/audits/tree/master/Pectra) for EIPs **2935, 7002, and 7251** were conducted by multiple firms, revealing concerns about the fee update mechanism.
- **Fusaka Fork Planning:** The first Fusaka devnet should only include **EOF and PeerDAS**, with further EIPs considered once stable. No additional decisions were made beyond this scope and that allowed teams to share their perspectives on the [Pectra Retrospective thread](https://ethereum-magicians.org/t/pectra-retrospective/22637).
- **Node Hardware & Bandwidth Discussions:** [Validator bandwidth requirements](https://github.com/ethereum/EIPs/pull/9270) sparked debate, with no final agreement. The conversation continues on the **R&D Discord**.
- **Upcoming ACD Bot Presentation:** A new bot to automate **recordings, calendar events, and notes** for AllCoreDevs will be presented in the next call.
- [Recording](https://www.youtube.com/live/JW2IWwVKRec?t=192s), [Podcast version](https://creators.spotify.com/pod/show/ethereum-cat-herders/episodes/Execution-Layer-Meeting-204-2025-01-30--ACDE-204-e2u6rqr), [Tim Beiko's FEM Notes](https://ethereum-magicians.org/t/all-core-devs-execution-acde-204-january-30-2025/22594), [Nixo's Tweet Thread](https://x.com/nixorokish/status/1884705138331574549), [YashKamal Chaturvedi's Notes](https://etherworld.co/2025/01/30/highlights-of-ethereums-all-core-devs-meeting-acde-204/), [Christine's notes](https://www.galaxy.com/insights/research/ethereum-all-core-developers-execution-call-204/)

### Client testing call #22 (January 27, 2025)
- [Notes](https://ethereum-magicians.org/t/client-testing-call-22-january-27-2025/22676)

## Breakout & Implementers’ Meeting 
### [EIP-7732 breakout room #15](https://github.com/ethereum/pm/issues/1269) (January 31, 2025)
- **Client Implementation Updates:** Progress was reported on running Teku locally with ongoing issue fixes. Plans were discussed to prioritize gossip syncing, and ensures clients are ready for devnet testing.
- **Beacon API & Execution Payloads:** A new API endpoint was proposed to fetch execution payloads independently. Discussions also covered adding event stream topics to notify toolings when a new payload is received.
- **Pre-Confirmations & Potential Challenges:** The impact of Epbs on pre-confirmation mechanisms was debated, particularly concerns over a brief period where only one entity holds key information. Further evaluation is needed to assess whether this introduces centralization risks.
- **Slot Auction Research & Challenges:** Various slot auction mechanisms were discussed, including potential execution ticket designs. However, major challenges remain in implementing fork choice rules, slashing conditions, and preventing collusion.
- **Action Items for Next Meeting:** 
  - Implement new API endpoints for execution payload requests.
  - Continue improving client implementations and achieve a two-client Kurtosis run.
  - Engage with pre-confirmation teams to evaluate potential blockers.
  - Collaborate with researchers to further assess the impact of the identified "blackout period" on centralization risks.
- **Next Steps:** The team aims to finalize API updates, test implementations, and assess the viability of different approaches for pre-confirmations and execution tickets while focusing on safe, incremental improvements.
- [Recording](https://www.youtube.com/live/IDpahX3WXxE), [Terence's notes](https://hackmd.io/@ttsao/epbs-breakout-16)

## [EVMMAX Implementers Call 2](https://github.com/ethereum/pm/issues/1208) (January 30, 2025)

- **Client Updates:**
  - EthereumJS team completed most of the JavaScript arithmetic library.
  - Work on vectorized and non-vectorized implementations continues, with comparisons planned.
- **Poseidon Hash Implementation:**
  - Initial tests show a 10x efficiency improvement using EVM Max compared to Solidity.
  - Future work includes validating gas cost reductions and potential wall clock time improvements.
- **Vectorized vs Non-Vectorized Execution:**
  - Ongoing discussion about whether vectorized operations should be the default.
  - Need to determine end-user requirements, such as elliptic curves vs. STARKs.
- **SIMD & Hardware Compatibility:**
  - AVX2 (256-bit) is widely available, while AVX-512 has limited support.
  - Investigating impact on smaller fields where SIMD benefits could be more pronounced.
- **Tooling & Testing Pipeline:**
  - A front-end tool is needed for easier implementation testing.
  - Options include direct bytecode generation or adding support to Solidity/Ule.
- **Action Items:**
  - Confirm EVM Max gas numbers and benchmark wall clock performance.
  - Investigate SIMD comparisons using AVX2 with Poseidon hashing.
  - Develop a tool for end-to-end testing of EVM Max implementations.
- **Next Steps:**
  - Compare Solidity-based Poseidon with EVM Max implementations.
  - Refine vectorized and non-vectorized benchmarks to guide further decisions.
  - Plan for the next meeting in one month to review progress.
- [Notes](https://hackmd.io/@poojaranjan/evmmaximplementersnotes#EVMMAX-Implementers-Call-2-January-30-2025) & [Recording](https://www.youtube.com/live/_154EOcZLu4)

## [L2 Interop Working Group - Call #2](https://github.com/ethereum/pm/issues/1249) (January 29, 2025)
- [Slides](https://docs.google.com/presentation/d/1oMsHfZfppL4rhoGG7CLk6baQ5I4548zmIHh5fvVBKlU/edit?usp=sharing) from Ellie
- [RIP-7859](https://github.com/ethereum/RIPs/blob/master/RIPS/rip-7859.md) - Ian from Polymer
- [Reown](https://docs.reown.com/walletkit/features/experimental/chain-abstraction) and 7811
- [Recording](https://youtu.be/ca1zzrQLnEk)

## [FOCIL Breakout Room #3](https://github.com/ethereum/pm/issues/1266) (January 28, 2025)
- [Recording](https://www.youtube.com/live/azvPMD2us0Y) & [Notes](https://github.com/ethereum/pm/issues/1266#issuecomment-2621437973)

## [Portal Implementers Call #42](https://github.com/ethereum/pm/issues/1257) (January 27, 2025)
- [Notes](https://hackmd.io/@chloezhux/H1x36pYIJg)

## [eth_simulate Implementers' Meeting](https://github.com/ethereum/pm/issues/1248)
- [Notes](https://github.com/ethereum/pm/issues/1248#issuecomment-2615709046)


## EIPs Update

### [EIP Editing Office Hour Meeting #50](https://github.com/ethcatherders/EIPIP/issues/377) (January 28, 2025)
- **Milestone & New Editing Sessions:**
  - Celebrating the 50th EIP Editing Office Hour and over two years of contributions by Sam Wilson.
  - Introduction of a dedicated EIP-only editing session led by Gajendra Singh to address backlog.
- **Reviewing Open Pull Requests:**
  - Addressing EIPs ready for status updates (e.g., moving drafts to review).
  - Noting delays due to pending author responses, especially for active EIPs related to upcoming hard forks.
  - Suggesting authors raise PR concerns in All Core Devs (ACD) calls for quicker resolutions.
- **Handling Draft EIPs & New Submissions:**
  - Reviewed new draft EIPs for correctness and formatting.
  - Discussed the importance of including benchmarking data and rationale for proposals with technical specifications.
  - Authors encouraged to use relative URLs for links and provide clear justification for hardware requirements.
- **EIP Status & Update Policies:**
  - Discussion on best practices for versioning frequently updated EIPs (e.g., hardware recommendations per hard fork).
  - Agreement on linking each update to a specific fork rather than using "Living" status.
- **Process Improvements & Next Steps:**
  - Encouraging active discussion in EIP's Magician forums for technical clarifications.
  - Proposal to allocate EIP numbers even for unmerged drafts unless abuse is detected.
  - Next EIP+ERC editing session scheduled for next Tuesday at 16:00 UTC.
- [Notes](https://github.com/ethcatherders/EIPIP/issues/377#issuecomment-2629714385), [Recording](https://www.youtube.com/watch?v=NJCnGld-5nU&list=PL4cwHXAawZxqnDHxOyuwMpyt5s8F8gdmO&index=1&pp=iAQB)

### PEEPanEIP
- [PEEPanEIP 138: RIP-7759 Layer 2 Transaction Fee Specification](https://youtu.be/j0epnbOy-2g)  with Andreas Freund 

### [EIPsInsight](https://eipsinsight.com/insight/2025/2)
- [January 2025 - Insight (Tweet Thread)](https://x.com/TeamAvarch/status/1885401568549200231)
- No new updates in Feb 2025

### Call For Input (Open)
- [Define "Meta"](https://github.com/ethcatherders/EIPIP/issues/373)
- [Forcibly withdraw EIP-7675](https://github.com/ethcatherders/EIPIP/issues/374)
- [Allow Links to Blockchain Commons](https://github.com/ethcatherders/EIPIP/issues/376)


## Upcoming Protocol Calls
| Date & Time (UTC)                      | Event |
|----------------------------------------|------------------------------------------------------------------------------------------------|
| Monday Feb 3, 2025 at 12:00 UTC       | [eth_simulate Implementers' Meeting](https://github.com/ethereum/pm/issues/1273) |
| Monday Feb 3, 2025 at 14:00 UTC       | Pectra Interop Testing Call |
| Monday Feb 3, 2025 at 15:00 UTC       | [RPC Standards Call #0](https://github.com/ethereum/pm/issues/1261) |
| Monday Feb 3, 2025 at 16:30 UTC       | [Portal Network Implementation](https://github.com/ethereum/pm/issues/1267) |
| Tuesday Feb 4, 2025 at 10:00 UTC      | [PeerDAS Breakout Room #16](https://github.com/ethereum/pm/issues/1259) |
| Tuesday Feb 4, 2025 at 14:30 UTC      | PEEPanEIP-7805: Fork-choice enforced Inclusion Lists (FOCIL) with Thomas Thiery & Julian Ma |
| Tuesday Feb 4, 2025 at 16:00 UTC      | [EIP Editing Office Hour Meeting 51](https://github.com/ethcatherders/EIPIP/issues/379) |
| Wednesday Feb 5, 2025 at 14:00 UTC    | [RollCall #9.1 Breakout - L2 Execution Common Core: V1 Scope](https://github.com/ethereum/pm/issues/1215) |
| Wednesday Feb 5, 2025 at 15:00 UTC    | [EOF Implementers Call #66](https://github.com/ethereum/pm/issues/1260) |
| Thursday Feb 6, 2025 at 14:00 UTC     | [All Core Dev Consensus #150](https://github.com/ethereum/pm/issues/1265) |
| Friday Feb 7, 2025 at 14:00 UTC     | PEEPanEIP-7706: Separate gas type for calldata with Vitalik Buterin  |

## Public Goods Funding

### Octant Epoch 7 (Jan 30 – Feb 13, 2025)
Dedicated to "[Climate Round](https://t.co/xm62yZy4pG)", applications are [OPEN](https://x.com/OctantApp/status/1884934842716168295) for the Octant Epoch 7.  If your project aligns with these areas and has been around for at least a year, the team wants to hear from you!

### Deep Funding (Ongoing)

Backed by Vitalik Buterin, [Deep funding](https://deepfunding.org/) is launched to support different projects based on **dependency or ‘deep’ graph** that shows the relative value of open source contributions in a network and **deep learning**. 

In Deep Funding, most of the work gets done by a public market of allocators, that suggest proposed weights of edges in a graph. Using AI for allocations is encouraged.

#### Timeline
* December 12th, 2024: Data on 40,000 Ethereum dependencies for building your model
* Jan 20th, 2025: Sample spot check data by jury members to train your model
* Jan 20th, 2025:Deadline for “early bird” prizes for open source model submissions. At least half of the open source model submission prize pool will be reserved for early bird submissions.
* Feb 20th, 2025: Submit your model
* Feb 27th, 2025: Results

### Gitcoin Grant 23 (Upcoming in March 2025)
GG23 is kicking off at the end of March, and big changes are coming. The team shared [Gitcoin Grants 2025 Strategy](https://www.gitcoin.co/blog/gitcoin-grants-2025-strategy) in a recent blogpost and the team intends to moving into a multi-mechanism future, allowing us to ensure a fairer funding distribution, supporting builders at every stage of growth.


### Community thoughts on Public Goods Funding
There are a lot of differnt thoughts on **"Public Goods"**. Last week [Dan Robinson](https://x.com/danrobinson/status/1884338819748761840) shared his thoughts on what he considers as "Public Goods". [Vitalik Buterin](https://x.com/VitalikButerin/status/1884340202631471598) responded
> careful, "infra" is itself one of those words with challenging connotations 😀
> I'd say "funding for pure open source"

[Pooja Ranjan](https://x.com/poojaranjan19/status/1885327179778842883) thinks the Ethereum Cat Herders is one of the popular public goods projects in the Ethereum ecosystem as "Public Goods" can be many things including [essential coordination funding](https://x.com/poojaranjan19/status/1884602407029801248), [fuel for Ethereum’s progress](https://x.com/poojaranjan19/status/1884964793821389021), [an investment in Ethereum’s future](https://x.com/poojaranjan19/status/1885327179778842883) and more. 

**Let us know your thoughts on Public Goods funding**. Tag your top 5 favorite projects and us in your response Tweet :)

## Events

#### Upcoming Events

- [ETHDenver 2025](https://www.ethdenver.com/): February 23 - March 2, 2025
- [Staking Summit, Dubai](https://www.stakingsummit.com/): April 28 - 29, 2025
- [EthCC[8]](https://ethcc.io/): June 30 -July 3, 2025
- [Devconnect 2025](https://devconnect.org/): Expected in Q4-2025. Exact date - TBD. Should you have improvement suggestions, share with the team - [RPF 9 - Improving Devconnect 2025](https://forum.devcon.org/t/rpf-9-improving-devconnect-2025/5339) 
- Follow the [list of upcoming events](https://docs.google.com/spreadsheets/d/1NEu_FCc1hnGAuRgPmbXXpf0h2lCrCOlMKbbFEqgkVDQ/edit?gid=572241033#gid=572241033)  by Nathan Sexer

## Community Resources
- [Fabric - Fabric to Accelerate Based Rollup Infrastructure & Connectivity](https://ethresear.ch/t/fabric-fabric-to-accelerate-based-rollup-infrastructure-connectivity/21640/1)
- [Native Rollup for 3SF](https://ethresear.ch/t/native-rollup-for-3sf/21632)
- Vitalik Buterin's [shoutout](https://x.com/VitalikButerin/status/1885046277932552697) for [Justin Drake](https://x.com/drakefjustin).
- [go-ethereum hiring](https://jobs.lever.co/ethereumfoundation/8d9b1823-ba67-4195-a673-e11a85a48d62)

### Share your projects with us
Have updates about your project or client? Share them with us at team@ethcatherders.com by Friday (end of day EST) to be added in the next edition of the newsletter scheduled for release on the following Monday.
## Stay Curious, Stay Connected and Keep Purring 🐾











