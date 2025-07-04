import Link from 'next/link'
import Image from 'next/image'

export const Logo = () => {
    return (
        <Link href="/" title='Pagina inicial'>
            <Image
                src="/Brand-Logo.svg"
                alt="Logo do site"
                width={116}
                height={32}
            />
        </Link>
    )
}