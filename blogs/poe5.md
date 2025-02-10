---
title: "Purr-suit of Ethereum 🐾 #5"
date: 2025-02-10
author: Pooja Ranjan
image: https://hackmd.io/_uploads/rJTk9yvK1e.png
---
#### Your Weekly Dose of Blockchain Updates and Meows!

### **Summary**

This week's Ethereum updates cover **key protocol advancements, proposal reviews, and community initiatives** since the last [newsletter](https://hackmd.io/@poojaranjan/PoE4). Highlights include:  

- **Pectra Upgrade Progress**: Client teams prepare for **Holesky & Sepolia forks** on **Feb 13**, with Pectra EIPs moving to **Last Call** status.  
- **Devnet 6 Testing**: Deployment announced, focusing on **EOF, PeerDAS, ePBS & IL** refinements. 
- **EIP Reviews & Implementation Discussions**: Multiple proposals reviewed, with debates on **GitHub handle requirements** and **EIP-7702 documentation needs**.  
- **PEEPanEIP Podcast**: Recent episodes cover **[Fast Confirmation Rules](https://youtu.be/dZU-Ch22MKY) and [EIP-7623](https://www.youtube.com/watch?v=D8UnMN2Cjw4)**.  
- **EIP-7706 & Gas Market Changes**: **Vitalik Buterin** discusses **multi-dimensional gas pricing** and the potential impact of calldata gas separation.  
- **Public Goods & Community Updates**: **Deep Funding’s Level 2** juror applications open, **Octant Epoch 7 Climate Round ongoing**, and **new EF leadership in AI & Public Goods**.  
- **Upcoming Ethereum Events**: **ETHDenver, ETHPrague, and Devconnect 2025**.  


## [Pectra](https://www.ethcatherders.com/upgrades/pectra) (Prague+Electra) Upgrade

- [Pectra Proactive Grant Round](https://esp.ethereum.foundation/pectra-pgr) by ESP
- **Pectra Retrospective**
    - [Lodestar’s Pectra Retrospective and Future Fork Ideas](https://blog.chainsafe.io/lodestars-pectra-retrospective/)
    - Other Client teams & individual responses have been added to the [thread](https://ethereum-magicians.org/t/pectra-retrospective/22637).

### [All Core Dev Consensus #150](https://github.com/ethereum/pm/issues/1265)
- [Video recording](https://www.youtube.com/live/JhDgD366DKg), [ECH's Podcast Version](https://creators.spotify.com/pod/show/ethereum-cat-herders/episodes/Consensus-Layer-Meeting-150-2025-02-06--ACDC-150-e2ugq3n),  [FEM](https://ethereum-magicians.org/t/all-core-devs-consensus-acdc-150-february-6-2025/22703)

#### Action Items
* Prepare client releases for 13 February to enable Holesky and Sepolia Pectra forks.
* [EL clients] Take a look at 7702 mempool implementation to surface test cases.
* Add your client team’s Pectra retrospective by next week’s ACD: Pectra Retrospective
* PSA: Move all Pectra EIPs to Last Call status!

### Pectra Interop Testing Call
- [ECH's notes](https://hackmd.io/@poojaranjan/InteropTestingNotes#Interop-Testing-Call-23-Feb-03-2025)
#### Key Decisions & Next Steps  
- **Devnet 6 Deployment:** Announcement in Interop channel; client teams should prepare for testing.  
- **EIP-7702 Implementation:** More documentation needed; community contributions welcome.  
- **Tx Pool Tests:** Address specific cases, integrate with EEST and Hive testing, review [test list](https://github.com/ethereum/go-ethereum/pull/3107).  
- **PeerDAS:** Continue edge case syncing; prioritize after Pectra completion.  
- **EOF Testing:** Prepare for Kurtosis-based testing after Pectra Devnet 6.  
- **ePBS & IL Testing:** Proceeding with standalone domain testing before considering mainnet inclusion. 


## Breakout & Implementers’ Meeting 

### [eth_simulate Implementers' Meeting Feb 03, 2025](https://github.com/ethereum/pm/issues/1273)
- [Recording](https://youtu.be/i2JBDF_MBVU) &  [ECH's Notes](https://github.com/ethereum/pm/issues/1273#issuecomment-2631171565)
- The [next meeting](https://github.com/ethereum/pm/issues/1278) is scheduled for February 10, 2025 at 12:00 UTC. [Recording](https://youtu.be/YgU7S01PUZc).

### [RPC Standards Call #0](https://github.com/ethereum/pm/issues/1261)
- [Recording](https://youtu.be/uRVG6wkiyqs) & [Justin's notes](https://discord.com/channels/595666850260713488/804019759934078987/1336007087028699220)
- The [next call](https://github.com/ethereum/pm/issues/1276) is scheduled for **February 17th, 2025 at 15:00 UTC**.

### [Portal Network Implementation #43](https://github.com/ethereum/pm/issues/1267)
- [Notes](https://hackmd.io/@chloezhux/H1x36pYIJg)

### [PeerDAS Breakout Room #16](https://github.com/ethereum/pm/issues/1259)
- [Notes](https://docs.google.com/document/d/1Ng2IrCe28kTt1BnIsjtMlKHq2MHgaja24LhFXSvqfJQ/edit?usp=sharing) & [Recording](https://youtu.be/Y1tWb1EUATY)

### [RollCall #9.1 Breakout - L2 Execution Common Core: V1 Scope](https://github.com/ethereum/pm/issues/1215)
- Awaited
- [RollCall #10](https://github.com/ethereum/pm/issues/1216) planned for **Febuary 12, 2025** at 14:00-15:30 UTC

### [EOF Implementers Call #66](https://github.com/ethereum/pm/issues/1260)
- [Recording](https://www.youtube.com/watch?v=uh9i2sdwxRs) & [Notes](https://ethereum-magicians.org/t/eof-implementers-call-66-february-5-2025/22700)
- The [next call](https://github.com/ethereum/pm/issues/1277) is planned for **February 19th, 2025**, 15:00 UTC

## EIPs Update

- [Unifying Ethereum together: ERC-7683 adopters](https://x.com/Uniswap/status/1888588978506346793)

### [EIPsInsight](https://eipsinsight.com/insight/2025/2)



### EIP Editing Office Hour [Meeting 51](https://github.com/ethcatherders/EIPIP/issues/379)
**Proposal Review & Implementation Discussion**

Sam Wilson reviewed the status of various proposals, moving some to review while others required further development. Full [recording here](https://youtube.com/live/LKuH8yboy4s?feature=share).
- Sam & Pooja agreed to extend a proposal’s deadline once the author addressed feedback. 
- Pooja emphasized the benefit of having **at least one implementation** for final status, but Sam wasn't in favor of making it mandatory. 
- They discussed a proposal’s viability, with Sam expressing concerns about its substance and potential use, yet agreeing to move it forward.
- **Github Handles**: Regarding GitHub handles,Pooja proposed making adding GitHub handle of all co-authors mandatory, however Sam maintained that having at least one is sufficient for approval. 
- They also assessed several proposals, approving some while identifying necessary revisions, and agreed to continue reviews in future meetings.

### PEEPanEIP
#### Released episodes
- **[PEEPanEIP #139 - A Fast Confirmation Rule for Ethereum](https://youtu.be/dZU-Ch22MKY)**
Also, shared on [Twitter](https://x.com/poojaranjan19/status/1888016439334043960), [Reddit](https://www.reddit.com/r/ethereum/comments/1ik9yzf/peepaneip_a_fast_confirmation_rule_for/), [LinkedIn](https://www.linkedin.com/posts/ethcatherders_peepaneip139-a-fast-confirmation-rule-for-activity-7293783981894844416-eOWV?utm_source=share&utm_medium=member_desktop&rcm=ACoAABybdhYBT1rUjfCO7Vd1uNpfUN_EGzCFlcY), [Farcaster](https://warpcast.com/ethcatherders/0x650429a1).
- **[PEEPanEIP 140: EIP-7623: Increase calldata with Toni Wahrstätte](https://youtu.be/D8UnMN2Cjw4)**

#### Recording scheduled
- **[PEEPanEIP-7691: Blob Throughput Increase](https://x.com/poojaranjan19/status/1886530990367236208)** with Sam C Mason, Tony W. & Parithosh J. on **Feb 11, 2025** at **21:00 UTC**.

#### Upcoming releases
- **[PEEPanEIP-7805: Fork-choice enforced Inclusion Lists (FOCIL)](https://x.com/poojaranjan19/status/1886508306300342448)**
In this PEEPanEIP recording, Pooja Ranjan, discussed [EIP-7805](https://eips.ethereum.org/EIPS/eip-7805), also known as FOCIL with co-authors Thomas, Francesco, Julian Barnabe who are part of the Ethereum Foundation's *Robust Consensus Group*. The proposal aims to allow a committee of validators to enforce included transactions in every block. The proposal is currently in draft status and is an active discussion for the future upgrade. The main goal of FOCIL is to increase the credible neutrality of Ethereum.
- **[PEEPanEIP-7706: Separate gas type for calldata](https://x.com/poojaranjan19/status/1886530988164985251) with Vitalik Buterin**
Vitalik discussed the concept of multi-dimensional gas pricing as a scaling strategy for Ethereum, proposing a separate gas limit for call data in [EIP-7706](https://eips.ethereum.org/EIPS/eip-7706). He also compared [EIP-7623](https://eips.ethereum.org/EIPS/eip-7623) and EIP-7706, highlighting the potential complexities and risks of implementing the latter. The conversation ended with discussions on the future of Ethereum, the importance of openness and decentralization, and the potential for user experience improvements.

### EIP updates
- [Unifying Ethereum together: ERC-7683 adopters](https://x.com/Uniswap/status/1888588978506346793)

### Call For Input (Open)
(No change since the [last week](https://hackmd.io/@poojaranjan/PoE4#Call-For-Input-Open).)
- [Define "Meta"](https://github.com/ethcatherders/EIPIP/issues/373)
- [Forcibly withdraw EIP-7675](https://github.com/ethcatherders/EIPIP/issues/374)
- [Allow Links to Blockchain Commons](https://github.com/ethcatherders/EIPIP/issues/376)


## Ecosystem Project Demo
- **[EPD: OSObserve](https://x.com/poojaranjan19/status/1887486404302717034)**
Rohit Malekar and Carl Cervone, from the Open Source Observer (OSO) team joined with EthCatHerders. They shared his background, the transition and involvement with the OSO team. The discussion then shifted to the role of OSO in tracking, analyzing, and supporting open source projects by offering real-time insights into their contribution and impact. The guests also discussed the global nature of open source and the need for better funding models, with crypto networks offering a new model for funding open source projects. Stay tuned for the recording coming out soon. 

## Upcoming Protocol Calls
| Date & Time (UTC)                  | Event                                               | Link |
|-------------------------------------|----------------------------------------------------|------|
| Monday, Feb 10, 2025 at 12:00 UTC  | eth_simulate Implementers' Meeting                | [GitHub](https://github.com/ethereum/pm/issues/1278) |
| Monday, Feb 10, 2025 at 14:00 UTC  | Pectra Interop Testing Call                        | - |
| Monday, Feb 10, 2025 at 15:00 UTC  | Stateless Implementers Call #30                    | [GitHub](https://github.com/ethereum/pm/issues/1263) |
| Monday, Feb 10, 2025 at 16:30 UTC  | Portal Network Implementation                      | [GitHub](https://github.com/ethereum/pm/issues/1286) |
| Tuesday, Feb 11, 2025 at 14:00 UTC | FOCIL Breakout #4                                  | TBA |
| Tuesday, Feb 11, 2025 at 21:00 UTC | PEEPanEIP-7691: Blob throughput increase with Pari, Sam & Toni | - |
| Wednesday, Feb 12, 2025 at 14:00 UTC | RollCall #10                                      | [GitHub](https://github.com/ethereum/pm/issues/1216) |
| Thursday, Feb 13, 2025 at 14:00 UTC | All Core Dev Consensus #150                       | [GitHub](https://github.com/ethereum/pm/issues/1271) |
| Friday, Feb 14, 2025 at 14:00 UTC  | EIP-7732 breakout room                            | TBA |


## Public Goods Funding
- [Devansh Mehta](https://x.com/TheDevanshMehta/status/1888866022712885452) joined [Ethereum Foundation](https://x.com/ethereumfndn) as AI x Public Goods/Governance lead.
    - Become a juror in [Deep Funding's Level 2](https://x.com/sejal_rekhan/status/1886751661508714727)
- [Octant Epoch 7 Climate Round](https://x.com/OctantApp/status/1887906117587714190)

## Events
- [ETHDenver 2025](https://www.ethdenver.com/): February 23 - March 2, 2025
- [Staking Summit, Dubai](https://www.stakingsummit.com/): April 28 - 29, 2025
- [ETHPrague 2025](https://ethprague.com/) **announced** - 27-29 May 2025
- [EthCC[8]](https://ethcc.io/): June 30 -July 3, 2025
- [Devconnect 2025](https://devconnect.org/): Expected in Q4-2025. Exact date - TBD. Should you have improvement suggestions, share with the team - [Improving Devconnect 2025](https://forum.devcon.org/t/rpf-9-improving-devconnect-2025/5339) 
- Follow the [list of upcoming events](https://docs.google.com/spreadsheets/d/1NEu_FCc1hnGAuRgPmbXXpf0h2lCrCOlMKbbFEqgkVDQ/edit?gid=572241033#gid=572241033)  by Nathan Sexer

## Community Resources
- [Tomasz K. Stańczak](https://x.com/tkstanczak) introduces [ChaosChain](https://x.com/ETHGlobal/status/1887933976918069447)
- [Based and Native Rollups - X Spaces](https://www.youtube.com/watch?v=HAIOFVifaiM)
- [Proposal to deploy Aave on Sony's chain](https://x.com/StaniKulechov/status/1888911158242947224)
- [Ethereum Protocol Studies 2025](https://blog.ethereum.org/2025/02/05/ethereum-protocol-studies) announced
- [ESP Allocation Update - Q4 2024](https://x.com/EF_ESP/status/1887426263591333986)
- [William Mougayar](https://x.com/wmougayar/status/1887866504089313637) "advice" to Vitalik Buterin
- [Debate: Coinbase took lead on the Ethereum roadmap](https://x.com/econoar/status/1888103511776497923)
- [The Arbitrum DAO has collected nearly 20,000 ETH in profit](https://x.com/sgoldfed/status/1888645981157097641)


### Upcoming Reasearch 
- [peerDAS](https://hackmd.io/@manunalepa/peerDAS/https%3A%2F%2Fhackmd.io%2F%40manunalepa%2FB1idHCOfke) by Emmanuel Nalepa (@manunalepa)
- [Delayed Execution And Skipped Transactions](https://ethresear.ch/t/delayed-execution-and-skipped-transactions/21677) by Toni Wahrstätter 
- [zkFOCIL: Inclusion List Privacy using Linkable Ring Signatures](https://x.com/ethresearchbot/status/1887449940206481409)
- [The Case for Programmatically accelerating Ethereum's Network Capacity](https://x.com/GiulioRebuffo/status/1888285056499585137) by Giulio Rebuffo


### Share your projects with us
To add updates, visit our GitHub repository. If you wish to contact the team, join ECH's Discord. Alternatively, you can email us at team@ethcatherders.com by Friday to be added in the next edition of the newsletter scheduled for release on the following Monday.

Remember to visit our official website and follow us on Twitter for more updates.

## Stay Curious, Stay Connected and Keep Purring 🐾

