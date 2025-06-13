import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="bg-secondary w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-[5%] py-[7%]">
            <div className="flex flex-col items-start justify-center gap-2 flex-2/3 min-w-[300px]">
                <h1 className="max-w-[752px] font-bold text-3xl lg:text-[50px] lg:leading-[53px] text-foreground">
                    Transparent Real Estate
                    Transactions on the
                    Blockchain
                </h1>
                <p className="max-w-[546px] text-muted-foreground font-normal text-lg lg:text-xl">
                    Harmony revolutionizes property transactions with secure,
                    transparent, and cost-effective solutions powered by Stellar
                    blockchain technology.
                </p>
                <div className="flex items-center justify-center gap-4 mt-3">
                    <Link href="/catalogue"><button className="text-sm font-medium text-foreground py-3 px-8 rounded-lg bg-card cursor-pointer border-[1px] border-border hover:bg-card-foreground hover:text-background transition-colors duration-200 ease-in-out">
                        Browse Properties
                    </button></Link>
                    <Link href="/signup">
                      <button className="text-sm font-medium text-foreground py-3 px-8 rounded-lg bg-card cursor-pointer border-[1px] border-border hover:bg-card-foreground hover:text-background transition-colors duration-200 ease-in-out">
                        Create Account
                      </button>
                    </Link>
                </div>
            </div>
            <div className="max-h-[366.75px] max-w-[652px] flex items-center justify-center flex-1/2">
                <Image src={"/assets/hero-img.svg"} alt="image" height={100} width={100} className="w-full h-full object-cover" />
            </div>
        </section>
    )
}
