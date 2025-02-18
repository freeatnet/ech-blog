---
title: "Purr-suit of Ethereum 🐾 #6"
date: 2025-02-10
author: Pooja Ranjan
image: https://hackmd.io/_uploads/HJ3CNy-qJx.png
---

#### Your Weekly Dose of Blockchain Updates and Meows!

### **Summary**

Welcome to the sixth edition of the Purr-suit of Ethereum! If you missed our last edition, you can catch up [here](https://hackmd.io/@poojaranjan/PoE5). This week, we bring you the latest on the Pectra and Fusaka upgrades, ongoing client testing & research efforts, updates on public goods funding, and a roundup of upcoming Ethereum events and ecosystem developments. Stay informed, get involved, and continue contributing to the Ethereum community! 
### **Summary**
* [ACDbot](https://github.com/ethereum/pm/pull/1296) is coming in soon!
* **Pectra Upgrade**: Devnet-6 is running smoothly; testnet upgrades on Holesky (Feb 24) and Sepolia (Mar 5) before mainnet activation.
* **Fusaka Upgrade**: Proposal deadline March 13, review by March 27, final scope by April 10.
* **Testing & Breakouts**: PeerDAS-devnet-4 live, EOF & ePBS testing progressing, multiple breakout calls scheduled.
* **EIPs & Grants**: 3 new drafts, 13 EIPs in Last Call, ESP’s Pectra Proactive Grant Round open.



# [Pectra](https://www.ethcatherders.com/upgrades/pectra) (Prague+Electra) Upgrade
- Devnet-6 is running smoothly, with the MEV workflow being tested end to end.
- [PEEPanEIP - Pectra](https://www.youtube.com/playlist?list=PL4cwHXAawZxqOHV_F40AJbzcl8b6tG8xw)
- [Holesky Pectra Upgrade Testnet Livestream](https://www.youtube.com/live/XfdDV0RhDyI)
- [Testnet countdown](https://eipsinsight.com/pectra)
- [Pectra Proactive Grant Round](https://esp.ethereum.foundation/pectra-pgr) by ESP


### Pectra testnet [announcement](https://blog.ethereum.org/2025/02/14/pectra-testnet-announcement)

It will go live on 
- **Holesky** at epoch 115968 (**Feb. 24, 21:55 UTC**) and 
- Sepolia at epoch 222464 (**Mar. 5, 7:29 UTC**). 
Once both testnets have successfully upgraded, a mainnet activation epoch will be chosen.

Once both testnets have successfully upgraded, a mainnet activation epoch will be chosen. 

Pectra has already been [activated](https://x.com/TMIYChao/status/1890136293524537577) on [Ephemery](https://github.com/ephemery-testnet/ephemery-resources?tab=readme-ov-file#pectra), a staking testnet which resets every 28 days. Read more about [Ephemery testnet here](https://etherworld.co/2025/02/13/a-quick-guide-on-ephemery-testnet/).

#### Client releases for the Pectra upgrade on both Holesky and Sepolia.

|Name| Version| Link|
|-----|--------|---|
|Grandine |	1.0.0	| [Download](https://github.com/grandinetech/grandine/releases/tag/1.0.0)|
| Lighthouse |	7.0.0-beta.0 |	[Download](https://github.com/sigp/lighthouse/releases/tag/v7.0.0-beta.0)|
| Lodestar|	1.27.0	|[Download](https://github.com/ChainSafe/lodestar/releases/tag/v1.27.0)|
| Nimbus | 25.2.0	| [Download](https://github.com/status-im/nimbus-eth2/releases/tag/v25.2.0)|
|Prysm | 5.3.0	| [Download](https://github.com/prysmaticlabs/prysm/releases/tag/v5.3.0)|
|Teku	| 25.2.0 |	[Download](https://github.com/Consensys/teku/releases/tag/25.2.0)|
|Besu	|25.2.0	|[Download](https://github.com/hyperledger/besu/releases/tag/25.2.0)|
|Erigon	|2.61.1	|[Download](https://github.com/erigontech/erigon/releases/tag/v2.61.1)|
|go-ethereum |	1.15.1|	[Download](https://github.com/ethereum/go-ethereum/releases/tag/v1.15.1)|
|Nethermind	|1.31.0	|[Download](https://github.com/NethermindEth/nethermind/releases/tag/1.31.0)|
|Reth	|1.2.0	|[Download](https://github.com/paradigmxyz/reth/releases/tag/v1.2.0)|


# Fusaka (Fulu + Osaka) Upgrade
**Fusaka Fork scoping timeline:**
* **March 13**: Fusaka `Proposed for Inclusion` deadline
    * To do so, open a PR against [EIP-7607](https://eips.ethereum.org/EIPS/eip-7607) 
* **March 27**: Deadline for core devs & researchers to review PFI’d EIPs and share their preferences async
    * Any format is OK, but please link write ups in the [EIP-7607 EthMagicians thread](https://ethereum-magicians.org/t/eip-7607-fusaka-meta-eip/18439)
* **April 10**: Tentative deadline to ***finalize Fusaka’s scope***.

### [Execution Layer Meeting 205](https://github.com/ethereum/pm/issues/1271)
- [Recording](https://youtube.com/live/N90-qDkUPAo)
- Audio only on EthCatHerders's [Podcast](https://open.spotify.com/show/7dgxKMkSyy3HWtQW7OfqXA). Check [ACD Playlist](https://open.spotify.com/playlist/7k5kw4Q6t6RLiSOfsWTZGs?si=CQ-sp_LETdmaq6jJA0lmsQ&nd=1&dlsi=c3d4b5ffa1f041cf) and RSS Feed can be obtained from [here](https://anchor.fm/s/7da9c4f0/podcast/rss).
- [Ethereum All Core Developers Execution Call #205 Writeup](https://www.galaxy.com/insights/research/ethereum-all-core-developers-execution-call-205/) by @Christine_dkim
- [Highlights of Ethereum's All Core Devs Meeting (ACDE) #205](https://etherworld.co/2025/02/14/highlights-of-ethereums-all-core-devs-meeting-acde-205/) by @yashkamalchaturvedi

### [Client testing call #24, February 10, 2025](https://ethereum-magicians.org/t/client-testing-call-24-february-10-2025/22816/1)
#### **Key Decisions & Next Steps**
* **Going ahead with testnet Pectra forks**: Announcement in ACD channel; client teams should prepare for releases. Dates can be found here 7.
* **Tx Pool Tests**: Testing team is currently working on them.
* **PeerDAS**: PeerDAS-devnet-4 is now live, planning for future devnets has started.
* **EOF Testing**: Kurtosis-based testing now works, EEST is going to be used to trigger bugs at the start.
* **ePBS & IL Testing**: Proceed with standalone domain testing before considering mainnet inclusion. Kurtosis integration is complete.

## Breakout & Implementers’ Meeting 

### [Beam Call #1](https://github.com/blockblaz/zeam-community/issues/4)
- [Recording](https://www.youtube.com/watch?v=sSx6juIu4AI)
- [Beam chain](https://github.com/blockblaz/zeam/blob/main/resources/beam.md#beam-chain)

### [EIP-7732 Breakout Room #16](https://github.com/ethereum/pm/issues/1292)
- [Recording](https://youtube.com/live/MkGsy3UeJv0) and Terence's [Notes](https://hackmd.io/@ttsao/epbs-breakout-17)

### [L2 Interop Working Group Call #3](https://github.com/ethereum/pm/issues/1279)
- [Recording](https://youtu.be/rcj1neTKQOY)

### [FOCIL Breakout # 4 ](https://github.com/ethereum/pm/issues/1291)
- [Recording](https://www.youtube.com/live/2MkoP6BDNro) & [Notes](https://github.com/ethereum/pm/issues/1291#issuecomment-2651517839)
- [PEEPanEIP-7805: Fork-choice enforced Inclusion Lists (FOCIL) with Thomas and Julian](https://youtu.be/cUGyLx-mf6I)

### [PeerDAS Breakout Room #17](https://github.com/ethereum/pm/issues/1284)
- [Recording](https://youtu.be/Hd3rs1OEXGg)
- Next meeting on Feb 18, 2025 at 10:00 UTC [Agenda](https://github.com/ethereum/pm/issues/1295)

### RollCall #10 [2025-02-12]
- [Recording](https://youtu.be/uKA-S2lFBFw)

### [Portal Implementers Call #44](https://github.com/ethereum/pm/issues/1286)
- [Notes](https://hackmd.io/@chloezhux/H1x36pYIJg#Feb-10th-2025---Call-44)
- Next meeting [Agenda](https://github.com/ethereum/pm/issues/1287)

### [Stateless Implementers Call #30](https://github.com/ethereum/pm/issues/1263)
- [Stateless Ethereum Information Page](stateless.fyi) is a new website of public explanation about Ethereum's stateless benefits.
- Follow the [Stateless team](https://x.com/StatelessEth) on X to get updates about Ethereum's stateless efforts.
- [Recording](https://youtu.be/0dMb2tecuwI) & [Recap](https://hackmd.io/@stateless-consensus/sic-call-30)

### [eth_simulate Implementers' Meeting Feb 10, 2025](https://github.com/ethereum/pm/issues/1278)
- [Recording](https://youtu.be/YgU7S01PUZc) &  [ECH's Notes](https://github.com/ethereum/pm/issues/1278#issuecomment-2650875573)
- The [next meeting](https://github.com/ethereum/pm/issues/1293) is scheduled for February 17, 2025 at 12:00 UTC.

## EIPs Update

### [EIPsInsight](https://eipsinsight.com/insight/2025/2)
#### **EIPs (Ethereum Improvement Proposals)**  
- 3 Draft added  
- 2 moved to Stagnant  
  - [EIP-7727: EVM Transaction Bundles](https://eipsinsight.com/eips/eip-7727)  
  - [EIP-3540: EOF - EVM Object Format v1](https://eipsinsight.com/eips/eip-3540)  
-  1 moved to Review
- 13 advanced to Last Call: All Pectra upgrade EIPs included.
#### **ERCs (Ethereum Request for Comments)**  
- 2 Draft added  
- 2 moved to Review
- 1 advanced to Last Call:  
  - [ERC-7627: Secure Messaging Protocol](https://eipsinsight.com/ercs/erc-7627) (Deadline: February 18, 2025)  
- 1 finalized:  
  - [ERC-7751: Wrapping of Bubbled Up Reverts](https://eipsinsight.com/ercs/erc-7751)  
#### **RIPs (Rollup Improvement Proposals)**  
- 1 Draft added:  
  - [RIP-7875: Canonical ERC-7802 Token Bridge Address](https://eipsinsight.com/rips/rip-7875)  

### PEEPanEIP & Ecosystem Project Demo
#### Released episodes
- [PEEPanEIP 141: EIP-7805: Fork-choice enforced Inclusion Lists (FOCIL) with Thomas and Julian](https://youtu.be/cUGyLx-mf6I)
    - Follow playlists - [PEEPanEIP](https://www.youtube.com/playlist?list=PL4cwHXAawZxqu0PKKyMzG_3BJV_xZTi1F) & [Pectra](https://www.youtube.com/playlist?list=PL4cwHXAawZxqOHV_F40AJbzcl8b6tG8xw)

#### Recording scheduled
- [ERC-7527: Token Bound Function Oracle AMM](https://eips.ethereum.org/EIPS/eip-7527) with Elaine Zhang on Tuesday **Feb 18, 2025 at 19:30 UTC**

#### Upcoming releases
- **[PEEPanEIP-7706: Separate gas type for calldata](https://x.com/poojaranjan19/status/1886530988164985251) with Vitalik Buterin**

## Ecosystem Project Demo
#### Recording scheduled
- EPD: **Octant v2** with James on Thursday **Feb 20, 2025 at 19:30 UTC**
#### Upcoming releases
- **[EPD: OSObserve](https://x.com/poojaranjan19/status/1887486404302717034)** with Rohit Malekar and Carl Cervone

## Upcoming Protocol Calls
- [Mev-boost community call #12](https://collective.flashbots.net/t/mev-boost-community-call-12/4633) on 19 Feb 2025 at 16:00 UTC


## Public Goods Funding
- EthCatHerders participating in [Giveth](https://giveth.io/project/ethereum-cat-herders)'s upcoming round. 
    - Currently we're not eligible for GIVbacks or to be boosted with GIVpower. Please signal your support using DeVouch and help verify our legitimacy. 
- [Holonym Foundation Acquires **Gitcoin Passport** and Launches human.tech](https://human.tech/blog/human-tech-launch-acquisition-gitcoin-passport)
- [Octant Sweepstake](https://guild.xyz/octant/sweepstakes-xp) & [Climate Round](https://x.com/OctantApp/status/1887906117587714190)

## Events
- [ETHDenver 2025](https://www.ethdenver.com/): February 23 - March 2, 2025
- [Staking Summit, Dubai](https://www.stakingsummit.com/): April 28 - 29, 2025
- [ETHPrague 2025](https://ethprague.com/) - 27-29 May 2025
- [EthCC[8]](https://ethcc.io/): June 30 -July 3, 2025
- [Devconnect 2025](https://devconnect.org/): Expected in Q4-2025. Exact date - TBD. Should you have improvement suggestions, share with the team - [Improving Devconnect 2025](https://forum.devcon.org/t/rpf-9-improving-devconnect-2025/5339) 
- Follow the [list of upcoming events](https://docs.google.com/spreadsheets/d/1NEu_FCc1hnGAuRgPmbXXpf0h2lCrCOlMKbbFEqgkVDQ/edit?gid=572241033#gid=572241033)  by Nathan Sexer


## Community Resources
- WiEP - Study Group (Cohort 3) [Launch](https://lu.ma/9oz8fvlm)
- [EF Ecosystem Support Program](https://esp.ethereum.foundation/academic-grants)
- The 2025 Academic Grants Round is still open, with $2M in funding available for innovative research across a wide range of domains. Submit your applications by **March 16**! 
- [EF Treasury has deployed](https://x.com/ethereumfndn/status/1889978208986280031) on Ethereum DeFi.
- [Unichain mainnet](https://x.com/unichain/status/1889313993296064770) is live 
- Introducing [Lido V3](https://t.co/xuoq3Sbcle)


### Upcoming Research 
- [Reasons to have higher L1 gas limits even in an L2-heavy Ethereum](https://vitalik.eth.limo/general/2025/02/14/l1scaling.html) by Vitalik Buterin 
- [The Road Towards a Distributed Encrypted Mempool on Ethereum](https://ethresear.ch/t/the-road-towards-a-distributed-encrypted-mempool-on-ethereum/21717) by Frederik Lührs, Luis Bezzenberger, Francesco Mosterts, Sebastian Faust, Andreas Erwig

### Share your project updates with us
To add updates, visit our GitHub repository. If you wish to contact the team, join ECH's Discord. Alternatively, you can email us at pooja@ethcatherders.com by Friday to be added to the next edition of the newsletter scheduled for release on the following Monday.

Remember to visit our [official website](https://www.ethcatherders.com/), [blogs](https://blog.ethcatherders.com/) and follow us on [Twitter](https://x.com/ethcatherders) & [Farcaster](https://warpcast.com/ethcatherders) for more updates.

## Stay Curious, Stay Connected and Keep Purring 🐾
