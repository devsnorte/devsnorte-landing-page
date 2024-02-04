import NextImage from "next/image"

interface TitleProps {
    children: React.ReactNode
}

interface TextProps {
    children: React.ReactNode
}

interface SectionContentProps {
    variant?: "brand" | "black"
    children: React.ReactNode
}

interface SectionImageProps extends React.ComponentProps<typeof NextImage> {

}

interface SectionContainerProps {
    children: React.ReactNode
}

const Title = ({ children }: TitleProps) => {
    return <h2 className="text-4xl font-semibold">{children}</h2>
}


const Info = ({ children }: TextProps) => {
    return <p className="mt-6">{children}</p>
}

const Content = ({ variant = "brand", children }: SectionContentProps) => {
    const variantsClasses = {
        brand: "bg-brand text-[#000]",
        black: "bg-[#000] text-white"
    }

    return <div className={`p-5 h-[374px] ${variantsClasses[variant]}`}>
        <>
            {children}
        </>
    </div>
}

const Image = ({ className, width = 600, height = 800, ...rest }: SectionImageProps) => {
    return <NextImage width={width} height={height} {...rest} className={`h-full flex-grow object-cover object-top ${className}`} />
}

const Container = ({ children }: SectionContainerProps) => {
    return <section className="min-h-[812px] flex flex-col">
        {children}
    </section>
}


const Section = {
    Container,
    Content,
    Title,
    Info,
    Image
}

export default Section