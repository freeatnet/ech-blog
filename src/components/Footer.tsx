import Link from "next/link";
import {
  BsTwitterX,
  BsGithub,
  BsYoutube,
  BsReddit,
  BsGlobe,
  BsLinkedin,
  BsRss,
} from "react-icons/bs";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="w-full">
      <div className="max-w-4xl mx-auto py-2 px-4 flex justify-end gap-2">
        <Button variant="outline" className="rounded-full">
          <Link 
            href="/feed.xml" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <BsRss className="h-4 w-4" />
            RSS Feed
          </Link>
        </Button>
        <Button variant="outline" className="rounded-full">
          <Link 
            href="https://github.com/ethcatherders/ech-blog" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <BsGithub className="h-4 w-4" />
            Edit on GitHub
          </Link>
        </Button>
      </div>
      <div className="w-full border-t">
        <div className="max-w-4xl mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center md:items-start">
              <Link href="https://www.ethcatherders.com" className="text-lg font-semibold hover:text-primary">
                Ethereum Cat Herders
              </Link>
              <p className="text-sm text-muted-foreground">
                Herding Knowledge, Building Community, Homesteading Ethereum!
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Link 
                href="https://www.ethcatherders.com" 
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGlobe className="h-5 w-5" />
              </Link>
              <Link 
                href="https://x.com/EthCatHerders" 
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitterX className="h-5 w-5" />
              </Link>
              <Link 
                href="https://warpcast.com/ethcatherders" 
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="24" height="24" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M257.778 155.556H742.222V844.445H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.445H257.778V155.556Z" 
                    fill="currentColor"
                  />
                  <path 
                    d="M128.889 253.333L157.778 351.111H182.222V746.667C169.949 746.667 160 756.616 160 768.889V795.556H155.556C143.283 795.556 133.333 805.505 133.333 817.778V844.445H382.222V817.778C382.222 805.505 372.273 795.556 360 795.556H355.556V768.889C355.556 756.616 345.606 746.667 333.333 746.667H306.667V253.333H128.889Z" 
                    fill="currentColor"
                  />
                  <path 
                    d="M675.556 746.667C663.283 746.667 653.333 756.616 653.333 768.889V795.556H648.889C636.616 795.556 626.667 805.505 626.667 817.778V844.445H875.556V817.778C875.556 805.505 865.606 795.556 853.333 795.556H848.889V768.889C848.889 756.616 838.94 746.667 826.667 746.667V351.111H851.111L880 253.333H702.222V746.667H675.556Z" 
                    fill="currentColor"
                  />
                </svg>
              </Link>
              <Link 
                href="https://github.com/ethcatherders" 
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub className="h-5 w-5" />
              </Link>
              <Link 
                href="https://www.youtube.com/@ethcatherders" 
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsYoutube className="h-5 w-5" />
              </Link>
              <Link 
                href="https://www.reddit.com/r/ethcatherders" 
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsReddit className="h-5 w-5" />
              </Link>
              <Link 
                href="https://www.linkedin.com/company/ethcatherders" 
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="h-5 w-5" />
              </Link>
              <Link 
                href="/feed.xml" 
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsRss className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}