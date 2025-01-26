import Link from 'next/link'
import { BsTwitterX, BsGithub, BsYoutube, BsReddit } from 'react-icons/bs'

export function Footer() {
  return (
    <footer className="w-full border-t mt-12">
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
              href="https://x.com/EthCatHerders" 
              className="text-muted-foreground hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitterX className="h-5 w-5" />
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
          </div>
        </div>
      </div>
    </footer>
  )
} 